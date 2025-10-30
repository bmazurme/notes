import React, { useCallback, useMemo, useState } from 'react';
import {
  Icon, Button, Modal, Text, Pagination, type PaginationProps,
} from '@gravity-ui/uikit';
import { Moon, Sun } from '@gravity-ui/icons';
import { type MarkupString } from '@gravity-ui/markdown-editor';

import Note from './Note';
import { Editor } from './Editor';
import { noteData } from '../mocks/note';


function Main({ isDark, setIsDark }
  : { isDark: boolean; setIsDark: (isDark: boolean) => void }) {
  const [open, setOpen] = useState(false);
  const [openAsk, setOpenAsk] = useState(false);
  const [html, setHtml] = useState(noteData.text);
  const handleSubmit = (value: MarkupString) => {
    console.log(value);
    setHtml(value);
  };
  const [state, setState] = React.useState({ page: 1, pageSize: 100 });

  const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) =>
    setState((prevState) => ({ ...prevState, page, pageSize }));

  const pagination = <Pagination page={state.page} pageSize={100} total={1000} onUpdate={handleUpdate} />;
  const notes = [1, 2, 3, 4, 5, 6];

  const handleThemeToggle = useCallback(
    (isDark: boolean) => () => setIsDark(isDark),
    [setIsDark],
  );
  const themeButtons = useMemo(() => (
    <>
      <Button
        view="normal"
        size="m"
        pin="round-clear"
        selected={!isDark}
        aria-label="Светлая тема"
        onClick={handleThemeToggle(false)}
      >
        <Icon data={Sun} size={16} />
      </Button>
      <Button
        view="normal"
        size="m"
        pin="clear-round"
        selected={isDark}
        aria-label="Темная тема"
        onClick={handleThemeToggle(true)}
      >
        <Icon data={Moon} size={16} />
      </Button>
    </>
  ), [isDark, handleThemeToggle]);

  return (
    <div className="layout">
      <div className="gravity-ui-landing-layout__wrapper">
        <div className="gn-action-bar-section gn-action-bar-section_type_primary">
          <Button
            view="outlined"
            size="l"
          >
            notes.ntlstl
          </Button>
          <div className="menu">
            <div>
              signin/logout  
            </div>
            <div>
              {themeButtons}
            </div>
          </div>
        </div>
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
              <Editor onSubmit={handleSubmit} />
            </Modal>

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
          <div className="pagination">
            {pagination}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;
