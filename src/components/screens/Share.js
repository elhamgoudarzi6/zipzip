import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar,Share
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope, faShareAlt} from '@fortawesome/free-solid-svg-icons';
import {faSms} from '@fortawesome/free-solid-svg-icons/faSms';
const ShareExample = (props) => {
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'ZipZip App Share Code : 765GHLB',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    return (
    <View style={styles.container}>
        <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                   backgroundColor={'#000'}
                   barStyle="light-content" />
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
            <View style={{flexDirection:'row',marginLeft:10}}>
                <Icon onPress={()=>{props.navigation.goBack()}}
                    name='arrow-left'
                    color='#000'
                    size={25}  style={{marginLeft:10}}/>
            </View>
        </View>
        <ScrollView>

            <View style={{backgroundColor:'#fff',alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:50}}>
                <FontAwesomeIcon icon={faShareAlt} size={40} style={{color: '#000'}} onPress={onShare}/>
            </View>
            <Text style={{
                color: '#000',
                fontSize: 25,
                marginTop:20,
                fontFamily: 'FuturaStd-Bold',
                alignSelf: 'center',
                marginBottom: 20,
            }}>
                Share</Text>
            <Text style={{
                color: '#000',
                fontSize: 20,
                fontFamily: 'HelveticaNeueLTStd-Md',
                textAlign: 'center',
                marginBottom: 20,
                marginHorizontal:20
            }}>
                Share the solution by inviting friends and both you will get </Text>
            <View style={{backgroundColor:'#fff',height:130,width:130,alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:30}}>
                <Image
                    style={{width: 100, height: 180}}
                    source={require('../../../assets/images/pextention.png')}
                />
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:40}}>
                <Text style={{marginBottom:10,fontSize:24}}>SHARE YOUR CODE</Text>
            </View>
            <View style={{flexDirection:"row",alignItems:'center',justifyContent:'center',marginTop:5,borderTopWidth:3,borderTopColor:"#000",borderBottomWidth:3,borderBottomColor:"#000"}}>
                <Icon
                    name='link'
                    color='#777'
                    size={35} style={{marginRight:15}}/>
                <Text style={{marginBottom:10,fontSize:25}}>765GHLB</Text>
            </View>
            <View style={{marginTop: 15,flexDirection:"row",justifyContent:'space-between',marginHorizontal:40}}>
                <FontAwesomeIcon icon={faShareAlt} size={30} style={{color: '#000'}}/>
                <Icon
                    name='instagram'
                    color='#000'
                    size={35} style={{marginRight:15}}/>

                <FontAwesomeIcon icon={faEnvelope} size={35} style={{color: '#000'}}/>
                <FontAwesomeIcon icon={faSms} size={35} style={{color: '#000'}}/>
            </View>
        </ScrollView>
    </View>
    );
};
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
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },

});

export default ShareExample;
