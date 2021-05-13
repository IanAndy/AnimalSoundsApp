import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Text, Linking, Share} from 'react-native';
import { FontAwesome, MaterialIcons, AntDesign } from '@expo/vector-icons';
const { width } = Dimensions.get("window");


export default function modalBox(){
  
    // This opens my play store account
    const openURL = (url) => {
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    }

    //Sharing function

    const onShare = async () => {
        try {
            const result = await Share.share({
                title: "This is my repo",
                message: "animals are awesome",
                url: "https://stackoverflow.com/questions/26069238/call-multiple-functions-onclick-reactjs",
                subject: "Report"
            });
            if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
            } else if (result.action === Share.dismissedAction) {
            // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };



    return(
        <View style ={styles.header}>
            <View style ={styles.headerInner}>

                <TouchableOpacity 
                    onPress={()=>{
                    openURL('https://play.google.com/store/apps/developer?id=Maleera+Games&hl=en');
                 }}
                style ={styles.settingsBox}
                >  
                   <View style ={styles.innerSettingsBox}>
                        <AntDesign name="appstore1" size={35} color="rgba(115, 118, 122, .5)" style ={styles.IconStyle} />
                        <Text style={styles.settingsText}>
                          More apps
                        </Text>
                    </View>
                   
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>{
                  
                }}
                style ={styles.settingsBox}

                >  
                   <View style ={styles.innerSettingsBox}>
                        <FontAwesome name="thumbs-o-up" size={35} color="rgba(115, 118, 122, .5)" style ={styles.IconStyle} />
                        <Text style={styles.settingsText}>
                          Rate 5 stars
                        </Text>
                    </View>
                   
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={onShare}
                style ={styles.settingsBox}
                > 
                   <View style ={styles.innerSettingsBox}>
                        <FontAwesome name="share-alt" size={35} color="rgba(115, 118, 122, .5)" style ={styles.IconStyle} />
                        <Text style={styles.settingsText}>
                          Share love of animals
                        </Text>
                    </View>
                   
                </TouchableOpacity>


                <TouchableOpacity 
                onPress={()=>{
                  
                }}
                style ={styles.settingsBox}

                >  
                   <View style ={styles.innerSettingsBox}>
                        <MaterialIcons name="mail-outline" size={35} color="rgba(115, 118, 122, .5)" style ={styles.IconStyle} />
                        <Text style={styles.settingsText}>
                          Error Report
                        </Text>
                    </View>
                   
                </TouchableOpacity>


                <TouchableOpacity 
                onPress={()=>{
                  
                }}
                style ={styles.settingsBox}

                >  
                   <View style ={styles.innerSettingsBox}>
                        <FontAwesome name="certificate" size={35} color="rgba(115, 118, 122, .5)" style ={styles.IconStyle} />
                        <Text style={styles.settingsText}>
                          Privacy & Terms
                        </Text>
                    </View>
                   
                </TouchableOpacity>


              
                
               
               
               {/* <TouchableOpacity
                  onPress={()=>{
                    // setModalOpen(true);
                 }}
                >
                    <MaterialIcons name="settings" size={30} color="white" style ={styles.IconStyle} />
               </TouchableOpacity> */}
               
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
   header:{
    //    marginTop: Constants.statusBarHeight,
       width: '80%',
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: 'transparent',
       shadowColor: "#000",
       padding: 0,
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
    minWidth: 250,
    paddingHorizontal: 0,
    flexDirection: 'column',
   },
   settingsBox:{
    alignItems: 'stretch'
   }, 
   innerSettingsBox:{
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomColor: 'rgba(40, 44, 52, .4)',
    borderBottomWidth: 1
   },
   IconStyle: {
    height: 40,
    width: 40,
    backgroundColor: 'transparent',
    textAlign: 'left',
    alignSelf: 'center',
    paddingTop: 8,
   },
   settingsText:{
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: "left",
    alignSelf: 'center',
    color: '#272727',
    letterSpacing: 1,
    paddingLeft: 15
   }
  
});