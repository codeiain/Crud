---
title: Angular CRUD Done Correctly
author: Iain Brown
---

[TOC]



# Introduction

This started as a quick document designed as notes for myself when I was running a training course but over time its grown arms and legs. 

What we will cover in the book, is what I believe to be the best practices after building multiple large scale Angular application, some of the stuff covered below are not required for all applications e.g routing, revolvers, HttpInterceptor, Feature Flags, but I thought I would cover them anyway.

I am trying to avoid talking about IDEs, as we will be using the cmd prompt for all our generators, but I do recommend Visual Studio Code, as there is a lot extensions that can make developing angular easier. 

Also there is tools like stackblitz, if you wish to avoid setting up angular locally.


# Tools

## Node.js

`Node.js` is an asynchronous event-driven JavaScript system, it is designed to build scale able network application.

This will not cover `Node.js` in detail here as we will only be using `Node.js` to run our Angular application.

Can be downloaded and installed from [here](https://nodejs.org/en/download/)

## npm

`npm` short for Node Package Manager, is similar to `nuget`. `npm` provides a online repository of open-source `Node.js` projects, as well as a command-line utility that aids in package installation, version management and dependency management.

## Angular

Angular is a application design framework, for building mobile and web based single page applications.

Angular was designed with the following in mind: Cross platform and Speed and Performance.

Angular is written in TypeScript, and the architecture relies on certain fundamentals.

The basic building blocks of an Angular application are NgModules.

### NgModules

NgModules collect related code into functional sets; An Angular application is defined by a set of NgModules, an application must always has at least a root module, that enables bootstrapping. 

Angular NgModules are different from JavaScript (ES2015) modules.

Every Angular application has a root module, named AppModule, which provides the bootstrapping mechanism that launches the application.

#### NgModule Anatomy 

The ```@NgModule``` decorator has multiple property, declarations, imports, exports, providers, bootstrap. 

```typescript
@NgModule({ 
    declarations: [...], 
    imports: [...],
    exports: [...], 
    providers: [...],
    entryComponents: [...],
    bootstrap: [...]})
export class MyModule {}
```
##### declarations

Defines a module that contains components, directives, pipes, and providers.

```typescript
declarations: [MyRedComponent, MyBlueComponent, MyDatePipe]
```

##### imports

List of components, directives, and pipes that belong to this module.

List of modules to import into this module. Everything from the imported modules is available to declarations of this module.

```typescript
imports: [BrowserModule, SomeOtherModule]
```

##### exports

List of components, directives, and pipes visible to modules that import this module.

```typescript
exports: [MyRedComponent, MyDatePipe]
```

##### providers

List of dependency injection providers visible both to the contents of this module and to importers of this module.

```typescript
providers: [MyService, { provide: ... }]
```

##### entryComponents

List of components not referenced in any reachable template, for example dynamically created from code.

```typescript
entryComponents: [SomeComponent, OtherComponent]
```

##### bootstrap

List of components to bootstrap when this module is bootstrapped.

```typescript
bootstrap: [MyAppComponent]
```

### Components

Components define views which are built of a sets of screen elements.

Components use services, which provide specific functionality not directly related to the view.

Services are injected into components as dependencies, making the code modular and reusable as well as testable.

The `@Component()` decorator identifies the class as a component.

The example below shows the standard component decorator.

```typescript
@Component({
  selector: 'pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
```

##### selector

The selector option defines how the component is accessed with other components. so in the about example, the component would be accessed as <pet-list></pet-list>. 

##### templateUrl

The templateUrl is a relative path or absolute URL of the template file for the Angular component.

##### styleUrls

The styleUrls is an array of paths or urls to the files containing the styles for the urls.

##### template and styles

instead of using the templateUrl and styleUrl we can also use template and styles to define these inline, it is recommended that we avoid this when creating our application, as it tightly binds these to the component.

There is also additional options we can use but we will not be covering then in this.  

#### Input

The input decorator marks a class field as an input property and supplies configuration metadata.

The input property is bound to a DOM property in the template, and during change section Angular automatically updates the data property with the DOM property's value.

```typescript
@Input() myProperty;
```

Declares an input property that you can update via property binding (example: ```<my-cmp [myProperty]="someExpression">```).

#### Output

The output decorator marks a class field as an output property and supplies configuration metadata.

The DOM property bound to the output property is automatically updated during change detection.

The output raises an event that change be auctioned on the parent component.

```typescript
@Output() myEvent = new EventEmitter();
```

Declares an output property that fires events that you can subscribe to with an event binding (example: ```<my-cmp (myEvent)="doSomething()">```).
	
#### Component life cycle events

The list below shows all the Component life cycle events, to access a life cycle event the component class need to implement them. e.g.

```typescript
export class ClassComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit()    { ... }

  ngOnDestroy() { ... }

}
```

##### ```ngOnChanges()``` 

Fires when Angular sets or resets data-bound input properties. This is called before ```ngOnInit()`` and whenever one or more data-bound inputs properties are changes. 

*Note: if your component has no inputs the framework will no call ```ngOnChanges()```*

##### ```ngOnInit()```

 Initialises the directive or component after Angular first displays the data-bound properties and sets the directive or component's inputs properties. ```ngOnInit()`` is only called once.

##### ```ngDoCheck()``` 

Detects and acts upon changes that Angular can't or won't detect on its own, ```ngDoCheck()``` is called immediately after ```ngOnChanges()``` and runs on every change detection run and immediately after ```ngOnInit()``` .

##### ```ngAfterContentInit()```

Fires after Angular sets external content into the component's view or into the directive. ```ngAfterContentInit()``` is called once after the first ```ngDoCheck()```.

##### ```ngAfterViewInit()```

Fires after Angular initialises the component's views and child views, or the view that contains the directive. ```ngAfterViewInit()``` is called once after the first ```ngAfterContentChecked()```.

##### ```ngAfterViewChecked()```

Fires after Angular check the component's view and child views or the directive. ```ngAfterViewChecked()``` is called after ```ngAfterViewInti()``` and every subsequent ```ngAfterContentChecked()```.

##### ```ngOnDestroy()```

Fires just before Angular destroys the component or directive. Observable should be unsubscribed and event handles should be detached here to avoid memory leaks. ```ngOnDestroy()``` is called immediately before Angular destroys the component or directive.

### Services and DI

Data or logic that isn't associated with a view, or code that is shared across multiple views, is stored within services.

The `@Injectable()` decorator provides metadata to allow the service to be injected as a dependence(DI) in the class.

Dependency Injection in angular is a little different that with c#, because we use objects rather than interfaces.

The reason you can't use interfaces is because an interface is a Typescript design-time artefact. JavaScript doesn't have interfaces. The Typescript interface disappears from the generated JavaScript. There is no interface type information left for Angular to find at run time.

# Application Set-up

The Angular CLI gives the ability to create projects, applications and libraries, as well as development task such as testing, building and deployment.

To install the Angular CLI, open a administrator terminal window and navigate to the location you wish to create your application and run 

`npm install -g @angular/cli`

This will install all the required libraries for angular globally.

Angular application are developed in the context of a workspace, as we will not be covering creating angular libraries in this doc, we don't need to bother about that at this point.

Once the angular CLI is installed we can create our new application using the command. 

`ng new` followed by the application name e.g `ng new kata-app`

This will prompt you to answer some question about your application.

`? Would you like to add Angular routing?` we will answer yes to this question.

`? Which stylesheet format would you like to use?` we will pick scss.

The Angular CLI will install the necessary Angular npm packages and other dependencies. This can take a few minutes( if your on the VPN this can take up to 10 mins).

Once this is complete navigate in to you application folder, and you should see the following structure generated for you.

```
+---e2e
|   +---src
|   |   +---app.e2e-spec.ts
|   |   \---app.po.ts
|   +---protractor.conf.js
|   \---tsconfig.json
+---src
|   +---app
|   |   +---app-routing.module.ts
|   |   +---app.component.html
|   |   +---app.component.scss
|   |   +---app.component.spec.ts
|   |   +---app.component.ts
|   |   \---app.module.ts
|   +---assets
|   |   \---.gitkeep
|   +---environments
|   |   +---environment.prod.ts
|   |   \---environment.ts
|   +---favicon.ico
|   +---index.html
|   +---main.ts
|   +---polyfills.ts
|   +---styles.scss
|   \---test.ts
+---.editorconfig
+---.gitignore
+---angular.json
+---browserslist
+---karma.conf.js
+---package-lock.json
+---package.json
+---README.md
+---tsconfig.app.json
+---tsconfig.json
+---tsconfig.spec.json
\---tslint.json
```

So out the box we have a basic working angular application with e2e and unit tests.

Via the terminal running `ng serve --open` will build our new application and run it in watch mode, so any changes make to the code will be reflected in the application without having to restart the server.

The `--open` (`-o`) options automatically opens your default browser to `http://localhost:4200`[^1]

[^1]:A strange thing with chrome if you have a ssl certificate setup for localhost chrome will always try and run the angular site on https and you will see a error page in chrome to resolve this problem  open a new chrome tab and enter `chrome://net-internals/#hsts` at the bottom of the page there is a section called Delete domain security policies, enter localhost in the text box and click delete, not return to your application and change the https to http

To stop the application running press `ctrl + c`.

As well as running out application we can also run out unit tests via the `ng test` command and the e2e tests via `ng e2e`.

Angular uses Karma as its test runner and jasmine as its unit test framework, as well as protractor as its e2e runner.

# Auto-Generating code

Since in the C# kata we generated a C# Web Api that exposed a set of end points and a swagger definition, we will reuse the swagger to generate a API layer for the angular application. 

*Note: this will need to be regenerated every time we update the swagger.*

Open a terminal and navigate to your application folder and run 

`npm install ng-openapi-gen --save-dev` this will do two things, install the package into the node_modules folder and add the package to the package.json's devDependencies 

Next we need to generate a config file running the following command in your application root directory `node_modules/.bin/ng-swagger-gen --gen-config` once this is complete we will have a new file called `ng-swagger-gen.json`

```json
{
  "$schema": "./node_modules/ng-swagger-gen/ng-swagger-gen-schema.json",
  "input": "<swagger file>",
  "output": "src/app/api/<folder>",
  "prefix": "Api",
  "ignoreUnusedModels": true,
  "minParamsForContainer": 2,
  "sortParams": "desc",
  "defaultTag": "Api",
  "removeStaleFiles": true,
  "modelIndex": true,
  "serviceIndex": true,
  "apiModule": true,
  "enumModule": true,
  "generateExamples": false,
  "camelCase": false,
  "customFileSuffix": {
     "model": "",
     "example": ".example",
     "service": ".service"
  },
  "timeout": 20000,
  "skipProxySetup": false
}
```

Replace <input file> with the URL to the swagger.json for the company API, also we will update the `output` to be `src/app/api/company`

We will also rename the file to be `company-swagger-gen.json`

Repeat the above for the Invoice Api.

Within the package.json file we need to add an property to the script section `"generate-api": "node_modules/.bin/ng-swagger-gen -c company-swagger-gen.json && node_modules/.bin/ng-swagger-gen -c invoice-swagger-gen.json"`  so it looks like the following

```json
"scripts": {
     "ng": "ng",
     "start": "ng serve",
     "build": "ng build",
     "test": "ng test",
     "lint": "ng lint",
     "e2e": "ng e2e",
     "generate-api": "node_modules/.bin/ng-swagger-gen -c company-swagger-gen.json && node_modules/.bin/ng-swagger-gen -c invoice-swagger-gen.json"
  },
```

This now gives us the ability to run `npm run generate-api`, 

```
+- src
   +- app
       +- api
          +- company
          |  +- models
          |    +- model1.ts
          |    +- model1.example.json
          |    +- ...
          |    +- modeln.ts
          |    +- modeln.example.json
          |  +- services
          |    +- tag1.service.ts
          |    +- ...
          |    +- tagn.service.ts
          |  +- api.module.ts
          |  +- api-configuration.ts
          |  +- base-service.ts
          |  +- models.ts
          |  +- services.ts
```

The files are:

* `api/company/models/modeln.ts`: One file per model file is generated here. Enumerations are also correctly generated;

* `api/company/models/modeln.ts`: One file per example is generated for each model that has example section.

* `api/company/models.ts`: An index script which exports all model interfaces. It is used to make it easier for application classes to import models, you can use import { Model1, Model2 } from 'api/models' instead of import { Model1 } from 'api/company/models/model1' and import { Model2 } from 'api/company/models/model2';

* `api/comany/services/tagn.service.ts`: One file per Swagger tag is generated here;

* `api/company/services.ts`: An index script which exports all service classes, similar to the analog file for models;

* `api/company/api-configuration.ts`: An @Injectable class that holds global configuration. Currently the only global configuration option is rootUrl, which defaults to the URL in the source Swagger definition, and can be overridden in your application before doing the first API call;

* `api/company/base-service.ts`: Base class which all generated services extend. It provides the ability to override the root URL used by a particular service. If the service root URL is null, which is the default, the service will use the global root URL defined in ApiConfiguration;

* `api/company/api.module.ts`: A module that declares an NgModule that provides all services, plus the ApiConfiguration instance. Your root application module should import this module to ensure all services are available via dependency injection on your application.


Once you have generated your api code your application should now have an additional directory something like 

```
---src
|   +---app
|   |   +---api
|   |   |   +---company
|   |   |   |   +---models
|   |   |   |   |   +---address.ts
|   |   |   |   |   +---company.ts
|   |   |   |   |   +---person.ts
|   |   |   |   |   \---problem-details.ts
|   |   |   |   +---services
|   |   |   |   |   \---companies.service.ts
|   |   |   |   +---api-configuration.ts
|   |   |   |   +---api.module.ts
|   |   |   |   +---base-service.ts
|   |   |   |   +---models.ts
|   |   |   |   +---request-builder.ts
|   |   |   |   +---services.ts
|   |   |   |   \---strict-http-response.ts
|   |   |   +---invoice
|   |   |   |   +---models
|   |   |   |   |   +---invoice-line.ts
|   |   |   |   |   +---invoice.ts
|   |   |   |   |   \---problem-details.ts
|   |   |   |   +---services
|   |   |   |   |   \---invoices.service.ts
|   |   |   |   +---api-configuration.ts
|   |   |   |   +---api.module.ts
|   |   |   |   +---base-service.ts
|   |   |   |   +---models.ts
|   |   |   |   +---request-builder.ts
|   |   |   |   +---services.ts
|   |   |   |   \---strict-http-response.ts

```

Finally we have everything in place to start adding views to our application.

# Building the application

## What we will build

We will build a simple application that will list all companies and allow us to drill in to a company and see the details.
Additionally we will build the ability to view, add, edit invoices. 

### Wire-frames

So for this application we will be creating 3 views: list, view, add/edit in the first pass on creating these views we will cover minimum  styling. 

![image-20201005095449649](C:\Users\Browni2\AppData\Roaming\Typora\typora-user-images\image-20201005095449649.png)

### Structure

The completed structure for our Pet example will look like the following, much like in the server side world where everything is moving to micro services, in the UI world we are moving to micro UIs, so in our final application all functionality to do with Pets will be self contained which means we could reuse this, in the future.

Generally the helper classes would be extracted into a angular library and be used as a dependency but we are not going to cover that here.

```
---src
|   +---app
|   |   +---company
|   |   |   +---company-list
|   |   |   |   +---company-list.component.html
|   |   |   |   +---company-list.component.scss
|   |   |   |   +---company-list.component.spec.ts
|   |   |   |   /---company-list.component.ts
|   |   |   |   +---index.ts
|   |   |   +---company-view
|   |   |   |   +---company-view.component.html
|   |   |   |   +---company-view.component.scss
|   |   |   |   +---company-view.component.spec.ts
|   |   |   |   /---company-view.component.ts
|   |   |   |   +---index.ts
|   |   |   +---company-add
|   |   |   |   +---company-add.component.html
|   |   |   |   +---company-add.component.scss
|   |   |   |   +---company-add.component.spec.ts
|   |   |   |   +---company-add.component.ts
|   |   |   |   +---company-form-manager.ts
|   |   |   |   +---index.ts
|   |   |   +---models
|   |   |   |   +---company.mapper.ts
|   |   |   |   +---company.model.ts
|   |   |   |   +---company-request.model.ts
|   |   |   |   +---index.ts
|   |   |   +---services
|   |   |   |   +---company-resolver.service.spec.ts
|   |   |   |   +---company-resolver.service.ts
|   |   |   |   +---company.service.spec.ts
|   |   |   |   +---company.service.ts
|   |   |   |   +---index.ts
|   |   |   +---company-routing.module.ts
|   |   |   /---company.module.ts
|   |   +---invoice
|   |   |   +---invoice-list
|   |   |   |   +---invoice-list.component.html
|   |   |   |   +---invoice-list.component.scss
|   |   |   |   +---invoice-list.component.spec.ts
|   |   |   |   /---invoice-list.component.ts
|   |   |   |   +---index.ts
|   |   |   +---invoice-view
|   |   |   |   +---invoice-view.component.html
|   |   |   |   +---invoice-view.component.scss
|   |   |   |   +---invoice-view.component.spec.ts
|   |   |   |   /---invoice-view.component.ts
|   |   |   |   +---index.ts
|   |   |   +---invoice-add
|   |   |   |   +---invoice-add.component.html
|   |   |   |   +---invoice-add.component.scss
|   |   |   |   +---invoice-add.component.spec.ts
|   |   |   |   +---invoice-add.component.ts
|   |   |   |   +---invoice-form-manager.ts
|   |   |   |   +---index.ts
|   |   |   +---models
|   |   |   |   +---invoice.mapper.ts
|   |   |   |   +---invoice.model.ts
|   |   |   |   +---invoice-request.model.ts
|   |   |   |   +---index.ts
|   |   |   +---services
|   |   |   |   +---invoice-resolver.service.spec.ts
|   |   |   |   +---invoice-resolver.service.ts
|   |   |   |   +---invoice.service.spec.ts
|   |   |   |   +---invoice.service.ts
|   |   |   |   +---index.ts
|   |   |   +---invoice-routing.module.ts
|   |   |   /---invoice.module.ts
|   |   +---helpers
|   |   |   /---angular-routing.helper.ts
```

# The Code

## API Imports

Open app.module.ts in your editor of choice, and within out import section add the following 

```typescript
import { ApiModule as CompanyApiModule } from './api/Company/api.module';
import { ApiModule as invoiceApiModule } from './api/invoice/api.module';
```

Because the generated code creates a ApiModule, we need to alias these using the as keyword.

*Notice there is no .ts file extension, the reason for this is we code in TypeScript but then the application is build the TypeScript is transcribed in to JavaScript and all out file extensions will change.*

Also within the import section of the `NgModule` we will set up our base urls for both the Apis

```typescript
    CompanyApiModule.forRoot({rootUrl: 'https://localhost:44369/'}),
    invoiceApiModule.forRoot({rootUrl: 'https://localhost:5001/'}),
```

In the future we will change this to use the environment configs so these will automatically change when we build in different modes.

## Company Module

Using the Angular CLI's build in generator we will create a dashboard component.
Open a terminal and navigate to your application directory and run
`ng generate module company`
This will generate a new module called CompanyModule, so now we need to import the module in our root module.

Open app.module.ts, and add a import to the top of the file.

`import { CompanyModule } from './company/company.module';`

Next we need to all our module to the imports section. 

```typescript
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ApiModule as CompanyApiModule } from './api/Company/api.module';
import { ApiModule as InvoiceApiModule } from './api/invoice/api.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyModule } from './company/company.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyModule,
    HttpClientModule,
    CompanyApiModule.forRoot({rootUrl: 'https://localhost:44369/'}),
    InvoiceApiModule.forRoot({rootUrl: 'https://localhost:5001/'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


```

Our app.module.ts should now look like above.

## Component

### Company List

Via the terminal navigate into the app\company directory and run 

`ng generate component company-list`

Once this is complete within the company directory, a folder is created called company-list with 4 files 

```
company-list.component.html
company-list.component.scss
company-list.component.spec.ts
company-list.component.ts
```

also within our company.module.ts you will see the declarations will have a new array item CompanyListComponent.

Before we go any further we need to stub out a service that we will use in the future.

After creating a new folder called services within our company folder we can navigate there via the terminal and run `ng generate service company` and update the file so we have 2 stub methods that both return null. 

```typescript
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/app/api/company/models';

@Injectable()
export class CompanyService {
  constructor() {}

  public getCompanies(): Observable<Company[]> {
    return new Observable((observer) => {
      observer.next([]);
      observer.complete();
    });
  }

  public getCompanyById(id: string): Observable<Company> {
    return new Observable((observer) => {
      observer.next();
      observer.complete();
    });
  }
}

```

We also need to update our company.module.ts so we can use our new service by importing the class and adding it to the providers.

```typescript
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CompaniesService } from '../api/company/services';
import { CompanyListComponent } from './company-list/company-list.component';

@NgModule({
  declarations: [CompanyListComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[CompaniesService]
})
export class CompanyModule { }

```



#### company-list.component.html

```html
<ul *ngIf="companyList.length>0">
  <li *ngFor="let company of companyList">
    <a [routerLink]="['/company',company.companyName]">
    <p class="w-50">name: {{company.companyName}}</p>
    </a>
  </li>
</ul>
<h3 *ngIf="companyList.length==0" class="text-center">Not Found</h3>
```

#### company-list.component.scss

```scss
a{
    text-decoration:none;
    color: black;
    display:block;
    padding:15px;
}
ul{
    padding:0;
}
li{
    list-style:none;
}
.w-50{
    display:inline-block;
    width:45%;
    cursor:pointer
}
li:hover{
    background:#eee
}
.text-right{
    text-align: right;
}
.text-center{
    text-align: center;
}
```

#### company-list.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Company } from '../../api/company/models/company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  companyList: Company[];
  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((data) => {
      this.companyList = data;
    });
  }
}

