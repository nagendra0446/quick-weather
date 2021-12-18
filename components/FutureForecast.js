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
    const img = {uri: "http://openweathermap.org/img/wn/"+forecastItem.weather[0].icon+"@2x.png"}
   
    //console.log(forecastItem)
    return (
        <TouchableOpacity onPress={() => console.log('Clicked')}>
        <View  style={styles.futureForecastItemContainer}>
        
            <Text  style={styles.day}>{moment(forecastItem.dt * 1000).format('ddd')}</Text>
            <Image source={img} style={styles.image} />
            <Text  style={styles.temp}>{forecastItem.weather[0].main}</Text> 
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
        backgroundColor: '#E5890A',
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