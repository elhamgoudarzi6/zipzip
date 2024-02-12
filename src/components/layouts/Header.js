import React, {Component} from 'react';
import {View} from "react-native";
import {Switch, Appbar} from 'react-native-paper';
export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <Appbar.Header  style={{backgroundColor:'#067062',marginTop:23}}>
                    <Appbar.Content
                        titleStyle={{
                            color: '#fff',
                            fontFamily: 'Iranian Sans',
                            fontSize: 20,
                            textAlign:'center',
                        }}
                        title={this.props.title}/>
                        <Appbar.Action  style={{    justifyContent: 'flex-end', alignItems: 'flex-end',marginTop:-10}} color={'#fff'}
                                       size={40} icon={'chevron-right'} onPress={this.props.onBackPress} />
                </Appbar.Header>
            </View>

        );
    }
}
