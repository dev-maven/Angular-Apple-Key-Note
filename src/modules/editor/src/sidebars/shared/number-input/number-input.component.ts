import { Component, Input, } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'peb-editor-number-input',
  templateUrl: 'number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
})
export class PebEditorNumberInputComponent {

  @Input() control: FormControl;
  @Input() unit: string;
  @Input() label: string;

  increment() {
    this.control.patchValue(this.control.value + 1);
  }

  decrement() {
    this.control.patchValue(this.control.value - 1);
  }
}
