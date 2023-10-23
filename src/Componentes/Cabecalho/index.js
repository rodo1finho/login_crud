import { View, Image, Text, TouchableOpacity } from "react-native";
import { estilos } from "./estilos";
import Icon from 'react-native-vector-icons/Feather';


export function Cabecalho() {
    return (
        <View style={estilos.container}>
            <Image style={estilos.imagem} source={require("../../../assets/logo.png")} />
            <Text style={estilos.titulo}> IFALBOOK </Text>
            <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Login')}>
                <Icon
                    name={'log-out'}
                    size={22}
                    color="#FFF"
                />
            </TouchableOpacity>
        </View>
    );
}