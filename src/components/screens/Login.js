import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar, Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import GoogleSignIn from 'react-native-google-sign-in';

import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
export default class App extends Component {
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
                    <Image
                        style={{flex:1,width: '80%', height: 65,marginTop: 90,alignSelf:"center"}}
                        source={require('../../../assets/images/ZipZip.png')}
                    />
                    <View style={styles.buttonContainer}>
                        <Text style={{
                            color: '#000',
                            fontSize: 20,
                            fontFamily: 'FuturaStd-Bold',
                            alignSelf: 'center',
                            marginBottom: 20,
                        }}>
                            Login With </Text>
                        <TouchableOpacity  activeOpacity={0.92} onPress={() => this.props.navigation.navigate('RegisterMobile')}>
                            <View style={styles.buttonStyle}>
                                <Text adjustsFontSizeToFit
                                    style={styles.textButton}>
                                    Mobile Number
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('DashboardUser')}>
                            <View style={[styles.buttonStyle,{flexDirection:'row'}]}>
                                <Text style={styles.textButton}>
                                    Google Account </Text>

                                <Image
                                    style={{width: 20, height: 20}}
                                    source={require('../../../assets/images/google.png')}
                                />
                            </View>
                        </TouchableOpacity>
                        {/*<GoogleSigninButton*/}
                        {/*    style={{ width: 192, height: 48 }}*/}
                        {/*    size={GoogleSigninButton.Size.Wide}*/}
                        {/*    color={GoogleSigninButton.Color.Dark}*/}
                        {/*    onPress={this._signIn}*/}
                        {/*    disabled={this.state.isSigninInProgress} />*/}
                    </View>
                    <View
                        style={{flex:1,marginTop:200,  justifyContent: 'center',
                        alignItems: 'center',position:"relative"}}
                    >
                    {/*<View*/}
                    {/*    style={{flex:1,*/}
                    {/*        // position: 'absolute',*/}
                    {/*        // top: height-300,*/}
                    {/*        alignSelf: 'center',}}>*/}
                        <Icon
                            name='minus'
                            color='#000'
                            size={35} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
    },
    buttonContainer:{
        flex:8,
        marginTop: 90,
        width:'90%',
        alignSelf:'center'
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
        fontSize: 20,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
});
