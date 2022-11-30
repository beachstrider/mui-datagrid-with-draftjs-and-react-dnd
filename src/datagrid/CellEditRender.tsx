import { useState, useRef, useEffect } from "react"

import { TextField, Switch, Select } from "@mui/material"

import { GridRenderEditCellParams } from "@mui/x-data-grid-pro"

import Editor from "@draft-js-plugins/editor"
import { EditorState } from "draft-js"
import { convertToHTML } from "draft-convert"
import { stateFromHTML } from "draft-js-import-html"

import createToolbarPlugin from "@draft-js-plugins/static-toolbar"

import { Separator } from "@draft-js-plugins/static-toolbar"
import {
  BoldButton,
  ItalicButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
  AlignTextLeftButton,
  AlignTextCenterButton,
  AlignTextRightButton
} from "@draft-js-plugins/buttons"

import buttonStyles from "../css/draftjs/button.module.css"
import toolbarStyles from "../css/draftjs/toolbar.module.css"

export const RichCellEdit = (props: GridRenderEditCellParams) => {
  const { id, value, field, apiRef, setRichToolbar, selectedCellParams } = props

  const [{ plugins, Toolbar }] = useState(() => {
    const toolbarPlugin = createToolbarPlugin({
      theme: { buttonStyles, toolbarStyles }
    })
    const { Toolbar } = toolbarPlugin
    const plugins = [toolbarPlugin]
    return {
      plugins,
      Toolbar
    }
  })

  const toolbar = (
    <Toolbar>
      {(externalProps: any) => (
        <>
          <BoldButton {...externalProps} />
          <ItalicButton {...externalProps} />
          <UnderlineButton {...externalProps} />
          <CodeButton {...externalProps} />
          <Separator />
          <AlignTextLeftButton {...externalProps} />
          <AlignTextCenterButton {...externalProps} />
          <AlignTextRightButton {...externalProps} />
          <Separator />
          <HeadlineOneButton {...externalProps} />
          <HeadlineTwoButton {...externalProps} />
          <HeadlineThreeButton {...externalProps} />
          <Separator />
          <UnorderedListButton {...externalProps} />
          <OrderedListButton {...externalProps} />
          <BlockquoteButton {...externalProps} />
          <CodeBlockButton {...externalProps} />
        </>
      )}
    </Toolbar>
  )

  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(stateFromHTML(value))
  )

  const ref = useRef<any>("editor")

  const handleDraftEditorChange = (state: any) => {
    setEditorState(state)

    const html = convertToHTML(editorState.getCurrentContent())
    apiRef.current.setEditCellValue({ id, field, value: html })
  }

  const handleDraftEditorClick = () => {
    if (ref.current) ref.current.focus()
  }

  const handleFocus = () => {
    setRichToolbar(toolbar)
  }

  useEffect(() => {
    if (selectedCellParams.id === id && selectedCellParams.field === field)
      ref.current.focus()
  }, [selectedCellParams])

  useEffect(() => {
    setRichToolbar(toolbar)
  }, [editorState])

  return (
    <div className="draft-editor-container" onClick={handleDraftEditorClick}>
      <Editor
        editorState={editorState}
        onChange={handleDraftEditorChange}
        plugins={plugins}
        ref={ref}
        onFocus={handleFocus}
      />
    </div>
  )
}

export const BooleanCellEdit = (props: any) => {
  const { apiRef, id, value, field, selectedCellParams } = props

  const ref = useRef<any>()

  useEffect(() => {
    if (selectedCellParams.id === id && selectedCellParams.field === field)
      ref.current.focus()
  }, [selectedCellParams])

  return (
    <Switch
      inputProps={{ style: { fontSize: 14 } }}
      checked={value}
      inputRef={ref}
      onChange={(e) =>
        apiRef.current.setEditCellValue({ id, field, value: e.target.checked })
      }
    />
  )
}

export const StringCellEdit = (props: any) => {
  const { apiRef, id, value, field, type, selectedCellParams } = props

  const ref = useRef<any>()

  useEffect(() => {
    if (selectedCellParams.id === id && selectedCellParams.field === field)
      ref.current.focus()
  }, [selectedCellParams])

  return (
    <TextField
      variant="standard"
      inputProps={{ style: { fontSize: 14 } }}
      type={type}
      value={value}
      onChange={(e) =>
        apiRef.current.setEditCellValue({ id, field, value: e.target.value })
      }
      inputRef={ref}
    />
  )
}

export const SelectCellEdit = (props: any) => {
  const { apiRef, id, value, field, selectedCellParams } = props
  const valueOptions = props.colDef.valueOptions

  const ref = useRef<any>()

  useEffect(() => {
    if (selectedCellParams.id === id && selectedCellParams.field === field)
      ref.current.focus()
  }, [selectedCellParams])

  return (
    <Select
      variant="standard"
      inputProps={{ style: { fontSize: 14 } }}
      native
      inputRef={ref}
      value={value}
      onChange={(e) =>
        apiRef.current.setEditCellValue({ id, field, value: e.target.value })
      }
    >
      {valueOptions.map((el: any, key: number) => (
        <option value={el} key={key}>
          {el}
        </option>
      ))}
    </Select>
  )
}
