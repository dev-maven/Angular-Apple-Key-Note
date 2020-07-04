export enum ExecuteCommands {
  BOLD = 'bold',
  ITALIC = 'italic',
  UNDERLINE = 'underline',
  JUSTIFY_CENTER = 'justifyCenter',
  JUSTIFY_FULL = 'justifyFull',
  JUSTIFY_LEFT = 'justifyLeft',
  JUSTIFY_RIGHT = 'justifyRight',
  LIST_UNORDERED = 'insertUnorderedList',
  LIST_ORDERED = 'insertOrderedList',
  TEXT_COLOR = 'foreColor',
  FONT_SIZE = 'fontSize',
  FONT_FAMILY = 'fontFamily',
  INSERT_LINK = 'insertLink',
  INSERT_INTERNAL_LINK = 'insertInternalLink',
  SELECT_ALL = 'selectAll',
  SET_FOCUS = 'focus',
  SET_CARET = 'caret_to_end'
}

export type JustifyContent = ExecuteCommands.JUSTIFY_LEFT
  | ExecuteCommands.JUSTIFY_CENTER
  | ExecuteCommands.JUSTIFY_RIGHT
  | ExecuteCommands.JUSTIFY_FULL;

export const SELECT_VALUES = [
  {
    label: '6px',
    value: '6px'
  },
  {
    label: '8px',
    value: '8px'
  },
  {
    label: '10px',
    value: '10px'
  },
  {
    label: '12px',
    value: '12px'
  },
  {
    label: '14px',
    value: '14px'
  },
  {
    label: '16px',
    value: '16px'
  },
  {
    label: '18px',
    value: '18px'
  },
  {
    label: '20px',
    value: '20px'
  },
  {
    label: '22px',
    value: '22px'
  },
  {
    label: '24px',
    value: '24px'
  },
  {
    label: '26px',
    value: '26px'
  },
  {
    label: '28px',
    value: '28px'
  },
  {
    label: '30px',
    value: '30px'
  },
  {
    label: '36px',
    value: '36px'
  },
  {
    label: '48px',
    value: '48px'
  },
  {
    label: '60px',
    value: '60px'
  },
  {
    label: '72px',
    value: '72px'
  },
  {
    label: '96px',
    value: '96px'
  },
];

export const DefaultFontSize = 15;
export const DefaultFontWeight = 'normal';
export const DefaultAlign = 'left';

export const EmptyChar = '&#8203';
export const EscapedChar = '%u200B';
export const EmptyText = '<span>&#8203</span>';

export const DefaultFontColor = '#000000';
export const EmptyTextWithStyles = `<div style="text-align: ${DefaultAlign}; font-size: ${DefaultFontSize}; color: ${DefaultFontColor}"></div>`;
export const FontFamilies = [
  {
    label: 'Roboto',
    value: `'Roboto', sans-serif`
  },
  {
    label: 'Open Sans',
    value: `'Open Sans', sans-serif`
  },
  {
    label: 'Lato',
    value: `'Lato', sans-serif`
  },
  {
    label: 'Montserrat',
    value: `'Montserrat', sans-serif`
  }
];
