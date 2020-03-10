import React, { Component } from 'react'
import { StyleSheet, Button, View, StatusBar, Alert } from 'react-native'
import AppNavigator from './lib/router'
import fetch from 'node-fetch'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      route_index: 0
    }
  }

  handleLogout = () => {
    return fetch('http://192.168.0.4:3333/api/v0.0.5/logout',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': `${this.props.token}`
        }
      })
      .then((response) => {
        if (response.status === 200) {
          Alert.alert('Logged out')
          this.props.onLogoutPress()
        } else {
          Alert.alert('Failed to log out')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  handleStateChange = (prevState, newState) => {
    this.setState({ route_index: newState.index })
  }

  render () {
    return (
      <View style={styles.appView}>
        <StatusBar
          backgroundColor='red'
          barStyle='light-content'
        />
        <View style={styles.logoutView}>
          <Button
            onPress={this.handleLogout}
            title='Logout'
            color='black'
          />
        </View>
        <AppNavigator
          onNavigationStateChange={this.handleStateChange}
          screenProps={{
            token: this.props.token,
            id: this.props.id,
            index: this.state.route_index
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  appView: {
    flex: 1
  },
  logoutView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'red'
  }
})

export default App
