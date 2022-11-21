import { EditorColumn, SpecHierarchyEntry } from "./Types";

export const cols:EditorColumn[] = [
    { "identifier": "field1", "headerName": "hdr1" },
    { "identifier": "field2", "headerName": "hdr2" },
    { "identifier": "field3", "headerName": "hdr3" },
    { "identifier": "field4", "headerName": "hdr4" }
];

export const rows:SpecHierarchyEntry[] = [
    {
        "identifier": "row-id-1",
        "parent": null,
        "prev": null,
        "next": null,
        "object":{
            "identifier": "specObjectID-1",
            "values": [
                {   
                    "attribute":"field1",
                    "identifier": "id1",
                    "dataType": "dt1",
                    "value": "v1"
                },
                {
                    "attribute":"field2",
                    "identifier": "id2",
                    "dataType": "dt2",
                    "value": "v2"
                },
                {
                    "attribute":"field3",
                    "identifier": "id3",
                    "dataType": "dt1",
                    "value": "v3"
                },
                {
                    "attribute":"field4",
                    "identifier": "id4",
                    "dataType": "dt1",
                    "value": "v4"
                },
            ]
        }
    }
]
