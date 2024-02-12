import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

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
                    <View style={{flexDirection:'row',marginLeft:10}}>
                        <Icon onPress={()=>{this.props.navigation.goBack()}}
                            name='arrow-left'
                            color='#000'
                            size={25}  style={{marginLeft:10}}/>
                    </View>
                </View>
                <ScrollView>
                        <Image
                            style={{width: 90, height: 90,alignSelf:'center',marginTop:60}}
                            source={require('../../../assets/images/lump.png')}
                        />
                    <Text style={styles.arka}>
                        ARKA</Text>
                    <Text style={[styles.arka,{fontSize:20}]}>
                        INVENT Co.</Text>
                    <View style={{paddingHorizontal:30}}>
                    <Text style={styles.textAbout}>
                        Arka Knowledge-Based company is active in the field of production of artificial intelligence systems and information security and mobile apps and websites and is one of the leading companies in the field of smart technologies and production of special software in Iran and Middle East.
                     </Text>
                    <Text style={styles.textAbout}>
                        Most of the companys products have different Technology and science and Technology in Vice President for Science and Technology in
                    </Text>
                    </View>
                    <View style={{marginTop: 20,flex:10,marginHorizontal:30}}>
                        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92} >
                                <Text style={styles.textButton}>
                                   ARKAINVENT.COM </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,flexDirection:"row",justifyContent:'space-between',marginHorizontal:80,marginTop:30}}>
                        <Icon
                            name='instagram'
                            color='#000'
                            size={25} />
                        <Icon
                            name='telegram'
                            color='#000'
                            size={25}/>
                        <Icon
                            name='facebook'
                            color='#000'
                            size={25} />
                        <Icon
                            name='whatsapp'
                            color='#000'
                            size={25} />
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
    arka:{
        color: '#000',
        fontSize: 30,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        textAlign:"center",
        marginTop:5
    },
    buttonStyle: {
        backgroundColor: '#000',
        height: 60,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius:5
    },
    textAbout:{
        color: '#000',
        marginTop:15,
        fontSize: 18,
        fontFamily: 'HelveticaNeueLTStd-Md',
        textAlign:"justify",
        padding:5
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
        letterSpacing: 5
    }
});
