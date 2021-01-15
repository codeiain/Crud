/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { ActivatedRouteSnapshot } from '@angular/router';

export function findParamAnywhereInRoute(
  route: ActivatedRouteSnapshot,
  paramKey: string
): string | null {
  const routeWithParam = route.pathFromRoot.find(
    (r) =>
      typeof r.params[paramKey] !== 'undefined' && r.params[paramKey] !== null
  );

  if (!routeWithParam) {
    return null;
  }

  return routeWithParam.params[paramKey] as string;
}
