'use strict'

import React, { Component } from 'react';
import { AsyncStorage, NavigatorIOS, AppRegistry, StyleSheet, Text, TextInput, View,
  TouchableHighlight, ActivityIndicator, Image }
  from 'react-native';
var t = require('tcomb-form-native');

var Storage_Key = 'id_token';

var Form = t.form.Form;

var Person = t.struct({
  username: t.String,
  password: t.String
});

const options = {};

class LoginPage extends Component {

  async _onValueChange(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.log('AsyncStorage error:' + error.message);
    }
  }

  _userSignup() {
    var value = this.refs.form.getValue();
    if (value) {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: value.username,
          password: value.password,
        })
      })
      .then((response) => respsonse.json())
      .then((responseData) => {
        this.onValueChange(STORAGE_KEY, responseData.id_token),
        AlertIOS.alert(
          "Signup Success!"
        );
      })
      .done();
    }
  }

  render()
    {
        return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>Signup/Login into Motivation</Text>
            </View>
            <View style={styles.row}>
                <Form
                    ref="form"
                    type={Person}
                    options={options}
                />
            </View>
            <View style={styles.row}>
                <TouchableHighlight style={styles.button} onPress={this._userSignup} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={this._userLogin} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>
            </View>
        );
    }
}


var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
});

module.exports = LoginPage;
