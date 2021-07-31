import React from 'react'
import CodeMirror from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/twilight.css'
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/blackboard.css';

import "codemirror/mode/xml/xml"
import "codemirror/mode/css/css"
import "codemirror/mode/javascript/javascript"


import { Controlled  as ControlledEditor } from 'react-codemirror2';

import "./Editor.css"

function Editor(props) {
  const {heading,language,onChange,value} = props;
  function handleChange(editor, data, value){
    onChange(value)
    // console.log(value)
  }
  return (
    <div className="editor_main">
      <div className="heading">
        {heading}
      </div>
        <ControlledEditor 
        value={value}
        onBeforeChange={handleChange}
        options={{
          mode: {language},
          theme: 'material',
          lineNumbers: true,
          lineWrapping:true,
          tabSize:2,
        }}
        className="codemirror-wrapper"
        />
    </div>
    
  )
}

export default Editor
