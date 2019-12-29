import React, { Component } from 'react';

import {
    ImageBackground,
    Dimensions,
    StyleSheet,
    Image,
    ScrollView,
    Alert,
    View,
} from 'react-native';
import { Block, Text, Button, Input} from 'galio-framework';

import Icon from 'react-native-vector-icons/FontAwesome';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import Loading from '../../../commons/Loading';

const { width, height } = Dimensions.get('screen');

export default class CadastroCompanhia extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = { nome: '', email: '', senha: '', error: '', loading: false };
    }

    cadastrarCompanhia(email, senha, nome) {
        auth()
            .createUserWithEmailAndPassword(email, senha)
            .then(res => {
                this.loginSucesso();
                Alert.alert('Cadastro realizado com sucesso');
                const uid = res.user.uid;
                firestore()
                    .collection('usuarios')
                    .doc(uid)
                    .set({
                        avatar: '',
                        nome,
                        email,
                        tipo: 'companhia',
                    });
                this.props.navigation.navigate('CadastroCompanhiaFoto');
            })
            .catch(erro => {
                this.loginFalhou(erro);
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

    loginSucesso() {
        this.setState({ email: '', senha: '', error: '', loading: false });
    }

    loginFalhou(error) {
        this.setState({ error: error.message, loading: false });
    }

    renderBotao(error) {
        if (this.state.loading) {
            return <Loading />;
        }

        return (
            <Button
                round
                color="#bd158d"
                onPress={() =>
                    this.cadastrarCompanhia(
                        this.state.email.toLowerCase(),
                        this.state.senha,
                        this.state.nome,
                    )
                }>
                Criar Conta
      </Button>
        );
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
                                    <Text h4 color="#bd158d" size={20} bold>
                                        Vamos iniciar o seu cadastro
                                    </Text>
                                </Block>

                                <Block middle>
                                    <Text p muted style={styles.texto}>
                                        {' '}
                                        Preencha as informações necessárias
                                </Text>
                                </Block>
                                <Block middle style={styles.bloco}>
                                    <Input
                                        rounded
                                        color="#442980"
                                        placeholder="Insira o nome da companhia"
                                        onChangeText={nome => this.setState({ nome })}
                                        color="#442980"
                                        family="antdesign"
                                        borderless
                                        bgColor="#eaeaea"
                                        icon="user"
                                        iconColor="#bd158d"></Input>
                                    <Input
                                        rounded
                                        color="#442980"
                                        placeholder="Email da companhia"
                                        onChangeText={email => this.setState({ email })}
                                        color="#442980"
                                        family="antdesign"
                                        bgColor="#eaeaea"
                                        borderless
                                        icon="mail"
                                        iconColor="#bd158d"></Input>
                                    <Input
                                        rounded
                                        color="#442980"
                                        placeholder="Insira uma senha de 06 caracteres"
                                        onChangeText={senha => this.setState({ senha })}
                                        color="#442980"
                                        password
                                        family="antdesign"
                                        borderless
                                        bgColor="#eaeaea"
                                        bolder
                                        icon="key"
                                        iconColor="#bd158d"
                                        viewPass></Input>
                                </Block>

                                <Block>
                                    <Text
                                        style={{ fontSize: 20, color: 'red', alignSelf: 'center' }}>
                                        {this.state.error}
                                    </Text>
                                </Block>

                                <Block middle flex>
                                    <View>{this.renderBotao()}</View>
                                </Block>
                            </Block>
                            <Block middle style={styles.pularButton}>
                                <Text
                                    bold
                                    color="#bd158d"
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
