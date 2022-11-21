import { DataType, EditorColumn, EditorEntry } from "./Types";

export const cols: EditorColumn[] = [
    { "identifier": "field1", "headerName": "hdr1" },
    { "identifier": "field2", "headerName": "hdr2" },
    { "identifier": "field3", "headerName": "hdr3" },
    { "identifier": "field4", "headerName": "hdr4" }
];

export const dataTypes: DataType[] = [
    { "identifier": "dt1", "isEnum": false },
    { "identifier": "dt2", "isEnum": false, "isXHTML": true },
]

export const rowData: EditorEntry = {
    "identifier": "row-1",
    "values": {
        "field1": { "identifier": "id1", "dataType": "dt1", "value": "v1" },
        "field2": { "identifier": "id2", "dataType": "dt2", "value": "v2" },
        "field3": { "identifier": "id3", "dataType": "dt1", "value": "v3" },
        "field4": { "identifier": "id4", "dataType": "dt1", "value": "v4" }
    },
    "children": [
        {
            "identifier": "row-2",
            "values": {
                "field1": { "identifier": "id5", "dataType": "dt1", "value": "v1.1" },
                "field2": { "identifier": "id6", "dataType": "dt2", "value": "v1.2" },
                "field3": { "identifier": "id7", "dataType": "dt1", "value": "v1.3" },
                "field4": { "identifier": "id8", "dataType": "dt1", "value": "v1.4" },
            },
            "children": [
                {
                    "identifier": "row-3",
                    "values": {
                        "field1": { "identifier": "id9", "dataType": "dt1", "value": "v1.1.1" },
                        "field2": { "identifier": "id10", "dataType": "dt2", "value": "v1.1.2" },
                        "field3": { "identifier": "id11", "dataType": "dt1", "value": "v1.1.3" },
                        "field4": { "identifier": "id12", "dataType": "dt1", "value": "v1.1.4" },
                    }
                }
            ]
        },
        {
            "identifier": "row-4",
            "values": {
                "field1": { "identifier": "id5", "dataType": "dt1", "value": "v1.1" },
                "field2": { "identifier": "id6", "dataType": "dt2", "value": "v1.2" },
                "field3": { "identifier": "id7", "dataType": "dt1", "value": "v1.3" },
                "field4": { "identifier": "id8", "dataType": "dt1", "value": "v1.4" },
            },
            "children": [
                {
                    "identifier": "row-5",
                    "values": {
                        "field1": { "identifier": "id9", "dataType": "dt1", "value": "v1.1.1" },
                        "field2": { "identifier": "id10", "dataType": "dt2", "value": "v1.1.2" },
                        "field3": { "identifier": "id11", "dataType": "dt1", "value": "v1.1.3" },
                        "field4": { "identifier": "id12", "dataType": "dt1", "value": "v1.1.4" },
                    }
                }
            ]
        }
    ]
};