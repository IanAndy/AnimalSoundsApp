import React from 'react';
import { StyleSheet, View } from 'react-native';




export default function Card(props) {

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
    borderBottomWidth: 1,
    // borderLeftColor: '#008000',
    borderLeftWidth: 10,
    backgroundColor: 'white',
    // borderColor: '#DCDCDC',
    // borderRadius: 10,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderTopColor: '#DCDCDC',
    borderBottomColor: '#DCDCDC',
    // borderLeftColor: '#008000',
    borderRightColor: '#DCDCDC',
  },
  cardContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
 
});