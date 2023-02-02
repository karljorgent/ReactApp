import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const ImageButton = ({onPress}) => {
    return (
            <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={styles.container}>
                <Image style={styles.image} source={require('../../assets/google.png')}/>
            </TouchableOpacity>
    )
}

export default ImageButton