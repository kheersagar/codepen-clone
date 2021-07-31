import { useEffect, useState } from 'react';
import './App.css';
import Editor from "./Editor/Editor";

import LocalStorageHook from './LocalStorageHook/LocalStorageHook';

function App() {

  const [html,setHtml] = LocalStorageHook('html','');
  const [css,setCss] = LocalStorageHook('css','');
  const [js,setJs] = LocalStorageHook('js','');
  const [srcDoc,setSrcDoc] = useState('');

  useEffect(() => {
    var timeout  = setTimeout(()=>{
      setSrcDoc( `
      <html>
      <body>
        ${html}
      </body>
      <style>
        ${css}
      </style>
      <script>${js}</script>
      </html>
      `
      );
    },250);
    return () => clearTimeout(timeout)
  }, [html,css,js]);

  return (
    <div className="container_main">
    <div className="App">
    
      <Editor language="xml" onChange={setHtml} heading="HTML" value ={html}/>
    
      <Editor language="css" onChange={setCss} heading="CSS" value ={css}/>
    
      <Editor language="javascript" onChange={setJs} heading="javascript" value ={js}/>
    </div>
    <div className="iframe_wrapper">
      <iframe 
        srcDoc={srcDoc}
        sandbox="allow-scripts"
        width="100%"
        height="100%"
        frameBorder="0"
        className="iframe_output"
      />
    </div>
    </div>
  );
}

export default App;
