import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar, Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');

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
                    <View style={styles.circle}>
                        <Icon name='check' style={{justifyContent:"center",alignItems:"center",fontSize: 55, color: '#000',padding:5,alignSelf:"center" }} />
                    </View>
                    <Text style={[styles.textHeader,{fontSize:30}]}>Done!</Text>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/images/PicZip.png')}
                    />
                    <Text style={styles.textHeader}>
                        Premium Account Actived!</Text>
                    <Image style={styles.tag}
                           source={require('../../../assets/images/tagpremium.png')}/>
                    <Text style={styles.txtBrief}>
                        Wish you the BRIGHT & BRIEF photos!</Text>
                    <View style={{marginTop: 5,flex:10}}>
                        <TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('SelectPic')}>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textButton}>
                                    Start zipzip </Text>
                            </View>
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
    circle:{backgroundColor:'#fff',height:90,width:90,alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:70,borderRadius:70,borderWidth:10,borderColor:"#000"},
    image:{width: 130, height: 130,alignSelf:'center',borderRadius:5,marginTop:10},
    tag:{width: 50, height: 70,marginTop:-10,alignSelf:'center'},
    textHeader:{
        color: '#000',
        fontSize: width>350?22:18,
        marginTop:10,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        textAlign:"center",
        marginBottom: 20,
    },
    txtBrief:{
        fontSize: width>350?18:16,
        marginTop:45,
        fontFamily: 'HelveticaNeueLTStd-Md',
        alignSelf: 'center',
    },
    buttonStyle: {
        backgroundColor: '#000',
        height: 60,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 15,
        borderRadius:5
    },
    textButton: {
        color: '#fff',
        fontSize: width>350?20:18,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
});
