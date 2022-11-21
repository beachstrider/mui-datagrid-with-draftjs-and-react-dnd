export const cols = [
    {
        "identifier": "5f9713db-efb2-41f5-90ab-0c6385768584",
        "headerName": "Title",
        "editable": true
    },
    {
        "identifier": "263406b6-6ca3-4947-ba30-7c174dcc3a28",
        "headerName": "Description",
        "editable": true
    },
    {
        "identifier": "5e760a55-f0f8-4d7e-b44e-7ede6cc3626b",
        "headerName": "Content Type",
        "editable": true
    },
    {
        "identifier": "2767b02a-176e-4788-9048-739c782b5033",
        "headerName": "Status",
        "editable": true
    }
]

export const reqIFMeta = {
    "identifier": "e89a2acc-576f-47dd-a08a-699a30f3e095",
    "exid": "6008f117-6aef-41d5-86db-25d4bc77c983",
    "name": "ReqIFNameFile",
    "creation_date": "2022-10-22T12:13:08.809933Z",
    "last_update": "2022-10-31T08:12:33.665055Z",
    "meta": null,
    "Header": {
        "identifier": "cde1b3d3-d3de-47ac-bd55-9bf80c00b0e5",
        "exid": "2d94e064-15d1-43aa-bae7-91959dc07190",
        "name": null,
        "creation_date": "2022-10-22T12:13:08.820695Z",
        "last_update": "2022-10-22T12:13:08.820695Z",
        "meta": null,
        "reqIF": "e89a2acc-576f-47dd-a08a-699a30f3e095",
        "entries": [
            {
                "identifier": "5c29766b-40bf-493a-982f-78fdb5fcdaa7",
                "exid": "3b4fadd0-f65a-44f1-900d-010ac363df01",
                "name": "TITLE",
                "creation_date": "2022-10-22T12:13:08.826701Z",
                "last_update": "2022-10-22T12:13:08.826701Z",
                "meta": null,
                "value": "Default Title 1666440788821",
                "header": "cde1b3d3-d3de-47ac-bd55-9bf80c00b0e5"
            },
            {
                "identifier": "0bea6017-1f26-4444-be9c-7b629966051f",
                "exid": "958e3b9c-4733-4d11-95be-3d059f901fc9",
                "name": "REQ-IF-TOOL-ID",
                "creation_date": "2022-10-22T12:13:08.833295Z",
                "last_update": "2022-10-31T08:12:49.427066Z",
                "meta": null,
                "value": "Ellygent APP",
                "header": "cde1b3d3-d3de-47ac-bd55-9bf80c00b0e5"
            },
            {
                "identifier": "f6a65e67-a475-45bc-919a-138e6b8e34e4",
                "exid": "cf6cc09c-8576-438b-8ecd-341364a33550",
                "name": "COMMENT",
                "creation_date": "2022-10-22T12:13:08.839931Z",
                "last_update": "2022-10-31T08:13:05.877070Z",
                "meta": null,
                "value": "Ellygent  Default configuration",
                "header": "cde1b3d3-d3de-47ac-bd55-9bf80c00b0e5"
            }
        ]
    },
    "project": "49ec1e2d-8187-4f10-b476-4bdcd93f672b",
    "DataTypes": [
        {
            "identifier": "9ba451b5-7248-4e7c-a890-b56bd85edb74",
            "exid": "dt-xhtml",
            "name": "DATATYPE-DEFINITION-XHTML",
            "creation_date": "2022-10-22T12:13:08.845327Z",
            "last_update": "2022-10-31T07:51:33.313650Z",
            "meta": {
                "LONG-NAME": "Text-Rich"
            },
            "isEnum": false,
            "isXHTML": true,
            "reqIF": "e89a2acc-576f-47dd-a08a-699a30f3e095"
        },
        {
            "identifier": "578c256b-5c6d-48e6-8e34-a52374dd767b",
            "exid": "dt-string",
            "name": "DATATYPE-DEFINITION-STRING",
            "creation_date": "2022-10-22T12:13:08.851871Z",
            "last_update": "2022-10-31T07:50:53.957861Z",
            "meta": {
                "LONG-NAME": "Text-Simple"
            },
            "isEnum": false,
            "isXHTML": false,
            "reqIF": "e89a2acc-576f-47dd-a08a-699a30f3e095"
        },
        {
            "identifier": "10db61b4-5299-4a57-855c-dc880c8ad68c",
            "exid": "dt-enum-content-type",
            "name": "DATATYPE-DEFINITION-ENUMERATION",
            "creation_date": "2022-10-22T12:13:08.858481Z",
            "last_update": "2022-10-31T08:05:14.316631Z",
            "meta": {
                "LONG-NAME": "Line Type"
            },
            "isEnum": true,
            "isXHTML": false,
            "reqIF": "e89a2acc-576f-47dd-a08a-699a30f3e095",
            "enumeration": {
                "65dc7be1-2f61-4a81-a5cc-2e16ee957e0f": {
                    "identifier": "65dc7be1-2f61-4a81-a5cc-2e16ee957e0f",
                    "exid": "enum-value-content-type__requirement",
                    "name": "ENUM-VALUE",
                    "creation_date": "2022-10-22T12:13:08.864124Z",
                    "last_update": "2022-10-31T11:31:02.081825Z",
                    "meta": {
                        "LONG-NAME": "Requirement"
                    },
                    "isDefault": false,
                    "dataType": "10db61b4-5299-4a57-855c-dc880c8ad68c"
                },
                "92a461eb-c4a0-468f-9f81-9f35167f6d04": {
                    "identifier": "92a461eb-c4a0-468f-9f81-9f35167f6d04",
                    "exid": "enum-value-content-type__header",
                    "name": "ENUM-VALUE",
                    "creation_date": "2022-10-22T12:13:08.869671Z",
                    "last_update": "2022-11-01T18:19:10.018643Z",
                    "meta": {
                        "LONG-NAME": "Header"
                    },
                    "isDefault": false,
                    "dataType": "10db61b4-5299-4a57-855c-dc880c8ad68c"
                }
            }
        },
        {
            "identifier": "4e8b9a61-db38-4c95-9f87-93d1740cba2c",
            "exid": "dt-enum-content-state",
            "name": "DATATYPE-DEFINITION-ENUMERATION",
            "creation_date": "2022-10-22T12:13:08.874404Z",
            "last_update": "2022-10-31T07:51:10.516198Z",
            "meta": {
                "LONG-NAME": "Workflow State"
            },
            "isEnum": true,
            "isXHTML": false,
            "reqIF": "e89a2acc-576f-47dd-a08a-699a30f3e095",
            "enumeration": {
                "e88eb339-b1ee-404b-9393-f810a5c72bcb": {
                    "identifier": "e88eb339-b1ee-404b-9393-f810a5c72bcb",
                    "exid": "enum-value-content-type__draft",
                    "name": "ENUM-VALUE",
                    "creation_date": "2022-10-22T12:13:08.879128Z",
                    "last_update": "2022-10-22T12:13:08.879128Z",
                    "meta": {
                        "LONG-NAME": "Draft"
                    },
                    "isDefault": false,
                    "dataType": "4e8b9a61-db38-4c95-9f87-93d1740cba2c"
                },
                "0a955f08-dc38-485f-a4f6-e6089da29f60": {
                    "identifier": "0a955f08-dc38-485f-a4f6-e6089da29f60",
                    "exid": "enum-value-content-type__review",
                    "name": "ENUM-VALUE",
                    "creation_date": "2022-10-22T12:13:08.884363Z",
                    "last_update": "2022-10-31T11:31:18.555636Z",
                    "meta": {
                        "LONG-NAME": "Review"
                    },
                    "isDefault": false,
                    "dataType": "4e8b9a61-db38-4c95-9f87-93d1740cba2c"
                },
                "18032d4d-8a1f-4659-be99-fbe2a8432577": {
                    "identifier": "18032d4d-8a1f-4659-be99-fbe2a8432577",
                    "exid": "enum-value-content-type__approved",
                    "name": "ENUM-VALUE",
                    "creation_date": "2022-10-22T12:13:08.889944Z",
                    "last_update": "2022-10-22T12:13:08.889944Z",
                    "meta": {
                        "LONG-NAME": "Approved"
                    },
                    "isDefault": false,
                    "dataType": "4e8b9a61-db38-4c95-9f87-93d1740cba2c"
                },
                "3ebc53aa-ce6a-4264-9983-c2de504d653d": {
                    "identifier": "3ebc53aa-ce6a-4264-9983-c2de504d653d",
                    "exid": "enum-value-content-type__rejected",
                    "name": "ENUM-VALUE",
                    "creation_date": "2022-10-22T12:13:08.894611Z",
                    "last_update": "2022-10-22T12:13:08.894611Z",
                    "meta": {
                        "LONG-NAME": "Rejected"
                    },
                    "isDefault": false,
                    "dataType": "4e8b9a61-db38-4c95-9f87-93d1740cba2c"
                }
            }
        }
    ],
    "SpecTypes": [
        {
            "identifier": "2253dbfc-e492-4831-bf43-2678ec29d968",
            "exid": "default-object-spec-type",
            "name": "SPEC-OBJECT-TYPE",
            "creation_date": "2022-10-22T12:13:08.899602Z",
            "last_update": "2022-10-31T08:05:45.140460Z",
            "meta": {
                "LONG-NAME": "Requirement Object Type"
            },
            "reqIF": "e89a2acc-576f-47dd-a08a-699a30f3e095",
            "attributes": {
                "5f9713db-efb2-41f5-90ab-0c6385768584": {
                    "identifier": "5f9713db-efb2-41f5-90ab-0c6385768584",
                    "exid": "spobjattr-title",
                    "name": "ATTRIBUTE-DEFINITION-STRING",
                    "creation_date": "2022-10-22T12:13:08.911122Z",
                    "last_update": "2022-10-31T11:31:29.432536Z",
                    "meta": {
                        "LONG-NAME": "Title"
                    },
                    "renderMode": "TEXT",
                    "specType": "2253dbfc-e492-4831-bf43-2678ec29d968",
                    "dataType": "578c256b-5c6d-48e6-8e34-a52374dd767b"
                },
                "263406b6-6ca3-4947-ba30-7c174dcc3a28": {
                    "identifier": "263406b6-6ca3-4947-ba30-7c174dcc3a28",
                    "exid": "spobjattr-description",
                    "name": "ATTRIBUTE-DEFINITION-XHTML",
                    "creation_date": "2022-10-22T12:13:08.920214Z",
                    "last_update": "2022-11-01T08:52:03.204874Z",
                    "meta": {
                        "LONG-NAME": "Description",
                        "DESC": "Requirement Content"
                    },
                    "renderMode": "TEXT",
                    "specType": "2253dbfc-e492-4831-bf43-2678ec29d968",
                    "dataType": "9ba451b5-7248-4e7c-a890-b56bd85edb74"
                },
                "5e760a55-f0f8-4d7e-b44e-7ede6cc3626b": {
                    "identifier": "5e760a55-f0f8-4d7e-b44e-7ede6cc3626b",
                    "exid": "spobjattr-contenttype",
                    "name": "ATTRIBUTE-DEFINITION-ENUMERATION",
                    "creation_date": "2022-10-22T12:13:08.926828Z",
                    "last_update": "2022-10-22T12:13:08.926828Z",
                    "meta": {
                        "LONG-NAME": "Content Type",
                        "DESC": "Content Type"
                    },
                    "renderMode": "TEXT",
                    "specType": "2253dbfc-e492-4831-bf43-2678ec29d968",
                    "dataType": "10db61b4-5299-4a57-855c-dc880c8ad68c"
                },
                "2767b02a-176e-4788-9048-739c782b5033": {
                    "identifier": "2767b02a-176e-4788-9048-739c782b5033",
                    "exid": "spobjattr-state",
                    "name": "ATTRIBUTE-DEFINITION-ENUMERATION",
                    "creation_date": "2022-10-22T12:13:08.934174Z",
                    "last_update": "2022-10-22T12:13:08.934174Z",
                    "meta": {
                        "LONG-NAME": "Status",
                        "DESC": "Content Status"
                    },
                    "renderMode": "TEXT",
                    "specType": "2253dbfc-e492-4831-bf43-2678ec29d968",
                    "dataType": "4e8b9a61-db38-4c95-9f87-93d1740cba2c"
                }
            }
        },
        {
            "identifier": "25202c7d-902c-4376-86c8-62068a076ac8",
            "exid": "default-specification-type",
            "name": "SPECIFICATION-TYPE",
            "creation_date": "2022-10-22T12:13:08.939162Z",
            "last_update": "2022-10-31T07:49:26.831697Z",
            "meta": {
                "LONG-NAME": "Requirements Specification Type"
            },
            "reqIF": "e89a2acc-576f-47dd-a08a-699a30f3e095",
            "attributes": {
                "2e632ef0-ead1-4dfc-b854-6bfc95288b0f": {
                    "identifier": "2e632ef0-ead1-4dfc-b854-6bfc95288b0f",
                    "exid": "default-reqspectype-description",
                    "name": "ATTRIBUTE-DEFINITION-STRING",
                    "creation_date": "2022-10-22T12:13:08.944487Z",
                    "last_update": "2022-10-31T08:23:54.437798Z",
                    "meta": {
                        "LONG-NAME": "Description",
                        "DESC": "Specification Description"
                    },
                    "renderMode": "TEXT",
                    "specType": "25202c7d-902c-4376-86c8-62068a076ac8",
                    "dataType": "9ba451b5-7248-4e7c-a890-b56bd85edb74"
                },
                "e0263d6b-64c6-4b5a-9329-f1cba70b0726": {
                    "identifier": "e0263d6b-64c6-4b5a-9329-f1cba70b0726",
                    "exid": "default-reqspectype-status",
                    "name": "ATTRIBUTE-DEFINITION-ENUMERATION",
                    "creation_date": "2022-10-22T12:13:08.951418Z",
                    "last_update": "2022-10-31T11:24:54.798785Z",
                    "meta": {
                        "LONG-NAME": "Status"
                    },
                    "renderMode": "TEXT",
                    "specType": "25202c7d-902c-4376-86c8-62068a076ac8",
                    "dataType": "4e8b9a61-db38-4c95-9f87-93d1740cba2c"
                }
            }
        },
        {
            "identifier": "bde65f31-c651-4c6a-a995-71cb36e8af36",
            "exid": "default-spec-relation-type-connectedto",
            "name": "SPEC-RELATION-TYPE",
            "creation_date": "2022-10-22T12:13:08.956869Z",
            "last_update": "2022-10-22T12:13:08.956869Z",
            "meta": {
                "LONG-NAME": "ConnectedTo"
            },
            "reqIF": "e89a2acc-576f-47dd-a08a-699a30f3e095"
        }
    ],
    "ToolExtension": []
}