```

We now have 1 thing left to do before we can see out new page, and that's setup some routing. 

Within app-routing.module.ts we need to update the routes constant with to properties 

```typescript
  { path: 'companies', component: CompanyListComponent, },
  { path: '', redirectTo: '/companies', pathMatch: 'full' }
```

we also need to import our CompanyListComponent at the top of the file

```typescript
import { CompanyListComponent } from './company/company-list/company-list.component';
```

Now via the terminal if we run ```npm run start`` our application will build and we should be redirected to the company page and see Not Found (Fig-2).

<img src="C:\Users\Browni2\AppData\Roaming\Typora\typora-user-images\image-20201028122101704.png" alt="Fig-2" style="zoom:50%;" />

So lets update our company service to return a company so we can see some data.

Within CompanyService update the `getCompanies` function to the following 

```typescript
public getCompanies(): Observable<Company[]> {
    return new Observable((observer) => {
      observer.next([{ companyName : "test company"}]);
      observer.complete();
    });
  }
```

if we reload our application we should see 

<img src="C:\Users\Browni2\AppData\Roaming\Typora\typora-user-images\image-20201028130040931.png" alt="Fig-3" style="zoom:50%;" />



### Clean Up

Currently we are using the model that the API generator created 



### Company Add

`ng generate component company-add`

