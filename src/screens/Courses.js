import React from "react"
import { View, Text, StyleSheet, Button } from "react-native";

export default function Courses() {
    return(
        <View>
            <Text style={styles.courses}>ESTAMOS EN COURSES</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    courses:{
        color: "black",
    }
})