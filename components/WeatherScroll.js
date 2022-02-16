import React from 'react'
import {View, ScrollView, Image, Text, StyleSheet, ImageBackground} from 'react-native'
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

        let desc = data.weather[0].description
    desc =  desc.substring(0,1).toUpperCase() + desc.substring(1)
    let day_num = parseInt(moment(data.dt * 1000).format('D'));
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
            <View style={{padding:0}}>
            {day_num % 2 == 0 ?
            <View style={styles.currentTempContainer1}>
                <Image source={img} style={styles.image} />
                <View  style={styles.otherContainer}>
                <Text  style={styles.date}>Today {moment(data.dt * 1000).format('Do')}</Text>
                <Text  style={styles.desc}>{desc}</Text>
                <Text  style={styles.day}>{moment(data.dt * 1000).format('dddd')}</Text>
                <Text  style={styles.temp}>Day {data.temp.day}&#176;C</Text>
                    <Text  style={styles.temp}>Night {data.temp.night}&#176;C</Text>
                    
                </View>
            </View>
             :

            <View style={styles.currentTempContainer2}>
                <Image source={img} style={styles.image} />
                <View  style={styles.otherContainer}>
                <Text  style={styles.date}>Today {moment(data.dt * 1000).format('Do')}</Text>
                <Text  style={styles.desc}>{desc}</Text>
                <Text  style={styles.day}>{moment(data.dt * 1000).format('dddd')}</Text>
                    
                    <Text  style={styles.temp}>Night {data.temp.night}&#176;C</Text>
                    <Text  style={styles.temp}>Day {data.temp.day}&#176;C</Text>
                </View>
            </View>

        }
        </View>
        )
    }else{return(<View></View>)}
    
}

const styles = StyleSheet.create({
    scrollView: {
        flex:1,
        paddingLeft: 10,
        margin: 0
    },
    image: {
        backgroundColor: '#E5890A',
        width: 100,
        height: 100,
        borderRadius: 100,
        marginRight: 8
    },


    currentTempContainer1: {
        marginTop: 15,
        marginBottom:15,
        flexDirection: 'row',
        backgroundColor: '#B1D0E0',
        justifyContent:"center",
        alignItems:'center',
        borderRadius: 10,
        padding: 10,
        width: 300,
        height: 185
        
    },

    currentTempContainer2: {
        marginTop: 15,
        marginBottom:15,
        flexDirection: 'row',
        backgroundColor: '#6998AB',
        justifyContent:"center",
        alignItems:'center',
        borderRadius: 10,
        padding: 10,
        width: 300,
        height: 185
        
    },
    date: {
        marginLeft: 8,
        fontSize: 20,
        color:"black",
        padding: 5,
        textAlign:"center",
        borderRadius: 50,
        fontWeight: "700"
        
    },
    day: {
        marginLeft: 8,
        fontSize: 16,
        color:"black",
        padding: 5,
        textAlign:"center",
        borderRadius: 50,
        fontWeight: "700"
    },
    temp: {
        marginLeft: 8,
        fontSize: 16,
        color:"black",
        fontWeight:"700",
        textAlign:"center"
    },
    desc: {
        marginLeft: 8,
        fontStyle: 'italic',
        fontSize: 20,
        color:"black",
        fontWeight:"700",
        textAlign:"center"
    },
    otherContainer: {
        
    }
})

export default WeatherScroll
