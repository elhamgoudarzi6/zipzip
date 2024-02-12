import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar, Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                    <View style={{flexDirection:'row',marginLeft:'3%'}}>
                        <Icon onPress={()=>{this.props.navigation.goBack()}}
                            name='arrow-left'
                            color='#000'
                            size={25}  style={{marginLeft:10}}/>

                    </View>
                </View>
                <ScrollView>
                    <View style={{alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
                        <Icon
                            name='question-circle-o'
                            color='#000'
                            size={65} />
                    </View>
                    <Text style={styles.title}>
                        HELP</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92}>
                                <Text style={styles.textButton}>
                                    What ZipZip do</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92} onPress={() => this.props.navigation.navigate('HowZip')}>
                                <Text style={styles.textButton}>
                                   How to zipzip </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92} onPress={() => this.props.navigation.navigate('Faq')}>
                                <Text style={styles.textButton}>
                                    FAQ </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92}  onPress={() => this.props.navigation.navigate('Extentions')}>
                                <Text style={styles.textButton}>
                                    Suppoted Extention </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92} onPress={() => this.props.navigation.navigate('HelpFree')} >
                            <View style={[styles.buttonStyle,{flexDirection:"row"}]}>
                                <Image
                                    style={{width: 38, height: 38,marginRight:5}}
                                    source={require('../../../assets/images/free.png')}
                                />
                                <Text style={styles.textButton}>100 MB Compression</Text>
                            </View>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92} onPress={() => this.props.navigation.navigate('HelpClassic')} >
                                <Text style={styles.textButton}>
                                    Classic Account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92} onPress={() => this.props.navigation.navigate('HelpPremium')}>
                                <Text style={styles.textButton}>
                                    Premium Account</Text>
                        </TouchableOpacity>
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
    title:{
        color: '#000',
        fontSize: width>350?width*0.05:width*0.04,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
    },
    buttonContainer:{
        marginTop: 7,
        flex:10,
        width:'75%',
        justifyContent: 'center',
        alignItems: 'center',
       alignSelf:'center'
    },
    buttonStyle: {
        backgroundColor: '#000',
        height: 60,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius:5,

    },
    textButton: {
        color: '#fff',
        fontSize: width>400?width*0.040:width*0.030,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
    }
});
