import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet} from 'react-native';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


const WeatherItem = ({title, value, unit}) => {
    return(
        <View style={styles.weatherItem}>
            <Text style={styles.weatherItemTitle}>{title}</Text>
            <Text style={styles.weatherItemTitle}>{value}{unit}</Text>
        </View>
    )
}

const DateTime = ({current, lat, lon, timezone, addr, newAddr}) => {
    

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    if(newAddr)
        newAddr = newAddr.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());
        
    useEffect (() => {
        setInterval(() => {
            const time = new Date();
            const month = time.getMonth();
            const date = time.getDate();
            const day = time.getDay();
            const hour = time.getHours();
            const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
            const minutes = time.getMinutes();
            const ampm = hour >=12 ? 'pm' : 'am'
        
            setTime((hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes) +ampm) 
        
            setDate(days[day] + ', ' + date+ ' ' + months[month]) 
        
        }, 1000);
    }, [])
    
    

    return (
        <View style={styles.container}>  
           <View>
               <View style={styles.total} >
                   <Text style={styles.heading}>{time}</Text>
                   <Text style={styles.subheading}>{date}</Text>
               </View>
               <View style={styles.weatherItemContainer}>
                    <WeatherItem title="Humidity" value={current? current.humidity : ""} unit="%"/>
                    <WeatherItem title="Pressure  " value={current? current.pressure : ""} unit=" hPA"/>
               </View>
           </View>
           <View style={styles.rightAlign}>
               {/*<Text style={styles.timezone}>{timezone}</Text>*/}
               <Text style={styles.latlong1}>{lat}N {lon}E</Text>
               {newAddr ? <Text style={styles.latlong2}>{newAddr}</Text> : <Text style={styles.latlong2}>{addr}</Text>}
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginTop: 0,
        flexDirection:"row",
        justifyContent:'space-between',
        paddingTop: 10
    },
    total:{
        backgroundColor: "#18181b30",
        borderRadius: 10,
        padding: 5,
    },
    heading: {
        fontSize: 25,
        color:'white',
        fontWeight: '700'
    },
    subheading: {
        fontSize: 15,
        
        color: 'white',
        fontWeight: '700'
    },
    rightAlign: {
        textAlign:'right'
    },
    timezone: {
        fontWeight: '700',
        fontSize: 20,
        color:'white'
    },
    latlong1:{
        backgroundColor: "#18181b30",
        //borderRadius: 10,
        padding: 5,
        fontSize:15,
        color:'white',
        fontWeight: '700',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    latlong2:{
        backgroundColor: "#18181b30",
        //borderRadius: 10,
        padding: 5,
        fontSize:15,
        color:'white',
        fontWeight: '700',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    weatherItemContainer: {
        backgroundColor: "#18181b30",
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        //borderWidth: 1,
        //borderColor: 'white',
        fontWeight: '700'
    }, 
    weatherItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    weatherItemTitle: {
        
        color:'white',
        fontSize: 14,
        fontWeight: '700'
    }
})

export default DateTime
