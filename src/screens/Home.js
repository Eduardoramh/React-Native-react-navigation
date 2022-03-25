import React from "react"
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
    return(
        <View>
            <Text style={styles.home}>ESTAMOS EN LA HOME</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    home:{
        color: "black",
    }
})