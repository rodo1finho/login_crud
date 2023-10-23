import { StyleSheet, StatusBar } from "react-native";

export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#04244F",
        alignItems: "center",
        paddingTop: StatusBar.currentHeight,
        padding: 15,
    },
    containerTitulo: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    titulo: {
        color: "#D9D9D9",
        fontSize: 22,
        fontWeight: "500",
        marginBottom: 10,
        textAlign: "center",
    },
    input: {
        width: "100%",
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 15,
    },
    entradaDescricao: {
        textAlignVertical: "top",
        textAlign: "left",
        width: "100%",
        marginTop: 15,
    },
    imagem: {
        width: '100%',
        height: 190,
        borderRadius: 5,
        marginVertical: 15,

    },
    botoes: {
        flexDirection: 'row',
 
        paddingTop: 50,
    },
    botao: {
        alignItems: 'center',
        backgroundColor: '#6495ED',
        padding: 10,
        width: 105,
        height: 40,
        margin: 30,
        borderRadius: 50,
    },
    texto: {
        color: '#fff'
    },
})