import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl
} from "react-native";
import axios from "axios/index";
import { Col, Grid } from "react-native-easy-grid";

export default class HistoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overallRecords: null,
      lastUpdated: "",
      refreshing: false
    };
  }
  static navigationOptions = {
    header: null
  };

  _onRefresh = () => {
    this.setState({ refreshing: true });
    axios
      .get(`http://api.jsonbin.io/b/5b5ce535f24d8943d04f2a00/latest`)
      .then(res => {
        console.log(res.data.overallRecords);
        const overallRecords = res.data.overallRecords.records;
        const lastUpdated = res.data.overallRecords.lastUpdated;
        this.setState({ overallRecords });
        this.setState({ lastUpdated });
        this.setState({ refreshing: false });
      });
  };

  render() {
    return (
      <View style={styles.container}>
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
            <Text style={styles.historyHeader}>Overall Records</Text>
            <Text style={styles.historyHeader}>since 2011</Text>
            <Text style={styles.historyHeader2}>
              updated {this.state.lastUpdated}
            </Text>
          </View>
          <View>
            <Grid>
              <Col size={10}>
                <Text style={styles.standingsItemHeader}>Pos</Text>
              </Col>
              <Col size={45}>
                <Text style={styles.standingsItemHeader}>Name</Text>
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
            {this.state.overallRecords
              ? this.state.overallRecords.map(item => {
                  return (
                    <Grid style={{ height: 35 }} key={item.position}>
                      <Col size={10}>
                        <Text style={styles.standingsItem}>
                          {item.position}
                        </Text>
                      </Col>
                      <Col size={45}>
                        <Text style={styles.standingsItem}>{item.name}</Text>
                      </Col>
                      <Col size={15}>
                        <Text style={styles.standingsItem}>{item.percent}</Text>
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
          </View>
        </ScrollView>
      </View>
    );
  }

  componentDidMount() {
    axios
      .get(`http://api.jsonbin.io/b/5b5ce535f24d8943d04f2a00/latest`)
      .then(res => {
        console.log(res.data.overallRecords);
        const overallRecords = res.data.overallRecords.records;
        const lastUpdated = res.data.overallRecords.lastUpdated;
        this.setState({ overallRecords });
        this.setState({ lastUpdated });
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  overallRecordsHeader: {
    color: "#000",
    fontSize: 30,
    textAlign: "center",
    marginTop: 25
  },
  overallRecordsWeek: {
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
    marginTop: 30,
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

// import React from 'react';
// import {
//     Platform,
//     ScrollView,
//     StyleSheet,
//     Text,
//     View,
//     RefreshControl
// } from 'react-native';
// import axios from "axios/index";
// import {Col, Grid} from "react-native-easy-grid";
//
// export default class HistoryScreen extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             overallRecords: null,
//             lastUpdated: '',
//             refreshing: false,
//             Williams: {},
//             Grant: {},
//             Smith: {},
//             Broussard: {},
//             Meier: {},
//             Capistran: {},
//             Sartin: {},
//             Bullion: {},
//             Guidry: {},
//             Jones: {},
//             Medalla: {},
//             Vredenburgh: {},
//             dataReceived: false
//         }
//     }
//     static navigationOptions = {
//         header: null,
//     };
//
//     _onRefresh = () => {
//         this.setState({refreshing: true});
//         axios.get(`http://api.jsonbin.io/b/5b5ce535f24d8943d04f2a00/latest`)
//             .then(res => {
//                 console.log(res.data.overallRecords);
//                 const overallRecords = res.data.overallRecords.records;
//                 const lastUpdated = res.data.overallRecords.lastUpdated;
//                 this.setState({ overallRecords });
//                 this.setState({ lastUpdated });
//                 this.setState({ refreshing: false });
//             });
//     };
//
//     render() {
//         const standings = [
//             {
//                 firstName: 'Dustin',
//                 lastName: 'Williams',
//                 wins: 20 + this.state.Williams.wins,
//                 losses: 15 + this.state.Williams.losses
//             },
//             {
//                 firstName: 'Jake',
//                 lastName: 'Smith',
//                 wins: 20 + this.state.Smith.wins,
//                 losses: 15 + this.state.Smith.losses
//             },
//             {
//                 firstName: 'Brian',
//                 lastName: 'Broussard',
//                 wins: 20 + this.state.Broussard.wins,
//                 losses: 15 + this.state.Broussard.losses
//             },
//             {
//                 firstName: 'Jonathan',
//                 lastName: 'Meier',
//                 wins: 20 + this.state.Meier.wins,
//                 losses: 15 + this.state.Meier.losses
//             },
//             {
//                 firstName: 'Eddie',
//                 lastName: 'Capistran',
//                 wins: 20 + this.state.Capistran.wins,
//                 losses: 15 + this.state.Capistran.losses
//             },
//             {
//                 firstName: 'Doug',
//                 lastName: 'Sartin',
//                 wins: 20 + this.state.Sartin.wins,
//                 losses: 15 + this.state.Sartin.losses
//             },
//             {
//                 firstName: 'Zane',
//                 lastName: 'Grant',
//                 wins: 20 + this.state.Grant.wins,
//                 losses: 15 + this.state.Grant.losses
//             },
//             {
//                 firstName: 'Patrick',
//                 lastName: 'Bullion',
//                 wins: 20 + this.state.Bullion.wins,
//                 losses: 15 + this.state.Bullion.losses
//             },
//             {
//                 firstName: 'Cody',
//                 lastName: 'Guidry',
//                 wins: 20 + this.state.Guidry.wins,
//                 losses: 15 + this.state.Guidry.losses
//             },
//             {
//                 firstName: 'Caleb',
//                 lastName: 'Jones',
//                 wins: 20 + this.state.Jones.wins,
//                 losses: 15 + this.state.Jones.losses
//             },
//             {
//                 firstName: 'Ray',
//                 lastName: 'Medalla',
//                 wins: 20 + this.state.Medalla.wins,
//                 losses: 15 + this.state.Medalla.losses
//             },
//             {
//                 firstName: 'Jason',
//                 lastName: 'Vredenburgh',
//                 wins: 20 + this.state.Vredenburgh.wins,
//                 losses: 15 + this.state.Vredenburgh.losses
//             },
//         ];
//         console.log(standings);
//         return (
//             <View style={styles.container}>
//                 <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
//                     refreshControl={
//                     <RefreshControl
//                         refreshing={this.state.refreshing}
//                         onRefresh={this._onRefresh}
//                     />
//                     }
//                     <View style={styles.welcomeContainer}>
//                         <Text style={styles.historyHeader}>Overall Records</Text>
//                         {/*<Text style={styles.historyHeader}>since 2011</Text>*/}
//                         <Text style={styles.historyHeader2}>updated {this.state.lastUpdated}</Text>
//                     </View>
//                     <View>
//                         <Grid>
//                             <Col size={10}><Text style={styles.standingsItemHeader}>Pos</Text></Col>
//                             <Col size={45}><Text style={styles.standingsItemHeader}>Name</Text></Col>
//                             <Col size={15}><Text style={styles.standingsItemHeader}>%</Text></Col>
//                             <Col size={15}><Text style={styles.standingsItemHeader}>Win</Text></Col>
//                             <Col size={15}><Text style={styles.standingsItemHeader}>Loss</Text></Col>
//                         </Grid>
//                         {/*<Table height={375} columnWidth={60} columns={columns} dataSource={this.state.overallRecords} style={styles.overallRecordsTable}/>*/}
//                         {standings ? standings.map((item, index) => {
//                             console.log('******************', item.firstName);
//                             console.log('******************', item.wins);
//                             console.log('******************', item);
//                             console.log('******************', index);
//                             return (
//                                 <Grid style={{ height: 35 }} key={index}>
//                                     <Col size={10}><Text style={styles.standingsItem}>{index + 1}</Text></Col>
//                                     <Col size={45}><Text style={styles.standingsItem}>{item.firstName} {item.lastName}</Text></Col>
//                                     <Col size={15}><Text style={styles.standingsItem}>{item.losses}</Text></Col>
//                                     <Col size={15}><Text style={styles.standingsItem}>{item.wins}</Text></Col>
//                                     <Col size={15}><Text style={styles.standingsItem}>{item.losses}</Text></Col>
//                                 </Grid>
//                             )
//                         }) : null}
//                     </View>
//                 </ScrollView>
//             </View>
//         );
//     }
//     componentDidMount() {
//         axios.get(`http://18.236.78.96:3001/standings`)
//             .then(res => {
//                 const overallRecords = res.data;
//                 // console.log("overall records", overallRecords);
//                 // console.log("owner", overallRecords[0].owners[0].lastName);
//                 // console.log("record", overallRecords[0].record.overallWins);
//                 // overallRecords.sort(function(a,b) {return (a.record.divisionStanding > b.record.divisionStanding) ? 1 : ((b.record.divisionStanding > a.record.divisionStanding) ? -1 : 0);} );
//                 for (let i = 0; i <= overallRecords.length; i++) {
//                     // const team = overallRecords[i];
//                     const newTeam = {
//                         wins: overallRecords[i].record.overallWins,
//                         losses: overallRecords[i].record.overallLosses
//                     };
//                     this.setState({ [team.owners[0].lastName]: newTeam })
//                 }
//                 this.setState({ dataReceived: true });
//             });
//     }
//     //
//     // componentDidMount() {
//     //     axios.get(`http://api.jsonbin.io/b/5b5ce535f24d8943d04f2a00/latest`)
//     //         .then(res => {
//     //             console.log(res.data.overallRecords);
//     //             const overallRecords = res.data.overallRecords.records;
//     //             const lastUpdated = res.data.overallRecords.lastUpdated;
//     //             this.setState({ overallRecords });
//     //             this.setState({ lastUpdated });
//     //         });
//     // }
//
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     overallRecordsHeader: {
//         color: '#000',
//         fontSize: 30,
//         textAlign: 'center',
//         marginTop: 25
//     },
//     overallRecordsWeek: {
//         color: '#000',
//         fontSize: 30,
//         textAlign: 'center',
//         marginTop: 5,
//         marginBottom: 20
//     },
//     standingsItemHeader: {
//         color: '#000',
//         fontSize: 20,
//         textAlign: 'center',
//         marginBottom: 15
//     },
//     standingsItem: {
//         color: '#000',
//         fontSize: 16,
//         textAlign: 'center'
//     },
//     developmentModeText: {
//         marginBottom: 20,
//         color: 'rgba(0,0,0,0.4)',
//         fontSize: 14,
//         lineHeight: 19,
//         textAlign: 'center',
//     },
//     contentContainer: {
//         paddingTop: 30,
//     },
//     welcomeContainer: {
//         alignItems: 'center',
//         marginTop: 30,
//         marginBottom: 30,
//     },
//     historyHeader: {
//         color: '#000',
//         fontSize: 35,
//     },
//     historyHeader2: {
//         color: '#000',
//         fontSize: 25,
//     },
//     tdmpfflLogo: {
//         width: 396,
//         height: 306,
//         resizeMode: 'contain',
//         marginTop: 25,
//     },
//     getStartedContainer: {
//         alignItems: 'center',
//         marginHorizontal: 50,
//     },
//     homeScreenFilename: {
//         marginVertical: 7,
//     },
//     codeHighlightText: {
//         color: 'rgba(96,100,109, 0.8)',
//     },
//     codeHighlightContainer: {
//         backgroundColor: 'rgba(0,0,0,0.05)',
//         borderRadius: 3,
//         paddingHorizontal: 4,
//     },
//     getStartedText: {
//         fontSize: 17,
//         color: 'rgba(96,100,109, 1)',
//         lineHeight: 24,
//         textAlign: 'center',
//     },
//     tabBarInfoContainer: {
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//         ...Platform.select({
//             ios: {
//                 shadowColor: 'black',
//                 shadowOffset: { height: -3 },
//                 shadowOpacity: 0.1,
//                 shadowRadius: 3,
//             },
//             android: {
//                 elevation: 20,
//             },
//         }),
//         alignItems: 'center',
//         backgroundColor: '#fbfbfb',
//         paddingVertical: 20,
//     },
//     tabBarInfoText: {
//         fontSize: 17,
//         color: 'rgba(96,100,109, 1)',
//         textAlign: 'center',
//     },
//     navigationFilename: {
//         marginTop: 5,
//     },
//     helpContainer: {
//         marginTop: 15,
//         alignItems: 'center',
//     },
//     helpLink: {
//         paddingVertical: 15,
//     },
//     helpLinkText: {
//         fontSize: 14,
//         color: '#2e78b7',
//     },
// });
