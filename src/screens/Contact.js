import React from "react"
import { View, Text, StyleSheet } from "react-native";

export default function Contact() {
    return(
        <View>
            <Text style={styles.contact}>ESTAMOS EN CONTACT</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contact:{
        color: "black",
    }
})