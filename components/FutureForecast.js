import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity, Button} from 'react-native'
import moment from 'moment-timezone'

const printVal = (otp) => {
    console.log(otp)
}

const FutureForecast = ({data}) => {
    return (
        <View style={{flexDirection: 'row'}}>
            {
                data && data.length > 0 ?
                data.map((data, idx) => (
                    idx !== 0 && <TouchableOpacity key={idx} onPress={printVal}><FutureForecastItem forecastItem={data}/></TouchableOpacity> 
                ))
                :
                <View/>
            }
        </View>
    )
}


const FutureForecastItem = ({forecastItem}) => {
    let img
    switch(forecastItem.weather[0].icon){
        case '01d': img = require('../assets/icons/wi-day-sunny.jpg'); break;
        case '01n': img = require('../assets/icons/wi-night-clear.jpg'); break;
        case '02d': img = require('../assets/icons/wi-day-cloudy.jpg'); break;
        case '02n': img = require('../assets/icons/wi-night-alt-cloudy.jpg'); break;
        case '03d': img = require('../assets/icons/wi-cloud.jpg'); break;
        case '03n': img = require('../assets/icons/wi-cloud.jpg'); break;
        case '04d': img = require('../assets/icons/wi-cloudy.jpg'); break;
        case '04n': img = require('../assets/icons/wi-cloudy.jpg'); break;
        case '09d': img = require('../assets/icons/wi-day-showers.jpg'); break;
        case '09n': img = require('../assets/icons/wi-night-alt-showers.jpg'); break;
        case '10d': img = require('../assets/icons/wi-day-rain.jpg'); break;
        case '10n': img = require('../assets/icons/wi-night-alt-rain.jpg'); break;
        case '11d': img = require('../assets/icons/wi-day-thunderstorm.jpg'); break;
        case '11n': img = require('../assets/icons/wi-night-alt-thunderstorm.jpg'); break;
        case '13d': img = require('../assets/icons/wi-day-snow.jpg'); break;
        case '13n': img = require('../assets/icons/wi-night-alt-snow.jpg'); break;
        case '50d': img = require('../assets/icons/wi-day-fog.jpg'); break;
        case '50n': img = require('../assets/icons/wi-night-fog.jpg'); break;
    }

    //const img = {uri: "http://openweathermap.org/img/wn/"+forecastItem.weather[0].icon+"@2x.png"}
    //const img = require('../assets/icons/'+w_icon_map[forecastItem.weather[0].icon]+'.jpg')
    //const img = require('../assets/icons/wi-day-sunny.png')
    //console.log(forecastItem)
    return (
        <View  style={styles.futureForecastItemContainer}>
            <Text style={styles.date}>{moment(forecastItem.dt * 1000).format('Do MMM')}</Text>
            <Text  style={styles.day}>{moment(forecastItem.dt * 1000).format('dddd')}</Text>
            <Image source={img} style={styles.image} />
            <Text  style={styles.desc}>{forecastItem.weather[0].description}</Text> 
            <Text  style={styles.temp_n}>Night - {forecastItem.temp.night}&#176;C</Text>
            <Text  style={styles.temp_d}>Day - {forecastItem.temp.day}&#176;C</Text>
        </View>
    )
}

export default FutureForecast


const styles = StyleSheet.create({
    image: {
        width: 100,
        height:100,
        borderRadius: 100
    },
    futureForecastItemContainer: {
        flex:1,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
        borderRadius: 100,
        marginLeft: 10
    },

    day: {
        padding: 0,
        fontSize: 12,
        //fontWeight: "600",
        textAlign: "center"
    },
    date: {
        fontSize: 12,
        textAlign: "center",
        fontWeight:"500"

    },
    desc: {
        fontSize: 12,
        fontWeight:"500",
        textAlign: "center",
    },
    temp_n: {
        fontSize: 12,
        color:"black",
        fontWeight:"500",
        textAlign: "center"
    },
    temp_d: {
        fontSize: 12,
        color:"black",
        fontWeight:"500",
        textAlign: "center"
    }
})