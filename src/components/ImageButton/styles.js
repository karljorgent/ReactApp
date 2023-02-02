import { StyleSheet } from "react-native";

import {colors} from '../../utils/colors'

export const styles = StyleSheet.create({
    position: {
        alignItems: 'center'
    },
    container: {
        marginTop: 20,
        marginHorizontal:'25%',
        backgroundColor: colors.darkgrey,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderRadius: 14,
        width: '50%',
        alignItems: 'center'
    },
    image: {
        width: 28,
        height: 28
    }
})