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
    
    const img = {uri: "http://openweathermap.org/img/wn/"+forecastItem.weather[0].icon+"@2x.png"}
   
    //console.log(forecastItem)
    return (
        
        <View  style={styles.futureForecastItemContainer}>
        
            <Text  style={styles.day}>{moment(forecastItem.dt * 1000).format('ddd hh:mm a')}</Text>
            <Image source={img} style={styles.image} />
            <Text  style={styles.temp}>{forecastItem.weather[0].main}</Text> 
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
        backgroundColor: '#E5890A',
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
        
        fontSize: 12,
        color:"black",
        textAlign:"center",
        borderRadius: 50,
        fontWeight: "600",
        margin: 10
    },
    temp: {
        marginTop: 10,
        fontSize: 12,
        color:"black",
        fontWeight:"600",
        textAlign:"center"
    },
    otherContainer: {
        
    }
})

export default HourlyScroll
