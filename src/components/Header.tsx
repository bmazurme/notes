import { useCallback, useMemo } from 'react';
import { Icon, Button, } from '@gravity-ui/uikit';
import { Moon, Sun } from '@gravity-ui/icons';

function Header({ isDark, setIsDark }
  : { isDark: boolean; setIsDark: (isDark: boolean) => void }) {

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
  )
}

export default Header;
