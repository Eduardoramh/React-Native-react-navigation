import React from "react"
import { View, Text, StyleSheet, Button } from "react-native";

export default function Contact(props) {
    const {navigation} = props;

    return(
        <View>
            <Text style={styles.contact}>ESTAMOS EN CONTACT</Text>
            <Button title="About" onPress={() => navigation.navigate('about')} />
        </View>
    )
}

const styles = StyleSheet.create({
    contact:{
        color: "black",
    }
})