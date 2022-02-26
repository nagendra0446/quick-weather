import React, { useState  } from 'react'
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 

export default function SearchBar({ fetchWeatherData }) {

    const [cityName, setCityName] = useState('');

    return (
        <View style={styles.searchBar}>
            <TextInput 
                placeholder='Enter the city name'
                onChangeText={(text) => setCityName(text)}
                value={cityName}
                style = {{ flex: 1, outline:'none', fontSize: 20 }}
            />
            <EvilIcons name="search" size={32} color="black"  onPress={() => fetchWeatherData(cityName)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        marginTop: Dimensions.get('screen').height * 0.02,
        marginLeft: 10,
        marginRight: Dimensions.get('screen').width * 0.33,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 280,
        paddingLeft: 8,
        paddingRight: 8,
        padding: 8,
        borderRadius: 4,
        marginHorizontal: 5,
        paddingHorizontal: 1,
        backgroundColor: 'white',
    },


})
