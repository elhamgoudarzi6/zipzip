import React from 'react';
import {StyleSheet, View, Text,Easing,BackHandler, Animated} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Video from 'react-native-video';
const slides = [
    {
        key:1,
        Video: require('../../../assets/video/Slide1.mp4'),
    },
    {
        key: 2,
        Video: require('../../../assets/video/Slide2.mp4'),
    },
    {
        key:3,
        Video: require('../../../assets/video/Slide3.mp4'),
    },
];
export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.animatedValue1 = new Animated.Value(0);
    }
    state = {
        showRealApp: false,
    }
    animate() {
        this.animatedValue1.setValue(0);
        const createAnimation = (value, duration, easing, delay = 15000) => {
            return Animated.timing(value, {
                toValue: 1,
                duration,
                easing,
                delay,
                useNativeDriver:false
            });
        };
        Animated.sequence([
            createAnimation(this.animatedValue1, 900, Easing.ease),

        ]).start();
    }

    splash() {
        setTimeout(() => {
            // AsyncStorage.getItem(this.state.user_id,(err,result)=>{
            // if (result===null)
            this.props.navigation.navigate('LogoMotion');
            // else
            //     this.props.navigation.navigate('DashboardUser');
            //         });
        }, 20000);
    }
    componentDidMount() {
        this.animate();
        this.splash();
        BackHandler.addEventListener("hardwareBackPress", this.backPressed);
    }
    backPressed = () => {
        let { routeName } = this.props.navigation.state;
        console.log("route is :  " + routeName);

        if (this.props.navigation.isFocused()) {
            console.log("ROUTE :  " + routeName);
            BackHandler.exitApp()
            return true;
        } else {
            return false;
        }
    };
    _renderItem = ({ item }) => {
        return (
                <Video source={item.Video}
                       ref={(ref) => {
                           this.player = ref
                       }}
                       onBuffer={this.onBuffer}
                    //  onError={this.videoError}
                       style={styles.backgroundVideo} />
        );
    }
    _onDone = () => {
        this.setState({ showRealApp: true });
    }
    _keyExtractor = (item) => item.title;
    _renderDoneButton = () => {
        const scale = this.animatedValue1.interpolate({
            inputRange: [0, 1],
            outputRange: [0.1, 1],
        });
        const opacity = this.animatedValue1.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        });
        const introtext = this.animatedValue1.interpolate({
            inputRange: [0, 1],
            outputRange: [-200, 50],
        });
        return (
            <Animated.View style={{bottom: introtext}}>
                <View style={styles.button}>
                <Text style={{color:"#fff",fontSize:25,fontFamily:"HelveticaNeueLTStd-Md"}}>Start</Text>
            </View>
            </Animated.View>
        );
    };
    render() {

        if (this.state.showRealApp) {
            return <Login />;
        } else {
            return <AppIntroSlider
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    onDone={this._onDone}
                    showPrevButton
                    showSkipButton
                    nextLabel="next"
                    prevLabel='back'
                    skipLabel="back"
                    doneLabel='next'
                    nextStyle={{backgroundColor:'red'}}
                    nextStyle
                    showDoneButton= {true}
                    renderDoneButton={this._renderDoneButton}
                    showNextButton= {false}
                    showPrevButton= {false}
                    showSkipButton= {false}
                    activeDotStyle= {{backgroundColor:'#777',marginTop:30}}
                    dotStyle={{backgroundColor:'#000',fontSize:40,marginTop:30}}
                    data={slides}
                />
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    button: {
        width: 300,
        height:60,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-20,
        marginRight:'10%',
        marginHorizontal:10,
        borderRadius:5
    },
});
