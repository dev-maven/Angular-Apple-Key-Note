import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sandbox-editor-route',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SandboxEditorRootComponent {
  constructor(
    public route: ActivatedRoute,
  ) {}
}
