import { Injectable, Injector } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContextService, CONTEXT_SERVICES } from '@pe/builder-core';

export interface ContextSchema {
  [key: string]: {
    service: string|ContextService,
    method: string,
    params: any[],
  };
}

@Injectable({ providedIn: 'root' })
export class ContextBuilder {
  services = {
    [ContextService.Company]: this.injector.get(CONTEXT_SERVICES[ContextService.Company]),
    [ContextService.Products]: this.injector.get(CONTEXT_SERVICES[ContextService.Products]),
    [ContextService.Shipments]: this.injector.get(CONTEXT_SERVICES[ContextService.Shipments]),
  };

  constructor(
    private injector: Injector,
  ) {}

  validateSchema(schema: ContextSchema) {
    // TODO: Do!
    return true;
  }

  buildSchema(schema: ContextSchema) {
    const handleBlueprintPart = (plan): Observable<any> => {
      return this.services[plan.service][plan.method](...plan.params);
    };

    return combineLatest(
      Object.entries(schema).map(
        ([key, part]) => handleBlueprintPart(part).pipe(
          map(result => [key, result])
        )
      ),
    ).pipe(
      map(results => (Object as any).fromEntries(results))
    );
  }
}
