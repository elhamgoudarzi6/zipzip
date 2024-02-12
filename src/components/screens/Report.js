import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar, Dimensions, TouchableOpacity, FlatList,
} from 'react-native';
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ProgressBar} from 'react-native-multicolor-progress-bar';
import {ScrollView} from 'react-native-gesture-handler';
import {FlatGrid} from 'react-native-super-grid';
import {Card,Title,Paragraph} from 'react-native-paper';
const {width, height} = Dimensions.get('window');
export default class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    totalPhotos:'47.8',
                    zipzipedPhotos:'25',

                }
                ,
                {
                    id: 2,
                    totalPhotos:'47.8',
                    zipzipedPhotos:'25',
                }
                ,
                {
                    id: 3,
                    image:require('../../../assets/images/DocZip.png'),
                }
            ],
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
                    <View style={{alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:3}}>
                        {/*<FontAwesomeIcon icon={faHdd} size={65} style={{color: '#000'}}/>*/}
                        <Icon
                            name='hdd-o'
                            color='#000'
                            size={75} />
                    </View>
                    <Text style={{
                        color: '#000',
                        fontSize: 22,
                        fontFamily: 'FuturaStd-Bold',
                        alignSelf: 'center',
                        marginBottom: 5,
                    }}>
                        Report</Text>
                    <View style={{width:'80%',borderRadius:5,height:190,marginHorizontal:30,alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:10,backgroundColor:"#000",shadowOffset: {
                        width: 0,
                        height: 2,
                        marginRight: 16,
                        marginBottom: 12,
                    },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 12}}>
                        <Image
                            style={{width: 60, height: 45,marginRight:'50%',marginTop:-10,marginBottom:10}}
                            source={require('../../../assets/images/iconstorage.png')}
                        />
                        <View style={{flexDirection:"row",marginLeft:20}}>
                            <View style={{flex:5}}>
                                <Text style={styles.text}>
                                    265 GB </Text>
                            </View>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.text}>
                                    Storage </Text>
                            </View>
                        </View>
                        <ProgressBar textStyle={{fontFamily: 'HelveticaNeueLTStd-Md',color:'#fff',fontSize:12,alignSelf:'center',textAlign: 'center',marginTop :-18}}
                                     parentViewStyle={{alignItems:'stretch'}}
                                     onStartProgressStyle={{borderTopLeftRadius:0,borderBottomLeftRadius:0}}
                                     backgroundBarStyle={{alignItems:'stretch',height:20,marginHorizontal:15,marginTop: 40,borderRadius: 0,backgroundColor: '#fff'}}
                                     arrayOfProgressObjects={[
                                {
                                    color: '#676767',
                                    value: 0.4,
                                    opacity: 1,
                                    nameToDisplay: "40%"
                                },
                                {
                                    color: '#989898',
                                    value: 0.25,
                                    opacity: 1,
                                    nameToDisplay: "25%"
                                },
                                {
                                    color: '#cbcbcb',
                                    value: 0.15,
                                    opacity: 1,
                                    nameToDisplay: "15%"
                                },
                                {
                                    color: '#fff',
                                    value: 0.20,
                                    opacity: 1,
                                    nameToDisplay: "20% Free"
                                },
                            ]}
                        />
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between',marginLeft:'15%',marginBottom:10,marginTop:-5}}>
                        <View style={{flexDirection:"row",flex:3}}>
                            <Icon name='stop' color='#000' size={15} style={{marginTop:20,color:"#676767"}}/>
                            <Text style={{marginLeft:5,marginTop:20,fontFamily: 'HelveticaNeueLTStd-Md',fontSize:12,color:"#777"}}>Photos</Text>
                        </View>
                        <View style={{flexDirection:"row",flex:3}}>
                            <Icon name='stop' color='#000' size={15} style={{marginTop:20,color:"#cbcbcb"}}/>
                            <Text style={{marginLeft:5,marginTop:20,fontFamily: 'HelveticaNeueLTStd-Md',fontSize:12,color:"#777"}}>Videos</Text>
                        </View>
                        <View style={{flexDirection:"row",flex:3}}>
                            <Icon name='stop' color='#000' size={15} style={{marginTop:20,color:"#cbcbcb"}}/>
                            <Text style={{marginLeft:5,marginTop:20,fontFamily: 'HelveticaNeueLTStd-Md',fontSize:12,color:"#777"}}>Docs</Text>
                        </View>
                    </View>
                    <FlatGrid
                        //itemDimension={200}
                        staticDimension={200}
                        items={this.state.data}
                        fixed={true}
                        itemContainerStyle={{justifyContent: 'center', alignItems: 'center',marginTop:30,}}
                      //  spacing={10}
                        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                        renderItem={({item, index}) => (
                                <View>

                                    <Card style={{
                        width: 320, height: 110, borderRadius:5,
                        shadowColor: '#000',
                        shadowOffset: {
                        width: 0,
                        height: 2,
                        marginRight: 16,
                        marginBottom: 12,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 12,
                        }}>
                                        <Card.Content style={{flex:1}}>
                                            <View style={{flexDirection:"row",flex:1,justifyContent: 'center', alignItems: 'center'}}>
                                            <Title style={[styles.textTable,{color:'#000',fontSize:14,flex:1}]}>TOTAL PHOTOS</Title>
                                                <Title style={[styles.textTable,{color:'#fff',fontSize:14,flex:1,backgroundColor:"#000",borderRadius: 5}]}>47.8 GB</Title>
                                            </View>
                                            <Divider style={styles.divider} />

                                            <View style={{flexDirection:"row",flex:1,justifyContent: 'center', alignItems: 'center',marginTop:10}}>
                                            <Title style={[styles.textTable,{color:'#000',fontSize:14,flex:1}]}>ZIPZIPED PHOTOS</Title>
                                            <Title style={[styles.textTable,{color:'#fff',fontSize:14,flex:1,backgroundColor:"#000",borderRadius: 5,marginTop: 5}]}>25 GB</Title>
                                            </View>
                                        </Card.Content>
                                    </Card>
                                </View>
                        )}/>
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
    text: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'HelveticaNeueLTStd-Md',
        marginHorizontal:20
    },
    reportContainer:{marginTop:30,justifyContent:"center",alignItems:"center",marginBottom:5,},
    textTable:{color:"#fff",fontSize: 18,fontFamily: 'FuturaStd-Bold',textAlign:"center",padding:5},
    result:{flex:2,flexDirection:"row",borderBottomWidth:3,borderBottomColor:"#000",marginHorizontal:60},
    photo:{flex:1,paddingHorizontal:2},
    volume:{borderRadius:3,flex:1,backgroundColor:"#000",paddingHorizontal:2,borderBottomWidth:2,borderBottomColor:"#fff"},
    divider:{height:1,width:'100%',marginTop: 10
        //backgroundColor:"#000"
    },

});
