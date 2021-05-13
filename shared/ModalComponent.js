import React from 'react';
import { 
  StyleSheet,
  View, 
  TouchableWithoutFeedback,
  Modal

} from 'react-native';
import ModalBox from './modalBox';
import Constants from 'expo-constants';

export default function ModalComponent({modalOpen, setModalOpen}) {

  return (

    <Modal
          animationType="fade"
          transparent={true}
          visible={modalOpen}
          >
      
          <TouchableWithoutFeedback 
            onPress={() => {
              setModalOpen(!modalOpen);
            }}
          >
             <View style={styles.modalOverlay} />
          </TouchableWithoutFeedback>

          <View style={styles.centeredView}>
            <View style={styles.modalView}>

             
              <ModalBox/>
{/* 
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalOpen(!modalOpen);
                }}
               >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight> */}
            </View>
          </View>
    </Modal>

  );
}

const styles = StyleSheet.create({
 centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
});