export const rows = [
    {
        "identifier": "895ee961-1453-481f-942f-37c849485bcd",
        "exid": "39daafc0-2d6d-4324-b608-05f62bc80b68",
        "name": "SPEC-HIERARCHY",
        "creation_date": "2022-10-31T13:08:01.993416Z",
        "last_update": "2022-10-31T13:08:01.994415Z",
        "meta": null,
        "specification": "cfb6c39f-e816-4a82-b95d-3e1b14314665",
        "specObject": "48aeb7cf-af6c-42d6-ac34-d3d2f0baea01",
        "parent": null,
        "prev": null,
        "next": null,
        "object": {
            "identifier": "48aeb7cf-af6c-42d6-ac34-d3d2f0baea01",
            "exid": "f49c98b7-e3d8-4443-a331-61f08b625049",
            "name": "SPEC-OBJECT",
            "creation_date": "2022-10-31T13:08:01.945870Z",
            "last_update": "2022-10-31T13:08:01.947863Z",
            "meta": null,
            "specType": "2253dbfc-e492-4831-bf43-2678ec29d968",
            "values": [
                {
                    "identifier": "e97e26de-c5ce-4de3-a21b-663e4dea1f64",
                    "exid": "bae7fbc8-3f2f-4381-bcea-2a0a7f53ced2",
                    "name": null,
                    "creation_date": "2022-10-31T13:08:01.961990Z",
                    "last_update": "2022-11-01T18:09:23.909854Z",
                    "meta": null,
                    "value": "edgdrg",
                    "specObject": "48aeb7cf-af6c-42d6-ac34-d3d2f0baea01",
                    "attribute": "5f9713db-efb2-41f5-90ab-0c6385768584",
                    "dataType": "578c256b-5c6d-48e6-8e34-a52374dd767b"
                },
                {
                    "identifier": "a792c489-240b-4c85-add0-ef529084e7eb",
                    "exid": "9329c44c-4213-417f-a866-f9a05e433d27",
                    "name": null,
                    "creation_date": "2022-10-31T13:08:01.971550Z",
                    "last_update": "2022-11-01T18:11:24.289098Z",
                    "meta": null,
                    "value": "{\"blocks\":[{\"key\":\"2t0tk\",\"text\":\"sdfgsdf\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"31okh\",\"text\":\"gdfg\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":3,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"bkgsd\",\"text\":\"fdgd\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"cc3nc\",\"text\":\"dfg\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"8cv06\",\"text\":\"xv \",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"9he4q\",\"text\":\" sdf\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"9ipmo\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
                    "specObject": "48aeb7cf-af6c-42d6-ac34-d3d2f0baea01",
                    "attribute": "263406b6-6ca3-4947-ba30-7c174dcc3a28",
                    "dataType": "9ba451b5-7248-4e7c-a890-b56bd85edb74"
                },
                {
                    "identifier": "4f262afc-ec93-4583-8633-98c58949771c",
                    "exid": "2ce5f423-2509-49b7-8535-bcc93422f1e4",
                    "name": null,
                    "creation_date": "2022-10-31T13:08:01.978770Z",
                    "last_update": "2022-11-01T06:32:49.929650Z",
                    "meta": null,
                    "value": "92a461eb-c4a0-468f-9f81-9f35167f6d04",
                    "specObject": "48aeb7cf-af6c-42d6-ac34-d3d2f0baea01",
                    "attribute": "5e760a55-f0f8-4d7e-b44e-7ede6cc3626b",
                    "dataType": "10db61b4-5299-4a57-855c-dc880c8ad68c"
                },
                {
                    "identifier": "d8f6969d-0ec7-42c3-8ce8-ef1bd3c8277d",
                    "exid": "f7739f87-5559-4c0d-b251-775ac65bbc75",
                    "name": null,
                    "creation_date": "2022-10-31T13:08:01.983931Z",
                    "last_update": "2022-10-31T13:08:01.983931Z",
                    "meta": null,
                    "value": "",
                    "specObject": "48aeb7cf-af6c-42d6-ac34-d3d2f0baea01",
                    "attribute": "2767b02a-176e-4788-9048-739c782b5033",
                    "dataType": "4e8b9a61-db38-4c95-9f87-93d1740cba2c"
                }
            ]
        }
    },
    {
        "identifier": "6e106ed1-28a1-451b-93b5-6e6ab72ccf31",
        "exid": "6b73a334-ef79-4937-8c33-f470f01736c2",
        "name": "SPEC-HIERARCHY",
        "creation_date": "2022-11-01T05:21:44.353218Z",
        "last_update": "2022-11-01T05:21:44.354218Z",
        "meta": null,
        "specification": "cfb6c39f-e816-4a82-b95d-3e1b14314665",
        "specObject": "9f5694dd-3e0e-4faa-9f2f-b5e075e82517",
        "parent": null,
        "prev": null,
        "next": null,
        "object": {
            "identifier": "9f5694dd-3e0e-4faa-9f2f-b5e075e82517",
            "exid": "3c11f377-4309-471b-87c5-a1eb78d31978",
            "name": "SPEC-OBJECT",
            "creation_date": "2022-11-01T05:21:44.305906Z",
            "last_update": "2022-11-01T05:21:44.309539Z",
            "meta": null,
            "specType": "2253dbfc-e492-4831-bf43-2678ec29d968",
            "values": [
                {
                    "identifier": "48e80102-4f93-4571-825d-f30a2fd81f78",
                    "exid": "905f5aba-52d2-4b67-932b-1bffad5c1ee2",
                    "name": null,
                    "creation_date": "2022-11-01T05:21:44.316519Z",
                    "last_update": "2022-11-01T18:11:07.363511Z",
                    "meta": null,
                    "value": "dfgdfg sdfsdf",
                    "specObject": "9f5694dd-3e0e-4faa-9f2f-b5e075e82517",
                    "attribute": "5f9713db-efb2-41f5-90ab-0c6385768584",
                    "dataType": "578c256b-5c6d-48e6-8e34-a52374dd767b"
                },
                {
                    "identifier": "474f1b1e-4c45-44ba-8074-62087e0940e8",
                    "exid": "cc52a138-f240-4732-8bfc-5da7444ab827",
                    "name": null,
                    "creation_date": "2022-11-01T05:21:44.329459Z",
                    "last_update": "2022-11-01T05:21:44.329459Z",
                    "meta": null,
                    "value": "",
                    "specObject": "9f5694dd-3e0e-4faa-9f2f-b5e075e82517",
                    "attribute": "263406b6-6ca3-4947-ba30-7c174dcc3a28",
                    "dataType": "9ba451b5-7248-4e7c-a890-b56bd85edb74"
                },
                {
                    "identifier": "dfcc443c-005d-4a1e-af56-7814d24a9b95",
                    "exid": "063e57e2-66e2-4bb2-a654-8a594d3f1411",
                    "name": null,
                    "creation_date": "2022-11-01T05:21:44.338222Z",
                    "last_update": "2022-11-01T08:24:17.628147Z",
                    "meta": null,
                    "value": "92a461eb-c4a0-468f-9f81-9f35167f6d04",
                    "specObject": "9f5694dd-3e0e-4faa-9f2f-b5e075e82517",
                    "attribute": "5e760a55-f0f8-4d7e-b44e-7ede6cc3626b",
                    "dataType": "10db61b4-5299-4a57-855c-dc880c8ad68c"
                },
                {
                    "identifier": "8a4cad60-d8d1-4dd0-9819-3ab6f4b72910",
                    "exid": "4a068310-2c4c-4fd2-b858-1281a802c291",
                    "name": null,
                    "creation_date": "2022-11-01T05:21:44.346203Z",
                    "last_update": "2022-11-01T06:37:36.242489Z",
                    "meta": null,
                    "value": "0a955f08-dc38-485f-a4f6-e6089da29f60",
                    "specObject": "9f5694dd-3e0e-4faa-9f2f-b5e075e82517",
                    "attribute": "2767b02a-176e-4788-9048-739c782b5033",
                    "dataType": "4e8b9a61-db38-4c95-9f87-93d1740cba2c"
                }
            ]
        }
    },
    {
        "identifier": "1e297b7d-2ade-442a-932e-3fad92e90b14",
        "exid": "70dd3551-fd0d-4628-8ed3-d6ae1dcdf2d0",
        "name": "SPEC-HIERARCHY",
        "creation_date": "2022-11-01T06:04:14.784834Z",
        "last_update": "2022-11-01T06:04:14.784834Z",
        "meta": null,
        "specification": "cfb6c39f-e816-4a82-b95d-3e1b14314665",
        "specObject": "8e57b573-4c7a-43b9-a6df-49eae8060312",
        "parent": null,
        "prev": null,
        "next": null,
        "object": {
            "identifier": "8e57b573-4c7a-43b9-a6df-49eae8060312",
            "exid": "c0078532-348e-4c5f-9042-6f49c15699fd",
            "name": "SPEC-OBJECT",
            "creation_date": "2022-11-01T06:04:14.736151Z",
            "last_update": "2022-11-01T06:04:14.736151Z",
            "meta": null,
            "specType": "2253dbfc-e492-4831-bf43-2678ec29d968",
            "values": [
                {
                    "identifier": "64a997bc-0c09-4878-a63d-d4b1ea87a95c",
                    "exid": "bcc18682-7405-4530-99ab-1decc6f84295",
                    "name": null,
                    "creation_date": "2022-11-01T06:04:14.750216Z",
                    "last_update": "2022-11-01T18:11:09.911734Z",
                    "meta": null,
                    "value": "ddd",
                    "specObject": "8e57b573-4c7a-43b9-a6df-49eae8060312",
                    "attribute": "5f9713db-efb2-41f5-90ab-0c6385768584",
                    "dataType": "578c256b-5c6d-48e6-8e34-a52374dd767b"
                },
                {
                    "identifier": "fe307c47-1894-45b0-b3d0-ecb8e0441ccc",
                    "exid": "cee20a78-be7d-4da3-b814-2a9df2213d46",
                    "name": null,
                    "creation_date": "2022-11-01T06:04:14.756531Z",
                    "last_update": "2022-11-01T18:09:24.355253Z",
                    "meta": null,
                    "value": "{\"blocks\":[{\"key\":\"ddodl\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
                    "specObject": "8e57b573-4c7a-43b9-a6df-49eae8060312",
                    "attribute": "263406b6-6ca3-4947-ba30-7c174dcc3a28",
                    "dataType": "9ba451b5-7248-4e7c-a890-b56bd85edb74"
                },
                {
                    "identifier": "1f883c0d-a4cc-4307-bbe3-40aafa4480d0",
                    "exid": "58bcb07f-2a1c-4750-b2ef-f63457b42bcd",
                    "name": null,
                    "creation_date": "2022-11-01T06:04:14.766091Z",
                    "last_update": "2022-11-01T06:04:14.766091Z",
                    "meta": null,
                    "value": "",
                    "specObject": "8e57b573-4c7a-43b9-a6df-49eae8060312",
                    "attribute": "5e760a55-f0f8-4d7e-b44e-7ede6cc3626b",
                    "dataType": "10db61b4-5299-4a57-855c-dc880c8ad68c"
                },
                {
                    "identifier": "2a2f8b68-75a7-464b-85b3-51d6b8381014",
                    "exid": "98241f43-025d-42d8-964e-41698402749e",
                    "name": null,
                    "creation_date": "2022-11-01T06:04:14.776751Z",
                    "last_update": "2022-11-01T08:24:22.106861Z",
                    "meta": null,
                    "value": "18032d4d-8a1f-4659-be99-fbe2a8432577",
                    "specObject": "8e57b573-4c7a-43b9-a6df-49eae8060312",
                    "attribute": "2767b02a-176e-4788-9048-739c782b5033",
                    "dataType": "4e8b9a61-db38-4c95-9f87-93d1740cba2c"
                }
            ]
        }
    },
    {
        "identifier": "d0196e0f-10a9-45e2-a439-b766a11faa0c",
        "exid": "878c6e41-3ecd-4833-acb8-5d8867f797ef",
        "name": "SPEC-HIERARCHY",
        "creation_date": "2022-11-01T06:04:29.979172Z",
        "last_update": "2022-11-01T06:04:29.984185Z",
        "meta": null,
        "specification": "cfb6c39f-e816-4a82-b95d-3e1b14314665",
        "specObject": "2525222a-dc48-4c61-91b3-2dba06961dec",
        "parent": null,
        "prev": null,
        "next": null,
        "object": {
            "identifier": "2525222a-dc48-4c61-91b3-2dba06961dec",
            "exid": "7ee259ac-d98a-4c00-a2e2-150716999f53",
            "name": "SPEC-OBJECT",
            "creation_date": "2022-11-01T06:04:29.931658Z",
            "last_update": "2022-11-01T06:04:29.935174Z",
            "meta": null,
            "specType": "2253dbfc-e492-4831-bf43-2678ec29d968",
            "values": [
                {
                    "identifier": "264beba6-5f13-4b5e-8016-a46e7b6cef96",
                    "exid": "58131896-dedf-4397-ad75-5c1884809d2a",
                    "name": null,
                    "creation_date": "2022-11-01T06:04:29.950679Z",
                    "last_update": "2022-11-01T18:11:08.700217Z",
                    "meta": null,
                    "value": "sdfs",
                    "specObject": "2525222a-dc48-4c61-91b3-2dba06961dec",
                    "attribute": "5f9713db-efb2-41f5-90ab-0c6385768584",
                    "dataType": "578c256b-5c6d-48e6-8e34-a52374dd767b"
                },
                {
                    "identifier": "15bdac9b-6589-45de-a5b2-5f1ac9ff5bd8",
                    "exid": "d82e082f-c4cc-4481-a9f9-929112206949",
                    "name": null,
                    "creation_date": "2022-11-01T06:04:29.959325Z",
                    "last_update": "2022-11-01T18:11:10.915944Z",
                    "meta": null,
                    "value": "{\"blocks\":[{\"key\":\"2qs65\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
                    "specObject": "2525222a-dc48-4c61-91b3-2dba06961dec",
                    "attribute": "263406b6-6ca3-4947-ba30-7c174dcc3a28",
                    "dataType": "9ba451b5-7248-4e7c-a890-b56bd85edb74"
                },
                {
                    "identifier": "a38e1d4e-04a3-436a-a41f-5a5fd3d6dc62",
                    "exid": "5d72f77a-d432-4436-9066-51649968e659",
                    "name": null,
                    "creation_date": "2022-11-01T06:04:29.967626Z",
                    "last_update": "2022-11-01T06:04:29.967626Z",
                    "meta": null,
                    "value": "",
                    "specObject": "2525222a-dc48-4c61-91b3-2dba06961dec",
                    "attribute": "5e760a55-f0f8-4d7e-b44e-7ede6cc3626b",
                    "dataType": "10db61b4-5299-4a57-855c-dc880c8ad68c"
                },
                {
                    "identifier": "e6bdcf7d-ee31-4125-b390-5b51ff368aa9",
                    "exid": "e3be7531-3cbb-4a2f-af61-f11fc9126f25",
                    "name": null,
                    "creation_date": "2022-11-01T06:04:29.975153Z",
                    "last_update": "2022-11-01T06:04:29.975153Z",
                    "meta": null,
                    "value": "",
                    "specObject": "2525222a-dc48-4c61-91b3-2dba06961dec",
                    "attribute": "2767b02a-176e-4788-9048-739c782b5033",
                    "dataType": "4e8b9a61-db38-4c95-9f87-93d1740cba2c"
                }
            ]
        }
    },
    {
        "identifier": "18dad926-69e3-4b2a-9e6a-a019e3150f43",
        "exid": "5257a978-b229-4951-8e90-9d5827db4774",
        "name": "SPEC-HIERARCHY",
        "creation_date": "2022-11-19T23:00:51.643727Z",
        "last_update": "2022-11-19T23:00:51.691512Z",
        "meta": null,
        "specification": "cfb6c39f-e816-4a82-b95d-3e1b14314665",
        "specObject": "21294c93-7e6f-4640-b50b-01388aab1409",
        "parent": "895ee961-1453-481f-942f-37c849485bcd",
        "prev": null,
        "next": null,
        "object": {
            "identifier": "21294c93-7e6f-4640-b50b-01388aab1409",
            "exid": "c53dfaa9-cfe6-4102-97c1-c916ba472013",
            "name": "SPEC-OBJECT",
            "creation_date": "2022-11-19T23:00:51.646239Z",
            "last_update": "2022-11-19T23:00:51.647745Z",
            "meta": null,
            "specType": "2253dbfc-e492-4831-bf43-2678ec29d968",
            "values": [
                {
                    "identifier": "180f9f92-352b-446e-8b13-5e857b89e83b",
                    "exid": "e466ecd9-408c-41a7-af74-5adcfe9a9e88",
                    "name": null,
                    "creation_date": "2022-11-19T23:00:51.656743Z",
                    "last_update": "2022-11-19T23:00:51.657744Z",
                    "meta": null,
                    "value": "",
                    "specObject": "21294c93-7e6f-4640-b50b-01388aab1409",
                    "attribute": "5f9713db-efb2-41f5-90ab-0c6385768584",
                    "dataType": "578c256b-5c6d-48e6-8e34-a52374dd767b"
                },
                {
                    "identifier": "a1156e8f-95e5-45a5-b065-bb2030af9c24",
                    "exid": "99447558-8820-48bf-8f57-6f0af5aa274b",
                    "name": null,
                    "creation_date": "2022-11-19T23:00:51.667643Z",
                    "last_update": "2022-11-19T23:00:51.667643Z",
                    "meta": null,
                    "value": "",
                    "specObject": "21294c93-7e6f-4640-b50b-01388aab1409",
                    "attribute": "263406b6-6ca3-4947-ba30-7c174dcc3a28",
                    "dataType": "9ba451b5-7248-4e7c-a890-b56bd85edb74"
                },
                {
                    "identifier": "cd4c2ba5-855e-421a-8f69-c1fe3ab4e742",
                    "exid": "0ec27777-046d-4d66-85f1-5edaef85604e",
                    "name": null,
                    "creation_date": "2022-11-19T23:00:51.676669Z",
                    "last_update": "2022-11-19T23:00:51.676669Z",
                    "meta": null,
                    "value": "",
                    "specObject": "21294c93-7e6f-4640-b50b-01388aab1409",
                    "attribute": "5e760a55-f0f8-4d7e-b44e-7ede6cc3626b",
                    "dataType": "10db61b4-5299-4a57-855c-dc880c8ad68c"
                },
                {
                    "identifier": "eb4e2465-17a1-4a4c-8cc1-47066a851d53",
                    "exid": "accd30b9-31a3-4d82-afe6-54af4386c4a0",
                    "name": null,
                    "creation_date": "2022-11-19T23:00:51.685163Z",
                    "last_update": "2022-11-19T23:00:51.685163Z",
                    "meta": null,
                    "value": "",
                    "specObject": "21294c93-7e6f-4640-b50b-01388aab1409",
                    "attribute": "2767b02a-176e-4788-9048-739c782b5033",
                    "dataType": "4e8b9a61-db38-4c95-9f87-93d1740cba2c"
                }
            ]
        }
    },
    {
        "identifier": "7f627b7d-c6b5-4246-9bda-be3084cc19b1",
        "exid": "11a657d5-4592-4f34-8661-04769b19c5de",
        "name": "SPEC-HIERARCHY",
        "creation_date": "2022-11-19T23:01:06.310541Z",
        "last_update": "2022-11-19T23:01:06.355244Z",
        "meta": null,
        "specification": "cfb6c39f-e816-4a82-b95d-3e1b14314665",
        "specObject": "74b12496-474b-4ddd-b09d-bf6d4cca527f",
        "parent": "6e106ed1-28a1-451b-93b5-6e6ab72ccf31",
        "prev": null,
        "next": null,
        "object": {
            "identifier": "74b12496-474b-4ddd-b09d-bf6d4cca527f",
            "exid": "b57fe932-25e7-4805-b160-859e5f7961da",
            "name": "SPEC-OBJECT",
            "creation_date": "2022-11-19T23:01:06.311538Z",
            "last_update": "2022-11-19T23:01:06.313533Z",
            "meta": null,
            "specType": "2253dbfc-e492-4831-bf43-2678ec29d968",
            "values": [
                {
                    "identifier": "ef40e55c-76e4-4293-a743-4cc584656539",
                    "exid": "b421e194-f929-4219-8283-909c0784e7a8",
                    "name": null,
                    "creation_date": "2022-11-19T23:01:06.326053Z",
                    "last_update": "2022-11-19T23:01:06.326053Z",
                    "meta": null,
                    "value": "",
                    "specObject": "74b12496-474b-4ddd-b09d-bf6d4cca527f",
                    "attribute": "5f9713db-efb2-41f5-90ab-0c6385768584",
                    "dataType": "578c256b-5c6d-48e6-8e34-a52374dd767b"
                },
                {
                    "identifier": "0d35ae9d-408b-42df-a184-2afae25bc7fb",
                    "exid": "28dda825-4fc9-4bd6-8183-a458504d7f4e",
                    "name": null,
                    "creation_date": "2022-11-19T23:01:06.337088Z",
                    "last_update": "2022-11-19T23:01:06.337088Z",
                    "meta": null,
                    "value": "",
                    "specObject": "74b12496-474b-4ddd-b09d-bf6d4cca527f",
                    "attribute": "263406b6-6ca3-4947-ba30-7c174dcc3a28",
                    "dataType": "9ba451b5-7248-4e7c-a890-b56bd85edb74"
                },
                {
                    "identifier": "12ee2a9c-d3c2-4260-8e1e-ac7044b4407d",
                    "exid": "7b480ddc-0712-421d-880f-873f8e703026",
                    "name": null,
                    "creation_date": "2022-11-19T23:01:06.342976Z",
                    "last_update": "2022-11-19T23:01:06.342976Z",
                    "meta": null,
                    "value": "",
                    "specObject": "74b12496-474b-4ddd-b09d-bf6d4cca527f",
                    "attribute": "5e760a55-f0f8-4d7e-b44e-7ede6cc3626b",
                    "dataType": "10db61b4-5299-4a57-855c-dc880c8ad68c"
                },
                {
                    "identifier": "e79b1206-f806-4989-8568-9adc20de379f",
                    "exid": "b1839f0c-54f1-4a8a-990b-048e3399edcc",
                    "name": null,
                    "creation_date": "2022-11-19T23:01:06.350256Z",
                    "last_update": "2022-11-19T23:01:06.350256Z",
                    "meta": null,
                    "value": "",
                    "specObject": "74b12496-474b-4ddd-b09d-bf6d4cca527f",
                    "attribute": "2767b02a-176e-4788-9048-739c782b5033",
                    "dataType": "4e8b9a61-db38-4c95-9f87-93d1740cba2c"
                }
            ]
        }
    },
    {
        "identifier": "7f4f690f-af32-4c77-b4da-5b7b96717930",
        "exid": "7b7c00aa-d5e0-41ea-be9a-65084ce5fabd",
        "name": "SPEC-HIERARCHY",
        "creation_date": "2022-11-19T23:03:19.806092Z",
        "last_update": "2022-11-19T23:03:19.844106Z",
        "meta": null,
        "specification": "cfb6c39f-e816-4a82-b95d-3e1b14314665",
        "specObject": "9927204e-f1fa-40c8-b55c-3f4e6cf80cfe",
        "parent": "6e106ed1-28a1-451b-93b5-6e6ab72ccf31",
        "prev": null,
        "next": null,
        "object": {
            "identifier": "9927204e-f1fa-40c8-b55c-3f4e6cf80cfe",
            "exid": "1b8be68b-fd1c-4d3e-87f4-71889fb1994e",
            "name": "SPEC-OBJECT",
            "creation_date": "2022-11-19T23:03:19.807266Z",
            "last_update": "2022-11-19T23:03:19.809129Z",
            "meta": null,
            "specType": "2253dbfc-e492-4831-bf43-2678ec29d968",
            "values": [
                {
                    "identifier": "e108bbb2-8312-4b16-9fc7-2ac98b005210",
                    "exid": "e9fd04c9-9915-4695-b367-909867b77e9f",
                    "name": null,
                    "creation_date": "2022-11-19T23:03:19.821169Z",
                    "last_update": "2022-11-19T23:03:19.821169Z",
                    "meta": null,
                    "value": "",
                    "specObject": "9927204e-f1fa-40c8-b55c-3f4e6cf80cfe",
                    "attribute": "5f9713db-efb2-41f5-90ab-0c6385768584",
                    "dataType": "578c256b-5c6d-48e6-8e34-a52374dd767b"
                },
                {
                    "identifier": "e83b059d-131f-4a4e-a977-eee4facb1983",
                    "exid": "97a418a0-5e77-49c8-8410-aaec96f09bfd",
                    "name": null,
                    "creation_date": "2022-11-19T23:03:19.827381Z",
                    "last_update": "2022-11-19T23:03:19.827381Z",
                    "meta": null,
                    "value": "",
                    "specObject": "9927204e-f1fa-40c8-b55c-3f4e6cf80cfe",
                    "attribute": "263406b6-6ca3-4947-ba30-7c174dcc3a28",
                    "dataType": "9ba451b5-7248-4e7c-a890-b56bd85edb74"
                },
                {
                    "identifier": "2aeaf5fa-da43-4b78-8c92-9b1979d0271b",
                    "exid": "ea2cacb4-4cb0-4dfa-b498-a6b2264a9035",
                    "name": null,
                    "creation_date": "2022-11-19T23:03:19.834096Z",
                    "last_update": "2022-11-19T23:03:19.834096Z",
                    "meta": null,
                    "value": "",
                    "specObject": "9927204e-f1fa-40c8-b55c-3f4e6cf80cfe",
                    "attribute": "5e760a55-f0f8-4d7e-b44e-7ede6cc3626b",
                    "dataType": "10db61b4-5299-4a57-855c-dc880c8ad68c"
                },
                {
                    "identifier": "c43ac5b9-25c5-41d5-b237-5928bf9d7685",
                    "exid": "b09cc2e8-f29a-44e7-8a61-2b9488884e26",
                    "name": null,
                    "creation_date": "2022-11-19T23:03:19.839119Z",
                    "last_update": "2022-11-19T23:03:19.839119Z",
                    "meta": null,
                    "value": "",
                    "specObject": "9927204e-f1fa-40c8-b55c-3f4e6cf80cfe",
                    "attribute": "2767b02a-176e-4788-9048-739c782b5033",
                    "dataType": "4e8b9a61-db38-4c95-9f87-93d1740cba2c"
                }
            ]
        }
    },
    {
        "identifier": "d179cb1e-bcd8-4eff-9e58-517489da0fe0",
        "exid": "ab36219e-1658-4f63-ad6b-d44b36f82252",
        "name": "SPEC-HIERARCHY",
        "creation_date": "2022-11-19T23:03:22.686688Z",
        "last_update": "2022-11-19T23:03:22.719941Z",
        "meta": null,
        "specification": "cfb6c39f-e816-4a82-b95d-3e1b14314665",
        "specObject": "82f8f79f-1875-496d-ac2c-7ea77eaf3127",
        "parent": null,
        "prev": null,
        "next": null,
        "object": {
            "identifier": "82f8f79f-1875-496d-ac2c-7ea77eaf3127",
            "exid": "fcd8424c-d235-4b30-85cf-06760a482cc5",
            "name": "SPEC-OBJECT",
            "creation_date": "2022-11-19T23:03:22.687688Z",
            "last_update": "2022-11-19T23:03:22.688686Z",
            "meta": null,
            "specType": "2253dbfc-e492-4831-bf43-2678ec29d968",
            "values": [
                {
                    "identifier": "56e4981e-c288-46f7-97d5-8bcdb75ef34d",
                    "exid": "a33b83ca-3aa5-445e-86b5-601427b698d4",
                    "name": null,
                    "creation_date": "2022-11-19T23:03:22.696689Z",
                    "last_update": "2022-11-19T23:03:22.696689Z",
                    "meta": null,
                    "value": "",
                    "specObject": "82f8f79f-1875-496d-ac2c-7ea77eaf3127",
                    "attribute": "5f9713db-efb2-41f5-90ab-0c6385768584",
                    "dataType": "578c256b-5c6d-48e6-8e34-a52374dd767b"
                },
                {
                    "identifier": "36260d00-cb05-4b45-8a24-55694acdfe21",
                    "exid": "69c3793d-6aa6-43f1-8f5d-82ad684908a6",
                    "name": null,
                    "creation_date": "2022-11-19T23:03:22.702678Z",
                    "last_update": "2022-11-19T23:03:22.702678Z",
                    "meta": null,
                    "value": "",
                    "specObject": "82f8f79f-1875-496d-ac2c-7ea77eaf3127",
                    "attribute": "263406b6-6ca3-4947-ba30-7c174dcc3a28",
                    "dataType": "9ba451b5-7248-4e7c-a890-b56bd85edb74"
                },
                {
                    "identifier": "c4d2a235-af8a-4a65-93c4-0dfd93bc7d8d",
                    "exid": "0938f284-9e93-4f2b-88e5-1a29aa1882ea",
                    "name": null,
                    "creation_date": "2022-11-19T23:03:22.708449Z",
                    "last_update": "2022-11-19T23:03:22.708449Z",
                    "meta": null,
                    "value": "",
                    "specObject": "82f8f79f-1875-496d-ac2c-7ea77eaf3127",
                    "attribute": "5e760a55-f0f8-4d7e-b44e-7ede6cc3626b",
                    "dataType": "10db61b4-5299-4a57-855c-dc880c8ad68c"
                },
                {
                    "identifier": "7a66a665-a19d-4328-b9d6-6a56ff592216",
                    "exid": "c7706554-2983-4133-ab3e-0465040b1cfa",
                    "name": null,
                    "creation_date": "2022-11-19T23:03:22.714431Z",
                    "last_update": "2022-11-19T23:03:22.714431Z",
                    "meta": null,
                    "value": "",
                    "specObject": "82f8f79f-1875-496d-ac2c-7ea77eaf3127",
                    "attribute": "2767b02a-176e-4788-9048-739c782b5033",
                    "dataType": "4e8b9a61-db38-4c95-9f87-93d1740cba2c"
                }
            ]
        }
    }
]