var _a;
import { merge } from 'lodash-es';
import { PebContextSchemaEffect } from '../../models/action';
export var pebContextSchemaEffectHandlers = (_a = {},
    _a[PebContextSchemaEffect.Init] = pebContextSchemaEffectInitHandler,
    _a[PebContextSchemaEffect.Update] = pebContextSchemaEffectUpdateHandler,
    _a[PebContextSchemaEffect.Delete] = pebContextSchemaEffectDeleteHandler,
    _a);
export function pebContextSchemaEffectInitHandler(_, payload) {
    return payload;
}
export function pebContextSchemaEffectUpdateHandler(prevSchema, payload) {
    return merge({}, prevSchema, payload);
}
export function pebContextSchemaEffectDeleteHandler(prevSchema, payload) {
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1zY2hlbWEuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLWNvcmUvIiwic291cmNlcyI6WyJhY3Rpb25zL2VmZmVjdHMvY29udGV4dC1zY2hlbWEuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBUSxNQUFNLFdBQVcsQ0FBQztBQUV4QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUc3RCxNQUFNLENBQUMsSUFBTSw4QkFBOEI7SUFHekMsR0FBQyxzQkFBc0IsQ0FBQyxJQUFJLElBQUcsaUNBQWlDO0lBQ2hFLEdBQUMsc0JBQXNCLENBQUMsTUFBTSxJQUFHLG1DQUFtQztJQUNwRSxHQUFDLHNCQUFzQixDQUFDLE1BQU0sSUFBRyxtQ0FBbUM7T0FDckUsQ0FBQztBQUVGLE1BQU0sVUFBVSxpQ0FBaUMsQ0FBQyxDQUFPLEVBQUUsT0FBeUI7SUFDbEYsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQztBQUVELE1BQU0sVUFBVSxtQ0FBbUMsQ0FBQyxVQUE0QixFQUFFLE9BQXlCO0lBQ3pHLE9BQU8sS0FBSyxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUVELE1BQU0sVUFBVSxtQ0FBbUMsQ0FBQyxVQUE0QixFQUFFLE9BQWU7SUFDL0YsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVyZ2UsIG9taXQgfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG5pbXBvcnQgeyBQZWJDb250ZXh0U2NoZW1hRWZmZWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FjdGlvbic7XG5pbXBvcnQgeyBQZWJDb250ZXh0U2NoZW1hIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NsaWVudCc7XG5cbmV4cG9ydCBjb25zdCBwZWJDb250ZXh0U2NoZW1hRWZmZWN0SGFuZGxlcnM6IHtcbiAgW2VmZmVjdE5hbWUgaW4gUGViQ29udGV4dFNjaGVtYUVmZmVjdF06IChzY2hlbWE6IG51bGwgfCBQZWJDb250ZXh0U2NoZW1hLCBwYXlsb2FkOiBQZWJDb250ZXh0U2NoZW1hIHwgc3RyaW5nKSA9PiBQZWJDb250ZXh0U2NoZW1hIHwgbnVsbFxufSA9IHtcbiAgW1BlYkNvbnRleHRTY2hlbWFFZmZlY3QuSW5pdF06IHBlYkNvbnRleHRTY2hlbWFFZmZlY3RJbml0SGFuZGxlcixcbiAgW1BlYkNvbnRleHRTY2hlbWFFZmZlY3QuVXBkYXRlXTogcGViQ29udGV4dFNjaGVtYUVmZmVjdFVwZGF0ZUhhbmRsZXIsXG4gIFtQZWJDb250ZXh0U2NoZW1hRWZmZWN0LkRlbGV0ZV06IHBlYkNvbnRleHRTY2hlbWFFZmZlY3REZWxldGVIYW5kbGVyLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBlYkNvbnRleHRTY2hlbWFFZmZlY3RJbml0SGFuZGxlcihfOiBudWxsLCBwYXlsb2FkOiBQZWJDb250ZXh0U2NoZW1hKTogUGViQ29udGV4dFNjaGVtYSB7XG4gIHJldHVybiBwYXlsb2FkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGViQ29udGV4dFNjaGVtYUVmZmVjdFVwZGF0ZUhhbmRsZXIocHJldlNjaGVtYTogUGViQ29udGV4dFNjaGVtYSwgcGF5bG9hZDogUGViQ29udGV4dFNjaGVtYSk6IFBlYkNvbnRleHRTY2hlbWEge1xuICByZXR1cm4gbWVyZ2Uoe30sIHByZXZTY2hlbWEsIHBheWxvYWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGViQ29udGV4dFNjaGVtYUVmZmVjdERlbGV0ZUhhbmRsZXIocHJldlNjaGVtYTogUGViQ29udGV4dFNjaGVtYSwgcGF5bG9hZDogc3RyaW5nKTogUGViQ29udGV4dFNjaGVtYSB7XG4gIHJldHVybiBudWxsO1xufVxuIl19