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
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const { width, height } = Dimensions.get('screen');

import { DatePicker } from 'native-base';

export default class CadastroPecas extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);

        this.state = {
            titulo: '',
            qtdParticipantes: 0,
            categoria: '',
            horario: '',
            sinopse: '',
            valorInscricao: 0,
            datas: new Date(),
            endereco: '',
        };

        this.setDate = this.setData.bind(this);
    }
    setData(newDate) {
        this.setState({ datas: newDate });
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

    cadastroWorkshops(
        titulo,
        qtdParticipantes,
        categoria,
        horario,
        sinopse,
        valorInscricao,
        datas,
        endereco) {
        this.setState({ disabled: true })
        const companhiaUID = auth().currentUser.uid
        const uid = this.gerarRandomID();

        firestore()
            .collection('espetaculo')
            .doc(uid)
            .set({
                companhiaUID,
                titulo,
                qtdParticipantes,
                categoria,
                horario,
                sinopse,
                valorInscricao,
                datas,
                endereco,
                tipo: 'espetaculo',
                img: ''
            }).then(res =>
                this.setState({ disabled: false }))
    }

    render() {
        return (
            <ScrollView>
                <Block flex middle>
                    <ImageBackground style={{ width, height, zIndex: 1 }}>
                        <Block flex middle>
                            <Block style={styles.loginContainer}>
                                {/* <Block middle>
                                    <Image
                                        source={{ uri: 'https://i.ibb.co/kXYt1qG/Pagina2.jpg' }}
                                        style={styles.imagem}></Image>
                                </Block> */}
                                <Block middle>
                                    <Text color="#bd158d" size={20} bold>
                                        Cadastrar Espetaculo
                                    </Text>
                                </Block>

                                <Block middle>
                                    <Text p muted style={styles.texto}>
                                        Preencha com informações abaixo para adicionar um novo espetaculo
                                    </Text>
                                </Block>
                                <Block style={styles.bloco}>
                                    <Input
                                        rounded
                                        color="#bd158d"
                                        placeholder="Insira o titulo do Espetáculo"
                                        onChangeText={titulo => this.setState({ titulo })}
                                        family="antdesign"
                                        borderless
                                        bgColor="#eaeaea"
                                        icon="profile"
                                        iconColor="#bd158d">
                                    </Input>
                                    <Input
                                        rounded
                                        color="#bd158d"
                                        placeholder="Quantdade de participantes "
                                        keyboardType='numeric'
                                        onChangeText={qtdParticipantes => this.setState({ qtdParticipantes })}
                                        color="#bd158d"
                                        family="antdesign"
                                        bgColor="#eaeaea"
                                        borderless
                                        icon="team"
                                        iconColor="#bd158d"></Input>
                                    <Input
                                        rounded
                                        color="#bd158d"
                                        placeholder="Categoria do workshop"
                                        onChangeText={categoria => this.setState({ categoria })}
                                        color="#bd158d"
                                        family="antdesign"
                                        borderless
                                        bgColor="#eaeaea"
                                        bolder
                                        icon="tagso"
                                        iconColor="#bd158d"
                                    >

                                    </Input>
                                    <Input
                                        rounded
                                        color="#bd158d"
                                        placeholder="Materiais necessários"
                                        onChangeText={horario => this.setState({ horario })}
                                        color="#bd158d"
                                        family="antdesign"
                                        borderless
                                        bgColor="#eaeaea"
                                        bolder
                                        icon="setting"
                                        iconColor="#bd158d"
                                    >

                                    </Input>
                                    <Input
                                        rounded
                                        color="#bd158d"
                                        placeholder="Descreva uma breve sinopse"
                                        onChangeText={sinopse => this.setState({ sinopse })}
                                        color="#bd158d"
                                        family="antdesign"
                                        borderless
                                        bgColor="#eaeaea"
                                        bolder
                                        icon="book"
                                        iconColor="#bd158d"
                                    >

                                    </Input>
                                    <Input
                                        rounded
                                        color="#bd158d"
                                        keyboardType='numeric'
                                        placeholder="Valor da Inscrição"
                                        onChangeText={valorInscricao => this.setState({ valorInscricao })}
                                        color="#bd158d"
                                        family="antdesign"
                                        borderless
                                        bgColor="#eaeaea"
                                        bolder
                                        icon="creditcard"
                                        iconColor="#bd158d"
                                    >

                                    </Input>
                                    <DatePicker
                                        defaultDate={new Date(2019, 11, 23)}
                                        minimumDate={new Date(2018, 1, 1)}
                                        locale={"pt-br"}
                                        timeZoneOffsetInMinutes={undefined}
                                        modalTransparent={false}
                                        androidMode={"default"}
                                        placeHolderText="Data de realização"
                                        textStyle={{ color: "#442980" }}
                                        placeHolderTextStyle={{ color: "gray" }}
                                        onDateChange={this.setDate}
                                        disabled={false}>
                                        <Text>
                                            Date: {this.state.datas.toString().substr(4, 12)}
                                        </Text>
                                    </DatePicker>
                                    
                                    {/* <Input
                                        rounded
                                        color="#bd158d"
                                        placeholder="Endereço do workshop"
                                        onChangeText={endereco => this.setState({ endereco })}
                                        color="#bd158d"
                                        family="antdesign"
                                        borderless
                                        bgColor="#eaeaea"
                                        bolder
                                        icon="environment"
                                        iconColor="#bd158d"
                                    >
                                    </Input> */}
                                </Block>
                                <Block flex style={styles.workshop}>
                                    <Button
                                        round
                                        color="#bd158d"
                                        onPress={() =>
                                            this.cadastroWorkshops(
                                                this.state.titulo.toLowerCase(),
                                                this.state.qtdParticipantes,
                                                this.state.categoria,
                                                this.state.horario,
                                                this.state.sinopse,
                                                this.state.valorInscricao,
                                                this.state.datas,
                                                this.state.endereco
                                            )
                                        }>
                                        Cadastrar Workshop
                                    </Button>
                                </Block>
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
        textAlign: 'center',
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
    workshop: {
        paddingTop: 10,
    }
});