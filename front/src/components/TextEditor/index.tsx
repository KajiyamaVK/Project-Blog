import { useState } from 'react';
import {
  EditorState,
  RichUtils,
  convertFromRaw,
  getDefaultKeyBinding,
  DraftHandleValue,
  ContentState,
  Modifier,
  convertToRaw,
} from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import { BlockStyleControls, InlineStyleControls } from './Toobars';
import 'draft-js/dist/Draft.css';
import { ContentBlock } from 'draft-js';
import { Button } from '@mui/material';

// type ProgressFunction = (percent: number, file: { name: string }) => void;
// type SucessFunction = (uploadedFiles: { name: string; src: string }[]) => void;
// type FailFunction = (failedFile: { name: string; src?: string }) => void

export default function TextEditor(): JSX.Element {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const toggleBlockType = (blockType: string) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  function myBlockStyleFn(contentBlock: ContentBlock) {
    const type = contentBlock.getType();
    if (type === 'blockquote') {
      return 'superFancyBlockquote';
    }
  }

  const onTab = (e: React.KeyboardEvent) => {
    e.preventDefault();
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();
    const newContentState = Modifier.insertText(
      contentState,
      selectionState,
      '    '
    );
    const newEditorState = EditorState.push(
      editorState,
      newContentState,
      'insert-characters'
    );
    setEditorState(newEditorState);
  };

  const handleSaveDraft = () => {
    const contentState = editorState.getCurrentContent();
    const raw = convertToRaw(contentState); // Convert to RawDraftContentState
    //const converted = convertFromRaw(raw); // Convert from RawDraftContentState
    console.log(typeof raw, raw);
  };

  return (
    <div className="App">
      <div className="editor__container">
        <div className="toolbar mb-2 flex">
          <BlockStyleControls
            editorState={editorState}
            onToggle={toggleBlockType}
          />
          {'    '}
          <p className="font-bold text-gray-500">|</p>
          <InlineStyleControls
            editorState={editorState}
            onToggle={toggleInlineStyle}
          />
        </div>
        <div className="editor rounded-md border-2 border-solid border-gray-100 bg-white p-2 text-gray-900">
          <Editor
            editorState={editorState}
            onChange={setEditorState}
            onTab={onTab}
          />
        </div>
        <Button
          variant="contained"
          className="mt-2 bg-green-700"
          onClick={handleSaveDraft}
        >
          Gravar Rascunho
        </Button>
      </div>
    </div>
  );
}
