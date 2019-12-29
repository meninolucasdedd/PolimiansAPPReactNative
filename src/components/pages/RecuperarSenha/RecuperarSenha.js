import React, { Component } from 'react';
import { BotaoSpinner } from '../../commons';

import {
  ImageBackground,
  Dimensions,
  StyleSheet,
  Image,
  View,
  Alert,
} from 'react-native';

import {
  Block,
  Text,
  Button,
  Input
} from 'galio-framework';


import auth from '@react-native-firebase/auth';



const { width, height } = Dimensions.get('screen');

export default class RecuperarSenha extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    email: '',
    senha: '',
  };

 
  
  autenticar(email, senha) {
    if (email.length === 0 || senha.length === 0)
      return  Alert.alert(
        'Opa!',
        
        'É necessário informar um email e senha válido.',
        [
          {text: 'Ok', onPress: () => console.log('Ok pressionado')},
        ],
      );
    
    auth()
      .signInWithEmailAndPassword(email, senha)
      .then(res => {
        this.props.navigation.navigate('Home')
        // muda  usuario de tela
      })
      .catch(err => {
        this.setState({ senha: '' });
        switch (err.code) {
          case 'auth/invalid-email':
            Alert.alert('ATENÇÃO!', 'O Endereço de email não é válido.');
            break;
          case 'auth/email-already-in-use':
            Alert.alert('ATENÇÃO!', 'O Endereço de email já está em uso.',
              [
                { text: 'Criar conta', onPress: () => console.log('Ask me later pressed') },
                {
                  text: 'Cancelar',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                { text: 'Ok', onPress: () => console.log('OK Pressed') },
              ],
            );

            break;
          case 'auth/weak-password':
            Alert.alert(
              'ATENÇÃO!',
              'Senha não é forte o suficiente. A senha deve ter no minimo 6 digitos.',
            );
            break;
          case 'auth/operation-not-allowed':
            Alert.alert('ATENÇÃO!', 'Operação não permitida.');
            break;
          default: {
            console.log(err);
            Alert.alert('ATENÇÃO!', 'Falha ao realizar o cadastro');
          }
        }
      });
  }

  render() {
    return (
      <Block flex middle>
        <ImageBackground
          source={require('../../../assets/bg.png')}
          style={{ width, height, zIndex: 1 }}>
          <Block flex middle>
            <Block style={styles.loginContainer}>
              <View>
                <Image
                  source={require('../../../assets/logo.png')}
                  style={styles.logo}
                />
              </View>
              <Block bold middle>
                <Text h4 color="white" style={styles.textos} bold>
                  Recuperar Senha
                </Text>
                <Block style={styles.texto}>
                  <Text
                    p
                    muted
                    color="white"
                    style={{ justifyContent: 'center' }}>
                        Preencha as informações abaixo para recuperar sua senha
                  </Text>
                </Block>
              </Block>


              <Block width={width * 0.9}>
                <Input
                  placeholder="Insira o email cadastrado "
                  onChangeText={senha => this.setState({ senha })}
                  borderless
                  password
                  bgColor="#eaeaea"
                  icon="key"
                  family="antdesign"
                  iconColor="#442980"
                  viewPass
                />
              </Block>

              <Block middle>
                <Button
                  color="#442980"
                  round
                  style={styles.createButton}
                  onPress={() =>
                    this.autenticar(this.state.email, this.state.senha)
                  }>

                  <Text bold size={17} color="white" >
                    Recuperar
                  </Text>
                </Button>
              </Block>
              <Block middle style={styles.texto}>
                <Text muted color="white" >
                  Esqueçeu a senha?
                </Text>

              </Block>
              <Block middle flex round>
                <Button
                  color="#bd158d"
                  onPress={() =>
                    this.props.navigation.navigate('SelecionaCategoria')
                  }
                  round>
                  Criar conta
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
    overflow: 'hidden',
  },
  texto: {
    marginTop: 10,
    marginLeft: 7,
  },
  createButton: {
    marginTop: 25,
  },
  logo: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
