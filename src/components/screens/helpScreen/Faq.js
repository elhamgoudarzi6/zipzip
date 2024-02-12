import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView} from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';

export default class Faq extends Component {
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
                    <View style={{justifyContent:"center",alignItems:"center",marginBottom:5}}>
                        <Text style={{marginTop:20,fontFamily: 'FuturaStd-Bold',fontSize:18,textAlign:"center",backgroundColor:'#000',color:'#fff',padding:10,width:'100%'}}>Frequently Asked Questions</Text>
                        <Text style={{marginTop:10,fontFamily: 'FuturaStd-Bold',fontSize:25,textAlign:"center"}}>FAQ</Text>

                        <View style={{flexDirection:"row",marginTop:20}}>
                            <Icon
                                name='question-circle'
                                color='#000'
                                size={30} style={{marginLeft:15}} />
                            <Text style={styles.question}>Can I undo ZiPZiP?</Text>
                        </View>
                        <View style={styles.replyContainer}>
                        <Text style={styles.reply}>No. You cannot reach the original size of a
                            ZiPZiPED photo after the process.</Text>
                        </View>
                        <Divider style={styles.divider} />
                        <View style={{flexDirection:"row",marginTop:5}}>
                            <Icon
                                name='question-circle'
                                color='#000'
                                size={30} style={{marginLeft:15}} />
                            <Text style={styles.question}>Can I use ZiPZiP application
                                without Internet connection?</Text>
                        </View>
                        <View style={styles.replyContainer}>
                        <Text style={styles.reply}>Yes. Definitely you are. Classic and premium accounts owners have offline access to the application services.
                            Can I use ZiPZiPED photos for </Text>
                        </View>
                        <Divider style={styles.divider} />
                        <View style={{flexDirection:"row",marginTop:5}}>
                            <Icon
                                name='question-circle'
                                color='#000'
                                size={30} style={{marginLeft:15}} />
                            <Text style={styles.question}>printing or something like that?</Text>
                        </View>
                        <View style={styles.replyContainer}>
                        <Text style={styles.reply}>Yes. Sure you can. Because the dimension of your photos will remain  %100 unchanged.You would be able to print the 13x18 cm photo after ZiPZiP and have the exact quality in comparison of the original version print in the same size.</Text>
                        </View>
                            <Divider style={styles.divider} />
                        <View style={{flexDirection:"row",marginTop:5}}>
                            <Icon
                                name='question-circle'
                                color='#000'
                                size={30} style={{marginLeft:15}} />
                            <Text style={styles.question}>Can I edit the ZiPZiPED photos?</Text>
                        </View>
                        <View style={styles.replyContainer}>
                        <Text style={styles.reply}>Yes, for sure. You would be able to edit your ZiPZiPED photos exactly the old same way in photo edit software or applications.</Text>
                        </View>
                            <Divider style={styles.divider} />
                        <View style={{flexDirection:"row",marginTop:5}}>
                            <Icon
                                name='question-circle'
                                color='#000'
                                size={30} style={{marginLeft:15}} />
                            <Text style={styles.question}>How much file  I can ZiPZiP in
                                a day?</Text>
                        </View>
                        <View style={styles.replyContainer}>
                        <Text style={styles.reply}>First you can ZiPZiP 100 MB of your photos for free to see the result of
                            application’s intelligent compression technology.
                            If you have a Classic Account you can
                            ZiPZiP 500 MB of your photos each day.
                            If you have a Premium Account you can compress 2 GB fo your photos each day.</Text>
                        </View>
                            <Divider style={styles.divider} />
                        <View style={{flexDirection:"row",marginTop:5}}>
                            <Icon
                                name='question-circle'
                                color='#000'
                                size={30} style={{marginLeft:15}} />
                            <Text style={styles.question}>Which file extensions ZiPZiP
                                support?</Text>
                        </View>

                        <View style={{marginTop:10,flexDirection:"row",marginHorizontal:10}}>
                            <Image
                                style={{width: 50, height: 50,borderRadius:5}}
                                source={require('../../../../assets/images/PicZip.png')}
                            />
                            <Text style={styles.reply}>JPG    PNG   TIF   JP2   BMP
                                JPG   PNG</Text>
                        </View>
                        <View style={{marginTop:10,flexDirection:"row",marginHorizontal:10}}>
                            <Image
                                style={{width: 50, height: 50,borderRadius:5}}
                                source={require('../../../../assets/images/MovZip.png')}
                            />
                            <Text style={styles.reply}>JPG    PNG   TIF   JP2   BMP
                                JPG   PNG </Text>
                        </View>
                        <View style={{marginTop:10,flexDirection:"row",marginHorizontal:10}}>
                            <Image
                                style={{width: 50, height: 50,borderRadius:5}}
                                source={require('../../../../assets/images/DocZip.png')}
                            />
                            <Text style={styles.reply}>JPG    PNG   TIF   JP2   BMP
                                JPG   PNG </Text>
                        </View>
                    </View>
                </ScrollView>

            </View>

        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
    },
    divider:{height:1,width:'80%',marginVertical: 5,backgroundColor: "#000"},
    question:{
        fontFamily: 'FuturaStd-Bold',
        fontSize:16,
        marginHorizontal:10,
        flex: 2,
    },
    replyContainer:{
        marginHorizontal:20,
    },
    reply:{
        marginTop:10,
        marginBottom:5,
        fontFamily: 'HelveticaNeueLTStd-Md',
        fontSize:16,
        textAlign:"justify",
        marginHorizontal:10,
    },
});
