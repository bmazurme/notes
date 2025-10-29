import { ThemeProvider, Toaster, ToasterComponent, ToasterProvider } from '@gravity-ui/uikit';
import type { MarkupString } from '@gravity-ui/markdown-editor';

import { Editor } from './components/Editor';

const toaster = new Toaster();

function App() {
  const handleSubmit = (value: MarkupString) => {
    console.log(value);
  };

  return (
    <ThemeProvider theme="light">
      <ToasterProvider toaster={toaster}>
        <ToasterComponent />
          <Editor onSubmit={handleSubmit} />
      </ToasterProvider>
    </ThemeProvider>
  )
}

export default App;
