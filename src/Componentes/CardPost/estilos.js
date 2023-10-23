import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
    container: {
        marginBottom: 15,
        backgroundColor: "#6495ED",
        elevation: 5,
        borderRadius: 10,
        paddingHorizontal: 20,
    },
    titulo: {
        width: '100%',
        color: '#fff',
        fontSize: 12,
    },
    imagem: {
        width: '100%',
        height: 200,
    },
    descricao: {
        width: '100%',
        color: '#fff',
        fontSize: 15,
    },
    rodapeView: {
        backgroundColor: '#6495ED',
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingVertical: 10,
    }
});