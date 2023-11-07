import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet, TextInput, Button } from "react-native";
import { getWeather } from "../api/WeatherAPI";
import Icon from "react-native-vector-icons/Ionicons";

const icon = {
  맑음: "sunny-outline",
  "약간 구름": "partly-sunny-outline",
  "scattered clouds": "cloud-outline",
  "broken clouds": "cloud-outline",
  "shower rain": "rainy-outline",
  rain: "rainy-outline",
  thunderstorm: "thunderstorm-outline",
  snow: "snow-outline",
  mist: "reorder-four-outline",
};

export const Weather = () => {
  const [city, setCity] = useState<string>("Seoul");
  const [weatherData, setWeatherData] = useState<any>(null);

  const fetchWeatherData = async () => {
    const data = await getWeather(city);
    setWeatherData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <View style={styles.container}>
      {weatherData && (
        <View style={styles.weather}>
          <View style={styles.weatherInfo}>
            <Text style={styles.weatherInfoTemp}>
              {Math.round(weatherData.main.temp)}°C
            </Text>
            <Text style={styles.weatherInfodescription}>
              {weatherData.weather[0].description}
            </Text>
            <Text style={styles.weatherInfoname}>{weatherData.name}</Text>
            <Text style={styles.weatherInfoText}>
              {Math.floor(weatherData.main.temp_max)}°&nbsp;/&nbsp;
              {Math.floor(weatherData.main.temp_min)}° &nbsp;&nbsp; 체감
              온도&nbsp;&nbsp;
              {Math.floor(weatherData.main.feels_like)}°
            </Text>
          </View>
          <View style={styles.iconView}>
            <Image
              style={styles.icon}
              source={{
                uri: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
              }}
            />
          </View>
        </View>
      )}
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="지역 입력"
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <Button title="날씨 불러오기" onPress={fetchWeatherData} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  inputView: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    width: "50%",
  },
  weather: {
    width: "100%",
    backgroundColor: "skyblue",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 14,
  },
  weatherInfo: {
    justifyContent: "center",
  },
  weatherInfoText: {
    color: "white",
    fontSize: 16,
  },
  weatherInfoTemp: {
    color: "white",
    fontSize: 45,
  },
  weatherInfodescription: {
    color: "white",
    fontSize: 24,
    marginBottom: 10,
  },
  weatherInfoname: {
    color: "white",
    fontSize: 18,
  },
  iconView: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 100,
    height: 100,
  },
});
