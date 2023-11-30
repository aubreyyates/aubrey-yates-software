// project import
import { useState } from 'react';
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { ThemeToggleContext } from 'themes/context';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => {
  const [themeMode, setThemeMode] = useState('light');

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeToggleContext.Provider value={{ toggleTheme, themeMode }}>
      <ThemeCustomization themeMode={themeMode}>
        <ScrollTop>
          <Routes />
        </ScrollTop>
      </ThemeCustomization>
    </ThemeToggleContext.Provider>
  );
};

export default App;
