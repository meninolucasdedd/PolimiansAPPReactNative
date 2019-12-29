import React, { Component } from 'react';

import {
    ImageBackground,
    Dimensions,
    StatusBar,
    StyleSheet,
    Image
} from 'react-native';
import {
    Block,
    Text,
    Button,

} from 'galio-framework';



const { width, height } = Dimensions.get("screen")


export default class SelecionaCategoria extends Component {
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
                                <Image source={require('../../../assets/Pagina1.jpg')} style={styles.imagem}></Image>
                            </Block>
                            <Block bold middle>
                                <Text h4 color="#442980" size={20} bold>Vamos iniciar o seu cadastro</Text>
                                <Block>
                                    <Text p muted style={styles.texto}> Selecione uma categoria abaixo:.</Text>
                                    <Text p muted ></Text>
                                </Block>
                                <Block></Block>
                            </Block>
                            <Block middle flex>
                                <Button color="#442980" round style={styles.createButton} onPr>
                                    <Text bold size={15} color="white" round
                                        onPress={() => this.props.navigation.navigate("CadastroEspectador")}>
                                        Sou expectador
                                    </Text>
                                </Button>
                            </Block>
                            <Block middle>
                                <Button color="#bd158d" round style={styles.createButton} onPr>
                                    <Text bold color="white" round
                                        onPress={() => this.props.navigation.navigate("CadastroCompanhia")}
                                    >
                                        Sou uma companhia
                                    </Text>
                                </Button>
                            </Block>
                            
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
        height: height * 0.65,

        shadowRadius: 8,
        shadowOpacity: 0.1,
        elevation: 1,
        overflow: "hidden"
    },
    createButton: {
        width: width * 0.5,
        marginTop: 25
    },
    texto: {
        paddingTop: 2,
        textAlign: "justify",
        color: "gray"
    },
    imagem: {
        paddingBottom: 10,
        width: 300,
        height: 200,
    }

})