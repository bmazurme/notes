import { Card, Label, Text } from '@gravity-ui/uikit';
import { YfmStaticView, type MarkupString } from '@gravity-ui/markdown-editor';

import style from './Note.module.css';
import { useRef, useState } from 'react';
import transform from '@diplodoc/transform';

export default function Note({ value }: { value: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [html, setHtml] = useState('');
  // const [meta, setMeta] = useState<object | undefined>({});

  // const handleSubmit = (value: MarkupString) => {
    // console.log(value);

    const res = transform(value, { });
    // setHtml(res.result.html);
    // setMeta(res.result.meta);
  // };

  return <Card style={{
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}} view="filled" type="container" size="l">
    <div className={style.container}>
      <Text variant="display-1">some text</Text>
      Filled
      <YfmStaticView
        ref={divRef}
        html={res.result.html}
        noListReset
        className="demo-preview"
      />
      <div className={style.tags}>
        <Label theme="normal">Normal</Label>
        <Label theme="info">Info</Label>
        <Label theme="success">Success</Label>
        <Label theme="warning">Warning</Label>
        <Label theme="danger">Danger</Label>
        <Label theme="utility">Utility</Label>
        <Label theme="unknown">Unknown</Label>
        <Label theme="clear">Clear</Label>
      </div>
    </div>
  </Card>;
};
