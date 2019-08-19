import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar
} from "react-native";
import { Title, Card } from "react-native-paper";
import * as Animatable from "react-native-animatable";

import brian1 from "../assets/images/champions/brian1.png";
import brian2 from "../assets/images/champions/brian2.png";
import dustin1 from "../assets/images/champions/dustin1.jpeg";
import johnny1 from "../assets/images/champions/johnny1.jpeg";
import zane1 from "../assets/images/champions/zane1.png";
import jake1 from "../assets/images/champions/jake.png";
import zane from "../assets/images/chickens/zane.jpg";

export default class ChampionsScreen extends React.Component {
  static navigationOptions = {
    title: "Champions",
    headerStyle: {
      backgroundColor: "rgba(0,0,0,0.99)"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View style={{ width: "100%" }}>
          <Animatable.View animation="bounceIn">
            <Card style={styles.card}>
              <Card.Cover source={zane} style={styles.cardCover} />
              <Card.Content>
                <Title
                  style={{
                    fontFamily: "neutra-text-bold",
                    marginTop: 10,
                    textAlign: "center",
                    fontSize: 25
                  }}
                >
                  Zane Grant
                </Title>
                <View
                  style={{
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                    margin: 10
                  }}
                >
                  <Text
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 15,
                      fontFamily: "neutra-text-bold",
                      fontSize: 20,
                      textAlign: "center"
                    }}
                  >
                    2018
                  </Text>
                </View>
              </Card.Content>
            </Card>
          </Animatable.View>
          <Animatable.View animation="bounceIn">
            <Card style={styles.card}>
              <Card.Cover source={jake1} style={styles.cardCover} />
              <Card.Content>
                <Title
                  style={{
                    fontFamily: "neutra-text-bold",
                    marginTop: 10,
                    textAlign: "center",
                    fontSize: 25
                  }}
                >
                  Jake Smith
                </Title>
                <View
                  style={{
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                    margin: 10
                  }}
                >
                  <Text
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 15,
                      fontFamily: "neutra-text-bold",
                      fontSize: 20,
                      textAlign: "center"
                    }}
                  >
                    2017
                  </Text>
                </View>
              </Card.Content>
            </Card>
          </Animatable.View>
          <Animatable.View animation="bounceIn">
            <Card style={styles.card}>
              <Card.Cover source={brian1} style={styles.cardCover} />
              <Card.Content>
                <Title
                  style={{
                    fontFamily: "neutra-text-bold",
                    marginTop: 10,
                    textAlign: "center",
                    fontSize: 25
                  }}
                >
                  Brian Broussard
                </Title>
                <View
                  style={{
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                    margin: 10
                  }}
                >
                  <Text
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 15,
                      fontFamily: "neutra-text-bold",
                      fontSize: 20,
                      textAlign: "center"
                    }}
                  >
                    2016
                  </Text>
                </View>
              </Card.Content>
            </Card>
          </Animatable.View>
          <Animatable.View animation="bounceIn">
            <Card style={styles.card}>
              <Card.Cover source={brian2} style={styles.cardCover} />
              <Card.Content>
                <Title
                  style={{
                    fontFamily: "neutra-text-bold",
                    marginTop: 10,
                    textAlign: "center",
                    fontSize: 25
                  }}
                >
                  Brian Broussard{" "}
                </Title>
                <View
                  style={{
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                    margin: 10
                  }}
                >
                  <Text
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 15,
                      fontFamily: "neutra-text-bold",
                      fontSize: 20,
                      textAlign: "center"
                    }}
                  >
                    2015
                  </Text>
                </View>
              </Card.Content>
            </Card>
          </Animatable.View>
          <Animatable.View animation="bounceIn">
            <Card style={styles.card}>
              <Card.Cover source={brian1} style={styles.cardCover} />
              <Card.Content>
                <Title
                  style={{
                    fontFamily: "neutra-text-bold",
                    marginTop: 10,
                    textAlign: "center",
                    fontSize: 25
                  }}
                >
                  Brian Broussard{" "}
                </Title>
                <View
                  style={{
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                    margin: 10
                  }}
                >
                  <Text
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 15,
                      fontFamily: "neutra-text-bold",
                      fontSize: 20,
                      textAlign: "center"
                    }}
                  >
                    2014
                  </Text>
                </View>
              </Card.Content>
            </Card>
          </Animatable.View>
          <Animatable.View animation="bounceIn">
            <Card style={styles.card}>
              <Card.Cover source={dustin1} style={styles.cardCover} />
              <Card.Content>
                <Title
                  style={{
                    fontFamily: "neutra-text-bold",
                    marginTop: 10,
                    textAlign: "center",
                    fontSize: 25
                  }}
                >
                  Dustin Williams{" "}
                </Title>
                <View
                  style={{
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                    margin: 10
                  }}
                >
                  <Text
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 15,
                      fontFamily: "neutra-text-bold",
                      fontSize: 20,
                      textAlign: "center"
                    }}
                  >
                    2013
                  </Text>
                </View>
              </Card.Content>
            </Card>
          </Animatable.View>

          <Animatable.View animation="bounceIn">
            <Card style={styles.card}>
              <Card.Cover source={zane1} style={styles.cardCover} />
              <Card.Content>
                <Title
                  style={{
                    fontFamily: "neutra-text-bold",
                    marginTop: 10,
                    textAlign: "center",
                    fontSize: 25
                  }}
                >
                  Zane Grant{" "}
                </Title>
                <View
                  style={{
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                    margin: 10
                  }}
                >
                  <Text
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 15,
                      fontFamily: "neutra-text-bold",
                      fontSize: 20,
                      textAlign: "center"
                    }}
                  >
                    2012
                  </Text>
                </View>
              </Card.Content>
            </Card>
          </Animatable.View>

          <Animatable.View animation="bounceIn">
            <Card style={styles.card}>
              <Card.Cover source={johnny1} style={styles.cardCover} />
              <Card.Content>
                <Title
                  style={{
                    fontFamily: "neutra-text-bold",
                    marginTop: 10,
                    textAlign: "center",
                    fontSize: 25
                  }}
                >
                  Jonathan Meier
                </Title>
                <View
                  style={{
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                    margin: 10
                  }}
                >
                  <Text
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 15,
                      fontFamily: "neutra-text-bold",
                      fontSize: 20,
                      textAlign: "center"
                    }}
                  >
                    2011
                  </Text>
                </View>
              </Card.Content>
            </Card>
          </Animatable.View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 5
  },
  card: {
    marginHorizontal: 4,
    marginVertical: 8
    // height: 1000
  },
  cardCover: {
    width: "100%",
    height: 500
  }
});
