import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,ScrollView,
    StatusBar, ActivityIndicator, Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');
import {connect} from 'react-redux';
import {
    mobileChanged,
    registerUser,
} from '../../action/RegisterUser';
import AwesomeAlert from 'react-native-awesome-alerts';
import CountryPicker from 'react-native-country-picker-modal';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            password: '',
            showAlert: false,
            showAlert2: false,
            messageError: '',
            messageError2: '',
            token: '',
            cca2: 'US',
            country:"",
            code:"1",
        };
    }

    // onMobileChange(text) {
    //     this.props.mobileChanged(text);
    // }
    //
    // onRegisterUser() {
    //     const {mobile} = this.props;
    //     const {navigation} = this.props;
    //     if ((mobile.length < 1)) {
    //         this.setState({messageError: 'Please Enter Mobile Number'});
    //         this.showAlert2();
    //     } else if (mobile.length < 11) {
    //         this.setState({messageError: 'Enter the mobile number completely'});
    //         this.showAlert2();
    //     }
    //     else {
    //             this.props.navigation.navigate('SendSms').catch((error) => {
    //             this.showAlert();
    //             this.setState({messageError: 'خطا'});
    //
    //         });
    //     }
    // }
    //
    // showAlert = () => {
    //     this.setState({
    //         showAlert: true,
    //     });
    // };
    //
    // hideAlert = () => {
    //     this.setState({
    //         showAlert: false,
    //     });
    // };
    //
    renderRegister() {
        if (this.props.loading) {
            return (<ActivityIndicator/>);
        }
        return (
            <TouchableOpacity activeOpacity={0.8} style={styles.buttonStyle}
                          //    onPress={this.onRegisterUser.bind(this)}
                              onPress={() => this.props.navigation.navigate('SendSms')}

            >
                <Text style={styles.textButton}>ok</Text>
            </TouchableOpacity>

        )
    }


    render() {
        const {showAlert,showAlert2} = this.state;
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#000'}
                           barStyle="light-content"/>
                <ScrollView>
                    <Image style={styles.image}
                           source={require('../../../assets/images/ZipZip.png')}/>
                    <View style={styles.buttonContainer}>
                        <View style={styles.input}>
                            <View style={styles.containerCC}>
                                <CountryPicker style={{flex:3}}
                                               onSelect={(value)=> this.setState({country: value,code:value.callingCode,cca2: value.cca2})}
                                               cca2={this.state.cca2}
                                               translation='eng'
                                               withFilter={true}
                                               countryCode={'US'}
                                               withCallingCode={true}
                                               withAlphaFilter={true}
                                               withFlag={true}
                                />
                                <Text style={styles.textCC}>{this.state.cca2} (+{this.state.code}) </Text>
                                <Icon
                                    name='angle-down'
                                    color='#000'
                                    size={35} style={{flex:1,marginLeft:'35%',marginRight:'-5%'}}/>
                            </View>
                        </View>
                        <View style={styles.input}>
                            <TextInput style={{marginRight: 18, fontFamily: 'FuturaStd-Bold',textAlign:"center"}}
                                       placeholder="please enter your mobile number"
                                       underlineColorAndroid="transparent"
                                       keyboardType="numeric"
                                       maxLength={11}
                                       value={this.props.mobile}
                               // onChangeText={this.onMobileChange.bind(this)}
                            />
                        </View>
                        {this.renderRegister()}
                    </View>
                        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 2}}>

                            <View style={styles.footer}>
                        <Icon
                            name='minus'
                            color='#000'
                            size={35} style={{marginRight: 15}}/>
                    </View>
                        </View>
                </ScrollView>
                <AwesomeAlert
                    contentContainerStyle={{width: '80%', borderRadius: 5}}
                    overlayStyle={{backgroundColor: 'rgba(00,00,00,.80)'}}
                    title={<Text><Icon size={30} name={'info'} color={'#3d933c'}></Icon></Text>}
                    confirmText="تایید"
                    show={showAlert}
                    showProgress={false}
                    message={this.state.messageError}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    titleStyle={{fontSize: 14, fontFamily: 'IRANSansMobile(FaNum)'}}
                    messageStyle={{fontSize: 15, fontFamily: 'IRANSansMobile(FaNum)'}}

                    confirmButtonColor="#3d933c"
                    confirmButtonStyle={{}}
                    confirmButtonTextStyle={{fontSize: 17, fontFamily: 'IRANSansMobile(FaNum)'}}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />

                <AwesomeAlert
                    contentContainerStyle={{width: '80%', borderRadius: 5}}
                    overlayStyle={{backgroundColor: 'rgba(00,00,00,.80)'}}
                    title={<Text><Icon size={30} name={'info'} color={'#3d933c'}></Icon></Text>}
                    confirmText="تایید"
                    show={showAlert2}
                    showProgress={false}
                    message={this.state.messageError2}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    titleStyle={{fontSize: 14, fontFamily: 'IRANSansMobile(FaNum)'}}
                    messageStyle={{fontSize: 15, fontFamily: 'IRANSansMobile(FaNum)'}}
                    confirmButtonColor="#3d933c"
                    confirmButtonStyle={{}}
                    confirmButtonTextStyle={{fontSize: 17, fontFamily: 'IRANSansMobile(FaNum)'}}
                    onConfirmPressed={() => {
                        this.hideAlert2();
                    }}/>

            </View>
        );
    }
}

const resizeMode = 'center';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image:{
        flex:1,
        width: '80%',
        height: 65,
        marginTop: 90,
        alignSelf:"center"
    },
    containerCC:{
        flex:1,
        paddingLeft:20,
        flexDirection:"row",
        alignSelf: 'center',
        justifyContent:"center",
        alignItems:"center"
    },
    textCC:{flex:2,
        color:"#000",
        fontFamily: 'FuturaStd-Bold',
        fontSize:14
    },
    input:{
        backgroundColor: '#fff',
        height: 60,
        width: '90%',
        alignSelf: 'center',
        marginVertical:5,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius:5
    },
    buttonContainer:{
        flex:5,
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
        marginVertical: 25,
        borderRadius:5,
        fontSize: 20,
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    footer:{
        flex: 1,
        marginTop: height/4-20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const mapStateToProps = state => {
    return {
        // mobile: state.registerUser.mobile,
        // loading: state.registerUser.loading,
        // success: state.registerUser.success,
        // error: state.registerUser.error,
    };
};
export default connect(mapStateToProps, {
    mobileChanged,
    registerUser,
})(Register);
