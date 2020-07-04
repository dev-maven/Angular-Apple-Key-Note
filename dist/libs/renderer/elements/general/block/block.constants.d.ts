export interface AllBlockStyles {
    position: string;
    display: 'block' | 'none';
    width: number;
    maxWidth: string;
    minWidth: number;
    height: number;
    top: number;
    left: number;
    right: number;
    bottom: number;
    textAlign?: 'left' | 'center' | 'right';
    verticalAlign?: string;
    background: string;
    backgroundImage: string;
    backgroundSize?: string;
    backgroundPosition?: 'initial' | 'inherit' | 'center' | 'left';
    backgroundRepeat?: 'no-repeat';
    border?: string;
    borderTop?: string;
    borderBottom?: string;
    padding?: number;
    margin?: number;
    backgroundColor?: string;
    zIndex?: number;
}
export declare type BlockStyles = Partial<AllBlockStyles>;
