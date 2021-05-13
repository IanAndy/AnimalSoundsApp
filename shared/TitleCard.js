import React from 'react';
import { StyleSheet, View } from 'react-native';




export default function TitleCard(props) {

    return (
        <View style={[styles.card, props.style]}>
           <View style={styles.cardContent}>
              {props.children}
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
  card: {
    elevation: 3,
    backgroundColor:'#fff',
    shadowOffset: {
        width: 1,
        height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    paddingHorizontal: 20,
    borderWidth: 0.5,
    borderBottomWidth: 0.5,
    // borderLeftColor: '#008000',
    borderLeftWidth: 0.5,
    // borderColor: '#DCDCDC',
    // borderRadius: 10,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderTopColor: '#DCDCDC',
    borderBottomColor: '#DCDCDC',
    borderLeftColor: '#DCDCDC',
    borderRightColor: '#DCDCDC',
  },
  cardContent:{
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
 
});