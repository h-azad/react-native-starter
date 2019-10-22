import React, { Component } from 'react';
import Icon from '@expo/vector-icons/Ionicons';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomeScreen from './screens/WelcomeScreen';
import DashboardScreen from './screens/DashboardScreen';
import Detail from './screens/Detail';
import Profile from './screens/Profile';
import Setting from './screens/Setting';
import Feed from './screens/Feed';


const FeedStackNavigator = createStackNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'Feed',
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name='md-menu'
                        size={30} />
                )
            }
        }
    },
    Detail: {
        screen: Detail
    }
}, {
    defaultNavigationOptions: {
        gesturesEnabled: false
    }
})
const ProfileStackNavigator = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'Profile',
                headerLeft:
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name='md-menu'
                        size={30} />
            }
        }
    }
})
const SettingStackNavigator = createStackNavigator({
    Setting: {
        screen: Setting,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'Setting',
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name='md-menu'
                        size={30} />
                )
            }
        }
    }
})

const DashboardTabNavigator = createBottomTabNavigator({
    FeedStackNavigator,
    ProfileStackNavigator,
    SettingStackNavigator
}, {
    navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];

        return {
            header: null,
            headerTitle: routeName
        };
    }
})

const DashboardStackNavigator = createStackNavigator({
    DashboardTabNavigator: DashboardTabNavigator
}, {
    defaultNavigationOptions: ({ navigation }) => {
        return {
            headerLeft: <Icon
                style={{ paddingLeft: 10 }}
                onPress={() => navigation.openDrawer()}
                name='md-menu'
                size={30} />
        };
    }
});



const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: { screen: DashboardStackNavigator }
});

const AppSwitchNavigator = createSwitchNavigator({
    Welcome: { screen: WelcomeScreen },
    Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;