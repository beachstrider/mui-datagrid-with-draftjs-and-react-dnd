import { DataType, EditorColumn, EditorEntry } from "./Types";

export const cols:EditorColumn[] = [
    { "identifier": "field1", "headerName": "hdr1" },
    { "identifier": "field2", "headerName": "hdr2" },
    { "identifier": "field3", "headerName": "hdr3" },
    { "identifier": "field4", "headerName": "hdr4" }
];

export const dataTypes:DataType[] = [
    { "identifier": "dt1", "isEnum": false },
    { "identifier": "dt2", "isEnum": false, "isXHTML": true },
]

export const rowData:EditorEntry = {
    "identifier": "row-id",
    "values": {
        "field1": { "identifier": "id1", "dataType": "dt1", "value": "v1" },
        "field2": { "identifier": "id2", "dataType": "dt2", "value": "v2" },
        "field3": { "identifier": "id3", "dataType": "dt1", "value": "v3" },
        "field4": { "identifier": "id4", "dataType": "dt1", "value": "v4" },
    }
};