import React from "react"
import { View, Text, StyleSheet, Button } from "react-native";

export default function Home(props) {
    const {navigation} = props;

    return(
        <View>
            <Text style={styles.home}>ESTAMOS EN LA HOME</Text>
            <Button title="Ir About" onPress={() => navigation.navigate('about')} />
            <Button title="Ir a Contact" onPress={() => navigation.navigate('contact')} />
        </View>
    )
}

const styles = StyleSheet.create({
    home:{
        color: "black",
    }
})