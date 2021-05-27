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
        main: '#000'
      }},
  })
  theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar >
          <Toolbar >
          <div className={classes.logo}>
          <Link href="/">
              <img src="/Diaxs-170.png" alt="Diaxs-170"/>
              </Link>
          </div>
          <div className={classes.grow} />
          <div className={classes.icons}>
          {/* <Link href="/">
            <Typography variant="h3" color="secondary" >
              Home
            </Typography>
            </Link>
            <Link href="/about">
              <Typography variant="h3" color="secondary">
                about
              </Typography>
          </Link> */}
          </div>
          </Toolbar>
      </AppBar>
      </ThemeProvider>
    </React.Fragment>
  )
}
export default Header;
