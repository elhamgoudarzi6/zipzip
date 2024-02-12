import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Alert,
    Image,
    Text,
    ImageBackground,
    StatusBar, Animated, StyleSheet, Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
import {Card, Divider, Title} from 'react-native-paper';
//import PhoneNumberPicker from 'react-native-country-code-telephone-input'
//import PhoneInput from 'react-native-phone-input'

class NotificationLocal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    // render(){
    //     return(
    //         <PhoneInput ref='phone'/>
    //     )
    // }


    render() {
        return (
            <View style={{flex: 1,backgroundColor:"#fff",justifyContent:"center",alignItems:'center'}}>
                <Card style={styles.card}>
                    <Card.Content >
                            <Icon
                                name='warning'
                                color='#000'
                                size={45} style={{alignSelf:'center'}}/>
                        <Icon
                            name='long-arrow-down'
                            color='#000'
                            size={25} style={{alignSelf:'center',marginTop:-3}}/>
                            <Text style={styles.textSafe}>SAFE  TECHNOLOGY</Text>
                            <Text style={styles.textLocal}>LOCAL PROCESS</Text>
                        <View style={{marginHorizontal:15,alignSelf:'center'}}>
                        <Text style={styles.text}>
                                All ZIPZIP compression
                                algorithms have been performed
                                on this mobile phone during the
                                internal process, and no information
                                will be transferred during
                                the action.
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.button} activeOpacity={0.92}
                                          onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{
                                color: '#fff',
                                fontSize: width * 0.06,
                                fontFamily: 'futura-pt-medium-589e45b956de4',
                            }}>GOT it</Text>
                        </TouchableOpacity>

                            <Title style={[styles.textTable,{color:'#000',fontSize:14,flex:1}]}>ZIPZIPED PHOTOS</Title>
                            <Title style={[styles.textTable,{color:'#fff',fontSize:14,flex:1,backgroundColor:"#000",borderRadius: 5,marginTop: 5}]}>25 GB</Title>
                    </Card.Content>
                </Card>

                <View style={styles.info}>
                    <Text style={{
                        color: '#b4b4b4',
                        fontSize: width * 0.04,
                        fontFamily: 'futura-pt-medium-589e45b956de4',
                    }}>Designed
                        & Developed by <Text style={styles.company}>ARKA Invent co.</Text></Text>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    info: {
        position: 'absolute',
        top: '90%',
        alignSelf: 'center',
    },
    card:{
    width: '85%',
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
        height: 2,
        marginRight: 16,
        marginBottom: 12,
},
    shadowOpacity: 0.25,
        shadowRadius: 3.84,
    elevation: 12,
        borderTopWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderBottomWidth: 25,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderColor: '#000',
        marginHorizontal: 20,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
},
    company: {
        marginTop: 5,
        fontSize: width>411?width * 0.04:width * 0.03,
        color: '#b4b4b4',
        fontFamily: 'FuturaStd-Bold',
    },
    textSafe: {
        alignSelf: 'center',
        fontFamily: 'FuturaStd-Bold',
        padding: 8,
        fontSize:  width>411?width * 0.04:width * 0.03,
        color: '#fff',
        borderRadius:4,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: '#000',
        marginTop:-10,
        paddingHorizontal: 25,
        backgroundColor: '#000',
    },
    textLocal: {
        alignSelf: 'center',
        fontFamily: 'FuturaStd-Bold',
        paddingTop: 15,
        fontSize: width * 0.04,
        borderBottomWidth: 2.5,
        borderBottomColor: '#000',
        letterSpacing: 2.5
    },
    text: {
        marginTop: 10,
        alignSelf: 'center',
        fontSize: width * 0.04+1,
        textAlign: 'justify',
        fontFamily: 'futura-pt-bold-589e44b6aacd3',
    },
    button: {
        width: '90%',
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        marginHorizontal: 15,
        borderRadius:5,
    },
    divider:{height:1,width:'80%',marginVertical: 5},

});
export default NotificationLocal;