Once this is complete within the pets directory, a folder is created called company-list with 4 files 

```
company-add.component.html
company-add.component.scss
company-add.component.spec.ts
company-add.component.ts
```

#### company-add.component.html

```html

<form [formGroup]="studentForm">
  <div class="form-group">
      <input 
          type="text" 
          class="form-control w-100" 
          formControlName="name" 
          name="name" 
          placeholder="Name">
  </div>
  <div class="form-group">
      <input 
          type="text" 
          class="form-control w-100" 
          formControlName="id" 
          name="id" 
          placeholder="Student ID"
          [readOnly]="isEdit">
  </div>
  <div class="form-group">
      <input 
          type="text" 
          class="form-control w-100" 
          formControlName="gender" 
          name="gender" 
          placeholder="Gender">
  </div>
  <div class="form-group">
      <input 
          type="text" 
          class="form-control w-100" 
          formControlName="address" 
          name="address" 
          placeholder="Address">
  </div>            
</form>
<button (click)="add()" *ngIf="!isEdit">Add</button>
<button (click)="edit()" *ngIf="isEdit">Edit</button>
<button (click)="resetForm()" *ngIf="!isEdit">Reset</button>
```

#### company-add.component.scss

```scss
input{
    width:100%;
    padding: 10px 15px;
    margin:5px auto;
}
```

