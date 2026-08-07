export {}

interface VConsoleInstance {
  setOption: (key: string, value: string) => void
}

interface VConsoleConstructor {
  new (options: { target: string; theme: string }): VConsoleInstance
}

interface ErudaUtil {
  evalCss: {
    setTheme: (theme: string) => void
  }
}

interface ErudaStatic {
  init: (options: { defaults: { theme: string } }) => void
  util: ErudaUtil
}

interface TypedEventBus {
  on: (event: string, handler: (event: any) => void) => void
  off: (event: string, handler: (event: any) => void) => void
  emit: (event: string, detail?: any) => void
}

interface FixitAPI {
  isDark: boolean
  eventBus: TypedEventBus
  [key: string]: any
}

declare global {
  interface Window {
    fixit: FixitAPI
    VConsole?: VConsoleConstructor
    eruda?: ErudaStatic
  }
}
