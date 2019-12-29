import React, { Component } from 'react';

import {
    ImageBackground,
    Dimensions,
    StyleSheet,
    Image,
    ScrollView,
    View

} from 'react-native';
import {
    Block,
    Text,
    Button,
    Card,
    theme

} from 'galio-framework';

const { width, height } = Dimensions.get("screen")

import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import ImagePicker from 'react-native-image-picker';


import BotaoSpinner from './../../commons'

const options = {
    title: 'Selecione uma imagem',
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

const uploadImage = (uri, mime = 'application/octet-stream') => {

    const Blob = RNFetchBlob.polyfill.Blob;
    const fs = RNFetchBlob.fs;
    window.Blob = Blob;
    const tempWindowXMLHttpRequest = window.XMLHttpRequest;
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;

    return new Promise((resolve, reject) => {
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
        const sessionId = new Date().getTime();
        let uploadBlob = null;
        const imageRef = storage().ref('workshops').child(`${sessionId}`);

        fs.readFile(uploadUri, 'base64')
            .then((data) => {
                return Blob.build(data, { type: `${mime};BASE64` });
            })
            .then((blob) => {
                uploadBlob = blob
                return imageRef.put(blob, { contentType: mime });
            })
            .then(() => {
                uploadBlob.close()
                return imageRef.getDownloadURL();
            })
            .then((url) => {
                resolve(url);
            })
            .then(() => {
                window.XMLHttpRequest = tempWindowXMLHttpRequest;
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export default class CadastroWorkshopsBanner extends Component {
    static navigationOptions = {
        header: null

    };

    state = {
        imgSource: '',
        uploading: false,
        uploadedUrl: null
    };

    pickImage = () => {
        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
                alert('YVocê cancelou 😟');
            } else if (response.error) {
                alert('Ocorreu um erro: ', response.error);
            } else {
                const source = { uri: response.uri };
                this.setState({ imgSource: source });
            }
        });
    };

    callUploadImage(uri) {
        this.setState({ uploading: true })
        uploadImage(uri)
            .then(url => this.setState({ uploading: false, uploadedUrl: url }))
            .then(() => {
                const url = this.state.uploadedUrl;
                firebase.database().ref(`/imagens/`).push({ url });
            })
            .catch(error => { this.setState({ uploading: false }); console.log(error) });
    }

    renderBotaoUpload() {
        if (this.state.uploading) {
            return <BotaoSpinner />
        }

        return (
            <Button onPress={() => this.callUploadImage(this.state.imgSource.uri)}>
                Enviar
            </Button>
        )
    }

    render() {
        return (
            <ScrollView>
                <Block flex middle>
                    <ImageBackground
                        style={{ width, height, zIndex: 1 }}
                    >
                        <ScrollView>
                            <Block flex middle>
                                <Block style={styles.loginContainer}>
                                    <Block bold middle>
                                        <Text h4 color="#442980" size={20} bold>Envie um banner</Text>
                                    </Block>
                                    <Block middle >
                                        <Text p muted style={styles.texto}> Envie uma foto para seu workshop</Text>
                                    </Block>
                                    <Block middle flex>
                                        {
                                            this.state.imgSource ? (
                                                <View
                                                >
                                                    <Image source={this.state.imgSource} style={styles.avatar}></Image>
                                                </View>

                                            ) :
                                                (
                                                    <View>
                                                        <Text muted p>Nenhuma Imagem Selecionada.</Text>
                                                        <Text muted p>Clique no botão abaixo para selecionar</Text>
                                                    </View>
                                                )
                                        }
                                    </Block>
                                    <Block >
                                        <Button
                                            color="#442980"
                                            style={styles.createButton}
                                            onPress={this.pickImage}
                                            round
                                        >
                                            <Text bold color="white" onPress={() => this.pickImage()}>Selecionar</Text>
                                        </Button>

                                    </Block>
                                    <Block flex middle>
                                        {this.renderBotaoUpload()}
                                    </Block>
                                </Block>

                            </Block>
                        </ScrollView>

                    </ImageBackground>
                </Block>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        width: width * 0.9,
        height: height * 0.80,

        shadowRadius: 8,
        shadowOpacity: 0.1,
        elevation: 1,
        overflow: "hidden"
    },

    texto: {
        paddingTop: 2,
        textAlign: "justify",
        color: "gray"
    },
    imagem: {
        width: 300,
        height: 200,

    },
    avatar: {
        width: 300,
        height: 200,

    },
    bloco: {
        paddingTop: 10
    }

})