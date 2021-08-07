/**
 * Video Test
 */

import React, {Component, useState} from 'react';
import Video from 'react-native-video';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import{ Colors
} from 'react-native/Libraries/NewAppScreen';

/**
 * This was the first function I made, based off of the introductory guide
 * @param {*} param0 
 * @returns 
 */
const Section = ({children, title}) => {
  return (
    <SafeAreaView style={styles.sectionContainer} >
      <Text
        style={[
          styles.titleText,
          {
            color: Colors.white,},
        ]}>
        {title}
      </Text>
      <Text
        style={styles.textSection}>
        {children}
      </Text>
    </SafeAreaView>
  );
};

//const Answers = ({buttons})

  /**
   * Need to write something to generate however many buttons are needed for a question
   * Has a video displaying now, I need to detect screen orientation and reorient the video/app for it
   * @returns 
   */
class App extends Component {
  render(){
    const testVideo = require('./Test.mp4');
  return (
      <View style={{flex: 2, justifyContent:"flex-start"}}>
        <Section title="Training Video">
          <Text>In this video something happens</Text>
        </Section>

        <Video source={testVideo}
          ref={(ref) => {this.player = ref}}
          onBuffer={this.onBuffer}
          onError={this.videoError}
          resizeMode={'contain'}
          paused={true}

          style={styles.videoAlign}
          controls={true}
        /> 

          <SafeAreaView title="Answers" style={{flex: 1, justifyContent: "space-evenly"}}> 
            <Text style={styles.titleText}>Answers</Text>

            <View style={styles.buttonStyle}>
              <Button title="Cat"
              onPress={() => {alert('Incorrect')}}/>
              <Button title="Bunny"
              onPress={() => {alert('Incorrect')}}/>
              <Button title="Snake"
              onPress={() => {alert('Correct')}}/>
            </View>
          </SafeAreaView>
      </View>
  );
}
}


const styles = StyleSheet.create({

  textSection: {
    marginTop: 60,
    fontSize: 20,
    fontWeight: '500',
    color: Colors.white,
    textAlign: 'center',
  },
  
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignSelf: "center",
  },
  
  titleText: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
    alignSelf: "center",
  },

  videoAlign: {
    position: 'relative',
    flex: 1,
  },

  buttonStyle: {
    alignSelf: "center",
    justifyContent: "space-around",
    flex: 0.8,
  },
});

export default App;