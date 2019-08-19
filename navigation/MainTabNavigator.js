import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';import HomeScreen from '../screens/HomeScreen';
import MessagesScreen from '../screens/MessagesScreen';
import CalendarScreen from '../screens/CalendarScreen';
import ChampionsScreen from '../screens/ChampionsScreen';
import ChickensScreen from '../screens/ChickensScreen';
import HistoryScreen from '../screens/HistoryScreen';
import TedBitzScreen from '../screens/TedBitzScreen';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    config
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-home`
                    : 'md-home'
            }
        />
    ),
};

HomeStack.path = '';

const CalendarStack = createStackNavigator(
    {
        Calendar: CalendarScreen,
    },
    config
);

CalendarStack.navigationOptions = {
    tabBarLabel: 'Calendar',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'} />
    ),
};

CalendarStack.path = '';

const TedBitzStack = createStackNavigator(
    {
        TedBitz: TedBitzScreen,
    },
    config
);

TedBitzStack.navigationOptions = {
    tabBarLabel: 'TedBitz',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'} />
    ),
};

TedBitzStack.path = '';

const MessagesStack = createStackNavigator(
    {
        Messages: MessagesScreen,
    },
    config
);

MessagesStack.navigationOptions = {
    tabBarLabel: 'Messages',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-alert' : 'md-alert'} />
    ),
};

MessagesStack.path = '';

const HistoryStack = createStackNavigator(
    {
        History: HistoryScreen,
    },
    config
);

HistoryStack.navigationOptions = {
    tabBarLabel: 'History',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-podium' : 'md-podium'} />
    ),
};

HistoryStack.path = '';

const ChampionsStack = createStackNavigator(
    {
        Champions: ChampionsScreen,
    },
    config
);

ChampionsStack.navigationOptions = {
    tabBarLabel: 'Champs',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-trophy' : 'md-trophy'} />
    ),
};

ChampionsStack.path = '';


const ChickensStack = createStackNavigator(
    {
        Chickens: ChickensScreen,
    },
    config
);

ChickensStack.navigationOptions = {
    tabBarLabel: 'Chickens',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-sad' : 'md-sad'} />
    ),
};

ChickensStack.path = '';

const tabNavigator = createBottomTabNavigator({
    HomeStack,
    CalendarStack,
    // TedBitzStack,
    HistoryStack,
    // MessagesStack,
    ChampionsStack,
    ChickensStack
});

tabNavigator.path = '';

export default tabNavigator;
