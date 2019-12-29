import React, { Component } from 'react';

import {
    ImageBackground,
    Dimensions,
    StatusBar,
    KeyboardAvoidingView,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';
import {
    Block,
    Button,

} from 'galio-framework';

import { Left, Right } from 'native-base'


const { width, height } = Dimensions.get("screen")


export default class Pagina1 extends Component {
    static navigationOptions = {
        header: null

    };

    render() {
        return (

            <Block flex middle>

                <ImageBackground
                    style={{ width, height, zIndex: 1 }}
                >

                    <Block flex middle>
                        <Block style={styles.loginContainer}>
                            <Block>
                                <Image source={{uri:'https://i.ibb.co/6v4Yb9X/Pagina1.jpg'}} style={styles.imagem}></Image>
                            </Block>
                            <Block bold middle>
                                <Text h4 color="#442980" bold style={styles.textoTitulo}>Olá</Text>

                                <Block>
                                    <Text p muted style={styles.textoContainer}>Seja bem vindo ao polimians, aqui você pode montar o seu portfólio com facilidade para conquistar seu público.</Text>
                                </Block>

                            </Block>
                            <View style={styles.botoes}>
                                <Left>
                                    <Button color="#FFFFFF"
                                        shadowless
                                        style={styles.createButton}
                                        round
                                        onPress={() => this.props.navigation.navigate("Login")} >
                                        <Text bold style={styles.textoBotaoPular}
                                        >
                                            Pular
                                    </Text>
                                    </Button>
                                </Left>

                                <Right>
                                    <Button color="#442980" style={styles.createButton}
                                        onPress={() => this.props.navigation.navigate("Pagina2")}
                                        round
                                    >
                                        <Text bold size={15} style={styles.textoBotao}
                                        >
                                            Próximo
                                    </Text>
                                    </Button>
                                </Right>
                            </View>

                        </Block>
                    </Block>
                </ImageBackground>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        width: width * 0.9,
        height: height * 0.66,

        shadowRadius: 8,
        shadowOpacity: 0.1,
        elevation: 1,
        overflow: "hidden"
    },
    createButton: {
        width: width * 0.5,
        marginTop: 24
    },
    pularButton: {
        marginTop: 24
    },
    textoTitulo: {
        fontFamily: "Montserrat-ExtraBold",
        color: "#442980",
        paddingTop: 10,
        fontSize: 35,
        alignItems: "center",


    },
    botoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textoContainer: {
        fontFamily: 'Montserrat-Light',
        paddingTop: 20,
        textAlign: "justify",
        color: "#442980",
        textAlign: "center",
        fontSize: 15,
    },
    textoBotao: {
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 14,
        color: "white"
    },

    textoBotaoPular: {
        fontFamily: 'Montserrat-Light',
        fontSize: 14,
        color: "#442980",
        paddingTop: 5,
    },
    imagem: {
        paddingBottom: 10,
        width: 300,
        height: 200,
    }

})