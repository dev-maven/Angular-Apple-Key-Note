var BaseTransform = /** @class */ (function () {
    function BaseTransform() {
    }
    BaseTransform.prototype.execCommand = function (command, value) {
        document.execCommand(command, false, value);
    };
    Object.defineProperty(BaseTransform.prototype, "isSelectionExist", {
        get: function () {
            return window.getSelection().type.toLowerCase() !== 'none';
        },
        enumerable: true,
        configurable: true
    });
    return BaseTransform;
}());
export { BaseTransform };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS50cmFuc2Zvcm0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci10ZXh0LWVkaXRvci8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RyYW5zZm9ybXMvYmFzZS50cmFuc2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUFBQTtJQVNBLENBQUM7SUFQQyxtQ0FBVyxHQUFYLFVBQVksT0FBb0IsRUFBRSxLQUFjO1FBQzlDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsc0JBQWMsMkNBQWdCO2FBQTlCO1lBQ0UsT0FBTyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLE1BQU0sQ0FBQztRQUM3RCxDQUFDOzs7T0FBQTtJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQVRELElBU0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeGVjQ29tbWFuZCB9IGZyb20gJy4uLy4uL3RleHQtZWRpdG9yLmludGVyZmFjZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlVHJhbnNmb3JtIHtcblxuICBleGVjQ29tbWFuZChjb21tYW5kOiBFeGVjQ29tbWFuZCwgdmFsdWU/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChjb21tYW5kLCBmYWxzZSwgdmFsdWUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBpc1NlbGVjdGlvbkV4aXN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudHlwZS50b0xvd2VyQ2FzZSgpICE9PSAnbm9uZSc7XG4gIH1cbn1cbiJdfQ==