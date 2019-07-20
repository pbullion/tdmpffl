import React, { Component } from 'react';
import axios from 'axios';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import {Agenda} from 'react-native-calendars';

export default class CalendarScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {}
        };
    }
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <Agenda
                items={this.state.items}
                renderItem={this.renderItem.bind(this)}
                renderEmptyData={this.renderEmptyDate.bind(this)}
                rowHasChanged={this.rowHasChanged.bind(this)}
                theme={{
                    calendarBackground: 'white',
                    agendaKnobColor: 'green',
                    backgroundColor: '#fff',
                }}
                style={styles.calendar}
            />
        );
    }
    componentDidMount() {
        axios.get(`http://api.jsonbin.io/b/5b5ce535f24d8943d04f2a00`)
            .then(res => {
                const items = res.data.calendar;
                this.setState({ items });
            });
    }

    renderItem(item) {
        return (
            <View style={[styles.item, {height: item.height}]}><Text style={{ color: '#fff' }}>{item.name}</Text></View>
        );
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}><Text></Text></View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }
}

const styles = StyleSheet.create({
    calendar: {
        marginTop: 35
    },
    item: {
        backgroundColor: '#000',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
    },
    emptyDate: {
        height: 15,
        flex:1,
        paddingTop: 30
    }
});
