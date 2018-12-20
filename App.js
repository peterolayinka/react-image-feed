import React from 'react';
import {Constants} from 'expo' 
import { StyleSheet, Text, View } from 'react-native';
import AuthorRow from './component/AuthorRow';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AuthorRow
          fullname={'First Last'}
          linkText={'Comments'}
          onPressLinkText={()=>{console.log('Pressed Link!')}}
        >
        </AuthorRow>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
});
