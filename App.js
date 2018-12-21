import React from 'react';
import {Constants} from 'expo' 
import { StyleSheet, Text, View } from 'react-native';
import CardList from './component/CardList';


const items = [
  {id: '0', author: 'Bob Ross'},
  {id: '1', author: 'Chuck Norris'},
]
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CardList
          items={items}
        />
        {/* <Card
          fullname={'First Last'}
          linkText={'Comments'}
          onPressLinkText={()=>{console.log('Pressed Link!')}}
          image={{uri: 'https://unsplash.it/600/600'}}
        /> */}
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
