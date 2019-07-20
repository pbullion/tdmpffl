import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Title, Paragraph, Card } from "react-native-paper";

import brian1 from "../assets/images/champions/brian1.png";
import brian2 from "../assets/images/champions/brian2.png";
import dustin1 from "../assets/images/champions/dustin1.jpeg";
import johnny1 from "../assets/images/champions/johnny1.jpeg";
import zane1 from "../assets/images/champions/zane1.png";
import jake1 from "../assets/images/champions/jake.png";

export default class ChampionsScreen extends React.Component {
  static navigationOptions = {
    header: "Champions"
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          {this.props.data.map((item, index) => {
            return (
              <View style={{ width: "100%" }} key={index}>
                <Animatable.View animation="bounceIn">
                  <Card style={styles.card}>
                    <Card.Cover
                      source={{ uri: item.staffpicture }}
                      style={styles.cardCover}
                    />
                    <Card.Content>
                      <Title
                        style={{ fontFamily: "neutra-text-bold", marginTop: 5 }}
                      >
                        {item.first_name} {item.last_name}
                      </Title>
                    </Card.Content>
                  </Card>
                </Animatable.View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  championsPic: {
    width: Dimensions.get("window").width,
    height: 450,
    resizeMode: "contain",
    marginTop: 10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  header: {
    fontSize: 50,
    marginTop: 45,
    color: "#000",
    textAlign: "center"
  },
  championName: {
    fontSize: 30,
    color: "#000",
    marginTop: 10,
    textAlign: "center"
  },
  championYear: {
    fontSize: 25,
    color: "#000",
    textAlign: "center",
    marginBottom: 10
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "#fff",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
