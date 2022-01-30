import React from 'react'
import {View, ScrollView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import moment from 'moment-timezone'
import FutureForecast from './FutureForecast'


const WeatherScroll = ({weatherData}) => {
    return (
        <ScrollView horizontal={true} style={styles.scrollView}>
            <CurrentTempEl data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}/>
            <FutureForecast data={weatherData}/>
        </ScrollView>
    )
}

const CurrentTempEl = ({data}) => {
    if(data && data.weather){
        let img
        switch(data.weather[0].icon){
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
        //const img = {uri: 'http://openweathermap.org/img/wn/'+ data.weather[0].icon +'@4x.png'}
        //const img = require('../assets/icons/'+w_icon_map[data.weather[0].icon]+'.png')
        //console.log('../assets/icons/'+w_icon_map[data.weather[0].icon]+'.png')
        //console.log('../assets/icons/wi-day-sunny.png')
        console.log(data)
        //const img = require('../assets/icons/wi-day-sunny.png')
        
        return(
            <TouchableOpacity style={styles.currentTempContainer} onPress={() => console.log('Clicked')}>
            <View style={styles.currentTempContainer}>
                <Image source={img} style={styles.image} />
                <View  style={styles.otherContainer}>
                    <Text  style={styles.day}>{moment(data.dt * 1000).format('dddd')}</Text>
                    <Text  style={styles.temp}>{data.weather[0].description}</Text>
                    <Text  style={styles.temp}>Night - {data.temp.night}&#176;C</Text>
                    <Text  style={styles.temp}>Day - {data.temp.day}&#176;C</Text>
                </View>
            </View>
            </TouchableOpacity>
        )
    }else{
        return( 
            <View>

            </View>

        )
        
    }
   
}

const styles = StyleSheet.create({
    scrollView: {
        flex:0.1,
        paddingLeft: 10
    },
    image: {
        backgroundColor: '#E5890A',
        width: 100,
        height: 100,
        borderRadius: 100,
        marginRight: 8
    },


    currentTempContainer: {
        flexDirection: 'row',
        //backgroundColor: '#F3F4ED',
        justifyContent:"center",
        alignItems:'center',
        borderRadius: 2,
        padding: 10
        
    },
    day: {
        
        fontSize: 12,
        color:"black",
        padding: 10,
        textAlign:"center",
        borderRadius: 50,
        fontWeight: "600"
        
    },
    temp: {
        
        fontSize: 12,
        color:"black",
        fontWeight:"600",
        textAlign:"center"
    },
    otherContainer: {
        
    }
})

export default WeatherScroll
