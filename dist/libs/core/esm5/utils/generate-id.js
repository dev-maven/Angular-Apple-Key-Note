import { random } from 'lodash-es';
import { v4 as uuid } from 'uuid';
// This will allow us to detect global object both in browser and in backend
// so in sandbox we could generate more readable ids and at the same time use
// normal ones in production
var root = (typeof self === 'object' && self.self === self && self) ||
    (typeof global === 'object' && global.global === global && global) ||
    this;
// const initialNamespaces = localStorage.getItem('peb-ids');
// const idsNamespaces: {
//   [ns: string]: number,
// } = initialNamespaces ? JSON.parse(initialNamespaces) : {};
export function pebGenerateId(ns) {
    // if (root.PEB_CUSTOM_IDS && ns) {
    //   if (!(ns in idsNamespaces)) {
    //     idsNamespaces[ns] = 0;
    //   }
    //   idsNamespaces[ns]++;
    //   localStorage.setItem('peb-ids', JSON.stringify(idsNamespaces));
    //   return `${ns}-${idsNamespaces[ns]}`;
    // }
    if (root.PEB_CUSTOM_IDS) {
        var base = 36;
        return Number(random(0, Math.pow(base, 5) - 1)).toString(base);
    }
    return uuid();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGUtaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci1jb3JlLyIsInNvdXJjZXMiOlsidXRpbHMvZ2VuZXJhdGUtaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNuQyxPQUFPLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyw0RUFBNEU7QUFDNUUsNkVBQTZFO0FBQzdFLDRCQUE0QjtBQUM1QixJQUFNLElBQUksR0FBUSxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUM7SUFDeEUsQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksTUFBTSxDQUFDO0lBQ2xFLElBQUksQ0FBQztBQUVQLDZEQUE2RDtBQUU3RCx5QkFBeUI7QUFDekIsMEJBQTBCO0FBQzFCLDhEQUE4RDtBQUU5RCxNQUFNLFVBQVUsYUFBYSxDQUFDLEVBQVc7SUFDdkMsbUNBQW1DO0lBQ25DLGtDQUFrQztJQUNsQyw2QkFBNkI7SUFDN0IsTUFBTTtJQUVOLHlCQUF5QjtJQUV6QixvRUFBb0U7SUFFcEUseUNBQXlDO0lBQ3pDLElBQUk7SUFFSixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFDdkIsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRWhCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsU0FBQSxJQUFJLEVBQUksQ0FBQyxDQUFBLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDeEQ7SUFFRCxPQUFPLElBQUksRUFBRSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByYW5kb20gfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuXG4vLyBUaGlzIHdpbGwgYWxsb3cgdXMgdG8gZGV0ZWN0IGdsb2JhbCBvYmplY3QgYm90aCBpbiBicm93c2VyIGFuZCBpbiBiYWNrZW5kXG4vLyBzbyBpbiBzYW5kYm94IHdlIGNvdWxkIGdlbmVyYXRlIG1vcmUgcmVhZGFibGUgaWRzIGFuZCBhdCB0aGUgc2FtZSB0aW1lIHVzZVxuLy8gbm9ybWFsIG9uZXMgaW4gcHJvZHVjdGlvblxuY29uc3Qgcm9vdDogYW55ID0gKHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyAmJiBzZWxmLnNlbGYgPT09IHNlbGYgJiYgc2VsZikgfHxcbiAgKHR5cGVvZiBnbG9iYWwgPT09ICdvYmplY3QnICYmIGdsb2JhbC5nbG9iYWwgPT09IGdsb2JhbCAmJiBnbG9iYWwpIHx8XG4gIHRoaXM7XG5cbi8vIGNvbnN0IGluaXRpYWxOYW1lc3BhY2VzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BlYi1pZHMnKTtcblxuLy8gY29uc3QgaWRzTmFtZXNwYWNlczoge1xuLy8gICBbbnM6IHN0cmluZ106IG51bWJlcixcbi8vIH0gPSBpbml0aWFsTmFtZXNwYWNlcyA/IEpTT04ucGFyc2UoaW5pdGlhbE5hbWVzcGFjZXMpIDoge307XG5cbmV4cG9ydCBmdW5jdGlvbiBwZWJHZW5lcmF0ZUlkKG5zPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gaWYgKHJvb3QuUEVCX0NVU1RPTV9JRFMgJiYgbnMpIHtcbiAgLy8gICBpZiAoIShucyBpbiBpZHNOYW1lc3BhY2VzKSkge1xuICAvLyAgICAgaWRzTmFtZXNwYWNlc1tuc10gPSAwO1xuICAvLyAgIH1cblxuICAvLyAgIGlkc05hbWVzcGFjZXNbbnNdKys7XG5cbiAgLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGViLWlkcycsIEpTT04uc3RyaW5naWZ5KGlkc05hbWVzcGFjZXMpKTtcblxuICAvLyAgIHJldHVybiBgJHtuc30tJHtpZHNOYW1lc3BhY2VzW25zXX1gO1xuICAvLyB9XG5cbiAgaWYgKHJvb3QuUEVCX0NVU1RPTV9JRFMpIHtcbiAgICBjb25zdCBiYXNlID0gMzY7XG5cbiAgICByZXR1cm4gTnVtYmVyKHJhbmRvbSgwLCBiYXNlICoqIDUgLSAxKSkudG9TdHJpbmcoYmFzZSk7XG4gIH1cblxuICByZXR1cm4gdXVpZCgpO1xufVxuIl19