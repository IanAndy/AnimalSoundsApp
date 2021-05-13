import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import SoundsInfo from '../data/data.json'

export default function Music() {

 //initial component state being defined
 const [currentSong, setCurrentSong] = useState(null);
//  const [items, setItems] = useState(data);
 const inputRef = React.useRef();

 useEffect(() =>{
    if(currentSong){
        inputRef.current.play();
    }
    console.log(currentSong)
 }, [currentSong]);
 // this means every time the current song is updated this useEffect is fired
//its doesnt have to affect the whole component

 const handlePlay = soundDetailSound =>{
     if(currentSong) {
         if (currentSong === soundDetailSound){
             return inputRef.current.play();
         }
     }
     setCurrentSong(soundDetailSound)
 }


  return (
    <View style={styles.MusicContainer}>
      <Text>Open App.js to sthhart working on your app!</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onScrollEndDrag={() => console.log("end")}
        onScrollBeginDrag={() => console.log("start")}
        data={SoundsInfo}
        renderItem={({item}) =>
        // i will make this own component
        <View >
            <Text>{item.name}</Text>
            <Text>{item.desc}</Text>
            <Image 
             source={{uri: item.url}}
             style={{width: 400, height: 400}}
             onPress={() => alert('Hello, world!')}
             resizeMode={'cover'} // cover or contain its upto you view look
             />
             {/* <audio ref = { inputRef } src = { currentSong } >  */}
             { /* <source src={sounddetail.sound}></source> */ } 
            {/* </audio> */}

            <TouchableOpacity
                onPress={() => handlePlay(item.sound)}
                style={{ backgroundColor: 'blue' }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Play</Text>
            </TouchableOpacity>
            <br/>
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