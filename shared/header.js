import React from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
const { width } = Dimensions.get("window");


export default function Header(){
    return(
        <SafeAreaView style ={styles.header}>
            <View>
                <Text style ={styles.headerText}>Real Animal Sounds</Text>
            </View>

            <View>
                <Text style ={styles.headerEnjoy}>Enjoy!</Text>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   header:{
       marginTop: Constants.statusBarHeight,
       width: '100%',
       height: 100,
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'flex-start',
       backgroundColor: '#F9CC00',
       shadowColor: "#000",
       padding: 20,
       shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
   },
   headerText:{
       fontWeight: 'bold',
       width: width,
       fontSize: 20,
       textAlign: "center",
       color: '#272727',
       letterSpacing: 1,
   },
   headerEnjoy:{
    fontWeight: 'bold',
    width: width,
    paddingHorizontal: 20,
    fontSize: 15,
    textAlign: "left",
    color: '#272727',
    letterSpacing: 1,
  }
});