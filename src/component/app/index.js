import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import DashboardContainer from '../dashboard-container'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={DashboardContainer} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
