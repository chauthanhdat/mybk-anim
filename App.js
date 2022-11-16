import { StatusBar } from "expo-status-bar";
import React, { useRef, useEffect } from 'react';
import {ScrollView, Button, StyleSheet, View } from "react-native";
import LottieView from 'lottie-react-native';
import Lottie from "lottie-react-native";

import Category from "./components/Category"

export default function App() {
  const animation = useRef(null);
  useEffect(() => {
  }, []);

  return (
    <View>
      <ScrollView scrollEventThrottle={16}>
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
          <View style={{ height: 300, marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <Category
                name="CO3043" />
              <Category
                name="CO3044"/>
              <Category
                name="CO3045"/>
              <Category
                name="CO3045"/>
              <Category
                name="CO3045"/>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
        source={require('./animations/loading.json')}
      />
      {/* <View style={styles.buttonContainer}>
        <Button
          title="Restart Animation"
          onPress={() => {
            animation.current?.reset();
            animation.current?.play();
          }}
        />
      </View> */}
    </View>
  );

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
        source={require('./animations/loading.json')}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Restart Animation"
          onPress={() => {
            animation.current?.reset();
            animation.current?.play();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});