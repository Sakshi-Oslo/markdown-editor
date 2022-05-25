import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./App.css";

export default function App(){
  const [input, setInput]= useState();
  return(
    <div className="App">
      <textarea autoFocus className="textarea" value={input} 
      onChange= {(e) => setInput(e.target.value)} 
      />
      <ReactMarkdown source={input} className="markdown" renderers={{
        code: Component,
      }} />
    </div>
  );
}

const Component = ({value, language}) => {
  return(
    <SyntaxHighlighter language= {language && null} style={dark} children={value}>
      {value ?? ''}
    </SyntaxHighlighter>
  )

}
