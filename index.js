/** @format */
import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Home from './app/components/home/home';
import About from './app/components/About/About';
import Contact from './app/components/contact/contact';

export default class bussnesApp extends Component {
    render() {
        return (
            <View>
                <Home />
                <About />
                <Contact />
            </View>
        );
    }
}

AppRegistry.registerComponent('bussnesApp', () => bussnesApp);
