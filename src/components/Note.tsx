import { useRef } from 'react';
import { Button, Card, Icon, Label, Text } from '@gravity-ui/uikit';
import transform from '@diplodoc/transform';
import { YfmStaticView } from '@gravity-ui/markdown-editor';
import { Pencil, TrashBin } from '@gravity-ui/icons';

import style from './Note.module.css';


export default function Note({ value, setOpen, setOpenAsk }
  : { value: string; setOpen: (v: boolean) => void; setOpenAsk: (v: boolean) => void }) {
  const divRef = useRef<HTMLDivElement>(null);
  const res = transform(value, { });

  return <Card style={{
    // height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}} view="filled" type="container" size="l">
    <div className={style.container}>
      <Text variant="subheader-3">Title: some text</Text>
      <div className={style.tools}>
        <Button
          view="flat"
          size="s"
          onClick={() => setOpen(true)}
        >
          <Icon data={Pencil} size={18} />
        </Button>
        <Button
          view="flat"
          size="s"
          onClick={() => setOpenAsk(true)}
        >
          <Icon data={TrashBin} size={18} />
        </Button>
      </div>

      <div className={style.block}>
        <YfmStaticView
          ref={divRef}
          html={res.result.html}
          noListReset
          className="demo-preview"
        />
      </div>

      <div className={style.tags}>
        <Label theme="normal">Normal</Label>
        <Label theme="info">Info</Label>
        <Label theme="success">Success</Label>
      </div>
    </div>
  </Card>;
};
