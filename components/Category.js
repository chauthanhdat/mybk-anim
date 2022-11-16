import React, { Component, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";


// import Loading from "./loading";

class Category extends Component {
    render() {
        return (
            <View style={{ height: 250, width: 150, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={styles.title}>
                    <Text>{this.props.name}</Text>
                </View>
                <View>
                    {/* <Button onPress={Loading} title="Add" color="#0000ff"/> */}
                </View>
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});