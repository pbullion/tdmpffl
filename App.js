import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';


async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      'nanum-gothic': require('./assets/fonts/NanumGothic-Regular.ttf'),
      'neutra-text-light': require('./assets/fonts/NeutraText-Light.otf'),
      'neutra-text-bold': require('./assets/fonts/NeutraText-Bold.otf')
    }),
  ]);
}

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  //
  // registerForPushNotifications = async () => {
  //   Expo.Notifications.setBadgeNumberAsync(0);
  //   const { status: existingStatus } = await Permissions.getAsync(
  //       Permissions.NOTIFICATIONS
  //   );
  //   let finalStatus = existingStatus;
  //
  //   // only ask if permissions have not already been determined, because
  //   // iOS won't necessarily prompt the user a second time.
  //   if (existingStatus !== 'granted') {
  //     // Android remote notification permissions are granted during the app
  //     // install, so this will only ask on iOS
  //     const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  //     finalStatus = status;
  //   }
  //
  //   // Stop here if the user did not grant permissions
  //   if (finalStatus !== 'granted') {
  //     return;
  //   }
  //
  //   // Get the token that uniquely identifies this device
  //   let token = await Notifications.getExpoPushTokenAsync();
  //   axios.post(`http://localhost:3001/users/`, {
  //     expoToken: token
  //   }, {
  //     headers: {
  //       "content-type": "application/json"
  //     }
  //   })
  //       .then(function (response) {
  //         // console.log('response', response);
  //       })
  //       .catch(function (error) {
  //         console.log('error', error);
  //       });
  // };
  //
  // componentDidMount() {
  //   this.registerForPushNotifications()
  // }

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
        <AppLoading
            startAsync={loadResourcesAsync}
            onError={handleLoadingError}
            onFinish={() => handleFinishLoading(setLoadingComplete)}
        />
    );
  } else {
    return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
    );
  }
}


function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
