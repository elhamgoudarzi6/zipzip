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
export default class HelpClassic extends Component {
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
                        <View style={{justifyContent:"center",alignItems:"center",marginTop:25}}>
                            <View style={{marginTop:20}}>
                                <Image
                                    style={{width: 130, height: 120,borderRadius:5}}
                                    source={require('../../../../assets/images/PicZip.png')}
                                />
                            </View>
                            <Image
                                style={{width: 40, height: 70,marginTop:-5}}
                                source={require('../../../../assets/images/tagclassic.png')}
                            />
                            <Text style={{marginTop:10,fontFamily: 'FuturaStd-Bold',fontSize:22,textAlign:"center"}}>Classic account</Text>
                            <View style={{width:180}}>
                            <View style={{marginTop:20,borderTopColorColor:"#000",borderleftColor:"#000",borderRightColor:"#000",borderTopWidth:3,borderLeftWidth:3,borderRightWidth:3}}>
                                <Text style={{fontFamily: 'FuturaStd-Bold',fontSize:30,textAlign:"center"}}> 1 Year </Text>
                            </View>
                            <View style={{borderColor:"#000",borderWidth:3}}>
                                <Text style={{fontFamily: 'FuturaStd-Bold',fontSize:30,color:"#fff",backgroundColor:"#000",textAlign:"center"}}>500 MB</Text>
                            </View>
                            </View>
                            <View style={{marginTop:20}}>
                                <Image
                                    style={{width: 180, height: 100,marginTop:5,borderRadius:5}}
                                    source={require('../../../../assets/images/perday.png')}
                                />
                            </View>
                            <Text style={{marginTop:20,fontFamily: 'FuturaStd-Bold',fontSize:25,color:"#000",textAlign:"center"}}>$ 5.99</Text>

                        </View>
                        <View style={{marginTop:20}}>
                            <TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('Store')}>
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
