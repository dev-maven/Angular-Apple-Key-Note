import { merge } from 'lodash-es';
import { PebStylesheetEffect } from '../../models/action';
export const pebStylesheetEffectHandlers = {
    [PebStylesheetEffect.Init]: pebStylesheetInitHandler,
    [PebStylesheetEffect.Update]: pebStylesheetUpdateHandler,
    [PebStylesheetEffect.Delete]: pebStylesheetDeleteHandler,
};
export function pebStylesheetInitHandler(_, payload) {
    return payload;
}
export function pebStylesheetUpdateHandler(prevState, payload) {
    return merge({}, prevState, payload);
}
export function pebStylesheetDeleteHandler() {
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVzaGVldC5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItY29yZS8iLCJzb3VyY2VzIjpbImFjdGlvbnMvZWZmZWN0cy9zdHlsZXNoZWV0LmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVsQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUcxRCxNQUFNLENBQUMsTUFBTSwyQkFBMkIsR0FLcEM7SUFDRixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFLHdCQUF3QjtJQUNwRCxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxFQUFFLDBCQUEwQjtJQUN4RCxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxFQUFFLDBCQUEwQjtDQUN6RCxDQUFDO0FBRUYsTUFBTSxVQUFVLHdCQUF3QixDQUFDLENBQU8sRUFBRSxPQUFzQjtJQUN0RSxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBRUQsTUFBTSxVQUFVLDBCQUEwQixDQUFDLFNBQXdCLEVBQUUsT0FBc0I7SUFDekYsT0FBTyxLQUFLLENBQ1YsRUFBRSxFQUNGLFNBQVMsRUFDVCxPQUFPLENBQ1IsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsMEJBQTBCO0lBQ3hDLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lcmdlIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuaW1wb3J0IHsgUGViU3R5bGVzaGVldEVmZmVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9hY3Rpb24nO1xuaW1wb3J0IHsgUGViU3R5bGVzaGVldCB9IGZyb20gJy4uLy4uL21vZGVscy9jbGllbnQnO1xuXG5leHBvcnQgY29uc3QgcGViU3R5bGVzaGVldEVmZmVjdEhhbmRsZXJzOiB7XG4gIFtlZmZlY3ROYW1lIGluIFBlYlN0eWxlc2hlZXRFZmZlY3RdOiAoXG4gICAgc3R5bGVzaGVldDogbnVsbCB8IFBlYlN0eWxlc2hlZXQsXG4gICAgcGF5bG9hZDogUGViU3R5bGVzaGVldCB8IHN0cmluZyxcbiAgKSA9PiBQZWJTdHlsZXNoZWV0IHwgbnVsbFxufSA9IHtcbiAgW1BlYlN0eWxlc2hlZXRFZmZlY3QuSW5pdF06IHBlYlN0eWxlc2hlZXRJbml0SGFuZGxlcixcbiAgW1BlYlN0eWxlc2hlZXRFZmZlY3QuVXBkYXRlXTogcGViU3R5bGVzaGVldFVwZGF0ZUhhbmRsZXIsXG4gIFtQZWJTdHlsZXNoZWV0RWZmZWN0LkRlbGV0ZV06IHBlYlN0eWxlc2hlZXREZWxldGVIYW5kbGVyLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBlYlN0eWxlc2hlZXRJbml0SGFuZGxlcihfOiBudWxsLCBwYXlsb2FkOiBQZWJTdHlsZXNoZWV0KTogUGViU3R5bGVzaGVldCB7XG4gIHJldHVybiBwYXlsb2FkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGViU3R5bGVzaGVldFVwZGF0ZUhhbmRsZXIocHJldlN0YXRlOiBQZWJTdHlsZXNoZWV0LCBwYXlsb2FkOiBQZWJTdHlsZXNoZWV0KTogUGViU3R5bGVzaGVldCB7XG4gIHJldHVybiBtZXJnZShcbiAgICB7fSxcbiAgICBwcmV2U3RhdGUsXG4gICAgcGF5bG9hZCxcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlYlN0eWxlc2hlZXREZWxldGVIYW5kbGVyKCk6IFBlYlN0eWxlc2hlZXQge1xuICByZXR1cm4gbnVsbDtcbn1cbiJdfQ==