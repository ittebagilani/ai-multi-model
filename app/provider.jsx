import React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

function Provider({ children, ...props}) {
  return (
    <div>
      <NextThemesProvider {...props}>
        <div>{children}</div>
      </NextThemesProvider>
    </div>
  )
}

export default Provider
