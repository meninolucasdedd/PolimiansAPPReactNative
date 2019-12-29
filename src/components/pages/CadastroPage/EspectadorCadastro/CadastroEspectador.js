import React, { Component } from 'react';

import {
    ImageBackground,
    Dimensions,
    StyleSheet,
    Image,
    ScrollView,
    Alert,
} from 'react-native';
import { Block, Text, Button, Input, Radio } from 'galio-framework';

const { width, height } = Dimensions.get('screen');

import Icon from 'react-native-vector-icons/FontAwesome';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default class CadastroEspectador extends Component {
    static navigationOptions = {
        header: null,
    };

    state = {
        email: '',
        senha: '',
        nome: '',
        loading: false,
        error: '',
    };

    cadastrarEspectador(email, senha, nome) {
        auth()
            .createUserWithEmailAndPassword(email, senha)
            .then(res => {
                Alert.alert('cadastro realizado com sucesso');
                const uid = res.user.uid;
                firestore()
                    .collection('usuarios')
                    .doc(uid)
                    .set({
                        avatar: '',
                        nome,
                        email,
                        tipo: 'espectador',
                    });
                this.props.navigation.navigate('CadastroEspectadorFoto');
            })
            .catch(erro => {
                switch (erro.code) {
                    case 'auth/invalid-email':
                        Alert.alert('OPA!', 'O Endereço de email não é válido.');
                        break;
                    case 'auth/email-already-in-use':
                        Alert.alert('ATENÇÃO!', 'Email já cadastrado em outra conta');
                        break;

                    case 'auth/weak-password':
                        Alert.alert(
                            'ATENÇÃO!',
                            'Sua senha não é forte. A senha deve ter 06 caracteres',
                        );
                        break;
                    case 'auth/operation-not-allowed':
                        Alert.alert('Operação não permitida');
                        break;
                    default: {
                        console.log(erro);
                        Alert.alert(
                            'Atenção!',
                            'Falha ao realizar o cadastro, contate o adminstrador do aplicativo',
                        );
                    }
                }
            });
    }

    render() {
        return (
            <ScrollView>
                <Block flex middle>
                    <ImageBackground style={{ width, height, zIndex: 1 }}>
                        <Block flex middle>
                            <Block style={styles.loginContainer}>
                                <Block>
                                    <Image
                                        source= {{uri: 'https://i.ibb.co/kXYt1qG/Pagina2.jpg'}}
                                        style={styles.imagem}></Image>
                                </Block>
                                <Block bold middle>
                                    <Text h4 color="#442980" size={20} bold>
                                        Vamos iniciar o seu cadastro
                                </Text>
                                </Block>

                                <Block middle>
                                    <Text p muted style={styles.texto}>
                                        Preencha as informações necessárias
                                </Text>
                                </Block>
                                <Block middle style={styles.bloco}>
                                    <Input
                                        rounded
                                        color="#442980"
                                        iconColor="#442980"
                                        placeholder="Insira o seu nome"
                                        color="#442980"
                                        family="antdesign"
                                        bgColor="#eaeaea"
                                        borderless
                                        icon="user"
                                        onChangeText={nome => this.setState({ nome })}></Input>
                                    <Input
                                        rounded
                                        color="#442980"
                                        placeholder="Insira seu email"
                                        color="#442980"
                                        family="antdesign"
                                        bgColor="#eaeaea"
                                        borderless
                                        icon="mail"
                                        iconColor="#442980"
                                        onChangeText={email => this.setState({ email })}></Input>
                                    <Input
                                        rounded
                                        color="#442980"
                                        placeholder="Insira uma senha de 06 caracteres"
                                        color="#442980"
                                        password
                                        family="antdesign"
                                        bgColor="#eaeaea"
                                        borderless
                                        icon="key"
                                        viewPass
                                        iconColor="#442980"
                                        onChangeText={senha => this.setState({ senha })}></Input>
                                </Block>

                                <Block middle flex>
                                    <Button
                                        color="#442980"
                                        style={styles.createButton}
                                        // onPress={() => this.props.navigation.navigate("CadastroEspectadorFoto")}
                                        onPress={() =>
                                            this.cadastrarEspectador(
                                                this.state.email.toLowerCase(),
                                                this.state.senha,
                                                this.state.nome,
                                            )
                                        }
                                        round>
                                        <Text bold color="white">
                                            {' '}
                                            Criar conta
                                        </Text>
                                    </Button>
                                </Block>
                            </Block>
                            <Block middle style={styles.pularButton}>
                                <Text
                                    bold
                                    color="#442980"
                                    onPress={() => this.props.navigation.navigate('Login')}>
                                    Já possuí uma conta?
                                </Text>
                            </Block>
                        </Block>
                    </ImageBackground>
                </Block>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        width: width * 0.9,
        height: height * 0.8,

        shadowRadius: 8,
        shadowOpacity: 0.1,
        elevation: 1,
        overflow: 'hidden',
    },

    texto: {
        paddingTop: 2,
        textAlign: 'justify',
        color: 'gray',
    },
    imagem: {
        width: 300,
        height: 200,
    },
    bloco: {
        paddingTop: 10,
    },
    pularButton: {
        marginTop: 4,
    },
});
