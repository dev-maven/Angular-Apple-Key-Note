import { omit } from 'lodash-es';
import { PebEffectTarget } from '../models/action';
import { pebContextSchemaEffectHandlers } from './effects/context-schema.effects';
import { pebPageEffectHandler } from './effects/page.effects';
import { pebShopEffectHandlers } from './effects/shop.effects';
import { pebStylesheetEffectHandlers } from './effects/stylesheet.effects';
import { pebLayoutEffectHandlers } from './effects/template.effects';
const createInitialShopSnapshot = () => ({
    // TODO: is hash needed???
    id: null,
    shop: null,
    pages: {},
    templates: {},
    stylesheets: {},
    contextSchemas: {},
});
const effectHandlers = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, pebShopEffectHandlers), pebPageEffectHandler), pebLayoutEffectHandlers), pebStylesheetEffectHandlers), pebContextSchemaEffectHandlers);
export function pebActionHandler(input, action) {
    return action.effects.reduce((prevState, effect) => {
        const [areaName, areaId] = effect.target.split(':');
        const handler = effectHandlers[effect.type];
        if (!handler) {
            throw new Error('Invalid effect type');
        }
        const collectionNames = Object.values(PebEffectTarget);
        // TODO: Check if Maps are deeply copied
        if (areaName === PebEffectTarget.Shop) {
            // debugger;
            return Object.assign(Object.assign({}, prevState), { shop: handler(prevState.shop, effect.payload) }); // FIXME: Type??
        }
        else if (collectionNames.includes(areaName)) {
            const prevUnit = prevState[areaName][areaId] || null;
            const nextUnit = handler(prevUnit, effect.payload);
            const nextArea = Boolean(nextUnit)
                ? Object.assign(Object.assign({}, prevState[areaName]), { [areaId]: nextUnit }) : omit(prevState[areaName], areaId);
            return Object.assign(Object.assign({}, prevState), { [areaName]: nextArea });
        }
        throw new Error('Invalid effect target');
    }, input);
}
export const pebCompileActions = (actions) => actions.reduce(pebActionHandler, createInitialShopSnapshot());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci1jb3JlLyIsInNvdXJjZXMiOlsiYWN0aW9ucy9jb21waWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRWpDLE9BQU8sRUFBYSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU5RCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVyRSxNQUFNLHlCQUF5QixHQUFHLEdBQStCLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLDBCQUEwQjtJQUMxQixFQUFFLEVBQUUsSUFBSTtJQUNSLElBQUksRUFBRSxJQUFJO0lBQ1YsS0FBSyxFQUFFLEVBQUU7SUFDVCxTQUFTLEVBQUUsRUFBRTtJQUNiLFdBQVcsRUFBRSxFQUFFO0lBQ2YsY0FBYyxFQUFFLEVBQUU7Q0FDbkIsQ0FBQyxDQUFDO0FBRUgsTUFBTSxjQUFjLDZFQUNmLHFCQUFxQixHQUNyQixvQkFBb0IsR0FDcEIsdUJBQXVCLEdBQ3ZCLDJCQUEyQixHQUMzQiw4QkFBOEIsQ0FDbEMsQ0FBQztBQUVGLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxLQUFpQyxFQUFFLE1BQWlCO0lBQ25GLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDakQsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQXVCLENBQUM7UUFDMUUsTUFBTSxPQUFPLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQWEsQ0FBQztRQUVuRSx3Q0FBd0M7UUFDeEMsSUFBSSxRQUFRLEtBQUssZUFBZSxDQUFDLElBQUksRUFBRTtZQUNyQyxZQUFZO1lBQ1osT0FBTyxnQ0FDRixTQUFTLEtBQ1osSUFBSSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBVyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FDOUMsQ0FBQyxDQUFDLGdCQUFnQjtTQUMzQjthQUFNLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM3QyxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDO1lBQ3JELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRW5ELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBQ2hDLENBQUMsaUNBQU0sU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxJQUM5QyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLENBQVEsQ0FBQztZQUU3Qyx1Q0FDSyxTQUFTLEtBQ1osQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLElBQ3BCO1NBQ0g7UUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDM0MsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ1osQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLENBQUMsT0FBb0IsRUFBOEIsRUFBRSxDQUNwRixPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLHlCQUF5QixFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9taXQgfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG5pbXBvcnQgeyBQZWJBY3Rpb24sIFBlYkVmZmVjdFRhcmdldCB9IGZyb20gJy4uL21vZGVscy9hY3Rpb24nO1xuaW1wb3J0IHsgUGViU2hvcFRoZW1lU25hcHNob3RFbnRpdHkgfSBmcm9tICcuLi9tb2RlbHMvZGF0YWJhc2UnO1xuaW1wb3J0IHsgcGViQ29udGV4dFNjaGVtYUVmZmVjdEhhbmRsZXJzIH0gZnJvbSAnLi9lZmZlY3RzL2NvbnRleHQtc2NoZW1hLmVmZmVjdHMnO1xuaW1wb3J0IHsgcGViUGFnZUVmZmVjdEhhbmRsZXIgfSBmcm9tICcuL2VmZmVjdHMvcGFnZS5lZmZlY3RzJztcbmltcG9ydCB7IHBlYlNob3BFZmZlY3RIYW5kbGVycyB9IGZyb20gJy4vZWZmZWN0cy9zaG9wLmVmZmVjdHMnO1xuaW1wb3J0IHsgcGViU3R5bGVzaGVldEVmZmVjdEhhbmRsZXJzIH0gZnJvbSAnLi9lZmZlY3RzL3N0eWxlc2hlZXQuZWZmZWN0cyc7XG5pbXBvcnQgeyBwZWJMYXlvdXRFZmZlY3RIYW5kbGVycyB9IGZyb20gJy4vZWZmZWN0cy90ZW1wbGF0ZS5lZmZlY3RzJztcblxuY29uc3QgY3JlYXRlSW5pdGlhbFNob3BTbmFwc2hvdCA9ICgpOiBQZWJTaG9wVGhlbWVTbmFwc2hvdEVudGl0eSA9PiAoe1xuICAvLyBUT0RPOiBpcyBoYXNoIG5lZWRlZD8/P1xuICBpZDogbnVsbCxcbiAgc2hvcDogbnVsbCxcbiAgcGFnZXM6IHt9LFxuICB0ZW1wbGF0ZXM6IHt9LFxuICBzdHlsZXNoZWV0czoge30sXG4gIGNvbnRleHRTY2hlbWFzOiB7fSxcbn0pO1xuXG5jb25zdCBlZmZlY3RIYW5kbGVycyA9IHtcbiAgLi4ucGViU2hvcEVmZmVjdEhhbmRsZXJzLFxuICAuLi5wZWJQYWdlRWZmZWN0SGFuZGxlcixcbiAgLi4ucGViTGF5b3V0RWZmZWN0SGFuZGxlcnMsXG4gIC4uLnBlYlN0eWxlc2hlZXRFZmZlY3RIYW5kbGVycyxcbiAgLi4ucGViQ29udGV4dFNjaGVtYUVmZmVjdEhhbmRsZXJzLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBlYkFjdGlvbkhhbmRsZXIoaW5wdXQ6IFBlYlNob3BUaGVtZVNuYXBzaG90RW50aXR5LCBhY3Rpb246IFBlYkFjdGlvbik6IFBlYlNob3BUaGVtZVNuYXBzaG90RW50aXR5IHtcbiAgcmV0dXJuIGFjdGlvbi5lZmZlY3RzLnJlZHVjZSgocHJldlN0YXRlLCBlZmZlY3QpID0+IHtcbiAgICBjb25zdCBbYXJlYU5hbWUsIGFyZWFJZF0gPSBlZmZlY3QudGFyZ2V0LnNwbGl0KCc6JykgYXMgWyBzdHJpbmcsIHN0cmluZyBdO1xuICAgIGNvbnN0IGhhbmRsZXIgPSBlZmZlY3RIYW5kbGVyc1tlZmZlY3QudHlwZV07XG5cbiAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBlZmZlY3QgdHlwZScpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbGxlY3Rpb25OYW1lcyA9IE9iamVjdC52YWx1ZXMoUGViRWZmZWN0VGFyZ2V0KSBhcyBzdHJpbmdbXTtcblxuICAgIC8vIFRPRE86IENoZWNrIGlmIE1hcHMgYXJlIGRlZXBseSBjb3BpZWRcbiAgICBpZiAoYXJlYU5hbWUgPT09IFBlYkVmZmVjdFRhcmdldC5TaG9wKSB7XG4gICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgc2hvcDogaGFuZGxlcihwcmV2U3RhdGUuc2hvcCBhcyBhbnksIGVmZmVjdC5wYXlsb2FkKSxcbiAgICAgIH0gYXMgYW55OyAvLyBGSVhNRTogVHlwZT8/XG4gICAgfSBlbHNlIGlmIChjb2xsZWN0aW9uTmFtZXMuaW5jbHVkZXMoYXJlYU5hbWUpKSB7XG4gICAgICBjb25zdCBwcmV2VW5pdCA9IHByZXZTdGF0ZVthcmVhTmFtZV1bYXJlYUlkXSB8fCBudWxsO1xuICAgICAgY29uc3QgbmV4dFVuaXQgPSBoYW5kbGVyKHByZXZVbml0LCBlZmZlY3QucGF5bG9hZCk7XG5cbiAgICAgIGNvbnN0IG5leHRBcmVhID0gQm9vbGVhbihuZXh0VW5pdClcbiAgICAgICAgPyB7IC4uLnByZXZTdGF0ZVthcmVhTmFtZV0sIFthcmVhSWRdOiBuZXh0VW5pdCB9XG4gICAgICAgIDogb21pdChwcmV2U3RhdGVbYXJlYU5hbWVdLCBhcmVhSWQpIGFzIGFueTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBbYXJlYU5hbWVdOiBuZXh0QXJlYSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGVmZmVjdCB0YXJnZXQnKTtcbiAgfSwgaW5wdXQpO1xufVxuXG5leHBvcnQgY29uc3QgcGViQ29tcGlsZUFjdGlvbnMgPSAoYWN0aW9uczogUGViQWN0aW9uW10pOiBQZWJTaG9wVGhlbWVTbmFwc2hvdEVudGl0eSA9PlxuICBhY3Rpb25zLnJlZHVjZShwZWJBY3Rpb25IYW5kbGVyLCBjcmVhdGVJbml0aWFsU2hvcFNuYXBzaG90KCkpO1xuIl19