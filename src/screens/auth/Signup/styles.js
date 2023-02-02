import { StyleSheet } from "react-native";

import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: colors.blue,
        marginHorizontal: 14,
        fontSize: 17    
    },
    textBold: {
        fontWeight: '700'
    },
    button: {
        marginTop: 25
    },
    bottomRow: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})