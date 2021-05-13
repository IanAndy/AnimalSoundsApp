import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
const { width } = Dimensions.get("window");


export default function InnerHeader({ navigationHome, setModalOpen }){
    return(
        <SafeAreaView style ={styles.header}>
            <View style ={styles.headerInner}>
                <TouchableOpacity 
                onPress={()=>{
                    navigationHome.goBack()
                }}
                >
                   <FontAwesome name="home" size={30} color="white" style ={styles.IconStyle} />
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <FontAwesome name="star" size={30} color="white" style ={styles.IconStyle} />
                </TouchableOpacity>
               
               <TouchableOpacity
                  onPress={()=>{
                    setModalOpen(true);
                 }}
                >
                    <MaterialIcons name="settings" size={30} color="white" style ={styles.IconStyle} />
               </TouchableOpacity>
               
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   header:{
    //    marginTop: Constants.statusBarHeight,
       width: '100%',
       height: 60,
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'flex-start',
       backgroundColor: 'transparent',
       shadowColor: "#000",
       paddingVertical: 10,
       paddingHorizontal: 20,
    //    shadowOffset: {
    //         width: 0,
    //         height: 1,
    //     },
    //     shadowOpacity: 0.20,
    //     shadowRadius: 1.41,
    //     elevation: 2,
   },
   headerInner:{
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
   },
   IconStyle: {
      height: 45,
      width: 45,
      backgroundColor: 'rgba(115, 118, 122, .3);',
      textAlign: 'center',
      borderRadius: 100/2,
      paddingTop: 8,
      justifyContent: 'center',
      alignItems: 'center',
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