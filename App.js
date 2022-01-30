import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState}from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { RefreshControl, SafeAreaView, ScrollView } from 'react-native';
import * as Location from 'expo-location';
import FutureForecast from './components/FutureForecast';
import HourlyScroll from './components/HourlyScroll';
import DateTime from './components/DateTime'
import WeatherScroll from './components/WeatherScroll'
import { Button } from 'react-native';


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const API_KEY ='06e410354074255cadd2ff3bcb4e2dda'
const img = require('./assets/wi-cloud.svg')

export default function App() {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const refreshPage = ()=>{
    //console.log('refreshing')
    window.location.reload();  
  }

  const [data, setData] = useState({});
  const [hdata, setHdata] = useState({});
  const [addr, setAddr] = useState({});
 
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      let location = await Location.getCurrentPositionAsync({});

      fetchDataFromApi(location.coords.latitude, location.coords.longitude);
      console.log(location.coords.latitude, location.coords.longitude);
      fetchAddr(location.coords.latitude, location.coords.longitude);
    
  })();
  }, [])

  const fetchDataFromApi = (latitude, longitude) => {
    if(latitude && longitude) {
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        //console.log(data)
        console.log(data.hourly[1])
        setData(data)
      })

      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
      .then(res => res.json())
      .then(hdata => {
        console.log(`https://api.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        console.log(data)
        //console.log(data.hourly[1])
        setHdata(hdata)
      })
    }
  }

  const fetchAddr = (lat, long) => {
      fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=1&appid=06e410354074255cadd2ff3bcb4e2dda`, {
	"method": "GET",
	
})
.then((response) => response.json()).then((json) => {
  console.log(json[0].name)
  setAddr(json[0])
}).catch((error) => {
  console.error(error);
});
    
  }

  
  

  return (
    <View style={styles.container}>
      {/*<ImageBackground source={img} style={styles.image}>*/}
      <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon} addr={addr.name}/>
      {/*<Button title='refresh' onPress={onRefresh}>Refresh</Button>*/}
      <HourlyScroll weatherData={hdata}/>
      <WeatherScroll weatherData={data.daily} dayNum={1}/>
      {/*</ImageBackground>*/}
      {/*<StatusBar style="auto" />}*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#086E7D'
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    flex:1, 
    resizeMode:"cover", 
    justifyContent:"center"
  }
});
