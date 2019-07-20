import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import axios from "axios/index";
import logo from "../assets/images/TDMPFFLblack.png";
import moment from "moment";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStandings: [],
      currentWeek: "",
      refreshing: false
    };
  }
  static navigationOptions = {
    header: null
  };

  _onRefresh = () => {
    this.setState({ refreshing: true });
    axios.get(`http://localhost:3001/standings`).then(res => {
      console.log(res);
      const currentStandings = res.data;
      currentStandings.sort(function(a, b) {
        return a.record.divisionStanding > b.record.divisionStanding
          ? 1
          : b.record.divisionStanding > a.record.divisionStanding
          ? -1
          : 0;
      });
      this.setState({ currentStandings });
    });
    axios.get(`http://localhost:3001/standings/scoreboard`).then(res => {
      console.log(res.data);
      const scoreboard = res.data;
      this.setState({ scoreboard });
      this.setState({ refreshing: false });
    });
  };

  render() {
    const day = moment(new Date()).format("dddd");
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}

          refreshControl=
          {
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }>
          <View style={styles.welcomeContainer}>
            <Image source={logo} style={styles.tdmpfflLogo} />
            <Text style={styles.currentScoreboardHeader}>Scoreboard</Text>
            {this.state.scoreboard
              ? this.state.scoreboard.map((item, index) => {
                  return (
                    <View style={styles.messageCard} key={index}>
                      <View style={styles.messageRow}>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <Text
                            style={[
                              styles.standing,
                              {
                                fontWeight:
                                  item.teams[0].team.record.overallStanding <= 6
                                    ? "bold"
                                    : "normal",
                                fontSize:
                                  item.teams[0].team.record.overallStanding <= 6
                                    ? 18
                                    : 15
                              }
                            ]}
                          >
                            {item.teams[0].team.record.overallStanding}
                          </Text>
                          <Text style={styles.teamName}>
                            {item.teams[0].team.teamLocation}{" "}
                            {item.teams[0].team.teamNickname}
                          </Text>
                          <Text style={{ marginLeft: 8 }}>
                            ({item.teams[0].team.record.overallWins}-
                            {item.teams[0].team.record.overallLosses})
                          </Text>
                        </View>
                        <Text style={styles.score}>{item.teams[0].score}</Text>
                      </View>
                      <View style={styles.messageRow}>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <Text
                            style={[
                              styles.standing,
                              {
                                fontWeight:
                                  item.teams[1].team.record.overallStanding <= 6
                                    ? "bold"
                                    : "normal",
                                fontSize:
                                  item.teams[1].team.record.overallStanding <= 6
                                    ? 18
                                    : 15
                              }
                            ]}
                          >
                            {item.teams[1].team.record.overallStanding}
                          </Text>
                          <Text style={styles.teamName}>
                            {item.teams[1].team.teamLocation}{" "}
                            {item.teams[1].team.teamNickname}
                          </Text>
                          <Text style={{ marginLeft: 8 }}>
                            ({item.teams[1].team.record.overallWins}-
                            {item.teams[1].team.record.overallLosses})
                          </Text>
                        </View>
                        <Text style={styles.score}>{item.teams[1].score}</Text>
                      </View>
                    </View>
                  );
                })
              : null}
            <Text style={styles.currentStandingsHeader}>Current Standings</Text>
            <Grid>
              <Col size={1}>
                <Text style={styles.standingsItemHeader}>Pos</Text>
              </Col>
              <Col size={2}>
                <Text style={styles.standingsItemHeader}>Team</Text>
              </Col>
              <Col size={1}>
                <Text style={styles.standingsItemHeader}>Win</Text>
              </Col>
              <Col size={1}>
                <Text style={styles.standingsItemHeader}>Loss</Text>
              </Col>
            </Grid>
            {this.state.currentStandings
              ? this.state.currentStandings.map((item, index) => {
                  return (
                    <Grid style={{ height: 35 }} key={index}>
                      <Col size={1}>
                        <Text
                          style={[
                            styles.standingsItem,
                            {
                              fontWeight:
                                item.record.divisionStanding <= 6
                                  ? "bold"
                                  : "normal"
                            }
                          ]}
                        >
                          {item.record.divisionStanding}
                        </Text>
                      </Col>
                      <Col size={2}>
                        <Text
                          style={[
                            styles.standingsItem,
                            {
                              fontWeight:
                                item.record.divisionStanding <= 6
                                  ? "bold"
                                  : "normal"
                            }
                          ]}
                        >
                          {item.owners[0].firstName} {item.owners[0].lastName}
                        </Text>
                      </Col>
                      <Col size={1}>
                        <Text
                          style={[
                            styles.standingsItem,
                            {
                              fontWeight:
                                item.record.divisionStanding <= 6
                                  ? "bold"
                                  : "normal"
                            }
                          ]}
                        >
                          {item.record.divisionWins}
                        </Text>
                      </Col>
                      <Col size={1}>
                        <Text
                          style={[
                            styles.standingsItem,
                            {
                              fontWeight:
                                item.record.divisionStanding <= 6
                                  ? "bold"
                                  : "normal"
                            }
                          ]}
                        >
                          {item.record.divisionLosses}
                        </Text>
                      </Col>
                    </Grid>
                  );
                })
              : null}
          </View>
        </ScrollView>
      </View>
    );
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/standings`).then(res => {
      // console.log(res);
      const currentStandings = res.data;
      currentStandings.sort(function(a, b) {
        return a.record.divisionStanding > b.record.divisionStanding
          ? 1
          : b.record.divisionStanding > a.record.divisionStanding
          ? -1
          : 0;
      });
      this.setState({ currentStandings });
    });
    axios.get(`http://localhost:3001/standings/scoreboard`).then(res => {
      // console.log(res.data);
      const scoreboard = res.data;
      // console.log('scoreboard *******', scoreboard);
      this.setState({ scoreboard });
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40
  },
  messageCard: {
    backgroundColor: "#fff",
    height: 100,
    paddingHorizontal: 15,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderBottomWidth: 0.2,
    borderBottomColor: "#000"
  },
  messageRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  standing: {
    fontSize: 18,
    marginRight: 5
  },
  teamName: {
    fontSize: 17
  },
  score: {
    fontSize: 25
  },
  projected: {
    fontSize: 15
  },
  teamImage: {
    borderRadius: 100,
    height: 50,
    width: 50
  },
  currentStandingsHeader: {
    color: "#000",
    fontSize: 40,
    textAlign: "center",
    marginTop: 25,
    paddingBottom: 20
  },
  currentScoreboardHeader: {
    color: "#000",
    fontSize: 40,
    textAlign: "center",
    marginTop: 25,
    paddingBottom: 20
  },
  currentStandingsWeek: {
    color: "#000",
    fontSize: 30,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 20
  },
  standingsItemHeader: {
    color: "#000",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 15
  },
  standingsItem: {
    color: "#000",
    fontSize: 18,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 0,
    paddingBottom: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 0,
    marginBottom: 20
  },
  tdmpfflLogo: {
    width: 396,
    height: 306,
    resizeMode: "contain",
    marginTop: 0
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
