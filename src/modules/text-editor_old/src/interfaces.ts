import { ExecuteCommands } from './constants';

export interface ExecuteCommandAction {
  key: ExecuteCommands;
  value?: string;
  options?: any;
}

export interface EditorToolbarForm {
  href?: string;
  openInNewTab?: string;
  font?: string;
  color?: string;
}

export interface LinksInterface {
  areaIds?: string[];
  id?: string;
  parentId?: string;
  slug?: string;
  title?: string;
}

export interface ToggleToolbarAction {
  action: 'justifyContent' | 'contentList' | 'currentFontSize' | 'currentFontFamily' | 'textDecoration' | 'currentFontColor' | 'currentLink' | 'hideToolbar' | 'activeLinks';
  value: ExecuteCommands | TextDecorationInterface | LinksInterface[] | string | number | boolean;
  option?: any;
}

export interface TextDecorationInterface {
  [ExecuteCommands.BOLD]: boolean;
  [ExecuteCommands.ITALIC]: boolean;
  [ExecuteCommands.UNDERLINE]: boolean;
}

export interface TextOptionsInterface {
  color?: string;
  [ExecuteCommands.BOLD]?: boolean;
  [ExecuteCommands.ITALIC]?: boolean;
  [ExecuteCommands.UNDERLINE]?: boolean;
  justify?: string;
  fontSize?: number;
}

export interface ToolbarOptionsInterface {
  [ExecuteCommands.BOLD]?: boolean;
  [ExecuteCommands.ITALIC]?: boolean;
  [ExecuteCommands.UNDERLINE]?: boolean;
  color?: string;
  fontSize?: number;
  justify?: string;
  list?: string;
  href?: string;
  activeLinks: LinksInterface[];
}

export interface TextEditorStylesInterface {
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
  maxWidth?: string;
  maxHeight?: string;
  left?: string;
  top?: string;
  display?: string;
}
