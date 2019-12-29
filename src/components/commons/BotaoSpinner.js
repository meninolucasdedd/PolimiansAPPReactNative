import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

class BotaoSpinner extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size={this.props.size || 'large'} />
            </View>
        );
    }
}

export { BotaoSpinner }