import React, {useState,  useEffect} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  TouchableOpacity,
  Dimensions, 
  ImageBackground
} from 'react-native';
import SoundsInfo from '../data/domesticData.json';
import ImagesCollection from '../shared/domesticImages';
import InnerHeader from '../shared/InnerHeader';
import TitleCard from '../shared/TitleCard';
import BottomCard from '../shared/BottomCard';
import ModalComponent from '../shared/ModalComponent';
import Constants from 'expo-constants';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
// AdMob
import {
  AdMobBanner,
  AdMobInterstitial
} from 'expo-ads-admob';



export default function Domestic({ navigation }) {
  //initial component state being defined
 const [currentSong, setCurrentSong] = useState(null);
 const [currentName, setCurrentName] = useState(null);
 const [modalOpen, setModalOpen] = useState(false);

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
    source = require("../assets/sounds/domestic/dog.mp3");
    break;
  case 2:
    source = require("../assets/sounds/domestic/goat.mp3");
    break;
  case 3:
    source = require("../assets/sounds/domestic/cat.mp3");
    break;
  case 4:
      source = require("../assets/sounds/domestic/rooster.mp3");
      break;
  case 5:
    source = require("../assets/sounds/domestic/camel.mp3");
    break;
  case 6:
      source = require("../assets/sounds/domestic/cow.mp3");
      break;
  case 7:
      source = require("../assets/sounds/domestic/donkey.mp3");
      break;
  case 8:
    source = require("../assets/sounds/domestic/duck.mp3");
    break;
  case 9:
      source = require("../assets/sounds/domestic/goose.mp3");
      break;
  case 10:
      source = require("../assets/sounds/domestic/horse.mp3");
      break;
  case 11:
    source = require("../assets/sounds/domestic/llama.mp3");
    break;
  case 12:
    source = require("../assets/sounds/domestic/pig.mp3");
    break;
  case 13:
    source = require("../assets/sounds/domestic/sheep.mp3");
    break;
  case 14:
    source = require("../assets/sounds/domestic/turkey.mp3");
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
    source_name = require("../assets/name/domestic/dog_name.mp3");
    break;
  case 2:
    source_name = require("../assets/name/domestic/goat_name.mp3");
    break;
  case 3:
    source_name = require("../assets/name/domestic/cat_name.mp3");
    break;
  case 4:
      source_name = require("../assets/name/domestic/chicken_name.mp3");
      break;
  case 5:
    source_name = require("../assets/name/domestic/camel_name.mp3");
    break;
  case 6:
    source_name = require("../assets/name/domestic/cow_name.mp3");
    break;
  case 7:
    source_name = require("../assets/name/domestic/donkey_name.mp3");
    break;
  case 8:
    source_name = require("../assets/name/domestic/duck_name.mp3");
    break;
  case 9:
    source_name = require("../assets/name/domestic/goose_name.mp3");
    break;
  case 10:
    source_name = require("../assets/name/domestic/horse_name.mp3");
    break;
  case 11:
    source_name = require("../assets/name/domestic/llama_name.mp3");
    break;
  case 12:
    source_name = require("../assets/name/domestic/pig_name.mp3");
    break;
  case 13:
    source_name = require("../assets/name/domestic/sheep_name.mp3");
    break;
  case 14:
    source_name = require("../assets/name/domestic/turkey_name.mp3");
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
      
      <ModalComponent  modalOpen = {modalOpen} setModalOpen = {setModalOpen} />

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
                    <InnerHeader navigationHome = {navigation} setModalOpen = {setModalOpen} />
                </View>

                <TouchableOpacity 
                  style = {styles.TitleBox}
                  onPress={() => onNameSelected(item.id)}
                  >
                    <TitleCard style={ { backgroundColor: '#F9CC00' } }>
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