import React from 'react'
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import Dialog from 'material-ui/Dialog'
import Avatar from 'material-ui/Avatar'
import AppBar from 'material-ui/AppBar'
import { Link } from 'react-router-dom'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import RaisedButton from 'material-ui/RaisedButton'
import { GridList, GridTile } from 'material-ui/GridList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Menu from 'material-ui/svg-icons/navigation/menu'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

class LandingContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar
            style={{
              backgroundColor: '#4DB6AC',
            }}
            iconElementLeft={
              <IconMenu
                iconButtonElement={<MoreVertIcon style={{ fill: 'white' }} />}
              >
                <MenuItem
                  primaryText="About"
                  containerElement={<Link to="/" />}
                />
                <MenuItem
                  primaryText="Projects"
                  containerElement={<Link to="/" />}
                />
                <MenuItem
                  primaryText="Skills"
                  containerElement={<Link to="/" />}
                />
              </IconMenu>
            }
          />
        </MuiThemeProvider>

        <heading
          id="heading"
          style={{
            backgroundImage: 'url(../../hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: '999',
            position: 'fixed',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
          }}
        >
          <h1>Stephanie Dover</h1>
          <h4>Full Stack Software Developer</h4>
        </heading>
      </div>
    )
  }
}

export default LandingContainer
