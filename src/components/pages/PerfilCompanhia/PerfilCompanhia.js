import React, { Component } from 'react'

import {
    View,
    StyleSheet,
    Image,
    ScrollView,
    ImageBackground,
    Platform,
    Dimensions
} from 'react-native'

import { Block, Text, theme } from 'galio-framework';

const { width, height } = Dimensions.get("screen");

import { HeaderHeight } from '../../commons/utils'

const thumbMeasure = (width - 48 - 32) / 3;
import { Button } from '../../../components/commons/Button'
import { Images, argonTheme } from "../../../constants";

export default class PerfilCompahia extends Component {
    static navigationOptions = {
        header: null

    };
    render() {
        return (
            <Block flex>
                <Block>
                    <ImageBackground
                        source={require('../../../assets/perfilScreen.png')}
                        style={styles.profileContainer}
                        imageStyle={styles.profileBackground}
                    >
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={{ width, marginTop: '25%' }}
                        >
                            <Block flex style={styles.profileCard}>
                                <Block middle style={styles.avatarContainer}>
                                    <Image
                                        source={{ uri: 'https://scontent.frec10-1.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/34885721_1797174523662373_3871316880178282496_n.jpg?_nc_cat=100&efg=eyJpIjoiYiJ9&_nc_oc=AQmF7nNay2_ndGK2wMMgLduhKrCbtXtKoxl4nVjFrPycc6BXRxy6__0HbMSJazpEPvM&_nc_ht=scontent.frec10-1.fna&oh=23d4ddc6ea94e9cb0235d93ea2799be9&oe=5E551C69' }}
                                        style={styles.avatar}
                                    />
                                </Block>
                                <Block style={styles.info}>
                                    <Block
                                        middle
                                        row
                                        space="evenly"
                                        style={{ marginTop: 20, paddingBottom: 24 }}
                                    ></Block>

                                    <Block row space="between">
                                        <Block middle>
                                            <Text
                                                bold
                                                size={12}
                                                color="#525F7F"
                                                style={{ marginBottom: 4 }}
                                            >
                                                50.000
                                           </Text>
                                            <Text size={12}>Visualizações</Text>
                                        </Block>
                                        <Block middle>
                                            <Text
                                                bold
                                                size={12}
                                                color="#525F7F"
                                                style={{ marginBottom: 4 }}
                                            >
                                                10.000
                                           </Text>
                                            <Text size={12}>Apresentações</Text>
                                        </Block>
                                    </Block>
                                    <Block flex>
                                        <Block middle style={styles.nameInfo}>
                                            <Text bold size={28} color="#32325D">
                                                Karla Alves, 20
                                            </Text>
                                            <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                                                Quixadá, CE
                                            </Text>
                                        </Block>
                                        <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                                            <Block style={styles.divider} />
                                        </Block>
                                        <Block middle>
                                            <Text
                                                size={16}
                                                color="#525F7F"
                                                style={{ textAlign: "center" }}
                                            >
                                                Prefiro queimar o mapa, traçar de novo a estrada
                                                Ver cores nas cinzas. E a vida reinventar
                                            </Text>
                                        </Block>
                                        <Block
                                            row
                                            style={{ paddingVertical: 14, alignItems: "baseline" }}
                                        >
                                            <Text bold size={16} color="#442980">
                                                Galeria
                                                </Text>
                                        </Block>
                                        <Block
                                            row
                                            style={{ paddingBottom: 20, justifyContent: "flex-end" }}
                                        >

                                        </Block>
                                        <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
                                            <Block row space="between" style={{ flexWrap: "wrap" }}>
                                                {Images.Viewed.map((img, imgIndex) => (
                                                    <Image
                                                        source={{ uri: img }}
                                                        key={`viewed-${img}`}
                                                        resizeMode="cover"
                                                        style={styles.thumb}
                                                    />
                                                ))}
                                            </Block>
                                        </Block>
                                    </Block>
                                </Block>

                            </Block>
                        </ScrollView>
                    </ImageBackground>
                </Block>
            </Block>
        )
    }
}

const styles = StyleSheet.create({
    profile: {
        marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
        // marginBottom: -HeaderHeight * 2,
        flex: 1
    },
    profileContainer: {
        width: width,
        height: height,
        padding: 0,
        zIndex: 1
    },
    profileBackground: {
        width: width,
        height: height / 2
    },
    profileCard: {
        // position: "relative",
        padding: theme.SIZES.BASE,
        marginHorizontal: theme.SIZES.BASE,
        marginTop: 65,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        backgroundColor: theme.COLORS.WHITE,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
        shadowOpacity: 0.2,
        zIndex: 2
    },
    info: {
        paddingHorizontal: 40
    },
    avatarContainer: {
        position: "relative",
        marginTop: -80
    },
    avatar: {
        width: 124,
        height: 124,
        borderRadius: 62,
        borderWidth: 0
    },
    nameInfo: {
        marginTop: 35
    },
    divider: {
        width: "90%",
        borderWidth: 1,
        borderColor: "#E9ECEF"
    },
    thumb: {
        borderRadius: 4,
        marginVertical: 4,
        alignSelf: "center",
        width: thumbMeasure,
        height: thumbMeasure
    }
});