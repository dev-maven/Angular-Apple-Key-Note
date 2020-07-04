import { getRange } from './shadow-dom-selection.helper';
export var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var SelectionHelper = /** @class */ (function () {
    function SelectionHelper() {
    }
    SelectionHelper.prototype.get = function (container) {
        if (!container) {
            document.getSelection().removeAllRanges();
            return null;
        }
        var canvas = document.querySelector('pe-editor-canvas');
        var range = getRange(canvas.shadowRoot);
        if (!range) {
            return null;
        }
        var preSelectionRange = range.cloneRange();
        preSelectionRange.selectNodeContents(container);
        preSelectionRange.setEnd(range.startContainer, range.startOffset);
        var start = preSelectionRange.toString().length;
        return {
            start: start,
            end: start + range.toString().length,
            range: range,
            container: container,
            parentElement: range.endContainer.parentElement,
        };
    };
    SelectionHelper.prototype.restore = function (savedSelection) {
        if (!savedSelection) {
            return;
        }
        var doc = savedSelection.container.ownerDocument;
        var win = doc.defaultView;
        var range = doc.createRange();
        range.setStart(savedSelection.container, 0);
        range.collapse(true);
        var nodeStack = [savedSelection.container];
        var node;
        var foundStart = false;
        var stop = false;
        var charIndex = 0;
        while (!stop && (node = nodeStack.pop())) {
            if (node.nodeType == 3) {
                var nextCharIndex = charIndex + node.length;
                if (!foundStart &&
                    savedSelection.start >= charIndex &&
                    savedSelection.start <= nextCharIndex) {
                    range.setStart(node, savedSelection.start - charIndex);
                    foundStart = true;
                }
                if (foundStart &&
                    savedSelection.end >= charIndex &&
                    savedSelection.end <= nextCharIndex) {
                    range.setEnd(node, savedSelection.end - charIndex);
                    stop = true;
                }
                charIndex = nextCharIndex;
            }
            else {
                var i = node.childNodes.length;
                while (i--) {
                    nodeStack.push(node.childNodes[i]);
                }
            }
        }
        var selection = win.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    };
    SelectionHelper.prototype.findParentTag = function (selection, tagName, className, searchDepth) {
        if (searchDepth === void 0) { searchDepth = 10; }
        var parentTag = null;
        if (!selection || !selection.anchorNode || !selection.focusNode) {
            return null;
        }
        var boundNodes = [
            selection.anchorNode,
            selection.focusNode,
        ];
        boundNodes.forEach(function (parent) {
            var searchDepthIterable = searchDepth;
            while (searchDepthIterable > 0 && parent.parentNode) {
                if (!tagName || parent.tagName === tagName) {
                    parentTag = parent;
                    if (className &&
                        parent.classList &&
                        !parent.classList.contains(className)) {
                        parentTag = null;
                    }
                    if (parentTag) {
                        break;
                    }
                }
                parent = parent.parentNode;
                searchDepthIterable--;
            }
        });
        return parentTag;
    };
    return SelectionHelper;
}());
export { SelectionHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXRleHQtZWRpdG9yLyIsInNvdXJjZXMiOlsiaGVscGVycy9zZWxlY3Rpb24uaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV6RCxNQUFNLENBQUMsSUFBTSxRQUFRLEdBQUcsZ0NBQWdDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7SUFDaEYsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFFLE1BQWMsQ0FBQyxRQUFRLENBQUM7QUFFNUU7SUFBQTtJQTJIQSxDQUFDO0lBMUhDLDZCQUFHLEdBQUgsVUFBSSxTQUFrQjtRQUNwQixJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBRTFDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFMUQsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQU0saUJBQWlCLEdBQVUsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BELGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRSxJQUFNLEtBQUssR0FBVyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFFMUQsT0FBTztZQUNMLEtBQUss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VUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU07WUFDdkIsSUFBSSxtQkFBbUIsR0FBRyxXQUFXLENBQUM7WUFFdEMsT0FBTyxtQkFBbUIsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDbkQsSUFBSSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLE9BQU8sRUFBRTtvQkFDMUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztvQkFFbkIsSUFDRSxTQUFTO3dCQUNULE1BQU0sQ0FBQyxTQUFTO3dCQUNoQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUNyQzt3QkFDQSxTQUFTLEdBQUcsSUFBSSxDQUFDO3FCQUNsQjtvQkFFRCxJQUFJLFNBQVMsRUFBRTt3QkFDYixNQUFNO3FCQUNQO2lCQUNGO2dCQUVELE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBeUIsQ0FBQztnQkFDMUMsbUJBQW1CLEVBQUUsQ0FBQzthQUN2QjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQTNIRCxJQTJIQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVkaXRvclNlbGVjdGlvbiB9IGZyb20gJy4uL3RleHQtZWRpdG9yLmludGVyZmFjZSc7XG5pbXBvcnQgeyBnZXRSYW5nZSB9IGZyb20gJy4vc2hhZG93LWRvbS1zZWxlY3Rpb24uaGVscGVyJztcblxuZXhwb3J0IGNvbnN0IGlzU2FmYXJpID0gL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSB8fFxuICAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhKHdpbmRvdyBhcyBhbnkpLk1TU3RyZWFtO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uSGVscGVyIHtcbiAgZ2V0KGNvbnRhaW5lcjogRWxlbWVudCk6IEVkaXRvclNlbGVjdGlvbiB7XG4gICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgIGRvY3VtZW50LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwZS1lZGl0b3ItY2FudmFzJyk7XG5cbiAgICBjb25zdCByYW5nZSA9IGdldFJhbmdlKGNhbnZhcy5zaGFkb3dSb290KTtcblxuICAgIGlmICghcmFuZ2UpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHByZVNlbGVjdGlvblJhbmdlOiBSYW5nZSA9IHJhbmdlLmNsb25lUmFuZ2UoKTtcbiAgICBwcmVTZWxlY3Rpb25SYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoY29udGFpbmVyKTtcbiAgICBwcmVTZWxlY3Rpb25SYW5nZS5zZXRFbmQocmFuZ2Uuc3RhcnRDb250YWluZXIsIHJhbmdlLnN0YXJ0T2Zmc2V0KTtcbiAgICBjb25zdCBzdGFydDogbnVtYmVyID0gcHJlU2VsZWN0aW9uUmFuZ2UudG9TdHJpbmcoKS5sZW5ndGg7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnQsXG4gICAgICBlbmQ6IHN0YXJ0ICsgcmFuZ2UudG9TdHJpbmcoKS5sZW5ndGgsXG4gICAgICByYW5nZSxcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIHBhcmVudEVsZW1lbnQ6IHJhbmdlLmVuZENvbnRhaW5lci5wYXJlbnRFbGVtZW50LFxuICAgIH07XG4gIH1cblxuICByZXN0b3JlKHNhdmVkU2VsZWN0aW9uOiBFZGl0b3JTZWxlY3Rpb24pOiB2b2lkIHtcbiAgICBpZiAoIXNhdmVkU2VsZWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZG9jOiBEb2N1bWVudCA9IHNhdmVkU2VsZWN0aW9uLmNvbnRhaW5lci5vd25lckRvY3VtZW50O1xuICAgIGNvbnN0IHdpbjogV2luZG93ID0gZG9jLmRlZmF1bHRWaWV3O1xuICAgIGNvbnN0IHJhbmdlOiBSYW5nZSA9IGRvYy5jcmVhdGVSYW5nZSgpO1xuICAgIHJhbmdlLnNldFN0YXJ0KHNhdmVkU2VsZWN0aW9uLmNvbnRhaW5lciwgMCk7XG4gICAgcmFuZ2UuY29sbGFwc2UodHJ1ZSk7XG4gICAgY29uc3Qgbm9kZVN0YWNrOiBFbGVtZW50W10gPSBbc2F2ZWRTZWxlY3Rpb24uY29udGFpbmVyXTtcbiAgICBsZXQgbm9kZTtcbiAgICBsZXQgZm91bmRTdGFydCA9IGZhbHNlO1xuICAgIGxldCBzdG9wID0gZmFsc2U7XG4gICAgbGV0IGNoYXJJbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoIXN0b3AgJiYgKG5vZGUgPSBub2RlU3RhY2sucG9wKCkpKSB7XG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSAzKSB7XG4gICAgICAgIGNvbnN0IG5leHRDaGFySW5kZXggPSBjaGFySW5kZXggKyBub2RlLmxlbmd0aDtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFmb3VuZFN0YXJ0ICYmXG4gICAgICAgICAgc2F2ZWRTZWxlY3Rpb24uc3RhcnQgPj0gY2hhckluZGV4ICYmXG4gICAgICAgICAgc2F2ZWRTZWxlY3Rpb24uc3RhcnQgPD0gbmV4dENoYXJJbmRleFxuICAgICAgICApIHtcbiAgICAgICAgICByYW5nZS5zZXRTdGFydChub2RlLCBzYXZlZFNlbGVjdGlvbi5zdGFydCAtIGNoYXJJbmRleCk7XG4gICAgICAgICAgZm91bmRTdGFydCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGZvdW5kU3RhcnQgJiZcbiAgICAgICAgICBzYXZlZFNlbGVjdGlvbi5lbmQgPj0gY2hhckluZGV4ICYmXG4gICAgICAgICAgc2F2ZWRTZWxlY3Rpb24uZW5kIDw9IG5leHRDaGFySW5kZXhcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmFuZ2Uuc2V0RW5kKG5vZGUsIHNhdmVkU2VsZWN0aW9uLmVuZCAtIGNoYXJJbmRleCk7XG4gICAgICAgICAgc3RvcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2hhckluZGV4ID0gbmV4dENoYXJJbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpID0gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIG5vZGVTdGFjay5wdXNoKG5vZGUuY2hpbGROb2Rlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW4uZ2V0U2VsZWN0aW9uKCk7XG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gIH1cblxuICBmaW5kUGFyZW50VGFnKFxuICAgIHNlbGVjdGlvbjogU2VsZWN0aW9uLFxuICAgIHRhZ05hbWU/OiBzdHJpbmcsXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxuICAgIHNlYXJjaERlcHRoID0gMTAsIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6dHlwZWRlZlxuICApOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgIGxldCBwYXJlbnRUYWcgPSBudWxsO1xuXG4gICAgaWYgKCFzZWxlY3Rpb24gfHwgIXNlbGVjdGlvbi5hbmNob3JOb2RlIHx8ICFzZWxlY3Rpb24uZm9jdXNOb2RlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBib3VuZE5vZGVzID0gW1xuICAgICAgc2VsZWN0aW9uLmFuY2hvck5vZGUgYXMgSFRNTEVsZW1lbnQsXG4gICAgICBzZWxlY3Rpb24uZm9jdXNOb2RlIGFzIEhUTUxFbGVtZW50LFxuICAgIF07XG5cbiAgICBib3VuZE5vZGVzLmZvckVhY2gocGFyZW50ID0+IHtcbiAgICAgIGxldCBzZWFyY2hEZXB0aEl0ZXJhYmxlID0gc2VhcmNoRGVwdGg7XG5cbiAgICAgIHdoaWxlIChzZWFyY2hEZXB0aEl0ZXJhYmxlID4gMCAmJiBwYXJlbnQucGFyZW50Tm9kZSkge1xuICAgICAgICBpZiAoIXRhZ05hbWUgfHwgcGFyZW50LnRhZ05hbWUgPT09IHRhZ05hbWUpIHtcbiAgICAgICAgICBwYXJlbnRUYWcgPSBwYXJlbnQ7XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjbGFzc05hbWUgJiZcbiAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QgJiZcbiAgICAgICAgICAgICFwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHBhcmVudFRhZyA9IG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHBhcmVudFRhZykge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIHNlYXJjaERlcHRoSXRlcmFibGUtLTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwYXJlbnRUYWc7XG4gIH1cbn1cbiJdfQ==