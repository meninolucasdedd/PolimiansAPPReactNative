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


const { width, height } = Dimensions.get('screen');

export default class EditPerfilEspectador extends Component {
    static navigationOptions = {
        title: 'Edite seu perfil'
    }

    render() {
        return (
            <ScrollView>
                <Block flex middle>
                    <ImageBackground style={{ width, height, zIndex: 1 }}>
                        <Block flex middle>
                            <Block style={styles.loginContainer}>
                                <Block bold middle>
                                    <Text h4 color="#442980" size={20} bold>
                                        {/* Atualizar perfil, nome do usuário logado */}
                                        Olá, Karla Alves
                                    </Text>
                                </Block>
                                <Block middle>
                                    <Text p muted style={styles.texto}>
                                        {' '}
                                        Atualize as informações do seu perfil
                                </Text>
                                </Block>
                                <Block middle>
                                    <Image
                                        source={{uri: 'https://scontent.frec10-1.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/34885721_1797174523662373_3871316880178282496_n.jpg?_nc_cat=100&efg=eyJpIjoiYiJ9&_nc_oc=AQmF7nNay2_ndGK2wMMgLduhKrCbtXtKoxl4nVjFrPycc6BXRxy6__0HbMSJazpEPvM&_nc_ht=scontent.frec10-1.fna&oh=23d4ddc6ea94e9cb0235d93ea2799be9&oe=5E551C69'}}
                                        style={styles.avatar}>
                                    </Image>
                                </Block>
                                <Block middle style={styles.bloco}>
                                    <Input
                                        rounded
                                        color="#442980"
                                        placeholder="Atualize seu nome"
                                        color="#442980"
                                        family="antdesign"
                                        borderless
                                        bgColor="#eaeaea"
                                        icon="user"
                                        iconColor="#442980">
                                    </Input>
                                    <Input
                                        rounded
                                        color="#442980"
                                        placeholder="Atualize seu email"
                                        color="#442980"
                                        family="antdesign"
                                        bgColor="#eaeaea"
                                        borderless
                                        icon="mail"
                                        iconColor="#442980">
                                    </Input>
                                    <Input
                                        rounded
                                        color="#442980"
                                        placeholder="Conte-nos sobre você."
                                        color="#442980"
                                        family="antdesign"
                                        bgColor="#eaeaea"
                                        borderless
                                        icon="profile"
                                        iconColor="#442980">    
                                    </Input>
                                    
                                    
                                </Block>
                                <Block middle flex>
                                   <Button round color="#442980">Atualizar Perfil</Button>
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
        textAlign: 'justify',
        color: 'gray',
    },
    avatar: {
        margin: 15,
        width: 124,
        height: 124,
        borderRadius: 62,
        borderWidth: 0
    },

    bloco: {
        paddingTop: 10,
    },
    pularButton: {
        marginTop: 4,
    },
});
