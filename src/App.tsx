import React, { useState } from 'react';
import { ThemeProvider, Toaster, ToasterComponent, ToasterProvider } from '@gravity-ui/uikit';
import { type MarkupString } from '@gravity-ui/markdown-editor';
import Note from './components/Note';
import { Editor } from './components/Editor';

const toaster = new Toaster();


function App() {
  const [html, setHtml] = useState('**some** `$ text`');
  const handleSubmit = (value: MarkupString) => {
    // console.log(value);
    setHtml(value);
  };

  return (
    <ThemeProvider theme="light">
      <ToasterProvider toaster={toaster}>
        <ToasterComponent />
        <div className="gravity-ui-landing-layout__wrapper">
          <div className="pc-Grid gravity-ui-landing-themes__grid">
            <div className="container-fluid">
              <Note value={html} />
              <Note value={html} />
              <Note value={html} />
              <Editor onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </ToasterProvider>
    </ThemeProvider>
  )
}

export default App;
