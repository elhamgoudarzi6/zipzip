import React, {Component} from 'react';
import {
    StyleSheet,
    Animated,
    Easing,
    View,
    Alert,
    Image,
    Text,
    StatusBar,
} from 'react-native';
export default class Splash extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(0);
        this.animatedValue3 = new Animated.Value(0);
    }

    componentDidMount() {
        this.animate();
        this.splash();
    }
    splash() {
        setTimeout(() => {
            //this.props.navigation.navigate('DashboardUser');
            this.props.navigation.navigate('Slider');
        }, 6000);
    }

    animate() {
        this.animatedValue1.setValue(0);
        this.animatedValue2.setValue(0);
        this.animatedValue3.setValue(0);
        const createAnimation = (value, duration, easing, delay = 0) => {
            return Animated.timing(value, {
                toValue: 1,
                duration,
                easing,
                delay,
                useNativeDriver:false
            });
        };
        Animated.sequence([
            createAnimation(this.animatedValue1, 600, Easing.ease),
            createAnimation(this.animatedValue2, 800, Easing.ease),
            createAnimation(this.animatedValue3, 800, Easing.ease),

        ]).start();
    }

    render() {
        const scale = this.animatedValue2.interpolate({
            inputRange: [0, 1],
            outputRange: [0.1, 1],
        });
        const opacity = this.animatedValue3.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        });
        const introtext = this.animatedValue1.interpolate({
            inputRange: [0, 1],
            outputRange: [-200, 50],
        });

        return (
            <View style={styles.container}>
                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                           barStyle="light-content"/>
                <View style={{
                    flex: 3, justifyContent: 'center',
                    alignItems: 'center',
                }}>

                </View>
                <View style={{
                    flex: 3, justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    {/*<Animated.View style={{transform: [{scale: scale}]}}>*/}
                    {/*    <View style={{width:150, height:150,backgroundColor:'#fff',alignItems:'center',shadowRadius: 8,*/}
                    {/*        elevation: 25,*/}
                    {/*        borderRadius: 100,justifyContent:'center',shadowOpacity: 0.5,}}>*/}
                    {/*        <Image style={styles.image}*/}
                    {/*               source={{uri: 'http://www.yourimageurl.com/image.gif'}} />*/}
                    {/*        <Animated.View style={{bottom: introtext, marginTop:10}}>*/}
                    {/*            <Text style={{color:'#067062',fontSize:22,alignSelf:'center',fontFamily:"Lalezar-Regular"}}>وکیل شما</Text>*/}
                    {/*        </Animated.View>*/}
                    {/*    </View>*/}
                    {/*</Animated.View>*/}
                </View>

                <View style={{
                    flex: 1, justifyContent: 'center',
                    alignItems: 'center',
                }}>

                </View>



                <View style={{
                    flex: 4, justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <Animated.View style={{bottom: introtext, marginTop:20}}>
                        <Text style={{color:'#fff',fontSize:18,alignSelf:'center',fontFamily:"Vazir-Black"}}>splash</Text>
                    </Animated.View>

                {/*    <Animated.View style={{opacity}}>*/}
                {/*        <Text style={styles.textversion}>نسخه 1.0.0</Text>*/}
                {/*    </Animated.View>*/}
                {/*</View>*/}
                {/*<View style={{}}>*/}

                {/*    <View style={{width:'100%',height:50,borderTopRightRadius:100,borderTopLeftRadius:100,backgroundColor:'#fff'}}>*/}
                {/*        <Animated.View style={{opacity}}>*/}
                {/*            <Text style={{fontSize: 16, color: '#067062',marginTop:10,justifyContent:'space-between',alignSelf:'center', fontFamily:"Vazir-Black"}}>طراحی و پیاده سازی*/}
                {/*                شرکت دانش بنیان آرکا</Text>*/}
                {/*        </Animated.View>*/}
                {/*    </View>*/}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    textContainer: {
        // marginTop: 450,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'black',
        // opacity:0.5,
    },
    text: {
        marginTop: 5,
        fontSize: 60,
        color: '#fff',
        textAlign: 'center',
        alignSelf: 'center',
        // fontFamily: 'GreatVibes-Regular',
        fontFamily: 'Far_Aref',
    },
    textversion: {
        fontSize: 12,
        marginTop: 50,
        color: '#fff',
        // fontFamily: 'GreatVibes-Regular',
        fontFamily: 'IRANSansMobile(FaNum)',

    },
});
