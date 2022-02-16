import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ImageBackground,StatusBar  } from 'react-native';
import SearchBar from './components/SearchBar';
import * as Location from 'expo-location';
import HourlyScroll from './components/HourlyScroll';
import DateTime from './components/DateTime'
import WeatherScroll from './components/WeatherScroll'

const API_KEY = "46a9246bebba16d42b36aac3fc3ba8af";

const bg_img = require('./assets/backgroundImages/img/bg_img4.jpg')



export default function App() {

    const [loaded, setLoaded] = useState(true);
    const [hdata, setHdata] = useState(null);
    const [addr, setAddr] = useState({});
    const [newAddr, setNewAddr] = useState(null);
    const [data, setData] = useState({});
    const [bg, setBg] = useState(null);

    useEffect(() => {(
		async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			let location = await Location.getCurrentPositionAsync({});
            console.log(status)
			fetchDataFromApi(location.coords.latitude, location.coords.longitude);
			console.log(location.coords.latitude, location.coords.longitude);
			fetchAddr(location.coords.latitude, location.coords.longitude);
            console.log(addr)
            //fetchWeatherData('Mumbai');
		})();
	}, [])

    const fetchDataFromApi = (latitude, longitude) => {
		if(latitude && longitude) {
			fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${API_KEY}`)
			.then(res => res.json())
			.then(data => {
				console.log(data.daily)
				console.log(data.hourly[1])
				setData(data)
			})

			fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
			.then(res => res.json())
			.then(hdata => {
				console.log(`https://api.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
				//console.log(data.daily)
				//console.log(data.hourly[1])
				setHdata(hdata)
			})
		}
	}

	const fetchAddr = (lat, long) => {
        let res;
		fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=1&appid=06e410354074255cadd2ff3bcb4e2dda`, {
		"method": "GET"})
		.then((response) => response.json()).then((json) => {
			console.log(json[0].name)
            setAddr(json[0])
		}).catch((error) => {
			console.error(error);
		});
	}

    async function fetchWeatherData(cityName) {
        setLoaded(false);
        if(cityName){
            setNewAddr(cityName);
            const API = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`
            try {
                const response = await fetch(API);
                if(response.status == 200) {
                    const hdata = await response.json();
                    setHdata(hdata);
                    //console.log(data.list);
                } else {
                    setHdata(null);
                }
                setLoaded(true);
                
            } catch (error) {
                console.log(error);
            }


            try {
                const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`);
                if(response.status == 200) {
                    const locationData = await response.json();
                    console.log(locationData[0].lat, locationData[0].lon);
                    let latitude = locationData[0].lat;
                    let longitude = locationData[0].lon;
                    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${API_KEY}`)
			        .then(res => res.json())
			        .then(data => {
				        console.log(data.daily)
				        console.log(data.hourly[1])
				        setData(data)
			        })
                } 
                setLoaded(true);
                
            } catch (error) {
                console.log(error);
            }
        }
    }

    
    

    if(!loaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator color='gray'  size={36} />
            </View>

        )
    }

    else if(hdata === null) {
        return (
            <View style={styles.container}>
                <SearchBar fetchWeatherData={fetchWeatherData}/>
                <Text style={styles.primaryText}>City Not Found! Try Different City</Text>
            </View>
        )
    }

    return (
        
        
        <View style={styles.container}>
            
            <ImageBackground source={bg_img} style={styles.image} >
            <Text style={styles.title}>QuickWeather</Text>
             <SearchBar style={styles.searchBar} fetchWeatherData={fetchWeatherData}/>
             <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon} addr={addr.name} newAddr={newAddr} />
             <WeatherScroll weatherData={data.daily} />
            <HourlyScroll weatherData={hdata.list}/>
            
            <StatusBar style="auto" />
            </ImageBackground>
        </View>
        
    );
}

const styles = StyleSheet.create({
    title:{
        fontWeight: '700',
        fontSize: 30,
        alignSelf: 'center',
        margin: 1,
        fontStyle: 'italic',
        color:'white'
    },
    searchBar: {
        margin: 0,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center'
	},
    container: {
		flex: 1,
	},
	scrollView: {
		flex: 1,
		backgroundColor: 'pink',
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		flex:1, 
		resizeMode:"cover", 
		justifyContent:"center"
	},
  primaryText: {
      margin: 20,
      fontSize: 28
  }
});
