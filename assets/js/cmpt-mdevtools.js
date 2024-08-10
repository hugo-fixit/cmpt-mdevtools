function initMDevtools() {
  const type = window.mDevtools;
  const fixit = window.fixit;
  if (typeof window.orientation === 'undefined') {
    return;
  }
  if (type === 'vConsole') {
    const vConsole = new VConsole({
      target: '.widgets',
      theme: fixit.isDark ? 'dark' : 'light'
    });
    fixit._vConsoleOnSwitchTheme = fixit._vConsoleOnSwitchTheme || (() => {
      vConsole.setOption('theme', fixit.isDark ? 'dark' : 'light');
    });
    fixit.switchThemeEventSet.add(fixit._vConsoleOnSwitchTheme);
  }
  if(type === 'eruda') {
    eruda.init({
      defaults: { theme: fixit.isDark ? 'Dark' : 'Light' }
    });
    fixit._erudaOnSwitchTheme = fixit._erudaOnSwitchTheme || (() => {
      eruda.util.evalCss.setTheme(fixit.isDark ? 'Dark' : 'Light');
    });
    fixit.switchThemeEventSet.add(fixit._erudaOnSwitchTheme);
  }
}

if (document.readyState !== 'loading') {
  initMDevtools();
} else {
  document.addEventListener('DOMContentLoaded', initMDevtools, false);
}
