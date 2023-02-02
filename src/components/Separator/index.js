import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";


const Separator = () => {

    return (
        <View style={styles.row}>
            <View style={styles.line}></View>
            <Text style={styles.text}>Or sign up with</Text>
            <View style={styles.line}></View>
        </View>
    )
}
export default Separator