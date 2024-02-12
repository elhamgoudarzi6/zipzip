import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
export default class HowZip extends Component {
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
                           barStyle="light-content"/>
                <ScrollView>
                    <View style={{marginLeft:10,marginTop:10}}>
                        <Icon onPress={()=>{this.props.navigation.goBack()}}
                            name='arrow-left'
                            color='#000'
                            size={25}  style={{marginLeft:10}}/>
                    </View>
                        <View style={{backgroundColor:'#fff',justifyContent:"center",alignItems:"center",marginTop:10}}>
                                <Image
                                    style={{width: 70, height: 70,marginBottom:5}}
                                    source={require('../../../../assets/images/resize.png')}
                                />

                            <Text style={{marginTop:20,fontFamily: 'FuturaStd-Bold',fontSize:18,textAlign:"center"}}>How Can I ZipZip My Photos?</Text>
                            <View style={{marginTop:5,width:50,height:50,borderRadius:60,backgroundColor:"#000",justifyContent:"center",alignItems:"center"}}><Text style={{color:"#fff",fontSize:20,fontFamily: 'FuturaStd-Bold'}}>1</Text></View>
                            <View style={{marginHorizontal:20}}>
                            <Text style={{marginTop:20,padding:2,fontFamily: 'HelveticaNeueLTStd-Md',fontSize:18,marginHorizontal:10,textAlign:"justify"}}>You Should just select the photos you want until they reach 500MB in classic Account and 2GB in Premium Account and tap zipzip. </Text>
                            </View>
                                <Image
                                    style={{width: 120, height: 120,marginBottom:5,marginTop:5}}
                                    source={require('../../../../assets/images/select.png')}
                                />
                            <View style={{marginHorizontal:20}}>
                            <Text style={{marginTop:20,padding:2,fontFamily: 'FuturaStd-Bold',color:"#777",fontSize:14,textAlign:"center",marginHorizontal:10}}>You can check the size you select at the moment. </Text>
                            <Text style={{marginTop:20,padding:2,fontFamily: 'FuturaStd-Bold',fontSize:20,textAlign:"center",marginHorizontal:10}}>SELECTED PHOTOS: 100MB </Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('ZipSuccess')}>
                                <View style={styles.buttonStyle}>
                                    <Image
                                        style={{width: 125, height: 25}}
                                        source={require('../../../../assets/images/ZipZipWhite.png')}
                                    />
                                </View>
                            </TouchableOpacity>
                            <View style={{marginTop:5,width:50,height:50,borderRadius:60,backgroundColor:"#000",justifyContent:"center",alignItems:"center"}}><Text style={{color:"#fff",fontSize:20,fontFamily: 'FuturaStd-Bold'}}>2</Text></View>
                            <View style={{marginHorizontal:20}}>
                            <Text style={{marginTop:20,padding:2,fontFamily: 'HelveticaNeueLTStd-Md',fontSize:18,textAlign:"justify",marginHorizontal:10}}>Then you can find your zipziped photos in the address you got in the notification. </Text>
                            </View>
                            <Text style={{marginTop:20,padding:2,fontFamily: 'FuturaStd-Bold',fontSize:14,textAlign:"center",marginHorizontal:10}}>in a new folder named piczip/zipzip.</Text>
                            <View style={{marginTop:5}}>
                                <Image
                                    style={{width: 110, height: 80,marginBottom:5}}
                                    source={require('../../../../assets/images/checkzipzip.png')}
                                />
                            </View>
                            <TouchableOpacity activeOpacity={0.92} >
                                <View style={styles.buttonStyle}>
                                    <Text style={styles.textButton}>
                                        Start zipzip </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
            </View>
        )
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
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 10,
        marginHorizontal:10,
        borderRadius:5

    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
});

