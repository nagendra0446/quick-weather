import React from 'react'
import {View, ScrollView, Image, Text, StyleSheet} from 'react-native'
import moment from 'moment-timezone'
const HourlyScroll = ({weatherData}, dayNum) => {
    
    //console.log(typeof(weatherData))
    //weatherData.forEach(element => console.log(element));
    return (
        <ScrollView horizontal={true} style={styles.scrollView}>
            <FutureForecast2 style={styles.FutureForecast2} data={weatherData}/>
        </ScrollView>
    )
}

const FutureForecast2 = ({data}) => {
    console.log(data)
    
    return (
        <View style={{flexDirection: 'row'}}>
            {
                data && data.length > 0 ? 
                data.map((val, idx) => (
                    idx !== 0 &&  <FutureForecastItem2 style={styles.FutureForecastItem2} key={idx} forecastItem={val}/>
                )) : <Text></Text>
            }
        </View>
    )
}

const FutureForecastItem2 = ({forecastItem}) => {

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
    //const loc = '../assets/weather_icon-0'+(Math.floor(Math.random() * 8)+1).toString()+'.png'.toString()
    //const img = require(loc)
    
    //const img = require('../assets/icons/'+w_icon_map[forecastItem.weather[0].icon]+'.png')
    //console.log(w_icon_map[forecastItem.weather[0].icon])
    //const tname = w_icon_map[forecastItem.weather[0].icon]
    //const img = require('../assets/icons/'+tname+'.png')
    //const img = require('../assets/icons/wi-day-sunny.jpg')
    //console.log(forecastItem.weather[0].description)
    return (
        
        <View  style={styles.futureForecastItemContainer}>
        
            <Text  style={styles.day}>{moment(forecastItem.dt * 1000).format('ddd hh:mm a')}</Text>
            <Image source={img} style={styles.image} />
            <Text  style={styles.temp}>{forecastItem.weather[0].description}</Text> 
            <Text  style={styles.temp}>Temp - {forecastItem.temp}&#176;C</Text>
            
        
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex:0.1,
        paddingLeft: 10
    },
    image: {
        //backgroundColor: '#E5890A',
        width: 100,
        height: 100,
        borderRadius: 100

    },

    FutureForecast2: {
        padding: 20,
        borderWidth: 2
    },
    
    FutureForecastItem2: {
        margin: 20,
        borderWidth: 2
    },

    futureForecastItemContainer: {
        backgroundColor: '#F3F4ED',
        paddingBottom: 20,
        paddingLeft: 10,
        paddingLeft: 10,
        marginRight: 15,
        marginBottom: 10
    },

    currentTempContainer: {
        flexDirection: 'row',
        backgroundColor: '#F3F4ED',
        justifyContent:"center",
        alignItems:'center',
        borderRadius: 2,
        height: 150,
        margin: 10,
        borderWidth: 2
        
    },
    day: {
        
        fontSize: 14,
        color:"black",
        textAlign:"center",
        borderRadius: 50,
        fontWeight: "600",
        margin: 10
    },
    temp: {
        marginTop: 10,
        fontSize: 14,
        color:"black",
        fontWeight:"600",
        textAlign:"center"
    },
    otherContainer: {
        
    }
})

export default HourlyScroll