#### company-add.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PetService } from '../services/pet.service';
import { PetModel } from '../models/pet.model';

@Component({
  selector: 'company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent implements OnInit  {

    companyForm: FormGroup;
    isEdit: Boolean = false;
    msg:String = '';
  
 	constructor(
    	private companyService: petService,
    	private route: ActivatedRoute,
    	private router: Router
  	){}
  
  	ngOnInit(){
    	this.companyForm = new FormGroup({
      		name: new FormControl(''),
      		id: new FormControl(''),
      		address: new FormControl(''),
      		gender: new FormControl(''),
    	})
      	this.route.params.subscribe(param => {
        	console.log(param)
        	if(param && param.id){
          		let student = this.studentService.getStudent(param.id);
          		if(student){
           			this.studentForm.setValue(student);
            		this.isEdit = true;
            	}
          		else {
                    this.router.navigate(['/students'])
                }
        }
      })
  }

  resetForm(){
    console.log('reset',this.studentForm)
    this.studentForm.reset();
  }

  add(){
    if(this.studentForm.valid){
      this.studentService.studentList.push(this.studentForm.value);
      this.resetForm();
      console.log('this.studentService.studelost',this.studentService.getStudents())}
      else {
      this.msg = 'Please complete form'
    }
  }

  edit(){
    this.msg = '';
    if(this.studentForm.valid){
      if(this.studentService.studentEdit(this.studentForm.value)){
        this.router.navigate(['/students'])
      }else {
        this.msg = 'Something went wrong'
      }
    }else {
      this.msg = 'Please complete form'
    }
  }
  
}


```

#### company-form-manager.ts

```typescript
import { Subscription } from 'rxjs';

import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { PetModel } from '../../models/pet.model';

@Injectable()
export class CompanyFormManager {
    public formInstance: FormGroup;

    constructor(private fb: FormBuilder) {
        this.assignNewFormInstance();
    }

    public setValues(model: PetModel): void {
        this.formInstance.get('name').setValue(model.name);
    }

    private assignNewFormInstance(): void {
        const newForm = this.fb.group({
            pet: this.fb.control(''),
            name: this.fb.control('', [Validators.required]),
        });
        this.formInstance = newForm;
    }
}
```



### Company View

`ng generate component company-view`

Once this is complete within the company directory, a folder is created called company-add with 4 files 

```
company-view.component.html
company-view.component.scss
company-view.component.spec.ts
company-view.component.ts
```

#### company-view.component.html

```html
<div *ngIf="company">
  <p>Name: {{student.name}}</p>
  <p>Id: {{student.id}}</p>
  <p>Gender: {{student.gender}}</p>
  <p>Address: {{student.address}}</p>
  <a [routerLink]="['/company-add', company.id]">Edit</a>
</div>
```

#### company-view.component.scss

```scss

```

#### company-view.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pet.service';
import { PetModel } from '../models/pet.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.scss']
})
export class CompanyViewComponent implements OnInit  {

    company: CompanyModel;
    
    constructor(private companyService: companyService, private route: ActivatedRoute) {}

    ngOnInit(){

    }

}

```

## Services

### Company Service

```typescript
import { Injectable } from '@angular/core';
import { PetService } from '../../../api/services'
import { Observable } from 'rxjs';
import { PetMapper } from '../model/pet.mapper';
import { PetModel } from '../model/pet.model';

@Injectable()
export class CompanyService {
    constructor(private apiCompanyService: CompanyService, private companyMapper : CompanyMapper) {}
    
    public getCompanyById(id: string): Observable<PetModel> {
        return this.apiCompanyService.getCompanyById(id)
        	.pipe(map((r)=> {
            	return this.petMapper.map(r.body);
        }));
    }
}
```

### Company Resolver Service

Resolver are data provider classes used with routing to resolve data during navigation.

Rather than waiting for the UI to load then load any required data we can use a resolver to pre-load our data and pass it to the component that requires it.

This makes the page loading cycle faster it also stops the user from navigating to a page if the requires data doesn't exist. 


```typescript
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ComapnyResponceModel } from '../models/pet-responce.models';
import { CompanyService } from './pet.service';
import { findParamAnywhereInRoute } from '../../helpers/angular-routing.helper'

@Injectable()
export class CompanyResolverService implements Resolve<PetResponceModel> {
    constructor(private service: CompanyService) { }
    
    public resolve(route: ActiveRouteSnapshot, state: RouterStateSnapshot): Observable<CompanyResponceModel> {
        const companyId = findParamAnywhereInRoute(route, 'id');
        
        this.service.getCompanyById(Id).pipe(
        	take(1),
            map((model) =>{
                if (!model){ 
                	throw new Error(`Can't find the company with the id of ${id}`);
                }
                return model;
            })
        );
    }
}
```

#### Observables

Observables are lazy collections of multiple values over time.

*Please note the dollar sign. Using the dollar sign in the name of a variable that is an observable, is considered best practice. This way it’s easy to identify if your variable is an observable or not.* 

Observables are populated over time and we can subscribe to them , so as they are populate we will receive this data,

A key thing to note is if an Observable is not subscribed to then they will not be fire, also any observable that you subscribe to need to be unsubscribed from, if they are not then this can lead to memory leaks and strange functionality. 


## Routing

Within the Pet directory we will create a new file called `pet-routing.module.ts`

This file will manage all the routing within out pet UI.

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComapnyViewComponent } from './company-view/company-view.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyAddComponent } from './company-add/company-add.component';

import { CompanyResolverService }'./services/company-resolver.service';

const routes: Routes =[
    {
        path: 'company', 
        component: CompanyListComponent,
    },
    {
        path: 'company/:id',
        component: CompanyViewComponent,
        resolver: {
            pets: CompanyResolverService
        }
    },
    {
        path: 'company-add',
        component: CompanyAddComponent
    },
    {
        path: 'company-add/:id',
        component: CompanyAddComponent,
        resolver: {
            pets: CompanyResolverService
        }
    },
    {
        path: '', 
        redirectTo: '/company',
        pathMatch: 'full'
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompanyRoutingModule {}
```

