
import { theme } from '../../theme'

type CustomTheme = typeof theme;
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends theme{}
}
