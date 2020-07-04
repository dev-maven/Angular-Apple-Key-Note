import { ExecCommand } from '../../text-editor.interface';
export declare abstract class BaseTransform {
    execCommand(command: ExecCommand, value?: string): void;
    protected get isSelectionExist(): boolean;
}
