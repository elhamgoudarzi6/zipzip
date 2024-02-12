import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar,TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

export default class MovZip extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#000'}
                           barStyle="light-content" />
                <ScrollView>
                    <View style={{backgroundColor:'#fff',height:130,width:130,alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:70}}>
                        <Image
                            style={{width: 150, height: 150}}
                            source={require('../../../assets/images/MovZip.png')}
                        />
                    </View>
                    <Text style={{
                        color: '#000',
                        fontSize: 14,
                        marginTop:20,
                        fontFamily: 'FuturaStd-Bold',
                        alignSelf: 'center',
                        marginBottom: 20,
                    }}>
                        INTELLIGENT <Text style={{fontFamily: 'FuturaStd-Bold',fontSize: 26,}}>VIDEO</Text> COMPRESSION</Text>
                    <View style={{backgroundColor:'#fff',height:130,width:130,alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:30}}>
                        <Image
                            style={{width: 150, height: 150}}
                            source={require('../../../assets/images/300mfree.png')}
                        />
                    </View>
                    <View style={{marginTop: 70,flex:10}}>
                        <TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('')}>
                            <View style={styles.buttonStyle}>
                                <Image
                                    style={{width: 210, height: 40}}
                                    source={require('../../../assets/images/ZipZipWhite.png')}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('Help')}>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textButton}>
                                    Read me </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,marginTop:210,  justifyContent: 'center',
                        alignItems: 'center',}}>
                        <Icon
                            name='minus'
                            color='#000'
                            size={35} style={{marginRight:15}}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonStyle: {
        backgroundColor: '#000',
        height: 60,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 10,
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
});
