import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground, 
  TouchableOpacity, 
  Dimensions 
} from 'react-native';
const { width } = Dimensions.get("window");
import Header from '../shared/header';
import Card from '../shared/card';
// AdMob
import {AdMobBanner} from 'expo-ads-admob';


export default function Home({ navigation }) {

    const bannerError = () => {
      console.log('banner ad not loading')
    }
     
    const bannerAdReceived = () => {
      console.log('banner ad received')
    }

    return (
        <View style={styles.container}>

           <Header/>

           <View style={styles.innerContainer}>
                 {/* Wild animals */}
                <TouchableOpacity 
                style={styles.HomeButton} 
                onPress={() => navigation.navigate('Domestic')}
                >
                
                  <Card style={ { borderLeftColor: '#F9CC00' } }>
                      <Text style = {styles.categories}>
                        Domestic Animals
                      </Text>
                      <ImageBackground source={require('../assets/images/dog.png')} style={styles.ContainerImage}></ImageBackground>
                  </Card>
                </TouchableOpacity>   

                 {/* domestic animals */}
                <TouchableOpacity 
                style={styles.HomeButton} 
                onPress={() => navigation.navigate('Wild')}>

                  <Card style={{ borderLeftColor: '#2CCA6E'}}>
                      <Text style = {styles.categories}>
                        Wild Animals
                      </Text>
                      <ImageBackground source={require('../assets/images/king.jpeg')} style={styles.ContainerImage}></ImageBackground>
                  </Card>
                </TouchableOpacity>

                 {/* Acquatic animals */}
                 <TouchableOpacity 
                style={styles.HomeButton} 
                onPress={() => navigation.navigate('Acquatic')}>

                  <Card style={{ borderLeftColor: '#E61E31'}}>
                      <Text style = {styles.categories}>
                        Acquatic Animals
                      </Text>
                      <ImageBackground source={require('../assets/images/king.jpeg')} style={styles.ContainerImage}></ImageBackground>
                  </Card>
                </TouchableOpacity>       

                 {/* Birds animals */}
                 <TouchableOpacity 
                style={styles.HomeButton} 
                onPress={() => navigation.navigate('Birds')}>

                  <Card style={{ borderLeftColor: '#ff928b'}}>
                      <Text style = {styles.categories}>
                        Birds
                      </Text>
                      <ImageBackground source={require('../assets/images/king.jpeg')} style={styles.ContainerImage}></ImageBackground>
                  </Card>
                </TouchableOpacity>      

           </View>

           <AdMobBanner style={styles.bannerAd}
              bannerSize="fullBanner"
              adUnitID="ca-app-pub-3940256099942544/6300978111"
              onDidFailToReceiveAdWithError={bannerError}
              onAdViewDidReceiveAd = {bannerAdReceived} 
            />
          
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor : '#F8F7F3',
    width: width,
  },
  innerContainer:{
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: -35,
    width: '100%',
    zIndex: 2,
    elevation: 2,
  },
  HomeButton: {
     marginBottom: 15,
     backgroundColor: 'transparent'
  },
  ContainerImage:{
    width: 180,
    height: 100,
    resizeMode: "cover",
  },
  categories: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  bannerAd:{
    position: "absolute",
    bottom: 0,
  }
});