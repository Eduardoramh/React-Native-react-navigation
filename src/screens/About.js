import React from "react"
import { View, Text, StyleSheet } from "react-native";

export default function About() {
    return(
        <View>
            <Text style={styles.about}>ESTAMOS EN ABOUT</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    about:{
        color: "black",
    }
})