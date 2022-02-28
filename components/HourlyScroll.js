import React from 'react'
import {View, ScrollView, Image, Text, StyleSheet, Sup} from 'react-native'
import moment from 'moment-timezone'
const HourlyScroll = ({weatherData}) => {
    
    //console.log(typeof(weatherData))
    //weatherData.forEach(element => console.log(element));
    return (
        <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false} >
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
                    <FutureForecastItem2 style={styles.FutureForecastItem2} key={idx} forecastItem={val}/>
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

    let val = moment(forecastItem.dt * 1000).format('Do MMM');
    let day_num = parseInt(moment(forecastItem.dt * 1000).format('D'));
    let desc = forecastItem.weather[0].description
    desc =  desc.substring(0,1).toUpperCase() + desc.substring(1)
    
    return ( 
        <View>
            {day_num % 2 == 0 ? <View  style={styles.futureForecastItemContainer1}>
             
                <Text  style={styles.day}>{val}</Text>
            

                <Text  style={styles.time}>{moment(forecastItem.dt * 1000).format('hh:mm a')}</Text>
                
                <Image source={img} style={styles.image} />
                <Text  style={styles.temp}>{desc}</Text> 
                {/*<Text  style={styles.temp}>Temp - {forecastItem.main.temp}&#176;C</Text>*/}
                
            </View>:
            <View  style={styles.futureForecastItemContainer2}>
             
             <Text  style={styles.day}>{val}</Text>
         

             <Text  style={styles.time}>{moment(forecastItem.dt * 1000).format('hh:mm a')}</Text>
             
             <Image source={img} style={styles.image} />
             <Text  style={styles.temp}>{desc}</Text> 
             {/*<Text  style={styles.temp}>Temp - {forecastItem.main.temp}&#176;C</Text>*/}
             
         </View>
            
            
            }
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex:1,
        marginTop: 10
    },
    image: {
        //backgroundColor: '#E5890A',
        width: 80,
        height: 80,
        alignSelf: 'center',
        borderRadius: 100,
        marginBottom:5
    },

    futureForecastItemContainer1: {
        padding: 5,
        backgroundColor: '#B1D0E0',
        borderRadius: 10,
        marginLeft: 10,
        height: 185,
        width: 130
    },

    futureForecastItemContainer2: {
        
        backgroundColor: '#6998AB',
        borderRadius: 10,
        marginLeft: 10,
        height: 185,
        width: 130
    },

    day: {
        padding: 0,
        fontSize: 15,
        fontWeight: "700",
        textAlign: "center",
        marginBottom:5
    },
    time: {
        padding: 0,
        fontSize: 15,
        fontWeight: "700",
        textAlign: "center",
        marginBottom:5
    },
    temp: {
        fontSize: 16,
        color:"black",
        fontWeight:"700",
        textAlign:"center",
    },

    otherContainer: {
        
    }
})



export default HourlyScroll
