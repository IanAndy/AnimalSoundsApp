import React, {useState} from 'react';
import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview';

export default function MyWeb({ route, navigation}){

    const [isLoading, SetLoadingStatus] = useState(false);
  
    const { url } = route.params;

    const updateStatus = ()=>{
       console.log('God is great');
       SetLoadingStatus(true);
    }

    return isLoading ? (
        <WebView
          onLoad={() => updateStatus()}
          source={{ uri: url}}
          style={{ marginTop: 20 }}
        />
      ) : (
        <WebView
        onLoad={() => updateStatus()}
        source={
          { 
            html: `<h1 style="Color:#0EA128;
            text-align: center; 
            font-size: 70px;
            margin-top: 40px;">Loading...<h1>
            `
          }
        }
        style={styles.WebviewLoading}
       />
      );
}

const styles = StyleSheet.create({
  WebviewLoading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
});