import { Component } from '@angular/core';

@Component({
  selector: 'peb-editor-tool-text-icon',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
        <defs>
            <linearGradient id="text" x1="50%" x2="50%" y1="0%" y2="100%">
                <stop offset="0%" stop-color="#FFE902"/>
                <stop offset="100%" stop-color="#F1B100"/>
            </linearGradient>
        </defs>
        <path fill="url(#text)" fill-rule="nonzero" d="M7.28 14.583H6.25l3.593-8.397c.202-.47.529-.47.73 0l3.594 8.397h-1.03l-.692-1.618H7.972l-.693 1.618zm1.061-2.667h3.681l-1.84-4.301-1.84 4.301z" transform="translate(.364)"/>
    </svg>
  `,
})
export class PebEditorToolTextComponent {
}
