import React, { Component } from 'react';

import {
  ImageBackground,
  Dimensions,
  StyleSheet,
  Image,
  View,
  Alert,
  Text,

} from 'react-native';

import {
  Block,
  Button,
  Input,
  Toast
} from 'galio-framework';

import {BotaoSpinner} from '../../commons'

import auth from '@react-native-firebase/auth';

const { width, height } = Dimensions.get('screen');

export default class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  state = { email: '', senha: '', loading: false};
 
  autenticar(email, senha) {
    if (email.length === 0 || senha.length === 0 )
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
        this.setState({loading: true})
        this.props.navigation.navigate('Home')
        // muda  usuario de tela
      })
      .catch(err => {
        this.setState({ senha: '' });
        switch (err.code) {
          case 'auth/invalid-email':
            Alert.alert('ATENÇÃO!', 'O Endereço de email não é válido.');
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
          case 'auth/auth/user-not-found':
              Alert.alert('ATENÇÃO!', 'Email não cadastrado ou senha incorreta.',
              [
                { text: 'Criar conta', onPress: () => console.log('Ask me later pressed') },
                {
                  text: 'Cancelar',
                  onPress: () => console.log('Cancelar Pressionado'),
                  style: 'cancel',
                },
                { text: 'Ok', onPress: () => console.log('OK Pressionados') },
              ],
            );
            break;
          // default: {
          //     console.log(err);
          //     Alert.alert('ATENÇÃO!', 'Não foi possível realizar o login');
              
          // }

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
            <View style={styles.loginContainer}>
              <Block middle>
                <Image
                  source={require('../../../assets/logoNova.png')}
                  style={styles.logo}
                />
              </Block>
              <Block bold middle>
                <Text h4 color="white" style={styles.textoTitulo} bold>
                  Junte-se a comunidade
                </Text>
                <Block style={styles.texto}>
                  <Text
                    color="white"
                    style={styles.textoSubtitulo}>
                    O polímians é um aplicativo para toda a comunidade.
                  </Text>
                </Block>
              </Block>

              <Block width={width * 0.9}>
                <Input
                  placeholder="Insira seu email"
                  onChangeText={email => this.setState({ email })}
                  borderless
                  bgColor="#eaeaea"
                  icon="mail"
                  family="antdesign"
                  iconColor="#442980"
                  color="#442980"
                />
              </Block>

              <Block width={width * 0.9}>
                <Input
                  placeholder="Insira sua senha"
                  onChangeText={senha => this.setState({ senha })}
                  borderless
                  password
                  bgColor="#eaeaea"
                  icon="key"
                  family="antdesign"
                  iconColor="#442980"
                  color="#442980"
                  viewPass
                />
              </Block>

              <Block middle flex>
                <Button
                  color="#442980"
                  round
                  style={styles.botaoEntrar}
                  onPress={() =>
                    this.autenticar(this.state.email, this.state.senha, this.state.loading)
                  }>

                  <Text bold size={17} color="white" style={styles.textoBotao}  onPress={() => console.log("Entrar pressionado")}>
                    Entrar
                  </Text>
                </Button>
              </Block>
              <Block middle>
                <Text muted color="white"  style={styles.textoRetrieve} >
                  Esqueçeu a senha?
                </Text>
              </Block>
              <Block middle flex round>
                <Button
                  color="#bd158d"
                  style={styles.textoBotaoCirarConta}
                  onPress={() =>
                    this.props.navigation.navigate('SelecionaCategoria')
                  }
                  round>
                  Criar conta
                </Button>
              </Block>
            </View>
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
  textoTitulo: {
    color: 'white',
    fontSize: 25,
    marginTop: 10,
    paddingBottom: 10,
    marginLeft: 7,
    fontFamily: 'Montserrat-ExtraBold',
  },
  textoSubtitulo: {
    color: 'white',
    fontSize: 15,
    marginTop: 10,
    paddingBottom: 10,
    marginLeft: 7,
    fontFamily: 'Montserrat-Light',
    textAlign: "center",
  },
  botaoEntrar: {
    marginTop: 20,
  },
  textoBotao: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 14,
    color: "white",
    
},
textoRetrieve:{
  fontFamily: 'Montserrat-Thin',
  color: "white",
  padding: 12

},
  logo: {
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textoBotaoCirarConta: {
    fontFamily: 'Montserrat-Extrabold',
    fontSize: 14,
},
});
