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
import { Block, Text, Button, Input, Radio } from 'galio-framework';

import Icon from 'react-native-vector-icons/FontAwesome';


import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


import Loading from '../../../components/commons';

const { width, height } = Dimensions.get('screen');




export default class CadastroWorkshops extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {  titulo: '', 
                        qtdParticipantes: '', 
                        categoria: '', 
                        materiais: '', 
                        error: '',
                        diisabled: true};
        
    }

    gerarRandomID() {
        const alfabeto = "ABCDEFGHIJKLMNOPQRSTUWXYZ";
        const numeros = "0123456789";
        let codigo = "";
        for (let i = 0; i < 10; i++) {
            if (i < 5)
                codigo = codigo.concat(alfabeto[Math.floor(Math.random() * 25)]);
            else codigo = codigo.concat(numeros[Math.floor(Math.random() * 10)]);
        }
        return codigo;
    }

    cadastroWorkshops(titulo, qtdParticipantes, categoria, materiais) {
        this.setState({disabled: true})
        const companhiaUID = auth().currentUser.uid
        const uid = this.gerarRandomID();

        firestore()
            .collection('workshops')
            .doc(uid)
            .set({
                companhiaUID,
                titulo,
                qtdParticipantes,
                categoria,
                materiais,
                tipo: 'workshops',
                img: ''
            }).then(res =>
                this.setState({disabled: false}))
    }




    // renderBotao(error) {
    //     if (this.state.loading) {
    //         return <Loading />;
    //     }

    //     return (
    //         <Button
    //             round
    //             color="#bd158d"
    //             onPress={() =>
    //                 this.cadastroWorkshops(
    //                     this.state.titulo.toLowerCase(),
    //                     this.state.qtdParticipantes,
    //                     this.state.categoria,
    //                     this.state.materiais
    //                 )
    //             }>
    //             Cadastrar Workshop
    //   </Button>
    //     );
    // }
    render() {
        return (
            <ScrollView>
                <Block flex middle>
                    <ImageBackground style={{ width, height, zIndex: 1 }}>
                        <Block flex middle>
                            <Block style={styles.loginContainer}>
                                {/* <Block>
                                    <Image
                                        source={{ uri: 'https://i.ibb.co/kXYt1qG/Pagina2.jpg' }}
                                        style={styles.imagem}></Image>
                                </Block> */}
                                <Block bold middle>
                                    <Text h4 color="#bd158d" size={20} bold>
                                        Cadastrar Workshop
                                    </Text>
                                </Block>

                                <Block middle>
                                    <Text p muted style={styles.texto}>
                                        {' '}
                                        Preencha com informações abaixo para adicionar um novo workshop
                                </Text>
                                </Block>
                                <Block middle style={styles.bloco}>
                                    <Input
                                        rounded
                                        color="#442980"
                                        placeholder="Insira o titulo do workshop"
                                        onChangeText={titulo => this.setState({ titulo })}
                                        color="#442980"
                                        family="antdesign"
                                        borderless
                                        bgColor="#eaeaea"
                                        icon="user"
                                        iconColor="#bd158d"></Input>
                                    <Input
                                        rounded
                                        color="#442980"
                                        placeholder="Quantdade de participantes "
                                        onChangeText={qtdParticipantes => this.setState({ qtdParticipantes })}
                                        color="#442980"
                                        family="antdesign"
                                        bgColor="#eaeaea"
                                        borderless
                                        icon="mail"
                                        iconColor="#bd158d"></Input>
                                    <Input
                                        rounded
                                        color="#442980"
                                        placeholder="Categoria do worshop"
                                        onChangeText={categoria => this.setState({ categoria })}
                                        color="#442980"
                                        password
                                        family="antdesign"
                                        borderless
                                        bgColor="#eaeaea"
                                        bolder
                                        icon="key"
                                        iconColor="#bd158d"
                                        viewPass>

                                    </Input>
                                    <Input
                                        rounded
                                        color="#442980"
                                        placeholder="Materiais necessários"
                                        onChangeText={materiais => this.setState({ materiais })}
                                        color="#442980"
                                        password
                                        family="antdesign"
                                        borderless
                                        bgColor="#eaeaea"
                                        bolder
                                        icon="key"
                                        iconColor="#bd158d"
                                        viewPass>

                                    </Input>
                                </Block>

                                <View middle>
                                    <Button
                                        round
                                        color="#bd158d"
                                        disabled = {this.state.disabled}
                                        onPress={() =>
                                            this.cadastroWorkshops(
                                                this.state.titulo.toLowerCase(),
                                                this.state.qtdParticipantes,
                                                this.state.categoria,
                                                this.state.materiais,
                                            )
                                        }>
                                        Cadastrar Workshop
                                    </Button>
                                </View>
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
