import { View, TouchableOpacity, Text, Alert, Image, LogBox } from "react-native";
import { TextInput, HelperText } from 'react-native-paper';
import { estilos } from "./estilos";
import { useState } from "react";
import { salvarImagem } from "../../servicos/storage";
import { cadastrarPost } from "../../servicos/firestore";
import { atualizarPost } from "../../servicos/firestore";
import * as ImagePicker from 'expo-image-picker';

LogBox.ignoreAllLogs() //Ignora as messagens de WARN 

export function Post({ navigation, route }) {
    const [titulo, setTitulo] = useState(route?.params?.titulo || '')
    const [descricao, setDescricao] = useState(route?.params?.descricao || '')
    const [statusErro, setStatusErro] = useState('')
    const [mensagemErro, setMensagemErro] = useState('')
    const [imagem, setImagem] = useState(route?.params?.url || '');

    async function salvarPost() {
        if (titulo == '') {
            setStatusErro('Titulo')
            setMensagemErro('Título não pode ser em branco')
        } else if (descricao == '') {
            setStatusErro('Descricao')
            setMensagemErro('A descricao não pode está fazia')
        } else if (imagem == '') {
            setStatusErro('Imagem')
            setMensagemErro('Toda postagem deve ter uma imagem')
        }
        else {
            let resultado = ''
            if (route?.params) {
                resultado = await atualizarPost(route?.params?.id, { titulo, descricao })
                await atualizaPostComImagem(route?.params?.id)
            } else {
                resultado = await cadastrarPost({ titulo, descricao })
                await atualizaPostComImagem(resultado)
            }
            if (resultado == 'erro') {
                Alert.alert('Erro ao cadastrar post')
            } else {
                setTitulo('')
                setDescricao('')
                setImagem('')
                navigation.navigate('TelaPrincipal')
            }
        }
    }

    async function atualizaPostComImagem(idPost) {
        const url = await salvarImagem(imagem, idPost); //colocar o nome da imagem como o id do post
        await atualizarPost(idPost, { titulo, descricao, url })
    }

    async function escolherImagem() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,  //Tipo da midia "All" todas as midias 
            allowsEditing: true, //permite que usuario edite a imagem enquanto escolhe
            aspect: [4, 3], //padrao da imagem
            quality: 0.2, //qualidade da imagem vai de 0  a 1
        });
        console.log(result);
        if (!result.canceled) {
            setImagem(result.assets[0].uri);
        }
    }
    return (
        <View style={estilos.container}>
            <View style={estilos.containerTitulo}>
                <Text style={estilos.titulo}>{route?.params?.id ? "Editar post" : "Novo Post"}</Text>
            </View>
            <TextInput
                label="Titulo"
                value={titulo}
                onChangeText={setTitulo}
                mode="outlined"
                error={statusErro == 'Titulo'}
                style={estilos.input} />
            {statusErro == 'Titulo' ? <HelperText type="error" visible={statusErro == 'Titulo'}>
                {mensagemErro}
            </HelperText> : null}
            <TextInput
                label="Descrição"
                value={descricao}
                onChangeText={setDescricao}
                mode="outlined"
                style={estilos.entradaDescricao} />
            {statusErro == 'Descricao' ? <HelperText type="error" visible={statusErro == 'Descricao'}>
                {mensagemErro}  </HelperText> : null}
            <TouchableOpacity style={estilos.imagem} onPress={escolherImagem}>
                <Image style={estilos.imagem} source={imagem ? { uri: imagem } : require('../../../assets/upload.jpeg')}></Image>
                {statusErro == 'Imagem' ? <HelperText type="error" visible={statusErro == 'Imagem'}>
                    {mensagemErro}
                </HelperText> : null}
            </TouchableOpacity>
            <View style={estilos.botoes}>
                <TouchableOpacity
                    style={estilos.botao} onPress={() => salvarPost()}>
                    <Text style={estilos.texto}>{route?.params?.id ? "Editar" : "Cadastrar"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={estilos.botao} onPress={() => navigation.goBack()}>
                    <Text style={estilos.texto}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}