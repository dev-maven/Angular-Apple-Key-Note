export class BaseTransform {
    execCommand(command, value) {
        document.execCommand(command, false, value);
    }
    get isSelectionExist() {
        return window.getSelection().type.toLowerCase() !== 'none';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS50cmFuc2Zvcm0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci10ZXh0LWVkaXRvci8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RyYW5zZm9ybXMvYmFzZS50cmFuc2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFnQixhQUFhO0lBRWpDLFdBQVcsQ0FBQyxPQUFvQixFQUFFLEtBQWM7UUFDOUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxJQUFjLGdCQUFnQjtRQUM1QixPQUFPLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssTUFBTSxDQUFDO0lBQzdELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4ZWNDb21tYW5kIH0gZnJvbSAnLi4vLi4vdGV4dC1lZGl0b3IuaW50ZXJmYWNlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VUcmFuc2Zvcm0ge1xuXG4gIGV4ZWNDb21tYW5kKGNvbW1hbmQ6IEV4ZWNDb21tYW5kLCB2YWx1ZT86IHN0cmluZyk6IHZvaWQge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKGNvbW1hbmQsIGZhbHNlLCB2YWx1ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGlzU2VsZWN0aW9uRXhpc3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50eXBlLnRvTG93ZXJDYXNlKCkgIT09ICdub25lJztcbiAgfVxufVxuIl19