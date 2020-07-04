export interface AllGridStyles {
  direction: 'row' | 'column';
  items: number;
  width: number;
  height: number;
  top: number;
  left: number;
  right: number;
  bottom: number;
}

export type GridStyles = Partial<AllGridStyles>;
