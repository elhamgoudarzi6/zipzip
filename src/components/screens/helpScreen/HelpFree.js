import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar, Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Collapse, CollapseBody, CollapseHeader} from 'accordion-collapse-react-native';
import {Divider} from 'react-native-paper';
export default class HelpFree extends Component {
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
                        <View style={{backgroundColor:'#fff',justifyContent:"center",alignItems:"center",marginTop:60}}>
                            <View style={{marginTop:20}}>
                                <Image
                                    style={{width: 90, height: 90,marginBottom:5}}
                                    source={require('../../../../assets/images/freetest.png')}
                                />
                            </View>
                            <Text style={{marginTop:10,fontFamily: 'FuturaStd-Bold',fontSize:18,textAlign:"center"}}>100 MB PHOTO Compression</Text>
                            <View style={{marginTop:20}}>
                                <Image
                                    style={{width: 100, height: 100,marginBottom:5,borderRadius:5}}
                                    source={require('../../../../assets/images/PicZip.png')}
                                />
                            </View>
                            <View style={{marginTop:30,justifyContent:"center",alignItems:"center",marginHorizontal:30}}>
                                <Text style={{marginHorizontal:15,fontFamily:'HelveticaNeueLTStd-Md',fontSize:20,color:"#000",textAlign:"justify"}}>You can use the 100 MB Free TEST at first and check he size and quality of photos got ZipZiped and make sure that how they will remain 100% unchanged.</Text>
                            </View>
                        </View>
                        <View style={{marginTop:20}}>

                            <TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('SelectPic')}>
                                <View style={styles.buttonStyle}>
                                    <Text style={styles.textButton}>
                                        Want it</Text>
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
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius:5

    },
    buttonStyle2: {
        backgroundColor: '#000',
        height: 60,
        width: '160%',
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
    },
    divider:{height:2,width:'80%',marginVertical: 5,backgroundColor:"#000"},
    question:{
        fontFamily: 'FuturaStd-Bold',
        fontSize:16,
        marginHorizontal:10,
        flex: 2,
    },
    reply:{
        marginTop:10,
        marginBottom:5,
        fontFamily: 'HelveticaNeueLTStd-Md',
        fontSize:16,
        textAlign:"center",
        marginHorizontal:10,
    },
});

