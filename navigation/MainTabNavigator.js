import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MessagesScreen from '../screens/MessagesScreen';
import CalendarScreen from '../screens/CalendarScreen';
import ChampionsScreen from '../screens/ChampionsScreen';
import ChickensScreen from '../screens/ChickensScreen';
import HistoryScreen from '../screens/HistoryScreen';
import TedBitzScreen from '../screens/TedBitzScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-home${focused ? '' : '-outline'}`
                    : 'md-home'
            }
        />
    ),
};

const CalendarStack = createStackNavigator({
    Calendar: CalendarScreen,
});

CalendarStack.navigationOptions = {
    tabBarLabel: 'Calendar',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-calendar${focused ? '' : '-outline'}` : 'md-calendar'}
        />
    ),
};

const TedBitzStack = createStackNavigator({
    TedBitz: TedBitzScreen,
});

TedBitzStack.navigationOptions = {
    tabBarLabel: 'TedBitz',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-book${focused ? '' : '-outline'}` : 'md-book'}
        />
    ),
};

const MessagesStack = createStackNavigator({
    Messages: MessagesScreen,
});

MessagesStack.navigationOptions = {
    tabBarLabel: 'Messages',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-alert${focused ? '' : '-outline'}` : 'md-alert'}
        />
    ),
};
const HistoryStack = createStackNavigator({
    History: HistoryScreen,
});

HistoryStack.navigationOptions = {
    tabBarLabel: 'History',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-podium${focused ? '' : '-outline'}` : 'md-podium'}
        />
    ),
};

const ChampionsStack = createStackNavigator({
    Champions: ChampionsScreen,
});

ChampionsStack.navigationOptions = {
    tabBarLabel: 'Champs',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-trophy${focused ? '' : '-outline'}` : 'md-trophy'}
        />
    ),
};

const ChickensStack = createStackNavigator({
    Chickens: ChickensScreen,
});

ChickensStack.navigationOptions = {
    tabBarLabel: 'Chickens',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-sad${focused ? '' : '-outline'}` : 'md-sad'}
        />
    ),
};

export default createBottomTabNavigator({
    HomeStack,
    TedBitzStack,
    HistoryStack,
    CalendarStack,
    MessagesStack,
    ChampionsStack,
    ChickensStack,
});
