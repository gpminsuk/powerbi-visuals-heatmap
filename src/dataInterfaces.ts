module powerbi.extensibility.visual {
    import IValueFormatter = powerbi.extensibility.utils.formatting.IValueFormatter;
    export interface TableHeatMapDataPoint {
        categoryX: string;
        categoryY: string;
        group: string;
        value: number;
        valueStr: string;
    }

    export interface TableHeatMapChartData {
        dataPoints: TableHeatMapDataPoint[];
        categoryX: string[];
        categoryY: string[];
        groups: string[];
        categoryValueFormatter: IValueFormatter;
        valueFormatter: IValueFormatter;
    }

    export interface IMargin {
        left?: number;
        right?: number;
        bottom?: number;
        top?: number;
    }

    export interface TextProperties {
        text?: string;
        fontFamily: string;
        fontSize: string;
        fontWeight?: string;
        fontStyle?: string;
        fontVariant?: string;
        whiteSpace?: string;
    }

    export interface IColorArray {
        3: string[];
        4: string[];
        5: string[];
        6: string[];
        7: string[];
        8: string[];
        9?: string[];
        10?: string[];
        11?: string[];
        12?: string[];
        13?: string[];
        14?: string[];
    }

    export interface IColorBrewer {
        YlGn: IColorArray;
        YlGnBu: IColorArray;
        GnBu: IColorArray;
        BuGn: IColorArray;
        PuBuGn: IColorArray;
        PuBu: IColorArray;
        BuPu: IColorArray;
        RdPu: IColorArray;
        PuRd: IColorArray;
        OrRd: IColorArray;
        YlOrRd: IColorArray;
        YlOrBr: IColorArray;
        Purples: IColorArray;
        Blues: IColorArray;
        Greens: IColorArray;
        Oranges: IColorArray;
        Reds: IColorArray;
        Greys: IColorArray;
        PuOr: IColorArray;
        BrBG: IColorArray;
        PRGn: IColorArray;
        PiYG: IColorArray;
        RdBu: IColorArray;
        RdGy: IColorArray;
        RdYlBu: IColorArray;
        Spectral: IColorArray;
        RdYlGn: IColorArray;
        Accent: IColorArray;
        Dark2: IColorArray;
        Paired: IColorArray;
        Pastel1: IColorArray;
        Pastel2: IColorArray;
        Set1: IColorArray;
        Set2: IColorArray;
        Set3: IColorArray;
    }

}