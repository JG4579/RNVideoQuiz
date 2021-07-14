/**
 * Video Test
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
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
            color: Colors.white,
          },
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

/**
 * 
 * @param {*} param0 
 * @returns 
 */
const TextSection = ({text}) => {
  return (
  <SafeAreaView>
    <View style={styles.sectionContainer}>
      <Text style={styles.textSection}>
      {text}
      </Text>
    </View>
  </SafeAreaView>
  )}

  /**
   * Need to write something to generate however many buttons are needed for a question, and
   * get a video displaying next
   * @returns 
   */
const App = () => {
  return (
    <SafeAreaView>
            <Section title="Training Video">
              <Text>In this video something happens</Text>
            </Section>
            <Image style={styles.imageAlign}
        source={{uri: "https://developer-blogs.nvidia.com/wp-content/uploads/2016/07/cute.jpg"}}
        />
        <SafeAreaView title="Answers" style={{justifyContent: "space-evenly"}}> 
          <Text style={styles.titleText}>Answers</Text>

          <View style={styles.buttonStyle}>
            <Button title="Cat"/>
            <Button title="Bunny"/>
            <Button title="Snake"/>
          </View>
        </SafeAreaView>
    </SafeAreaView>
  );
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

  imageAlign: {
    height: 300,
    width: 300,
    alignSelf: "center",
  },

  buttonStyle: {
    alignSelf: "center",
    justifyContent: "space-evenly"
  },
});

export default App;