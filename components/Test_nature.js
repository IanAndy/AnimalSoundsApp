import React, {useState,  useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import SoundsInfo from '../data/data.json';
import { Audio } from 'expo-av';


export default function Test() {
  //initial component state being defined
 const [currentSong, setCurrentSong] = useState();


 //music path
 var source; 

//  this send the id from json to get the appropriate sound path
 var a = currentSong;

 switch (a) {

  case 1:
    source = require("../assets/sounds/example.mp3");
    break;
  case 2:
    source = require("../assets/sounds/example2.mp3");
    break;
  case 3:
    source = require("../assets/sounds/example3.mp3");
    break;
  default:
    source = require("../assets/sounds/example4.mp3");
 }
  

  //create a new instance of the Audio
  const sound = new Audio.Sound();


  // where the playback function is called
  const playSound = async () => {
    try {
      await Audio.setIsEnabledAsync(true);
      await sound.unloadAsync();
      await sound.loadAsync(source);
      await sound.playAsync(); 

    } catch (err) {
      console.warn("Couldn't Play the Sound", err)
    }
 }

 //this calls the function in it every time the state changes - Looking for aternative a
//not working
//try component did update on react hooks

 useEffect(() => {
  
  onAudioSelected(); 
}, [currentSong]);


  const onAudioSelected = () => {
    // Audio.clearSounds() <-- something like this
    playSound();
    console.log(currentSong);
  }

  return (
    <View style={styles.MusicContainer}>
      <Text>Play Sound</Text>

       {/* this works fine but cannot update the sound clicked */}
          <TouchableOpacity 

           onPress={ () => onAudioSelected() }
           style={{ backgroundColor: 'blue' }}>
           <Text style={{ fontSize: 20, color: '#fff' }}>Play1</Text>

          </TouchableOpacity>


  


          <FlatList
            
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            onScrollEndDrag={() => console.log("end")}
            onScrollBeginDrag={() => onAudioSelected() }

            data={SoundsInfo}
            renderItem={({item}) =>
            // i will make this own component
            <View >
                <Text>{item.name}</Text>
                <Text>{item.desc}</Text>

                {console.log(item.sound)}

                <TouchableOpacity
                    onPress={ () => setCurrentSong(item.id) }
                    style={{ backgroundColor: 'blue' }}>
                    <Text style={{ fontSize: 20, color: '#fff', width:150, }}>Play</Text>
                </TouchableOpacity>
                
            </View>
            //stan-alone component
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
  },
});