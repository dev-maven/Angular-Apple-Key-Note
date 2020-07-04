import { __read, __spread } from "tslib";
var root = (typeof self === 'object' && self.self === self && self) ||
    (typeof global === 'object' && global.global === global && global) ||
    this;
export function pebCreateLogger(namespace) {
    var acceptableNss = __spread(namespace
        .split(':')
        .map(function (el, i, all) {
        return __spread(all.slice(0, i), ['*']).join(':');
    }), [
        namespace,
    ]);
    if (root.PEB_DEBUG
        && root.PEB_DEBUG.split(',').find(function (eNs) { return acceptableNss.includes(eNs); })) {
        return function () {
            var input = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                input[_i] = arguments[_i];
            }
            // tslint:disable-next-line:no-console
            console.log.apply(console, __spread(["%c " + namespace + " ", 'background: #3078a8; color: white'], input));
            return __spread(input);
        };
    }
    return function () {
        var input = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            input[_i] = arguments[_i];
        }
        return __spread(input);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLWNvcmUvIiwic291cmNlcyI6WyJ1dGlscy9jcmVhdGUtbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFNLElBQUksR0FBUSxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUM7SUFDeEUsQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksTUFBTSxDQUFDO0lBQ2xFLElBQUksQ0FBQztBQUVQLE1BQU0sVUFBVSxlQUFlLENBQUMsU0FBaUI7SUFDL0MsSUFBTSxhQUFhLFlBQ2QsU0FBUztTQUNULEtBQUssQ0FBQyxHQUFHLENBQUM7U0FDVixHQUFHLENBQUMsVUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUc7UUFDZCxPQUFBLFNBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUUsR0FBRyxHQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7SUFBbkMsQ0FBbUMsQ0FDcEM7UUFDSCxTQUFTO01BQ1YsQ0FBQztJQUVGLElBQUksSUFBSSxDQUFDLFNBQVM7V0FDYixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQy9CLFVBQUEsR0FBRyxJQUFJLE9BQUEsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBM0IsQ0FBMkIsQ0FDbkMsRUFDRDtRQUNBLE9BQU87WUFBQyxlQUFRO2lCQUFSLFVBQVEsRUFBUixxQkFBUSxFQUFSLElBQVE7Z0JBQVIsMEJBQVE7O1lBQ2Qsc0NBQXNDO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLE9BQVgsT0FBTyxZQUNMLFFBQU0sU0FBUyxNQUFHLEVBQUUsbUNBQW1DLEdBQ3BELEtBQUssR0FDUjtZQUVGLGdCQUFXLEtBQUssRUFBRTtRQUNwQixDQUFDLENBQUM7S0FDSDtJQUVELE9BQU87UUFBQyxlQUFRO2FBQVIsVUFBUSxFQUFSLHFCQUFRLEVBQVIsSUFBUTtZQUFSLDBCQUFROztRQUFLLGdCQUFJLEtBQUs7SUFBVCxDQUFVLENBQUM7QUFDbEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvb3Q6IGFueSA9ICh0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCcgJiYgc2VsZi5zZWxmID09PSBzZWxmICYmIHNlbGYpIHx8XG4gICh0eXBlb2YgZ2xvYmFsID09PSAnb2JqZWN0JyAmJiBnbG9iYWwuZ2xvYmFsID09PSBnbG9iYWwgJiYgZ2xvYmFsKSB8fFxuICB0aGlzO1xuXG5leHBvcnQgZnVuY3Rpb24gcGViQ3JlYXRlTG9nZ2VyKG5hbWVzcGFjZTogc3RyaW5nKTogKC4uLmE6IHVua25vd25bXSkgPT4gdW5rbm93bltdIHtcbiAgY29uc3QgYWNjZXB0YWJsZU5zcyA9IFtcbiAgICAuLi5uYW1lc3BhY2VcbiAgICAgIC5zcGxpdCgnOicpXG4gICAgICAubWFwKChlbCwgaSwgYWxsKSA9PlxuICAgICAgICBbLi4uYWxsLnNsaWNlKDAsIGkpLCAnKiddLmpvaW4oJzonKSxcbiAgICAgICksXG4gICAgbmFtZXNwYWNlLFxuICBdO1xuXG4gIGlmIChyb290LlBFQl9ERUJVR1xuICAgICYmIHJvb3QuUEVCX0RFQlVHLnNwbGl0KCcsJykuZmluZChcbiAgICAgIGVOcyA9PiBhY2NlcHRhYmxlTnNzLmluY2x1ZGVzKGVOcyksXG4gICAgKVxuICApIHtcbiAgICByZXR1cm4gKC4uLmlucHV0KSA9PiB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGAlYyAke25hbWVzcGFjZX0gYCwgJ2JhY2tncm91bmQ6ICMzMDc4YTg7IGNvbG9yOiB3aGl0ZScsXG4gICAgICAgIC4uLmlucHV0LFxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIFsuLi5pbnB1dF07XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiAoLi4uaW5wdXQpID0+IFsuLi5pbnB1dF07XG59XG4iXX0=