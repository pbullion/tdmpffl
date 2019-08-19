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
import codywoman from "../assets/images/chickens/codywoman.jpeg";
import dougspraytan from "../assets/images/chickens/dougspraytan.png";
import calebtattoo from "../assets/images/chickens/calebtattoo.png";
import zane from "../assets/images/chickens/zane.jpg";
import brian1 from "../assets/images/chickens/brian1.jpeg";
import brian2 from "../assets/images/chickens/brian2.jpeg";
import brian3 from "../assets/images/chickens/brian3.jpeg";

export default class ChickensScreen extends React.Component {
  static navigationOptions = {
    title: "Chickens",
    headerStyle: {
      backgroundColor: "rgb(0,0,0)"
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
                    2018
                  </Text>
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
                    Bring a chicken to a bar
                  </Text>
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
                    (the original punishment)
                  </Text>
                </View>
              </Card.Content>
            </Card>
          </Animatable.View>
          <Animatable.View animation="bounceIn">
            <Card style={styles.card}>
              <Card.Cover source={calebtattoo} style={styles.cardCover} />
              <Card.Content>
                <Title
                  style={{
                    fontFamily: "neutra-text-bold",
                    marginTop: 10,
                    textAlign: "center",
                    fontSize: 25
                  }}
                >
                  Caleb Jones
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
                    Tattoo
                  </Text>
                </View>
              </Card.Content>
            </Card>
          </Animatable.View>
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
                    2016
                  </Text>
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
                    Community Service
                  </Text>
                </View>
              </Card.Content>
            </Card>
          </Animatable.View>
          <Animatable.View animation="bounceIn">
            <Card style={styles.card}>
              <Card.Cover source={dougspraytan} style={styles.cardCover} />
              <Card.Content>
                <Title
                  style={{
                    fontFamily: "neutra-text-bold",
                    marginTop: 10,
                    textAlign: "center",
                    fontSize: 25
                  }}
                >
                  Doug Sartin
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
                    Darkest Spray Tan
                  </Text>
                </View>
              </Card.Content>
            </Card>
          </Animatable.View>
          <Animatable.View animation="bounceIn">
            <Card style={styles.card}>
              <Card.Cover source={codywoman} style={styles.cardCover} />
              <Card.Content>
                <Title
                  style={{
                    fontFamily: "neutra-text-bold",
                    marginTop: 10,
                    textAlign: "center",
                    fontSize: 25
                  }}
                >
                  Cody Guidry
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
                    Drag on 6th Street
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
    height: 700
  }
});
