import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  RefreshControl,
  Dimensions
} from "react-native";
import axios from "axios/index";

export default class TedBitzScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tedBitz: [],
      refreshing: false
    };
  }
  static navigationOptions = {
    title: "TedBitz"
  };

  _onRefresh = () => {
    this.setState({ refreshing: true });
    axios
      .get(`http://18.236.78.96:3001/tedBitz/`)
      .then(res => {
        const sortedTedBitz = res.data.tedBitz.reverse();
        this.setState({ tedBitz: sortedTedBitz });
        this.setState({ refreshing: false });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          {this.state.tedBitz.map((m, index) => {
            return (
              <View style={styles.messageCard} key={index}>
                <View style={styles.messageColumn}>
                  <View style={styles.messageWeek}>
                    <Text style={styles.title}>Week {m.week}</Text>
                  </View>
                  {m.bitz.map((b, index) => {
                    return (
                      <Text style={styles.body} key={index}>
                        {b}
                      </Text>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
  componentDidMount() {
    axios
      .get(`http://18.236.78.96:3001/tedBitz/`)
      .then(res => {
        const sortedTedBitz = res.data.tedBitz.reverse();
        this.setState({ tedBitz: sortedTedBitz });
      })
      .catch(err => {
        console.log(err);
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cacaca",
    width: "100%"
  },
  messageCard: {
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 0.2,
    borderBottomColor: "#000"
  },
  messageColumn: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: "100%"
  },
  title: {
    fontSize: 24,
    marginBottom: 5,
    fontWeight: "bold"
  },
  messageWeek: {
    width: "100%",
    alignItems: "center"
  },
  body: {
    fontSize: 17,
    textAlign: "left",
    paddingTop: 15
  },
  date: {
    fontSize: 12,
    marginTop: 8
  }
});
