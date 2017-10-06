/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

/// <reference path="_references.ts"/>

module powerbi.extensibility.visual.test {
    import CustomizeColumnFn = powerbi.extensibility.utils.test.dataViewBuilder.CustomizeColumnFn;
    import TestDataViewBuilder = powerbi.extensibility.utils.test.dataViewBuilder.TestDataViewBuilder;
    import GetRandomDate = powerbi.extensibility.visual.test.helpers.GetRandomDate;
    import getRandomNumbers = powerbi.extensibility.utils.test.helpers.getRandomNumbers;
    import ParseCSV = powerbi.extensibility.visual.test.helpers.ParseCSV;
    import ValueType = powerbi.extensibility.utils.type.ValueType;

    export class TableHeatMapData extends TestDataViewBuilder {
        public static CategoryXColumn: string = "CategoryX";
        public static CategoryYColumn: string = "CategoryY";
        public static GroupColumn: string = "Group";
        public static MeasureColumn: string = "Value";

        public dataCategory: string[];
        public dataMeasure: number[];

        public constructor() {
            super();
            this.dataCategory = _.range(0, 30).map(d => d + "");
            this.dataMeasure = _.range(0, this.dataCategory.length).map(d => _.random(0, 100));
        }

        public getDataView(columnNames?: string[], customizeColumns?: CustomizeColumnFn): DataView {
            return this.createCategoricalDataViewBuilder(
                [
                    {
                        source: {
                            displayName: TableHeatMapData.CategoryXColumn,
                            roles: {
                                CategoryX: true
                            },
                            type: ValueType.fromDescriptor({ text: true })
                        },
                        values: this.dataCategory
                    },
                    {
                        source: {
                            displayName: TableHeatMapData.CategoryYColumn,
                            roles: {
                                CategoryY: true
                            },
                            type: ValueType.fromDescriptor({ text: true })
                        },
                        values: this.dataCategory
                    },
                    {
                        source: {
                            displayName: TableHeatMapData.GroupColumn,
                            roles: {
                                Group: true
                            },
                            type: ValueType.fromDescriptor({ text: true })
                        },
                        values: this.dataCategory
                    },
                ],
                [
                    {
                        source: {
                            displayName: TableHeatMapData.MeasureColumn,
                            isMeasure: true,
                            roles: {
                                value: true
                            },
                            type: ValueType.fromDescriptor({ numeric: true })
                        },
                        values: this.dataMeasure
                    }
                ], columnNames, customizeColumns).build();
        }
    }
}