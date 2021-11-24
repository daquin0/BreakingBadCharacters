import { StyleSheet } from "react-native";
export const colors={
    white:'#eaeaea',
}

export const baseStyle = StyleSheet.create({
    Title:{
        color: colors.white,
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 4,
        marginBottom: 20,
        marginTop: 30
    }
});
