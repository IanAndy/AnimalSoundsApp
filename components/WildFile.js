import React, {useState,  useEffect} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  TouchableOpacity, 
  Dimensions, 
  ImageBackground,

} from 'react-native';
import SoundsInfo from '../data/wildData.json';
import ImagesCollection from '../shared/wildImages';
import InnerHeader from '../shared/InnerHeader';
import TitleCard from '../shared/TitleCard';
import BottomCard from '../shared/BottomCard';
import Constants from 'expo-constants';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
// AdMob
import {
  AdMobBanner,
  AdMobInterstitial
} from 'expo-ads-admob';



export default function Wild({ navigation }) {
  //initial component state being defined
 const [currentSong, setCurrentSong] = useState(null);
 const [currentName, setCurrentName] = useState(null);


 //width of the window
 const { width, height } = Dimensions.get("window");


 //music path
 var source;
 var source_name;

//  this send the id from json to get the appropriate sound path
//currentSong will play sound
 var a = currentSong;

 switch (a) {

  case 1:
    source = require("../assets/sounds/wild/elephant.mp3");
    break;
  case 2:
    source = require("../assets/sounds/wild/deer.mp3");
    break;
  case 3:
    source = require("../assets/sounds/wild/lion.mp3");
    break;
  case 4:
      source = require("../assets/sounds/wild/tiger.mp3");
      break;
  case 5:
    source = require("../assets/sounds/wild/fox.mp3");
    break;
  case 6:
      source = require("../assets/sounds/wild/rhino.mp3");
      break;
  case 7:
      source = require("../assets/sounds/wild/gorilla.mp3");
      break;
  case 8:
    source = require("../assets/sounds/wild/kangaroo.mp3");
    break;
  case 9:
      source = require("../assets/sounds/wild/giraffe.mp3");
      break;
  case 10:
      source = require("../assets/sounds/wild/buffalo.mp3");
      break;
  case 11:
    source = require("../assets/sounds/wild/bat.mp3");
    break;
  case 12:
    source = require("../assets/sounds/wild/hippo.mp3");
    break;
  case 13:
    source = require("../assets/sounds/wild/rabbit.mp3");
    break;
  case 14:
    source = require("../assets/sounds/wild/bear.mp3");
    break;
  case 15:
    source = require("../assets/sounds/wild/panda.mp3");
    break;
  case 16:
    source = require("../assets/sounds/wild/zebra.mp3");
    break;
  case 17:
    source = require("../assets/sounds/wild/warthog.mp3");
    break;
  case 18:
    source = require("../assets/sounds/wild/hyena.mp3");
    break;
  case 19:
    source = require("../assets/sounds/wild/leopard.mp3");
    break;
  case 20:
    source = require("../assets/sounds/wild/racoon.mp3");
    break;
  case 21:
    source = require("../assets/sounds/wild/monkey.mp3");
    break;
  case 22:
    source = require("../assets/sounds/wild/wolf.mp3");
    break;

  default:
    //put empty link to prevent sounds from playing
    source = require("../assets/sounds/example4.mp3");
 }


 //  this send the id from json to get the appropriate sound Name path
 //current name will play name
 var b = currentName;

 switch (b) {

  case 1:
    source_name = require("../assets/name/wild/elephant_name.mp3");
    break;
  case 2:
    source_name = require("../assets/name/wild/deer_name.mp3");
    break;
  case 3:
    source_name = require("../assets/name/wild/lion_name.mp3");
    break;
  case 4:
      source_name = require("../assets/name/wild/tiger_name.mp3");
      break;
  case 5:
    source_name = require("../assets/name/wild/fox_name.mp3");
    break;
  case 6:
    source_name = require("../assets/name/wild/rhinoceros_name.mp3");
    break;
  case 7:
    source_name = require("../assets/name/wild/gorilla_name.mp3");
    break;
  case 8:
    source_name = require("../assets/name/wild/kangaroo_name.mp3");
    break;
  case 9:
    source_name = require("../assets/name/wild/giraffe_name.mp3");
    break;
  case 10:
    source_name = require("../assets/name/wild/buffalo_name.mp3");
    break;
  case 11:
    source_name = require("../assets/name/wild/bats_name.mp3");
    break;
  case 12:
    source_name = require("../assets/name/wild/hippopotamus_name.mp3");
    break;
  case 13:
    source_name = require("../assets/name/wild/rabbit_name.mp3");
    break;
  case 14:
    source_name = require("../assets/name/wild/bear_name.mp3");
    break;
  case 15:
    source_name = require("../assets/name/wild/panda_name.mp3");
    break;
  case 16:
    source_name = require("../assets/name/wild/zebra_name.mp3");
    break;
  case 17:
    source_name = require("../assets/name/wild/warthog_name.mp3");
    break;
  case 18:
    source_name = require("../assets/name/wild/hyena_name.mp3");
    break;
  case 19:
    source_name = require("../assets/name/wild/leopard_name.mp3");
    break;
  case 20:
    source_name = require("../assets/name/wild/racoon_name.mp3");
    break;
  case 21:
    source_name = require("../assets/name/wild/monkey_name.mp3");
    break;
  case 22:
    source_name = require("../assets/name/wild/wolf_name.mp3");
    break;
  
  default:
    //put empty link to prevent sounds from playing
    source_name = require("../assets/sounds/example4.mp3");
 }
  

  //create a new instance of the Audio
  const sound = new Audio.Sound();

  //create a new instance of the Audio Name
  const sound_name = new Audio.Sound();
  


  // where the playback function is called
  const playSound = async () => {
    try {
      //this loads and unloads the audio api to play Music
      await Audio.setIsEnabledAsync(false);
       //this loads and unloads the audio api to play Musics
      await Audio.setIsEnabledAsync(true);
      await sound.unloadAsync();
      await sound.loadAsync(source);
      await sound.playAsync(); 

    } catch (err) {
      console.warn("Couldn't Play the Sound", err)
    }
  }


  // where the playback function is called
  const playSound_name = async () => {
    try {
      //this loads and unloads the audio api to play Music
      await Audio.setIsEnabledAsync(false);
      //this loads and unloads the audio api to play Musics
      await Audio.setIsEnabledAsync(true);
      await sound_name.unloadAsync();
      await sound_name.loadAsync(source_name);
      await sound_name.playAsync(); 

    } catch (err) {
      console.warn("Couldn't Play the Sound", err)
    }
  }

  //this calls the function in it every time the state changes - Looking for aternative a
  //not working
  //try component did update on react hooks

  useEffect(() => {
    if (currentSong) {
      playSound();
    }

    
  }, [currentSong]);

  //this calls the function in it every time the state changes - Looking for aternative a
  //not working
  //try component did update on react hooks
  useEffect(() => {
    if (currentName) {
      playSound_name();
    }

  }, [currentName]);



  //Show Interstitial ad when component mounts
  useEffect(()=>{

    showInterstitial();

  }, []);

  const showInterstitial = async () => {
    AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
    
    try{
      await AdMobInterstitial.requestAdAsync();
      await AdMobInterstitial.showAdAsync();
    }
    catch(e){
      console.log(e);
    }
  }


  const onAudioSelected = SongID => {
    // Audio.clearSounds() <-- something like this
    // playSound();
    if(currentSong){
      if (currentSong === SongID) {
         playSound();
      }
    }
    setCurrentSong(SongID);
    console.log(currentSong);
  }


  const onNameSelected = NameID => {

    if(currentName){
      if (currentName === NameID) {
        playSound_name();
      }
    }
    setCurrentName(NameID);
    console.log(currentName);
  }

  return (
    <View style={styles.MusicContainer}>

          <FlatList
            pagingEnabled={true}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            onScrollEndDrag={() => console.log("End") }
            onScrollBeginDrag={() => console.log("Start")}

            data={SoundsInfo}
            renderItem={({item}) =>
            // i will make this own component
            <View style = {{width}}>

                <ImageBackground
                  source={ImagesCollection[item.id]}
                  style={{width: width, height: height * .85}}
                  onPress={() => alert('Hello, world!')}
                  resizeMode={'cover'} // cover or contain its upto you view look
                  >
                    <View>
                       <InnerHeader navigationHome = {navigation}/>
                    </View>

                    <TouchableOpacity 
                      style = {styles.TitleBox}
                      onPress={() => onNameSelected(item.id)}
                     >
                       <TitleCard style={ { backgroundColor: '#2CCA6E' } }>
                            <Text style={styles.AnimalName}>{item.name}</Text>
                            <FontAwesome name="play" size={25} color="black" style ={styles.IconStyle} />
                        </TitleCard>
                    </TouchableOpacity>

                  </ImageBackground>

                  <View
                     style={styles.BottomCardHolder}
                  >

                        <BottomCard style={ { backgroundColor: '#FFF' } }>

                          <TouchableOpacity
                            onPress={() => navigation.navigate(
                              'Browser', 
                              {
                                url: item.info,
                              }
                              )
                            }
                          >
                             <View>
                                <Text style={styles.BottomCardText}>Info</Text>
                                <FontAwesome name="wikipedia-w" size={25} color="black" style ={styles.IconStyle} />
                             </View>
                          </TouchableOpacity>

                          <TouchableOpacity
                            onPress={ () => onAudioSelected(item.id) }
                          >
                              <View>
                                <Text style={styles.BottomCardText}>Sound</Text>
                                <FontAwesome name="play" size={25} color="black" style ={styles.IconStyle} />
                              </View>
                          </TouchableOpacity>
                        
                        </BottomCard>
                        
                  </View>
             
                {console.log(item.sound)}
      
                
                {/* {setNewSong()}; */}
                
            </View>
            //stand-alone component
            }
            keyExtractor={(item, index) => index.toString()}
         />

    </View>
  );
}

const styles = StyleSheet.create({
  MusicContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
  TitleBox:{
    marginTop: 30,
    paddingHorizontal: 50,
    bottom: 80,
    left: 0,
    right: 0,
    position: 'absolute'
  },
  IconStyle: {
    height: 40,
    width: 30,
    backgroundColor: 'transparent',
    textAlign: 'center',
    borderRadius: 100/2,
    paddingTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
 },
 AnimalName:{
   fontSize: 25,
   fontWeight:'bold'
 },
 BottomCardHolder: {
    paddingHorizontal: 50,
    marginTop: -60,
 },
 BottomCardText: {
   fontSize: 20,
   fontWeight: 'bold',
   marginBottom: 5,
 }
});