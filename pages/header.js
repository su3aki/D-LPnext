import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
// import Image from 'next/image'
import { Link } from '@material-ui/core'
const Header = () => {

  const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    icons: {
      display: 'flex',
    },
  }))
  const classes = useStyles()
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#000'
      },
      secondary: {
        main: '#FFFF'
      }},
  })
  theme.typography.h3 = {
  fontSize: '0.5rem',
  '@media (min-width:600px)': {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.9rem',
  },
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar >
          <Toolbar >
          <div className={classes.logo}>
          <Link href="https://diaxs.net">
              <img src="/Diaxs-170.png" alt="Diaxs-170"/>
              </Link>
            </div>
            <Typography variant="h3">Vtuber Audition Page</Typography>
          <div className={classes.grow} />
          <div className={classes.icons}>
            <Link href="https://diaxs.net">
                <Typography variant="h3" color="secondary">
                  DiAXS公式HPはこちら
                </Typography>
            </Link>
          </div>
          </Toolbar>
      </AppBar>
      </ThemeProvider>
    </React.Fragment>
  )
}
export default Header;
