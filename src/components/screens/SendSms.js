import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar, TextInput, Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import CountDown from 'react-native-countdown-component';
const {width, height} = Dimensions.get('window');

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        //    mobile: this.props.navigation.state.params.mobile,
            codeOTD: '',
            displayTextResendSMS: 'none',
            timeWait: 5,
            display: false,
            dialogVisible: false,
            messageError: '',
            count: 90,
        };
    }

    onDoneCountdown = () => {
        this.setState({displayTextResendSMS: 'flex'});
    };

    textResend() {
        setInterval(() => {
            return (<Text style={{
                marginTop: -5,
                marginBottom: 5,
                color: '#47b03e',
                fontFamily: 'IRANSansMobile(FaNum)',
                fontSize: 15,
                alignSelf: 'center',
            }} onPress={() => this.onSendSMS()}>ارسال مجدد کد</Text>);
        }, 50000);
    }
    // clickdialogVisible = () => {
    //     this.setdialogVisible(true);
    // };
    // setdialogVisible(visible) {
    //     this.setState({dialogVisible: visible});
    // }
    //
    // onPressCountdown = () => {
    //     // Alert.alert('Countdown Component Press.');
    // };
    //
    // _onFinishCheckingCode1(a) {
    //     if (a) {
    //         this.setState({display: true});
    //     } else {
    //
    //         this.showAlert();
    //         this.setState({messageError: ' The code entered is incorrect'});
    //     }
    // }
    // componentDidMount() {
    //     this.onSendSMS();
    // }
    // onSendSMS() {
    //     this.setState({count: 90});
    //     this.setState({displayTextResendSMS: 'none'});
    //     fetch('http://194.5.175.25:4000/api/v1/makeCode')
    //         .then((response) => response.json()).then((responseJson) => {
    //         if (responseJson.success === true) {
    //             let message = 'Your unique code to login the Zip Zip app:' + responseJson.data;
    //             fetch('http://www.0098sms.com/sendsmslink.aspx?FROM=' + '3000164545&TO=' + this.state.mobile + '&TEXT=' + message + '&USERNAME=zsms7691&PASSWORD=3333114811&DOMAIN=0098').then((response) => response.json()).then((responseJson1) => {
    //                 // console.log(responseJson1);
    //             });
    //             this.setState({codeOTD: responseJson.data});
    //
    //         } else {
    //
    //             // console.log(responseJson.data);
    //         }
    //     }).catch((error) => {
    //         console.error(error);
    //     });
    //
    // }
    //
    // onAuth() {
    //     if (this.state.display === true) {
    //         fetch('http://194.5.175.25:4000/api/v1/auth', {
    //             method: 'POST',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 mobile: this.state.mobile,
    //             }),
    //         }).then((response) => response.json()).then((responseJson) => {
    //             console.log(responseJson);
    //             if (responseJson.success === true) {
    //                 this.props.navigation.navigate('DashboardUser');
    //             } else {
    //                 console.log(responseJson.data);
    //             }
    //         }).catch((error) => {
    //             console.error('err');
    //         });
    //     } else {
    //         this.clickdialogVisible();
    //         this.setState({messageError: ' Please enter the code'});
    //     }
    // }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#000'}
                           barStyle="light-content"/>
                <ScrollView>
                    <View style={styles.MainContainer}>
                        <CountDown
                            until={90}
                        //    onFinish={this.onDoneCountdown}
                      //      onPress={this.onPressCountdown}
                            compareWithCode={this.state.codeOTD}
                            size={40}
                            timeToShow={['M', 'S']}
                            digitTxtStyle={{color: '#fff'}}
                            digitStyle={{backgroundColor: '#000'}}
                            timeLabelStyle={{color: '#fff', marginTop: 2}}
                            timeLabels={{m: 'min', s: 'sec'}}
                        />
                    </View>
                    <View style={{marginTop: 40, flex: 15}}>
                        <Text style={{
                            color: '#000',
                            fontSize: width>350?width*0.036:width*0.04,
                            fontFamily: 'HelveticaNeueLTStd-Md',
                            alignSelf: 'center',
                            marginBottom: 20,
                            textAlign: 'center',
                        }}>
                            one message contains a code has been sent to you</Text>
                        <View style={{
                            backgroundColor: '#fff',
                            height: 60,
                            width: '85%',
                            alignSelf: 'center',
                            marginTop: 10,
                            borderWidth: 1,
                            borderColor: '#000',
                            borderRadius:5

                        }}>
                            <TextInput
                                style={{
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-end',
                                    fontFamily: 'FuturaStd-Bold',
                                    textAlign: 'center',
                                }}
                                placeholder="Please Enter Code Sent"
                                underlineColorAndroid="transparent"
                                keyboardType="numeric"
                                maxLength={5}
                            />
                        </View>
                        <View style={{}}>
                            <TouchableOpacity activeOpacity={0.80}
                                              onPress={() => this.props.navigation.navigate('DashboardUser')}>
                                <View style={styles.buttonStyle}>
                                    <Text style={styles.textButton}>
                                        Ok </Text>
                                </View>
                            </TouchableOpacity>
                            <View style={[styles.buttonStyle,{backgroundColor:'#000'}]}>
                                <Text style={styles.textButton}>
                                    Send again </Text>
                            </View>
                        </View>

                    </View>
                    <View style={{
                        flex: 1, marginTop: '40%', justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Icon
                            name='minus'
                            color='#000'
                            size={35} style={{marginRight: 15}}/>
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
    MainContainer: {
        flex: 8,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    buttonStyle: {
        backgroundColor: '#000',
        height: 60,
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        marginTop: 15,
        borderRadius:5,
        marginHorizontal: 20,
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
});
