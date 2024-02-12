import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar, Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';
import {Collapse, CollapseBody, CollapseHeader} from 'accordion-collapse-react-native';
import {Divider} from 'react-native-paper';
const {width, height} = Dimensions.get('window');
export default class Extentions extends Component {
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
                <View style={{marginLeft:10,marginTop:10}}>
                    <Icon onPress={()=>{this.props.navigation.goBack()}}
                        name='arrow-left'
                        color='#000'
                        size={25}  style={{marginLeft:10}}/>
                </View>
                <ScrollView>
                        <View style={{backgroundColor:'#fff',justifyContent:"center",alignItems:"center",marginTop:10}}>
                            <View style={{marginTop:-5}}>
                                <Image
                                    style={{width: 60, height: 60,marginBottom:5}}
                                    source={require('../../../../assets/images/p.png')}
                                />
                            </View>
                            <View style={{marginTop:10,marginHorizontal:10,justifyContent:"center",alignItems:"center"}}>
                                <Image
                                    style={{width: 128, height: 25,marginBottom:5}}
                                    source={require('../../../../assets/images/ZipZip.png')}
                                />
                            </View>
                            <Text style={{marginTop:5,fontFamily: 'FuturaStd-Bold',fontSize: width>400?width*0.05:width*0.04,textAlign:"center"}}>Supported Extention</Text>
                            <View style={{marginTop:20,justifyContent:"center",alignItems:"center"}}>
                                <Text style={{marginHorizontal:10,fontFamily:'HelveticaNeueLTStd-Md',fontSize:width>400?width*0.05:width*0.04,color:"#000",textAlign:"center"}}>Extentions Supported in</Text>
                                <Text style={{marginHorizontal:10,fontFamily:'HelveticaNeueLTStd-Md',fontSize:width>400?width*0.05:width*0.04,color:"#000",textAlign:"center"}}>Classic and Premuim Account</Text>

                                <Image
                                    style={{width: 160, height: 120,marginVertical:5}}
                                    source={require('../../../../assets/images/picExt.png')}
                                />
                                <Image
                                    style={{width: 160, height: 120,marginVertical:5}}
                                    source={require('../../../../assets/images/movext.png')}
                                />
                                <Image
                                    style={{width: 160, height: 120,marginVertical:5}}
                                    source={require('../../../../assets/images/docExt.png')}
                                />
                            </View>

                            <Collapse>
                                <CollapseHeader style={{backgroundColor:"#000",width:width,height:55,marginTop:20,padding:15,justifyContent:"center",alignItems:"center",alignSelf:"center"}}>
                                    <View style={{flexDirection:'row'}}>
                                    <Text style={{fontFamily:'HelveticaNeueLTStd-Md',fontSize: width>400?width*0.05:width*0.04,color:"#fff",paddingHorizontal:10,}}>Professional Extentions</Text>
                                    <Icon
                                        name='angle-double-right'
                                        color='#fff'
                                        size={30} style={styles.icon}/>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <View style={{marginTop:5,justifyContent:"center",alignItems:"center"}}>
                                        <View style={{marginTop:15,marginHorizontal:10,justifyContent:"center",alignItems:"center"}}>
                                            <Image
                                                style={{width: 128, height: 25,marginBottom:5}}
                                                source={require('../../../../assets/images/ZipZip.png')}
                                            />
                                        </View>
                                        <View style={{flexDirection:'row',marginTop:5,marginBottom:20}}>
                                            <Text style={{marginHorizontal:10,fontFamily:'FuturaStd-Bold',fontSize:20,color:"#000",textAlign:"center"}}>Extentions Supported in Store</Text>
                                            {/*<Icon name='chevron-down' style={{fontSize: 30, color: '#000'}} />*/}
                                        </View>
                                        {/*<Icon name='chevron-down' style={{fontSize: 30, color: '#000'}} />*/}

                                        <Image
                                            style={{width: 320, height: 150,marginVertical:5}}
                                            source={require('../../../../assets/images/picextstore.png')}
                                        />
                                        <Divider style={styles.divider} />
                                        <Image
                                            style={{width: 320, height: 210,marginVertical:5}}
                                            source={require('../../../../assets/images/movextstore.png')}
                                        />
                                        <Divider style={styles.divider} />
                                        <Image
                                            style={{width: 320, height: 210,marginVertical:5}}
                                            source={require('../../../../assets/images/movextstore.png')}
                                        />
                                    </View>
                                </CollapseBody>
                            </Collapse>
                        </View>
                    </ScrollView>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff'
    },
    icon:{marginLeft:30},
});
