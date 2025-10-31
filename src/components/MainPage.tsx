import React, { useState } from 'react';
import {
  Button, Modal, Pagination, TextInput, type PaginationProps,
} from '@gravity-ui/uikit';
import { type MarkupString } from '@gravity-ui/markdown-editor';

import Note from './Note';
import Header from './Header';
import ModalConfirm from './ModalConfirm';
import { Editor } from './Editor';
import { noteData } from '../mocks/note';

function Main({ isDark, setIsDark }
  : { isDark: boolean; setIsDark: (isDark: boolean) => void }) {
  const [open, setOpen] = useState(false);
  const [openAsk, setOpenAsk] = useState(false);
  const [html, setHtml] = useState(noteData.text);
  const handleSubmit = (value: MarkupString) => {
    // console.log(value);
    setHtml(value);
  };
  const [state, setState] = React.useState({ page: 1, pageSize: 100 });

  const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) =>
    setState((prevState) => ({ ...prevState, page, pageSize }));

  const pagination = <Pagination page={state.page} pageSize={100} total={1000} onUpdate={handleUpdate} />;
  const notes = [1, 2, 3, 4, 5, 6];

  return (
    <div className="layout">
      <div className="gravity-ui-landing-layout__wrapper">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <div className="pc-Grid gravity-ui-landing-themes__grid">
          <div className="container-fluid">
            <div>
              <Button
                view="action"
                size="l"
                onClick={() => setOpen(true)}
              >
                Add note
              </Button>
            </div>
            {notes.map((x) => <Note key={x} title={noteData.title} value={html} setOpen={setOpen} setOpenAsk={setOpenAsk} />)}

            <Modal open={open} onClose={() => setOpen(false)}>
              <div className="modal">
                <div className="modal__title_input">
                  <TextInput placeholder="Placeholder" size="m" />
                </div>
                <div>
                  <Editor onSubmit={handleSubmit} />
                </div>
              </div>
            </Modal>

            <ModalConfirm
              openAsk={openAsk}
              setOpenAsk={setOpenAsk}
            />
          </div>
          <div className="pagination">
            {pagination}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;
