import { StyleSheet, StatusBar } from "react-native";

export const estilos = StyleSheet.create({
    container: {
        width: "100%",
        height: 80,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'flex-start',
        backgroundColor: '#04244F',
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 20,
    },
    imagem: {
        width: 25,
        height: 25,
    },
    titulo: {
        fontSize: 20,
        color: '#fff',
    },
    botao: {
        position: "absolute",
        right: 20,
    },
});