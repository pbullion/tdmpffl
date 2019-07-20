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
import { Icon } from "expo";

export default class MessagesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      refreshing: false
    };
  }
  static navigationOptions = {
    title: "Messages"
  };

  _onRefresh = () => {
    this.setState({ refreshing: true });
    axios.get(`http://18.236.78.96:3001/messages/`).then(res => {
      console.log(res.data.messages);
      const sortedMessages = res.data.messages.reverse();
      this.setState({ messages: sortedMessages });
      this.setState({ refreshing: false });
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
          {this.state.messages.map((m, index) => {
            return (
              <View style={styles.messageCard} key={index}>
                <Icon.Ionicons
                  name={m.icon}
                  size={40}
                  style={{ marginBottom: -3 }}
                  color={m.iconColor}
                />
                <View style={styles.messageColumn}>
                  <Text style={styles.title}>{m.title}</Text>
                  <Text style={styles.body}>{m.body}</Text>
                  <Text style={styles.date}>{m.date}</Text>
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
      .get(`http://18.236.78.96:3001/messages/`)
      .then(res => {
        const sortedMessages = res.data.messages.reverse();
        this.setState({ messages: sortedMessages });
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
    height: 125,
    paddingHorizontal: 20,
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
    alignItems: "center",
    padding: 20,
    width: "100%"
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold"
  },
  body: {
    fontSize: 15
  },
  date: {
    fontSize: 12,
    marginTop: 8
  }
});
