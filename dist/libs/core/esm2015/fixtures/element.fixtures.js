import { pebGenerateId } from '../utils/generate-id';
// TODO: Delete after 25.04 if not used
export const pebCreateElementKit = (elementPayload, styles, contextItem) => {
    const element = Object.assign(Object.assign({}, elementPayload), { id: pebGenerateId() });
    return {
        element,
        styles,
        contextSchema: {
            [element.id]: contextItem,
        },
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5maXh0dXJlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLWNvcmUvIiwic291cmNlcyI6WyJmaXh0dXJlcy9lbGVtZW50LmZpeHR1cmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVVyRCx1Q0FBdUM7QUFDdkMsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsQ0FDakMsY0FBOEIsRUFDOUIsTUFBK0MsRUFDL0MsV0FBK0IsRUFDaEIsRUFBRTtJQUNqQixNQUFNLE9BQU8sbUNBQ1IsY0FBYyxLQUNqQixFQUFFLEVBQUUsYUFBYSxFQUFFLEdBQ3BCLENBQUM7SUFFRixPQUFPO1FBQ0wsT0FBTztRQUNQLE1BQU07UUFDTixhQUFhLEVBQUU7WUFDYixDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxXQUFXO1NBQzFCO0tBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRleHRTY2hlbWFJdGVtLCBQZWJDb250ZXh0U2NoZW1hLCBQZWJFbGVtZW50U3R5bGVzIH0gZnJvbSAnLi4vbW9kZWxzL2NsaWVudCc7XG5pbXBvcnQgeyBQZWJFbGVtZW50LCBQZWJFbGVtZW50VHlwZSB9IGZyb20gJy4uL21vZGVscy9lbGVtZW50JztcbmltcG9ydCB7IHBlYkdlbmVyYXRlSWQgfSBmcm9tICcuLi91dGlscy9nZW5lcmF0ZS1pZCc7XG5cbnR5cGUgRWxlbWVudFBheWxvYWQgPSBQYXJ0aWFsPFBlYkVsZW1lbnQ+ICYgKHsgdHlwZTogUGViRWxlbWVudFR5cGUgfSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGViRWxlbWVudEtpdCB7XG4gIGVsZW1lbnQ6IFBlYkVsZW1lbnQ7XG4gIHN0eWxlczogeyBbc2NyZWVuSWQ6IHN0cmluZ106IFBlYkVsZW1lbnRTdHlsZXMgfTtcbiAgY29udGV4dFNjaGVtYTogUGViQ29udGV4dFNjaGVtYTtcbn1cblxuLy8gVE9ETzogRGVsZXRlIGFmdGVyIDI1LjA0IGlmIG5vdCB1c2VkXG5leHBvcnQgY29uc3QgcGViQ3JlYXRlRWxlbWVudEtpdCA9IChcbiAgZWxlbWVudFBheWxvYWQ6IEVsZW1lbnRQYXlsb2FkLFxuICBzdHlsZXM/OiB7IFtzY3JlZW46IHN0cmluZ106IFBlYkVsZW1lbnRTdHlsZXMgfSxcbiAgY29udGV4dEl0ZW0/OiBDb250ZXh0U2NoZW1hSXRlbSxcbik6IFBlYkVsZW1lbnRLaXQgPT4ge1xuICBjb25zdCBlbGVtZW50ID0ge1xuICAgIC4uLmVsZW1lbnRQYXlsb2FkLFxuICAgIGlkOiBwZWJHZW5lcmF0ZUlkKCksXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBlbGVtZW50LFxuICAgIHN0eWxlcyxcbiAgICBjb250ZXh0U2NoZW1hOiB7XG4gICAgICBbZWxlbWVudC5pZF06IGNvbnRleHRJdGVtLFxuICAgIH0sXG4gIH07XG59O1xuIl19