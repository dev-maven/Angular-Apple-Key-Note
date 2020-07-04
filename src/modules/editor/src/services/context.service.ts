import { Injectable, Injector } from '@angular/core';
import { combineLatest, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContextService, CONTEXT_SERVICES } from '@pe/builder-core';

export enum ContextParameterType {
  Static = 'static',
  Dynamic = 'dynamic',
}

export type ContextParameter = string |
number | (string | number)[] |
{
  type: ContextParameterType;
  value: string | number;
};

export interface ContextSchema {
  [key: string]: {
    service: string | ContextService,
    method: string,
    params: ContextParameter[],
  };
}

export interface RootState {
  '@search'?: string;
  '@cart'?: {
    count: number;
    product: any; // TODO: add typings
  }[];
  '@category'?: {
    sortBy: string;
    shownFilters: boolean;
    activatedFilters: any[];
    disabledFilters: any[];
  };
}

const INITIAL_STATE = {
  '@cart': [],
  '@search': '',
  '@category': {
    sortBy: 'abc',
    shownFilters: false,
    activatedFilters: [],
    disabledFilters: [],
  },
};

// TODO: should be reusable for editor and client
@Injectable({ providedIn: 'root' })
export class ContextBuilder {
  private readonly rootStateSubject$ = new BehaviorSubject<RootState>(INITIAL_STATE);

  services = {
    [ContextService.Products]: this.injector.get(CONTEXT_SERVICES[ContextService.Products]),
    // [ContextService.Company]: this.injector.get(CONTEXT_SERVICES[ContextService.Company]),
    // [ContextService.Shipments]: this.injector.get(CONTEXT_SERVICES[ContextService.Shipments]),
  };

  constructor(
    private injector: Injector,
  ) {}

  // TODO: Move to own service
  get rootState$(): Observable<RootState> {
    return this.rootStateSubject$.asObservable();
  }

  get rootState(): RootState {
    return this.rootStateSubject$.value;
  }

  patchRootState(value: RootState): void {
    this.rootStateSubject$.next({
      ...this.rootState,
      ...value,
    });
  }

  validateSchema(schema: ContextSchema): boolean {
    // TODO: Do!
    return true;
  }

  buildSchema(schema: ContextSchema): any {
    const handleBlueprintPart = (plan): Observable<any> => {
      if (!this.services[plan.service]) {
        console.error(`-- Service ${plan.service} was not found`);
      }

      if (!this.services[plan.service][plan.method]) {
        console.error(`-- Method ${plan.method} was not found in ${plan.service}`);
      }

      const params = this.resolveParams<any[]>(plan.params);
      const requiredArguments = this.services[plan.service][plan.method].length;

      if (params.length < requiredArguments) {
        console.error(`-- Not enough arguments (${params.length}) have been passed to ${plan.service}.${plan.method}`);
      }

      return this.services[plan.service][plan.method](...params);
    };

    return combineLatest(
      Object.entries(schema).map(
        ([key, part]) => handleBlueprintPart(part).pipe(
          map(result => [key, result]),
        ),
      ),
    ).pipe(
      map(results => (Object as any).fromEntries(results)),
    );
  }

  private resolveParams<T>(params: ContextParameter[]): T {
    return params.reduce((acc: any, curr: any) => {
      const isSimpleParameter = typeof curr === 'string' || typeof curr === 'number' || Array.isArray(curr);
      const param = isSimpleParameter ?
        curr : curr.type === ContextParameterType.Dynamic ?
          this.resolveStateParameter(curr.value as string) : curr.value;

      return [ ...acc, param ];
    }, []);
  }

  private resolveStateParameter<T>(path: string, state: RootState = this.rootState): T {
    return path.split('.').reduce((acc, curr) => acc ? acc[curr] : null, state);
  }
}
