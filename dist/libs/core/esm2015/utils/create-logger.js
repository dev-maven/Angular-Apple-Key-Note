const root = (typeof self === 'object' && self.self === self && self) ||
    (typeof global === 'object' && global.global === global && global) ||
    this;
export function pebCreateLogger(namespace) {
    const acceptableNss = [
        ...namespace
            .split(':')
            .map((el, i, all) => [...all.slice(0, i), '*'].join(':')),
        namespace,
    ];
    if (root.PEB_DEBUG
        && root.PEB_DEBUG.split(',').find(eNs => acceptableNss.includes(eNs))) {
        return (...input) => {
            // tslint:disable-next-line:no-console
            console.log(`%c ${namespace} `, 'background: #3078a8; color: white', ...input);
            return [...input];
        };
    }
    return (...input) => [...input];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLWNvcmUvIiwic291cmNlcyI6WyJ1dGlscy9jcmVhdGUtbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sSUFBSSxHQUFRLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQztJQUN4RSxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLE1BQU0sSUFBSSxNQUFNLENBQUM7SUFDbEUsSUFBSSxDQUFDO0FBRVAsTUFBTSxVQUFVLGVBQWUsQ0FBQyxTQUFpQjtJQUMvQyxNQUFNLGFBQWEsR0FBRztRQUNwQixHQUFHLFNBQVM7YUFDVCxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1YsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUNsQixDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUNwQztRQUNILFNBQVM7S0FDVixDQUFDO0lBRUYsSUFBSSxJQUFJLENBQUMsU0FBUztXQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDL0IsR0FBRyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUNuQyxFQUNEO1FBQ0EsT0FBTyxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFDbEIsc0NBQXNDO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQ1QsTUFBTSxTQUFTLEdBQUcsRUFBRSxtQ0FBbUMsRUFDdkQsR0FBRyxLQUFLLENBQ1QsQ0FBQztZQUVGLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQztLQUNIO0lBRUQsT0FBTyxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDbEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvb3Q6IGFueSA9ICh0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCcgJiYgc2VsZi5zZWxmID09PSBzZWxmICYmIHNlbGYpIHx8XG4gICh0eXBlb2YgZ2xvYmFsID09PSAnb2JqZWN0JyAmJiBnbG9iYWwuZ2xvYmFsID09PSBnbG9iYWwgJiYgZ2xvYmFsKSB8fFxuICB0aGlzO1xuXG5leHBvcnQgZnVuY3Rpb24gcGViQ3JlYXRlTG9nZ2VyKG5hbWVzcGFjZTogc3RyaW5nKTogKC4uLmE6IHVua25vd25bXSkgPT4gdW5rbm93bltdIHtcbiAgY29uc3QgYWNjZXB0YWJsZU5zcyA9IFtcbiAgICAuLi5uYW1lc3BhY2VcbiAgICAgIC5zcGxpdCgnOicpXG4gICAgICAubWFwKChlbCwgaSwgYWxsKSA9PlxuICAgICAgICBbLi4uYWxsLnNsaWNlKDAsIGkpLCAnKiddLmpvaW4oJzonKSxcbiAgICAgICksXG4gICAgbmFtZXNwYWNlLFxuICBdO1xuXG4gIGlmIChyb290LlBFQl9ERUJVR1xuICAgICYmIHJvb3QuUEVCX0RFQlVHLnNwbGl0KCcsJykuZmluZChcbiAgICAgIGVOcyA9PiBhY2NlcHRhYmxlTnNzLmluY2x1ZGVzKGVOcyksXG4gICAgKVxuICApIHtcbiAgICByZXR1cm4gKC4uLmlucHV0KSA9PiB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGAlYyAke25hbWVzcGFjZX0gYCwgJ2JhY2tncm91bmQ6ICMzMDc4YTg7IGNvbG9yOiB3aGl0ZScsXG4gICAgICAgIC4uLmlucHV0LFxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIFsuLi5pbnB1dF07XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiAoLi4uaW5wdXQpID0+IFsuLi5pbnB1dF07XG59XG4iXX0=