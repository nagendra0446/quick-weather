import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity, Button} from 'react-native'
import moment from 'moment-timezone'
const FutureForecast = ({data}) => {
    return (
        <View style={{flexDirection: 'row'}}>

            {
                data && data.length > 0 ? 

                data.map((data, idx) => (

                    idx !== 0 &&  <FutureForecastItem key={idx} forecastItem={data}/>
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
        <TouchableOpacity onPress={() => console.log('Clicked')}>
        <View  style={styles.futureForecastItemContainer}>
        
            <Text  style={styles.day}>{moment(forecastItem.dt * 1000).format('ddd')}</Text>
            <Image source={img} style={styles.image} />
            <Text  style={styles.temp}>{forecastItem.weather[0].description}</Text> 
            <Text  style={styles.temp}>Night - {forecastItem.temp.night}&#176;C</Text>
            <Text  style={styles.temp}>Day - {forecastItem.temp.day}&#176;C</Text>
        
        </View>
        </TouchableOpacity>
    )
}

export default FutureForecast


const styles = StyleSheet.create({
    image: {
        width: 100,
        height:100,
        //backgroundColor: '#E5890A',
        borderRadius: 100
    }, 
    futureForecastItemContainer: {
        flex:1,
        padding: 20,
        backgroundColor: '#F3F4ED',
        borderRadius: 2,
        marginLeft: 10
    }, 
    day: {
        padding: 0,
        fontSize: 12,
        color:"black",
        textAlign:"center",
        fontWeight: "600",
    },   
    temp: {
        fontSize: 12,
        color:"black",
        fontWeight:"600",
        textAlign:"center"
    },
})