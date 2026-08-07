import params from '@params'

function isMobile(): boolean {
  return navigator.maxTouchPoints > 0 && /Mobi|Android/i.test(navigator.userAgent)
}

function initMDevtools(): void {
  const type = params.mDevtoolsType
  const fixit = window.fixit
  if (!isMobile()) return

  if (type === 'vConsole' && window.VConsole) {
    const vConsole = new window.VConsole({
      target: '.widgets',
      theme: fixit.isDark ? 'dark' : 'light'
    })
    fixit.eventBus.on('fixit:switch-theme', ({ detail }: CustomEvent<{ isDark: boolean, isChanged: boolean }>) => {
      if (!detail.isChanged) return
      vConsole.setOption('theme', detail.isDark ? 'dark' : 'light')
    })
    return
  }

  if (type === 'eruda' && window.eruda) {
    window.eruda.init({
      defaults: { theme: fixit.isDark ? 'Dark' : 'Light' }
    })
    fixit.eventBus.on('fixit:switch-theme', ({ detail }: CustomEvent<{ isDark: boolean, isChanged: boolean }>) => {
      if (!detail.isChanged) return
      window.eruda!.util.evalCss.setTheme(detail.isDark ? 'Dark' : 'Light')
    })
  }
}

document.addEventListener('DOMContentLoaded', initMDevtools, false)
