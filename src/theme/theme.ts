// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

// 3. extend the theme
const theme = extendTheme(
  { config },
  {
    styles: {
      global: {
        'html, body': {
          fontSize: 'md',
        }
      },
    },
  }
)

export default theme
