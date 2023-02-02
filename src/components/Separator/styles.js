import { StyleSheet } from "react-native";

import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    line: {
        height: 1,
        backgroundColor: colors.lightgrey,
        flex: 1
    },
    text: {
        color: colors.blue,
        marginHorizontal: 14,
        fontWeight: '600'
    },
    
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 38
    }

})