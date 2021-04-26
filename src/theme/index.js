
import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from "./colors"

export const theme = createMuiTheme({
    palette: {
        background: {
            light: colors.background.light,
            dark: colors.background.dark
        }
    }
})

