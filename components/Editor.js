
import React, { memo, useCallback, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



const Editor = (props) => {
    const {onChange} = props;

  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        onChange={(event,editor)=>{
            onChange(editor.getData());
        }} // Pass the memoized function
      />
    </>
  );
};

export default Editor;
