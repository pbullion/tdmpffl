import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import codywoman from '../assets/images/chickens/codywoman.jpeg'
import dougspraytan from '../assets/images/chickens/dougspraytan.jpeg'
import calebtattoo from '../assets/images/chickens/calebtattoo.png'
import zane from '../assets/images/chickens/zane.jpg'

export default class ChickensScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.header}>Chickens</Text>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
                source={calebtattoo}
                style={styles.chickenPic}
            />
              <Text style={styles.chickenName}>Caleb Jones</Text>
              <Text style={styles.chickenYear}>2017</Text>
              <Text style={styles.chickenPunishment}>Tattoo</Text>
            <Image
                source={zane}
                style={styles.chickenPic}
            />
              <Text style={styles.chickenName}>Zane Grant</Text>
              <Text style={styles.chickenYear}>2016</Text>
              <Text style={styles.chickenPunishment}>Community Service</Text>
              <Image
                source={dougspraytan}
                style={styles.chickenPic}
            />
              <Text style={styles.chickenName}>Doug Sartin</Text>
              <Text style={styles.chickenYear}>2015</Text>
              <Text style={styles.chickenPunishment}>Darkest Spray Tan Possible</Text>
            <Image
              source={codywoman}
              style={styles.chickenPic}
            />
              <Text style={styles.chickenName}>Cody Guidry</Text>
              <Text style={styles.chickenYear}>2014</Text>
              <Text style={styles.chickenPunishment}>Drag on 6th Street</Text>
          </View>

        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  chickenPic: {
    width: Dimensions.get('window').width,
    height: 450,
    resizeMode: 'contain',
    marginTop: 10,
  },
    header: {
        fontSize: 50,
        marginTop: 45,
        color: '#000',
        textAlign: 'center'
    },
    chickenName: {
        fontSize: 30,
        color: '#000',
        marginTop: 10,
        textAlign: 'center',
    },
    chickenYear: {
        fontSize: 25,
        color: '#000',
        textAlign: 'center'
    },
    chickenPunishment: {
        fontSize: 25,
        color: '#000',
        textAlign: 'center',
        marginBottom: 10
    },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  chicken: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
