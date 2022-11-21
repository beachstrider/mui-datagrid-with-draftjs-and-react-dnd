import {cols, reqIFMeta, rows} from "./ServerRawData"
import {raw2editorData} from "./helpers"

const parsedData = raw2editorData(rows);
//setData(d);

// to identify cell types
const dataTypes = reqIFMeta.DataTypes;

// Rendering
<Editor
    //onSaveCell={saveCell}
    //onNewEntryClick={onNewEntryClick}
    //dataTypeHandler={dataTypeHandler}
    //onPropertiesClick={onPropertiesClick}
    columns={cols}
    rows={data}
>
</Editor>