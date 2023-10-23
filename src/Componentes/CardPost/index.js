import { TouchableOpacity, View, Text, Image, Alert } from "react-native"
import { estilos } from "./estilos"
import { deletarImagem } from "../../servicos/storage"
import { deletarPost } from "../../servicos/firestore"

//Alert não funciona no navegador por isso essa função não foi chamada ao cliclar no botão deletar
async function deletar(idPost) {
    Alert.alert(
        'Deletar Produto',
        'Tem certeza que quer deletar?',
        [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                style: 'default',
                onPress: () => { deletarTudo(idPost) },
            },
        ]
    )
}

async function deletarTudo(idPost) {
    if (await deletarImagem(idPost)) {
        await deletarPost(idPost)
    }
}
export function CardPost({ post, navigation }) {
    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>{post.titulo}</Text>
            <Image style={estilos.imagem} source={{ uri: post.url }}></Image>
            <Text style={estilos.descricao}>{post.descricao}</Text>
            <View style={estilos.rodapeView}>
                <TouchableOpacity onPress={() => navigation.navigate('Post', post)}>
                    <Text>&#128221;</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deletarTudo(post.id)}>
                    <Text> &#128465;</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}