import {SpecHierarchyEntry, SpecObjectValue, EditorEntry, EditorRow} from "./Types"


export const raw2editorData = function (rawEntries: SpecHierarchyEntry[]):EditorEntry[]  {
    var rowss:EditorEntry[] = [];
    var objsDict:{[identifier:string]: EditorEntry} = {}

    for (var i = 0; i < rawEntries.length; i++) {
        const entry: SpecHierarchyEntry = rawEntries[i];
        const values: SpecObjectValue[] = entry.object.values;
        
        
        const edEntry: EditorEntry = {
            "identifier": entry.identifier, // specHierarchyID
            "specObjectId": entry.object.identifier,
            "values": {},
            "children": []
        };
        objsDict[entry.identifier] = edEntry;

        if(entry.parent){
            if(objsDict[entry.parent]){
                objsDict[entry.parent].children.push(edEntry)
            }
        }

        for (var j = 0; j < values.length; j++) {
            const item = values[j];
            const row:EditorRow = { "identifier": item.identifier, "value": item.value, "dataType": item.dataType };
            edEntry["values"][item.attribute] = row;
        }
        rowss.push(edEntry);
    }
    console.log(objsDict)
    return rowss;
}