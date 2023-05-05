import { useState } from 'react';
import { EditorState, RichUtils, convertFromRaw } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import { BlockStyleControls, InlineStyleControls } from './Toobars';
import 'draft-js/dist/Draft.css';
import { ContentBlock } from 'draft-js';

// type ProgressFunction = (percent: number, file: { name: string }) => void;
// type SucessFunction = (uploadedFiles: { name: string; src: string }[]) => void;
// type FailFunction = (failedFile: { name: string; src?: string }) => void;

export default function TextEditor() {
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

  return (
    <div className="App">
      <div className="editor__container">
        <div className="toolbar mb-2 flex">
          <BlockStyleControls
            editorState={editorState}
            onToggle={toggleBlockType}
          />{' '}
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
            blockStyleFn={BlockStyleStyling}
          />
        </div>
      </div>
    </div>
  );
}
