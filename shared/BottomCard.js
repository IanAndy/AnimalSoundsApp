import React from 'react';
import { StyleSheet, View } from 'react-native';




export default function BottomCard(props) {

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
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopColor: '#DCDCDC',
    borderBottomColor: '#DCDCDC',
    borderLeftColor: '#DCDCDC',
    borderRightColor: '#DCDCDC',
  },
  cardContent:{
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
 
});