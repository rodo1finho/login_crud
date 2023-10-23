import { FlatList, View } from "react-native";
import { useEffect } from "react";
import { estilos } from "./estilos";
import { Cabecalho } from "../Cabecalho";
import { BotaoAdd } from "../Botao";
import { useState } from "react";
import { CardPost } from "../CardPost";
import { pegarPostTempoReal } from "../../servicos/firestore";

export function TelaPrincipal({ navigation }) {
    const [posts, setPost] = useState([])

    useEffect(() => {
        pegarPostTempoReal(setPost)
    }, [])

    return (
        <>
            <Cabecalho />
            <View style={estilos.container}>
                {posts.length > 0 &&
                    (
                        <FlatList
                            data={posts}
                            renderItem={({ item }) => <CardPost post={item} navigation={navigation} />}
                            keyExtractor={item => item.id}
                        />
                    )
                }
                <BotaoAdd onPress={() => navigation.navigate('Post')} />
            </View>
        </>
    )
}