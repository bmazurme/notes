import { useState } from 'react';
import {
  Button, Modal, ThemeProvider, Toaster, ToasterComponent, ToasterProvider, Text, Pagination, type PaginationProps,
} from '@gravity-ui/uikit';
import { type MarkupString } from '@gravity-ui/markdown-editor';

import Note from './components/Note';
import { Editor } from './components/Editor';
import React from 'react';

const toaster = new Toaster();

function App() {
  const [open, setOpen] = useState(false);
  const [openAsk, setOpenAsk] = useState(false);
  const [html, setHtml] = useState('**some** `$ text`');
  const handleSubmit = (value: MarkupString) => {
    setHtml(value);
  };
  const [state, setState] = React.useState({ page: 1, pageSize: 100 });

  const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) =>
    setState((prevState) => ({ ...prevState, page, pageSize }));

  const pagination = <Pagination page={state.page} pageSize={100} total={1000} onUpdate={handleUpdate} />;
  const notes = [1, 2, 3, 4, 5, 6];

  return (
    <ThemeProvider theme="light">
      <ToasterProvider toaster={toaster}>
        <ToasterComponent />
        <div className="gravity-ui-landing-layout__wrapper">
          <div className="gn-action-bar-section gn-action-bar-section_type_primary">
            <Button
              view="outlined"
              size="l"
            >
              notes.ntlstl
            </Button>
            signin/logout - dark/light
          </div>
          <div className="pc-Grid gravity-ui-landing-themes__grid">
            <div className="container-fluid">
            <Button
              view="action"
              size="l"
              onClick={() => setOpen(true)}
            >
              Add note
            </Button>
              {notes.map((x) => <Note key={x} value={html} setOpen={setOpen} setOpenAsk={setOpenAsk} />)}
              <Modal open={open} onClose={() => setOpen(false)}>
                <Editor onSubmit={handleSubmit} />
              </Modal>
              {/* <Pagination page={1} pageSize={100} total={1000} onUpdate={handleUpdate} /> */}
              <div className="pagination">
                {pagination}
              </div>
              <Modal open={openAsk} onClose={() => setOpenAsk(false)}>
                <Text variant="subheader-3">Title: some text</Text>
                <Button
                  view="outlined"
                  size="s"
                  onClick={() => setOpenAsk(false)}
                >
                  No
                </Button>
                <Button
                  view="action"
                  size="s"
                >
                  Yes
                </Button>
              </Modal>
            </div>
          </div>
        </div>
      </ToasterProvider>
    </ThemeProvider>
  )
}

export default App;
