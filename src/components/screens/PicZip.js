import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar, Dimensions,
} from 'react-native';

import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
export default class PicZip extends Component {
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
                    <View style={{flex:3,marginTop:35}}>
                        <Image style={styles.piczip}
                            source={require('../../../assets/images/PicZip.png')}/>
                    <Text style={styles.text}>INTELLIGENT PHOTO COMPRESSION</Text>
                        <Image style={styles.freetest}
                            source={require('../../../assets/images/100mfree.png')}/>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92} onPress={() => this.props.navigation.navigate('SelectPic')}>
                            <Image style={{width: '55%', height: 35}}
                                    source={require('../../../assets/images/ZipZipWhite.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92} onPress={() => this.props.navigation.navigate('Help')}>
                                <Text style={styles.textButton}>
                                    Read me </Text>
                        </TouchableOpacity>
                    </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    piczip:{
        marginTop:60,
        alignSelf:"center",
        width: 150,
        height: 150,
        borderRadius:5
    },
    freetest:{
        width: 130,
        height: 130,
        marginTop:15,
        alignSelf:"center"
    },
    buttonContainer:{
        flex:1.2,
        width:'90%',
        alignSelf: 'center',

    },
    buttonStyle: {
        backgroundColor: '#000',
        height: 60,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius:5,
    },
    textButton: {
        color: '#fff',
        fontSize: 22,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    text:{
        color: '#000',
        fontSize: width>300?width*0.040:width*0.030,
        marginTop:20,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        marginBottom: 20,
        marginHorizontal:10
    }
});
