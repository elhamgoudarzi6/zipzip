import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, Button, Dimensions,
} from 'react-native';
import {Card, Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');

export default class SelectPayWay extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Card style={styles.card}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                            <View style={{flexDirection: 'row', marginLeft: 10}}>
                                <Icon
                                    name='arrow-left'
                                    color='#fff'
                                    size={22} style={{marginLeft: 10}}/>

                            </View>
                        </View>
                        <Text style={styles.price}>
                            $ 5.99
                        </Text>
                    </Card>
                    <Text style={styles.textChoose}>Choose your card</Text>
                    <View style={{marginTop: 30}}>
                        <Divider style={styles.divider}/>
                        <View style={{flexDirection: 'row'}}>
                                <Icon
                                    name='cc-visa'
                                    color='#000'
                                    size={60} style={styles.icon}/>
                            <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92}
                                              onPress={() => this.props.navigation.navigate('BuyPicZipPremiumSuccess')}>
                                <Text style={styles.textButton}>Continue </Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                        <Divider style={styles.divider}/>
                        <View style={{flexDirection: 'row'}}>
                                <Icon
                                    name='cc-paypal'
                                    color='#000'
                                    size={60} style={styles.icon}/>
                            <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92}
                                              onPress={() => this.props.navigation.navigate('BuyPicZipPremiumSuccess')}>
                                <Text style={styles.textButton}>Continue </Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                        <Divider style={styles.divider}/>
                        <View style={{flexDirection: 'row'}}>
                                <Icon
                                    name='cc-mastercard'
                                    color='#000'
                                    size={60} style={styles.icon}/>
                            <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92}
                                              onPress={() => this.props.navigation.navigate('BuyPicZipClassicSuccess')}>
                                <Text style={styles.textButton}>Continue </Text>
                            </TouchableOpacity>
                            </View>
                        </View>
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
    card: {
        width: '101%',
        height: 230,
        backgroundColor: '#000',
        marginBottom: 50,
    },
    textChoose:{
        alignSelf: 'center',
        fontSize:width>300?width*0.06:width*0.04,
        marginTop: -30,
        color: '#000',
        fontFamily: 'HelveticaNeueLTStd-Md',
    },
    price:{
        alignSelf: 'center',
        marginTop: 50,
        fontSize: 35,
        color: '#fff',
        fontFamily: 'futura-pt-bold-589e44b6aacd3',
    },
    icon:{marginLeft: 25,flex: 5, marginTop: 10},
    buttonContainer:{
        flex:3,
        width:'90%',
        alignSelf:'center'
    },
    buttonStyle: {
        flex: 4,
        backgroundColor: '#000',
        height: 55,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginRight: 75,
        marginLeft: -10,
        borderRadius: 5,
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'FuturaStd-Bold',
        textAlign: 'center',
    },
    divider: {height: 2, width: '90%', marginVertical: 5, marginHorizontal: 20, backgroundColor: '#000'},


});
