import { PebScreen } from '../constants';
import { PebPageType, PebPageVariant } from '../models/client';
import { PebElementType } from '../models/element';
import { pebGenerateId } from '../utils/generate-id';
import { random } from 'lodash-es';
export const pebCreateEmptyPage = (name, type = PebPageType.Replica, variant = PebPageVariant.Default) => {
    const line = {
        id: pebGenerateId(),
        type: PebElementType.Line,
    };
    const template = {
        id: pebGenerateId('element'),
        type: PebElementType.Document,
        children: ['header', 'body', 'footer'].map(sectionName => ({
            id: pebGenerateId('element'),
            type: PebElementType.Section,
            data: { name: sectionName },
            meta: { deletable: false },
            children: [
                ...(sectionName === 'header' ? [
                    {
                        id: pebGenerateId('element'),
                        type: PebElementType.Block,
                        children: [
                            {
                                id: pebGenerateId('element'),
                                type: PebElementType.Text,
                                data: {
                                    text: name,
                                },
                            },
                        ],
                    },
                ] : []),
            ],
        })),
    };
    const [headerId, bodyId, footerId] = template.children.map(el => el.id);
    const headerBlockId = template.children[0].children[0].id;
    const blockColor = '#' + Number(random(0, Math.pow(16, 6))).toString(16);
    return {
        id: pebGenerateId('page'),
        name,
        type,
        variant,
        master: null,
        data: {
            url: '/',
            mark: null,
        },
        template,
        stylesheets: {
            [PebScreen.Desktop]: {
                [headerId]: { height: 200 },
                [bodyId]: { height: 600 },
                [footerId]: { height: 200 },
                [headerBlockId]: {
                    height: 150,
                    width: 150,
                    backgroundColor: blockColor,
                },
                [line.id]: { height: 2 },
            },
            [PebScreen.Tablet]: {
                [headerId]: { height: 200 },
                [bodyId]: { height: 600 },
                [footerId]: { height: 200 },
                [headerBlockId]: {
                    height: 150,
                    width: 150,
                    backgroundColor: blockColor,
                },
                [line.id]: { height: 2 },
            },
            [PebScreen.Mobile]: {
                [headerId]: { height: 200 },
                [bodyId]: { height: 600 },
                [footerId]: { height: 200 },
                [headerBlockId]: {
                    height: 150,
                    width: 150,
                    backgroundColor: blockColor,
                },
                [line.id]: { height: 2 },
            },
        },
        context: {},
    };
};
export function pebCreateEmptyShop() {
    const frontPage = pebCreateEmptyPage('Front');
    return {
        id: pebGenerateId(),
        data: {
            frontPageId: frontPage.id,
        },
        routing: {
            '/': frontPage.id,
        },
        context: {},
        pages: [frontPage],
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktc2hvcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLWNvcmUvIiwic291cmNlcyI6WyJmaXh0dXJlcy9lbXB0eS1zaG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxFQUFXLFdBQVcsRUFBRSxjQUFjLEVBQXdCLE1BQU0sa0JBQWtCLENBQUM7QUFDOUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRW5DLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLENBQUMsSUFBSSxFQUFFLE9BQW9CLFdBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxHQUFHLGNBQWMsQ0FBQyxPQUFPLEVBQVcsRUFBRTtJQUU3SCxNQUFNLElBQUksR0FBRztRQUNYLEVBQUUsRUFBRSxhQUFhLEVBQUU7UUFDbkIsSUFBSSxFQUFFLGNBQWMsQ0FBQyxJQUFJO0tBQzFCLENBQUM7SUFFRixNQUFNLFFBQVEsR0FBZ0I7UUFDNUIsRUFBRSxFQUFFLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDNUIsSUFBSSxFQUFFLGNBQWMsQ0FBQyxRQUFRO1FBQzdCLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN6RCxFQUFFLEVBQUUsYUFBYSxDQUFDLFNBQVMsQ0FBQztZQUM1QixJQUFJLEVBQUUsY0FBYyxDQUFDLE9BQU87WUFDNUIsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtZQUMzQixJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFO1lBQzFCLFFBQVEsRUFBRTtnQkFD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QUFHO29CQUNYLEtBQUssRUFBRSxHQUFHO29CQUNWLGVBQWUsRUFBRSxVQUFVO2lCQUM1QjtnQkFDRCxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUM7YUFDdkI7U0FDRjtRQUNELE9BQU8sRUFBRSxFQUFFO0tBQ1osQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLE1BQU0sVUFBVSxrQkFBa0I7SUFDaEMsTUFBTSxTQUFTLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFOUMsT0FBTztRQUNMLEVBQUUsRUFBRSxhQUFhLEVBQUU7UUFDbkIsSUFBSSxFQUFFO1lBQ0osV0FBVyxFQUFFLFNBQVMsQ0FBQyxFQUFFO1NBQzFCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsR0FBRyxFQUFFLFNBQVMsQ0FBQyxFQUFFO1NBQ2xCO1FBQ0QsT0FBTyxFQUFFLEVBQUU7UUFDWCxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUM7S0FDbkIsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZWJTY3JlZW4gfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgUGViUGFnZSwgUGViUGFnZVR5cGUsIFBlYlBhZ2VWYXJpYW50LCBQZWJTaG9wLCBQZWJUZW1wbGF0ZSB9IGZyb20gJy4uL21vZGVscy9jbGllbnQnO1xuaW1wb3J0IHsgUGViRWxlbWVudFR5cGUgfSBmcm9tICcuLi9tb2RlbHMvZWxlbWVudCc7XG5pbXBvcnQgeyBwZWJHZW5lcmF0ZUlkIH0gZnJvbSAnLi4vdXRpbHMvZ2VuZXJhdGUtaWQnO1xuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuZXhwb3J0IGNvbnN0IHBlYkNyZWF0ZUVtcHR5UGFnZSA9IChuYW1lLCB0eXBlOiBQZWJQYWdlVHlwZSA9IFBlYlBhZ2VUeXBlLlJlcGxpY2EsIHZhcmlhbnQgPSBQZWJQYWdlVmFyaWFudC5EZWZhdWx0KTogUGViUGFnZSA9PiB7XG5cbiAgY29uc3QgbGluZSA9IHtcbiAgICBpZDogcGViR2VuZXJhdGVJZCgpLFxuICAgIHR5cGU6IFBlYkVsZW1lbnRUeXBlLkxpbmUsXG4gIH07XG5cbiAgY29uc3QgdGVtcGxhdGU6IFBlYlRlbXBsYXRlID0ge1xuICAgIGlkOiBwZWJHZW5lcmF0ZUlkKCdlbGVtZW50JyksXG4gICAgdHlwZTogUGViRWxlbWVudFR5cGUuRG9jdW1lbnQsXG4gICAgY2hpbGRyZW46IFsnaGVhZGVyJywgJ2JvZHknLCAnZm9vdGVyJ10ubWFwKHNlY3Rpb25OYW1lID0+ICh7XG4gICAgICBpZDogcGViR2VuZXJhdGVJZCgnZWxlbWVudCcpLFxuICAgICAgdHlwZTogUGViRWxlbWVudFR5cGUuU2VjdGlvbixcbiAgICAgIGRhdGE6IHsgbmFtZTogc2VjdGlvbk5hbWUgfSxcbiAgICAgIG1ldGE6IHsgZGVsZXRhYmxlOiBmYWxzZSB9LFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgLi4uKHNlY3Rpb25OYW1lID09PSAnaGVhZGVyJyA/IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogcGViR2VuZXJhdGVJZCgnZWxlbWVudCcpLFxuICAgICAgICAgICAgdHlwZTogUGViRWxlbWVudFR5cGUuQmxvY2ssXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IHBlYkdlbmVyYXRlSWQoJ2VsZW1lbnQnKSxcbiAgICAgICAgICAgICAgICB0eXBlOiBQZWJFbGVtZW50VHlwZS5UZXh0LFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IG5hbWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSA6IFtdKSxcbiAgICAgIF0sXG4gICAgfSkpLFxuICB9O1xuXG4gIGNvbnN0IFtoZWFkZXJJZCwgYm9keUlkLCBmb290ZXJJZF0gPSB0ZW1wbGF0ZS5jaGlsZHJlbi5tYXAoZWwgPT4gZWwuaWQpO1xuICBjb25zdCBoZWFkZXJCbG9ja0lkID0gdGVtcGxhdGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uaWQ7XG4gIGNvbnN0IGJsb2NrQ29sb3IgPSAnIycgKyBOdW1iZXIocmFuZG9tKDAsIDE2ICoqIDYpKS50b1N0cmluZygxNik7XG5cbiAgcmV0dXJuICB7XG4gICAgaWQ6IHBlYkdlbmVyYXRlSWQoJ3BhZ2UnKSxcbiAgICBuYW1lLFxuICAgIHR5cGUsXG4gICAgdmFyaWFudCxcbiAgICBtYXN0ZXI6IG51bGwsXG4gICAgZGF0YToge1xuICAgICAgdXJsOiAnLycsXG4gICAgICBtYXJrOiBudWxsLFxuICAgIH0sXG4gICAgdGVtcGxhdGUsXG4gICAgc3R5bGVzaGVldHM6IHtcbiAgICAgIFtQZWJTY3JlZW4uRGVza3RvcF06IHtcbiAgICAgICAgW2hlYWRlcklkXTogeyBoZWlnaHQ6IDIwMCB9LFxuICAgICAgICBbYm9keUlkXTogeyBoZWlnaHQ6IDYwMCB9LFxuICAgICAgICBbZm9vdGVySWRdOiB7IGhlaWdodDogMjAwIH0sXG4gICAgICAgIFtoZWFkZXJCbG9ja0lkXToge1xuICAgICAgICAgIGhlaWdodDogMTUwLFxuICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBibG9ja0NvbG9yLFxuICAgICAgICB9LFxuICAgICAgICBbbGluZS5pZF06IHtoZWlnaHQ6IDJ9LFxuICAgICAgfSxcbiAgICAgIFtQZWJTY3JlZW4uVGFibGV0XToge1xuICAgICAgICBbaGVhZGVySWRdOiB7IGhlaWdodDogMjAwIH0sXG4gICAgICAgIFtib2R5SWRdOiB7IGhlaWdodDogNjAwIH0sXG4gICAgICAgIFtmb290ZXJJZF06IHsgaGVpZ2h0OiAyMDAgfSxcbiAgICAgICAgW2hlYWRlckJsb2NrSWRdOiB7XG4gICAgICAgICAgaGVpZ2h0OiAxNTAsXG4gICAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJsb2NrQ29sb3IsXG4gICAgICAgIH0sXG4gICAgICAgIFtsaW5lLmlkXToge2hlaWdodDogMn0sXG4gICAgICB9LFxuICAgICAgW1BlYlNjcmVlbi5Nb2JpbGVdOiB7XG4gICAgICAgIFtoZWFkZXJJZF06IHsgaGVpZ2h0OiAyMDAgfSxcbiAgICAgICAgW2JvZHlJZF06IHsgaGVpZ2h0OiA2MDAgfSxcbiAgICAgICAgW2Zvb3RlcklkXTogeyBoZWlnaHQ6IDIwMCB9LFxuICAgICAgICBbaGVhZGVyQmxvY2tJZF06IHtcbiAgICAgICAgICBoZWlnaHQ6IDE1MCxcbiAgICAgICAgICB3aWR0aDogMTUwLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmxvY2tDb2xvcixcbiAgICAgICAgfSxcbiAgICAgICAgW2xpbmUuaWRdOiB7aGVpZ2h0OiAyfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb250ZXh0OiB7fSxcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwZWJDcmVhdGVFbXB0eVNob3AoKTogUGViU2hvcCB7XG4gIGNvbnN0IGZyb250UGFnZSA9IHBlYkNyZWF0ZUVtcHR5UGFnZSgnRnJvbnQnKTtcblxuICByZXR1cm4ge1xuICAgIGlkOiBwZWJHZW5lcmF0ZUlkKCksXG4gICAgZGF0YToge1xuICAgICAgZnJvbnRQYWdlSWQ6IGZyb250UGFnZS5pZCxcbiAgICB9LFxuICAgIHJvdXRpbmc6IHtcbiAgICAgICcvJzogZnJvbnRQYWdlLmlkLFxuICAgIH0sXG4gICAgY29udGV4dDoge30sXG4gICAgcGFnZXM6IFtmcm9udFBhZ2VdLFxuICB9O1xufVxuIl19