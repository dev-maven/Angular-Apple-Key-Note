import { ExecCommand } from '../../text-editor.interface';

export abstract class BaseTransform {

  execCommand(command: ExecCommand, value?: string): void {
    document.execCommand(command, false, value);
  }

  protected get isSelectionExist(): boolean {
    return window.getSelection().type.toLowerCase() !== 'none';
  }
}
