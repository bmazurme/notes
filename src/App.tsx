import {  useState } from 'react';
import { Toaster, ToasterComponent, ToasterProvider } from '@gravity-ui/uikit';

import ThemeWrapper from './components/theme-wrapper/theme-wrapper';
import Main from './components/Main';

const toaster = new Toaster();

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeWrapper isDark={isDark}>
      <ToasterProvider toaster={toaster}>
        <ToasterComponent />
        <Main
          isDark={isDark}
          setIsDark={setIsDark}
        />
      </ToasterProvider>
    </ThemeWrapper>
  )
}

export default App;
