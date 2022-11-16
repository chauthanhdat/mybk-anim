import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import Category from "./screens/components/Category";

export default function App() {
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  subject: {
    width: 100,
    height: 200,
    backgroundColor: "#000",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
