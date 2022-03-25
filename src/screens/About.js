import React from "react"
import { View, Text, StyleSheet, Button } from "react-native";

export default function About(props) {
    const {navigation} = props;

    return(
        <View>
            <Text style={styles.about}>ESTAMOS EN ABOUT</Text>
            <Button title="Ir a Contact" onPress={() => navigation.navigate('contact')} />
        </View>
    )
}

const styles = StyleSheet.create({
    about:{
        color: "black",
    }
})