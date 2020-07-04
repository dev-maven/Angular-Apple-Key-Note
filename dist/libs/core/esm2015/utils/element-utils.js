import { __rest } from "tslib";
import { isArray, isFunction, merge } from 'lodash-es';
export function pebMapElementDeep(element, handler) {
    const _a = handler(element), { children: children = [] } = _a, elementProps = __rest(_a, ["children"]);
    return Object.assign(Object.assign({}, merge({}, elementProps)), { children: children.map(child => pebMapElementDeep(child, handler)) });
}
export function pebFilterElementDeep(element, handler) {
    var _a, _b;
    const nextChildren = (_a = element.children) === null || _a === void 0 ? void 0 : _a.filter(handler);
    return Object.assign(Object.assign({}, merge({}, element)), { children: (_b = nextChildren) === null || _b === void 0 ? void 0 : _b.map(child => pebFilterElementDeep(child, handler)) });
}
export function pebTraverseElementDeep(element, handler) {
    handler(merge({}, element));
    if (isArray(element.children)) {
        element.children.forEach(el => pebTraverseElementDeep(el, handler));
    }
}
export function pebFindElementParents(document, id) {
    const stack = [{ node: document, i: 0 }];
    while (stack.length) {
        let current = stack[stack.length - 1];
        while (current.i < current.node.children.length) {
            const node = current.node.children[current.i];
            if (node.id === id) {
                return stack
                    .filter(el => el.node.id !== document.id)
                    .map(el => el.node);
            }
            stack.push({ node, i: 0 });
            current.i++;
            current = stack[stack.length - 1];
        }
        stack.pop();
    }
    return null;
}
export function pebFindElementChildren(element, predicate) {
    if (predicate && !isFunction(predicate)) {
        throw new Error('Unsupported selector');
    }
    predicate = predicate || (() => true); // tslint:disable-line
    const result = [];
    pebTraverseElementDeep(element, el => {
        if (predicate(el)) {
            result.push(el);
        }
    });
    return result;
}
export function pebTraverseElementDeepWithParent(element, handler, parentId = null, priority = -1) {
    const nextPriority = parseInt(priority, 10) + 1;
    handler(Object.assign(Object.assign({}, element), { parentId, priority: nextPriority }));
    if (isArray(element.children)) {
        element.children.forEach(el => pebTraverseElementDeepWithParent(el, handler, element.id, nextPriority));
    }
}
export function pebFindElementChildrenWithParent(element, predicate = (() => true)) {
    if (predicate && !isFunction(predicate)) {
        throw new Error('Unsupported selector');
    }
    const result = [];
    pebTraverseElementDeepWithParent(element, el => {
        if (predicate(el)) {
            result.push(el);
        }
    });
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLWNvcmUvIiwic291cmNlcyI6WyJ1dGlscy9lbGVtZW50LXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFLdkQsTUFBTSxVQUFVLGlCQUFpQixDQUMvQixPQUFtQixFQUNuQixPQUF1QztJQUV2QyxNQUFNLHFCQUErRCxFQUEvRCxFQUFFLFFBQVEsRUFBRSxRQUFRLEdBQUcsRUFBRSxPQUFzQyxFQUFwQyx1Q0FBb0MsQ0FBQztJQUV0RSx1Q0FDSyxLQUFLLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxLQUMxQixRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUNsRTtBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLE9BQW1CLEVBQ25CLE9BQW9DOztJQUVwQyxNQUFNLFlBQVksU0FBRyxPQUFPLENBQUMsUUFBUSwwQ0FBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFdkQsdUNBQ0ssS0FBSyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FDckIsUUFBUSxRQUFFLFlBQVksMENBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUN6RTtBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsc0JBQXNCLENBQ3BDLE9BQW1CLEVBQ25CLE9BQWdDO0lBRWhDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFNUIsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzdCLE9BQU8sQ0FBQyxR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Q0FBQyxJQUFJLENBQUM7SUFFdEQsSUFBSSxTQUFTLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFDdkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0tBQ3pDO0lBRUQsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBRWxCLGdDQUFnQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRTtRQUM3QyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNBcnJheSwgaXNGdW5jdGlvbiwgbWVyZ2UgfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG5pbXBvcnQgeyBQZWJUZW1wbGF0ZSB9IGZyb20gJy4uL21vZGVscy9jbGllbnQnO1xuaW1wb3J0IHsgUGViRWxlbWVudCwgUGViRWxlbWVudElkLCBQZWJFbGVtZW50V2l0aFBhcmVudCB9IGZyb20gJy4uL21vZGVscy9lbGVtZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIHBlYk1hcEVsZW1lbnREZWVwKFxuICBlbGVtZW50OiBQZWJFbGVtZW50LFxuICBoYW5kbGVyOiAoZWw6IFBlYkVsZW1lbnQpID0+IFBlYkVsZW1lbnQsXG4pOiBQZWJFbGVtZW50IHtcbiAgY29uc3QgeyBjaGlsZHJlbjogY2hpbGRyZW4gPSBbXSwgLi4uZWxlbWVudFByb3BzIH0gPSBoYW5kbGVyKGVsZW1lbnQpO1xuXG4gIHJldHVybiB7XG4gICAgLi4ubWVyZ2Uoe30sIGVsZW1lbnRQcm9wcyksXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLm1hcChjaGlsZCA9PiBwZWJNYXBFbGVtZW50RGVlcChjaGlsZCwgaGFuZGxlcikpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGViRmlsdGVyRWxlbWVudERlZXAoXG4gIGVsZW1lbnQ6IFBlYkVsZW1lbnQsXG4gIGhhbmRsZXI6IChlbDogUGViRWxlbWVudCkgPT4gYm9vbGVhbixcbik6IFBlYlRlbXBsYXRlIHwgUGViRWxlbWVudCB7XG4gIGNvbnN0IG5leHRDaGlsZHJlbiA9IGVsZW1lbnQuY2hpbGRyZW4/LmZpbHRlcihoYW5kbGVyKTtcblxuICByZXR1cm4ge1xuICAgIC4uLm1lcmdlKHt9LCBlbGVtZW50KSxcbiAgICBjaGlsZHJlbjogbmV4dENoaWxkcmVuPy5tYXAoY2hpbGQgPT4gcGViRmlsdGVyRWxlbWVudERlZXAoY2hpbGQsIGhhbmRsZXIpKSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlYlRyYXZlcnNlRWxlbWVudERlZXAoXG4gIGVsZW1lbnQ6IFBlYkVsZW1lbnQsXG4gIGhhbmRsZXI6IChlbDogUGViRWxlbWVudCkgPT4gYW55LFxuKTogdm9pZCB7XG4gIGhhbmRsZXIobWVyZ2Uoe30sIGVsZW1lbnQpKTtcblxuICBpZiAoaXNBcnJheShlbGVtZW50LmNoaWxkcmVuKSkge1xuICAgIGVsZW1lbnQuY2hpbGRyZW4uZm9yRWFjaChlbCA9PiBwZWJUcmF2ZXJzZUVsZW1lbnREZWVwKGVsLCBoYW5kbGVyKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlYkZpbmRFbGVtZW50UGFyZW50cyhkb2N1bWVudDogUGViRWxlbWVudCwgaWQ6IFBlYkVsZW1lbnRJZCk6IFBlYkVsZW1lbnRbXSB7XG4gIGNvbnN0IHN0YWNrID0gW3sgbm9kZTogZG9jdW1lbnQsIGk6IDAgfV07XG4gIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICBsZXQgY3VycmVudCA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgIHdoaWxlIChjdXJyZW50LmkgPCBjdXJyZW50Lm5vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICBjb25zdCBub2RlID0gY3VycmVudC5ub2RlLmNoaWxkcmVuW2N1cnJlbnQuaV07XG5cbiAgICAgIGlmIChub2RlLmlkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gc3RhY2tcbiAgICAgICAgICAuZmlsdGVyKGVsID0+IGVsLm5vZGUuaWQgIT09IGRvY3VtZW50LmlkKVxuICAgICAgICAgIC5tYXAoZWwgPT4gZWwubm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHN0YWNrLnB1c2goeyBub2RlLCBpOiAwIH0pO1xuICAgICAgY3VycmVudC5pKys7XG4gICAgICBjdXJyZW50ID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgfVxuXG4gICAgc3RhY2sucG9wKCk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlYkZpbmRFbGVtZW50Q2hpbGRyZW4oXG4gIGVsZW1lbnQ6IFBlYkVsZW1lbnQsXG4gIHByZWRpY2F0ZT86ICgoZTogUGViRWxlbWVudCkgPT4gYm9vbGVhbiksXG4pOiBQZWJFbGVtZW50W10ge1xuICBpZiAocHJlZGljYXRlICYmICFpc0Z1bmN0aW9uKHByZWRpY2F0ZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIHNlbGVjdG9yJyk7XG4gIH1cblxuICBwcmVkaWNhdGUgPSBwcmVkaWNhdGUgfHwgKCgpID0+IHRydWUpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgcGViVHJhdmVyc2VFbGVtZW50RGVlcChlbGVtZW50LCBlbCA9PiB7XG4gICAgaWYgKHByZWRpY2F0ZShlbCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGVsKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZWJUcmF2ZXJzZUVsZW1lbnREZWVwV2l0aFBhcmVudChcbiAgZWxlbWVudDogUGViRWxlbWVudCxcbiAgaGFuZGxlcjogKGVsOiBhbnkpID0+IGFueSxcbiAgcGFyZW50SWQ6IG51bGwgfCBzdHJpbmcgPSBudWxsLFxuICBwcmlvcml0eTogYW55ID0gLTEsXG4pOiB2b2lkIHtcbiAgY29uc3QgbmV4dFByaW9yaXR5ID0gcGFyc2VJbnQocHJpb3JpdHksIDEwKSArIDE7XG4gIGhhbmRsZXIoeyAuLi5lbGVtZW50LCBwYXJlbnRJZCwgcHJpb3JpdHk6IG5leHRQcmlvcml0eSB9KTtcblxuICBpZiAoaXNBcnJheShlbGVtZW50LmNoaWxkcmVuKSkge1xuICAgIGVsZW1lbnQuY2hpbGRyZW4uZm9yRWFjaChlbCA9PiBwZWJUcmF2ZXJzZUVsZW1lbnREZWVwV2l0aFBhcmVudChlbCwgaGFuZGxlciwgZWxlbWVudC5pZCwgbmV4dFByaW9yaXR5KSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlYkZpbmRFbGVtZW50Q2hpbGRyZW5XaXRoUGFyZW50KFxuICBlbGVtZW50OiBQZWJFbGVtZW50LFxuICBwcmVkaWNhdGU6ICgoZTogUGViRWxlbWVudCkgPT4gYm9vbGVhbikgPSAoKCkgPT4gdHJ1ZSksXG4pOiBQZWJFbGVtZW50V2l0aFBhcmVudFtdIHtcbiAgaWYgKHByZWRpY2F0ZSAmJiAhaXNGdW5jdGlvbihwcmVkaWNhdGUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBzZWxlY3RvcicpO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgcGViVHJhdmVyc2VFbGVtZW50RGVlcFdpdGhQYXJlbnQoZWxlbWVudCwgZWwgPT4ge1xuICAgIGlmIChwcmVkaWNhdGUoZWwpKSB7XG4gICAgICByZXN1bHQucHVzaChlbCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuIl19