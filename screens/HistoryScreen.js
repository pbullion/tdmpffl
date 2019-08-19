import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  StatusBar
} from "react-native";
import axios from "axios/index";
import { Col, Grid } from "react-native-easy-grid";

export default class HistoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: null,
      lastUpdated: "",
      refreshing: false
    };
  }
  static navigationOptions = {
    title: "History",
    headerStyle: {
      backgroundColor: "rgb(0,0,0)"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  _onRefresh = () => {
    this.setState({ refreshing: true });
    axios.get(`http://18.237.192.82:3004/tdmpffl/history`).then(res => {
      const history = res.data;
      this.setState({ history });
      this.setState({ refreshing: false });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          <View style={styles.welcomeContainer}>
            <Text style={styles.historyHeader}>Since 2011</Text>
            <Text style={styles.historyHeader2}>
              updated{" "}
              {this.state.history ? this.state.history[0].updated : null}
            </Text>
          </View>
          <View>
            <Grid>
              <Col size={10}>
                <Text style={styles.standingsItemHeader}>Pos</Text>
              </Col>
              <Col size={23}>
                <Text style={styles.standingsItemHeader}>First</Text>
              </Col>
              <Col size={23}>
                <Text style={styles.standingsItemHeader}>Last</Text>
              </Col>
              <Col size={15}>
                <Text style={styles.standingsItemHeader}>%</Text>
              </Col>
              <Col size={15}>
                <Text style={styles.standingsItemHeader}>Win</Text>
              </Col>
              <Col size={15}>
                <Text style={styles.standingsItemHeader}>Loss</Text>
              </Col>
            </Grid>
            {this.state.history
              ? this.state.history.map((item, index) => {
                  return (
                    <Grid style={{ height: 35 }} key={index}>
                      <Col size={10}>
                        <Text style={styles.standingsItem}>{index + 1}</Text>
                      </Col>
                      <Col size={23}>
                        <Text style={styles.standingsItem}>
                          {item.first_name}
                        </Text>
                      </Col>
                      <Col size={23}>
                        <Text style={styles.standingsItem}>
                          {item.last_name}
                        </Text>
                      </Col>
                      <Col size={15}>
                        <Text style={styles.standingsItem}>
                          {item.winPct.toFixed(3)}
                        </Text>
                      </Col>
                      <Col size={15}>
                        <Text style={styles.standingsItem}>{item.wins}</Text>
                      </Col>
                      <Col size={15}>
                        <Text style={styles.standingsItem}>{item.losses}</Text>
                      </Col>
                    </Grid>
                  );
                })
              : null}
            <Text style={{ textAlign: "center", marginHorizontal: 50, marginVertical: 15 }}>
              Doug and Eddie tied one time lolz, it's accounted for but not
              displayed.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }

  componentDidMount() {
    axios.get(`http://18.237.192.82:3004/tdmpffl/history`).then(res => {
      const history = res.data;
      this.setState({ history });
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "neutra-text-light"
  },
  historyWeek: {
    color: "#000",
    fontSize: 30,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 20
  },
  standingsItemHeader: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 15
  },
  standingsItem: {
    color: "#000",
    fontSize: 16,
    textAlign: "center"
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
    marginTop: 0,
    marginBottom: 30
  },
  historyHeader: {
    color: "#000",
    fontSize: 35
  },
  historyHeader2: {
    color: "#000",
    fontSize: 25
  },
  tdmpfflLogo: {
    width: 396,
    height: 306,
    resizeMode: "contain",
    marginTop: 25
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
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
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
    color: "rgba(96,100,109, 1)",
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
