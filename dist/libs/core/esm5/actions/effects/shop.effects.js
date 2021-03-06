var _a;
import { __assign, __read, __spread } from "tslib";
import { PebShopEffect } from '../../models/action';
export var pebShopEffectHandlers = (_a = {},
    _a[PebShopEffect.Init] = pebShopEffectCreateHandler,
    _a[PebShopEffect.UpdateData] = pebShopEffectUpdateDataHandler,
    _a[PebShopEffect.UpdatePages] = pebShopEffectUpdatePagesHandler,
    _a[PebShopEffect.AppendPage] = pebShopEffectAppendPagesHandler,
    _a[PebShopEffect.DeletePage] = pebShopEffectAppendPagesHandler,
    _a);
export function pebShopEffectCreateHandler(prevShop, payload) {
    return payload;
}
export function pebShopEffectUpdateDataHandler(prevShop, payload) {
    // debugger;
    return __assign(__assign({}, prevShop), { data: __assign(__assign({}, prevShop.data), payload) });
}
export function pebShopEffectUpdatePagesHandler(prevShop, payload) {
    return __assign(__assign({}, prevShop), { pageIds: payload });
}
export function pebShopEffectAppendPagesHandler(prevShop, payload) {
    return __assign(__assign({}, prevShop), { pageIds: __spread(prevShop.pageIds, [payload]) });
}
export function pebShopEffectDeletePagesHandler(prevShop, payload) {
    return __assign(__assign({}, prevShop), { pageIds: prevShop.pageIds.filter(function (id) { return id !== payload; }) });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcC5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItY29yZS8iLCJzb3VyY2VzIjpbImFjdGlvbnMvZWZmZWN0cy9zaG9wLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFJcEQsTUFBTSxDQUFDLElBQU0scUJBQXFCO0lBR2hDLEdBQUMsYUFBYSxDQUFDLElBQUksSUFBRywwQkFBMEI7SUFDaEQsR0FBQyxhQUFhLENBQUMsVUFBVSxJQUFHLDhCQUE4QjtJQUMxRCxHQUFDLGFBQWEsQ0FBQyxXQUFXLElBQUcsK0JBQStCO0lBQzVELEdBQUMsYUFBYSxDQUFDLFVBQVUsSUFBRywrQkFBK0I7SUFDM0QsR0FBQyxhQUFhLENBQUMsVUFBVSxJQUFHLCtCQUErQjtPQUM1RCxDQUFDO0FBRUYsTUFBTSxVQUFVLDBCQUEwQixDQUFDLFFBQWMsRUFBRSxPQUFxQjtJQUM5RSxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBQ0QsTUFBTSxVQUFVLDhCQUE4QixDQUFDLFFBQXNCLEVBQUUsT0FBK0I7SUFDcEcsWUFBWTtJQUNaLDZCQUNLLFFBQVEsS0FDWCxJQUFJLHdCQUNDLFFBQVEsQ0FBQyxJQUFJLEdBQ2IsT0FBTyxLQUVaO0FBQ0osQ0FBQztBQUNELE1BQU0sVUFBVSwrQkFBK0IsQ0FBQyxRQUFzQixFQUFFLE9BQW9CO0lBQzFGLDZCQUNLLFFBQVEsS0FDWCxPQUFPLEVBQUUsT0FBTyxJQUNoQjtBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsK0JBQStCLENBQUMsUUFBc0IsRUFBRSxPQUFrQjtJQUN4Riw2QkFDSyxRQUFRLEtBQ1gsT0FBTyxXQUFNLFFBQVEsQ0FBQyxPQUFPLEdBQUUsT0FBTyxNQUN0QztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsK0JBQStCLENBQUMsUUFBc0IsRUFBRSxPQUFrQjtJQUN4Riw2QkFDSyxRQUFRLEtBQ1gsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxLQUFLLE9BQU8sRUFBZCxDQUFjLENBQUMsSUFDdEQ7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGViU2hvcEVmZmVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9hY3Rpb24nO1xuaW1wb3J0IHsgUGViUGFnZUlkIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NsaWVudCc7XG5pbXBvcnQgeyBQZWJTaG9wU2hvcnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvZWRpdG9yJztcblxuZXhwb3J0IGNvbnN0IHBlYlNob3BFZmZlY3RIYW5kbGVyczoge1xuICBbZWZmZWN0TmFtZSBpbiBQZWJTaG9wRWZmZWN0XTogKHByZXZTaG9wOiBudWxsIHwgUGViU2hvcFNob3J0LCBwYXlsb2FkOiBhbnkpID0+IFBlYlNob3BTaG9ydFxufSA9IHtcbiAgW1BlYlNob3BFZmZlY3QuSW5pdF06IHBlYlNob3BFZmZlY3RDcmVhdGVIYW5kbGVyLFxuICBbUGViU2hvcEVmZmVjdC5VcGRhdGVEYXRhXTogcGViU2hvcEVmZmVjdFVwZGF0ZURhdGFIYW5kbGVyLFxuICBbUGViU2hvcEVmZmVjdC5VcGRhdGVQYWdlc106IHBlYlNob3BFZmZlY3RVcGRhdGVQYWdlc0hhbmRsZXIsXG4gIFtQZWJTaG9wRWZmZWN0LkFwcGVuZFBhZ2VdOiBwZWJTaG9wRWZmZWN0QXBwZW5kUGFnZXNIYW5kbGVyLFxuICBbUGViU2hvcEVmZmVjdC5EZWxldGVQYWdlXTogcGViU2hvcEVmZmVjdEFwcGVuZFBhZ2VzSGFuZGxlcixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwZWJTaG9wRWZmZWN0Q3JlYXRlSGFuZGxlcihwcmV2U2hvcDogbnVsbCwgcGF5bG9hZDogUGViU2hvcFNob3J0KTogUGViU2hvcFNob3J0IHtcbiAgcmV0dXJuIHBheWxvYWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gcGViU2hvcEVmZmVjdFVwZGF0ZURhdGFIYW5kbGVyKHByZXZTaG9wOiBQZWJTaG9wU2hvcnQsIHBheWxvYWQ6IHsgW2tleTogc3RyaW5nXTogYW55IH0pOiBQZWJTaG9wU2hvcnQge1xuICAvLyBkZWJ1Z2dlcjtcbiAgcmV0dXJuIHtcbiAgICAuLi5wcmV2U2hvcCxcbiAgICBkYXRhOiB7XG4gICAgICAuLi5wcmV2U2hvcC5kYXRhLFxuICAgICAgLi4ucGF5bG9hZCxcbiAgICB9LFxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBlYlNob3BFZmZlY3RVcGRhdGVQYWdlc0hhbmRsZXIocHJldlNob3A6IFBlYlNob3BTaG9ydCwgcGF5bG9hZDogUGViUGFnZUlkW10pOiBQZWJTaG9wU2hvcnQge1xuICByZXR1cm4ge1xuICAgIC4uLnByZXZTaG9wLFxuICAgIHBhZ2VJZHM6IHBheWxvYWQsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZWJTaG9wRWZmZWN0QXBwZW5kUGFnZXNIYW5kbGVyKHByZXZTaG9wOiBQZWJTaG9wU2hvcnQsIHBheWxvYWQ6IFBlYlBhZ2VJZCk6IFBlYlNob3BTaG9ydCB7XG4gIHJldHVybiB7XG4gICAgLi4ucHJldlNob3AsXG4gICAgcGFnZUlkczogWy4uLnByZXZTaG9wLnBhZ2VJZHMsIHBheWxvYWRdLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGViU2hvcEVmZmVjdERlbGV0ZVBhZ2VzSGFuZGxlcihwcmV2U2hvcDogUGViU2hvcFNob3J0LCBwYXlsb2FkOiBQZWJQYWdlSWQpOiBQZWJTaG9wU2hvcnQge1xuICByZXR1cm4ge1xuICAgIC4uLnByZXZTaG9wLFxuICAgIHBhZ2VJZHM6IHByZXZTaG9wLnBhZ2VJZHMuZmlsdGVyKGlkID0+IGlkICE9PSBwYXlsb2FkKSxcbiAgfTtcbn1cbiJdfQ==