## Company Module

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './pet-list/pet-list.component';
import { CompanyViewComponent } from './pet-view/pet-view.component';
import { CompanyAddComponent } from './pet-add/pet-add.component';
import { CompanyResolverService } from './service/pet-resolver.service';
import { CompanyService } from './service/pet.service';
import { CompanyRoutingModule } from './pet-routing.module'

@NgModule({
  declarations: [CompanyListComponent, CompanyViewComponent, CompanyAddComponent],
  imports: [CommonModule, PetRoutingModule],
  providers: [CompanyResolverService, CompanyService],
})
export class CompanyModule {}
```

## Helpers

### Angular Routing Helper

This singleton function is designed to look at the current active route and search for a parameter, any where in the query string, we could parse the full query string every time we needed to access data from it but this method makes our lives a bit easier.

```typescript
import { ActivatedRouteSnapshot } from '@angular/router';

export function findParamAnywhereInRoute(route: ActivatedRouteSnapshot, paramKey: string): any | null {
    const routeWithParam = route.pathFromRoot.find((r) => typeof(r.params[paramKey]) !== 'undefined' && r.params[paramKey] !== null);

    if (!routeWithParam) {
        return null;
    }

    return routeWithParam.params[paramKey];
}
```

# Bring it together

Before we can use this component, we need to setup the routing. 

Within the app.component.html delete everything apart from `<router-outlet></router-outlet>` which is the very last line.

# HttpInterceptor

HttpInterceptors are used to inject standard headers in to any http request, this is very useful if we need to include a auth or api token with any API call from our application.

```typescript
@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Apply the headers
    req = req.clone({
      setHeaders: {
        'ApiToken': '234567890'
      }
    });

    // Also handle errors globally
    return next.handle(req).pipe(
      tap(x => x, err => {
        // Handle this err
        console.error(`Error performing request, status code = ${err.status}`);
      })
    );
  }
}
```



```typescript
import { NgModule, Provider, forwardRef } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiInterceptor } from './api.interceptor';

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => ApiInterceptor),
  multi: true
};

@NgModule({
  providers: [
    ApiInterceptor,
    API_INTERCEPTOR_PROVIDER
  ]
})
export class AppModule {}
```



# Route Guards

Angualr's route guards are interfaces which can tell the router whether or not it should allow navigation to a requested route.

The main use of route guards are to limit user's interaction with the application e.g pages only logged in users can action. 

One thing to remember these are not used to limit access to data, just components and pages, like any other front end application the user has access to the source of the application all tho its heavily obscured, knowledge uses can still bypass any security you setup so data should always be protected at the serer side so even if the user gets access to the page they cant access/modify any data.

# Feature Flags

# Running on HTTPS

# Unit Testing

# End 2 End (e2e) Testing

# Angular Material
