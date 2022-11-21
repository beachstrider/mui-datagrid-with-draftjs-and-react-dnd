
export interface SpecObjectValue {
    attribute: string;
    identifier: string;
    value: string;
    dataType: string
}
export interface SpecObject {
    identifier: string;
    values: SpecObjectValue[];
}
export interface SpecHierarchyEntry {
    identifier: string;
    parent: string | null;
    prev: string | null;
    next: string | null;
    object: SpecObject;
}

export interface DataType {
    identifier: string;
    enumeration?: object;
    isEnum?: boolean;
    isXHTML?: boolean;
}




export interface EditorColumn {
    identifier: string;
    headerName: string;
}

export interface EditorRow {
    identifier: string;
    value: string;
    dataType: string;
    attribute?:string;
}

export interface EditorEntry {
    identifier: string;
    specObjectId?: string;
    parent?:string;
    prev?:string;
    next?:string;
    values: { [colIdentifier: string]: EditorRow }
    children?: EditorEntry[];
}


