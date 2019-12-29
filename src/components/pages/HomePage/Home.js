import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    ScrollView,
    Dimensions
} from 'react-native';


import {
    Container,
    Header,
    Content,
    Footer,
    FooterTab,
    Button,
    Text,
    Left,
    Right,
    Body,
    Icon,
    Title,
    Badge
} from 'native-base';

import {
    Card,
    theme,
    Input,
    NavBar,
    Block
} from 'galio-framework'

const cards = [
    {
        text: 'Card One',
        name: 'One',
    },
];

const { width, height } = Dimensions.get('screen');

{/* <ScrollView
    horizontal={true}
    style={styles.cardsView}
    showsHorizontalScrollIndicator={false}>
    <View>
        <Card
            borderless
            style={styles.cards}
            title="Karla Alves"
            caption="01 Hora atrás"
            location="Quixadá - CE"
            avatar="https://scontent.frec10-1.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/34885721_1797174523662373_3871316880178282496_n.jpg?_nc_cat=100&efg=eyJpIjoiYiJ9&_nc_oc=AQmF7nNay2_ndGK2wMMgLduhKrCbtXtKoxl4nVjFrPycc6BXRxy6__0HbMSJazpEPvM&_nc_ht=scontent.frec10-1.fna&oh=23d4ddc6ea94e9cb0235d93ea2799be9&oe=5E551C69"
            locationColor="#442980"
            imageStyle={styles.cardImageRadius}
            imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
            image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
        />
    </View>
    <View>
        <Card
            borderless
            style={styles.cards}
            locationColor="#442980"
            title="Ayron  Doguinho"
            caption="01 Hora atrás"
            location="Quixadá - CE"
            avatar="http://www.cearashow.com.br/wp-content/uploads/2018/10/Ayron.jpg"
            imageStyle={styles.cardImageRadius}
            imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
            image="http://www.cearashow.com.br/wp-content/themes/cearashow/img/banner/home.jpg"
        />
    </View>
</ScrollView> */}


export default class Home extends Component {
    static navigationOptions = {
        header: null

    };

    constructor(props) {
        super(props)
        this.state = {
            active: false
        };
    }

    render() {
        return (
            <Container style={{ backgroundColor: "#F9F2F2" }}>
                <Header noShadow >
                    <Left>
                        <Button transparent  >
                            <Icon type="FontAwesome5" name="globe-americas" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Explore</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon type="FontAwesome5" name='bell' />
                        </Button>

                        <Button transparent>
                            <Icon type="FontAwesome5" name='user' onPress={() => this.props.navigation.navigate("PefilEspectador")} />
                        </Button>
                        <Button transparent>
                            <Icon type="FontAwesome5" name='cog' />
                        </Button>

                    </Right>

                </Header>
                <Content />
                <Footer>
                    <FooterTab>
                        <Button badge vertical>
                        <Badge><Text>2</Text></Badge>
                            <Icon name="apps" />
                        </Button>
                        <Button  fab active > 
                            <Icon active name="add" />
                        </Button>
                        <Button>
                            <Icon name="ios-log-in" />
                        </Button>
                    </FooterTab>
                </Footer>

                {/* <ScrollView>
                    <Block flex middle style={styles.exploreInput}>
                        <ImageBackground
                            source={require('../../../assets/bg.png')}
                            style={{ width, height, zIndex: 1 }}>
                            <Block middle >
                                <Text >Descubra novos trabalhos</Text>
                            </Block>
                            <Block middle >
                                <Text >Busque por compainhas de teatro e dança, ou workshops abertos por compainhas, espalhados por todo o Ceará. </Text>
                            </Block>
                            <Block>
                                <Input
                                    bordeless
                                    placeholder="Começe a pesquisar"></Input>
                            </Block>
                            <Block>

                                <Button round></Button>
                            </Block>
                        </ImageBackground>
                    </Block>
                    <Block middle flex>
                        <Button color="#442980" round style={styles.createButton} onPr>
                            <Text bold size={15} color="white" round
                                onPress={() => this.props.navigation.navigate("CadastroPecas")}>
                                Workshop
                                    </Text>
                        </Button>
                    </Block>
                </ScrollView> */}

            </Container>

        )
    }
}

const styles = StyleSheet.create({
    cardsSection: {
        backgroundColor: '#442980',
        width: 500,
        height: 400,

        marginVertical: 5
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 50
    },
    user: {
        color: "white"
    },
    cards: {
        backgroundColor: 'white',
        width: 360,
        height: 320,
        margin: 5
    },
    cardsView: {
        paddingTop: 10,

    },
    textoTitulo: {
        fontFamily: 'Montserrat-Extrabold',
        fontSize: 14,
        color: "#ff7723",
        paddingTop: 5,
    },
    exploreInput: {
        backgroundColor: "#442980"
    }


})