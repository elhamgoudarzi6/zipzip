import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar
} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
export default class DocZip extends Component {
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
                        <View style={styles.accountContainer}>
                            <Text style={styles.text}>Classic account</Text>
                            <Image style={{width: 140, height: 170,alignSelf:'center',marginTop:5}}
                                source={require('../../../assets/images/classic.png')}/>
                            <Text style={styles.text}>$ 5.99</Text>
                        <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92} onPress={() => this.props.navigation.navigate('SelectPayWay')}>
                                <Text style={styles.textButton}>BUY</Text>
                        </TouchableOpacity>
                        </View>
                        </View>
                        <View style={styles.accountContainer}>
                            <Text style={styles.text}>Premium account</Text>
                        <Image style={{width: 150, height: 180,alignSelf:'center',marginTop:5}}
                            source={require('../../../assets/images/premium.png')}/>
                            <Text style={styles.text}>$ 9.99</Text>
                        <View style={styles.buttonContainer}>
                        <TouchableOpacity  style={styles.buttonStyle} activeOpacity={0.92} onPress={() => this.props.navigation.navigate('SelectPayWay')}>
                            <Text style={styles.textButton}>BUY</Text>
                        </TouchableOpacity>
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
    accountContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10
    },
    text:{
        color:"#000",
        fontSize: 25,
        fontFamily: 'FuturaStd-Bold',
        textAlign:"center",
        marginTop:5
    },
    buttonContainer:{
        width:'90%',
        alignSelf:'center'
    },
    buttonStyle: {
        backgroundColor: '#000',
        height: 55,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 15,
        borderRadius:5
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
});
