import React, {Component} from 'react';
import {
    StyleSheet,
    Animated,
    Easing,
    View,
    TouchableOpacity,
    Alert,
    Image,
    Text,
    ImageBackground,
    StatusBar,Dimensions
} from 'react-native';
import Video from 'react-native-video';
const {width, height,fontScale} = Dimensions.get('window');
//EStyleSheet.build({$rem:width>340?18:16});
export  default class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        this.splash();
    }
    splash() {
        setTimeout(() => {
            this.props.navigation.navigate('NotificationLocal')
        }, 10000)
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}  barStyle="light-content"/>
                <Video source={require('../../../assets/video/LogoMotionWhite.mp4')}
                       ref={(ref) => {
                           this.player = ref
                       }}                                      // Store reference
                       onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    //  onError={this.videoError}               // Callback when video cannot be loaded
                       style={styles.backgroundVideo} />
                <View style={styles.info}>
                    <Text style={{fontSize:width*0.04, fontFamily: 'futura-pt-medium-589e45b956de4'}}>Designed
                        & Developed by <Text style={styles.company}>ARKA Invent co.</Text></Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    info:{
        position: 'absolute',
        top: '90%',
        alignSelf:"center"
    },
    company: {
       // fontSize: width>411?18:14,
       // fontSize: 18/fontScale,
        fontSize: width>411?width * 0.04:width * 0.03,
        fontFamily: 'FuturaStd-Bold',
        textAlign:"center",
        color: '#000',
    },
});
