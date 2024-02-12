import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Dimensions, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {FlatGrid} from 'react-native-super-grid';
import {Card, Divider, Title} from 'react-native-paper';
const {width, height} = Dimensions.get('window');
export default class DocZip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    totalPhotos:'47.8',
                    zipzipedPhotos:'25',

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
                <ScrollView>
                    {/*<View style={styles.circle}>*/}
                    {/*    <Icon name='check' style={styles.icon} />*/}
                    {/*</View>*/}
                    <Image
                        style={{width:120, height:85,alignSelf:"center",marginTop:50,marginBottom:20}}
                        source={require('../../../assets/images/checkzipzip.png')}
                    />
                    <Text style={styles.text}>SELECTED PHOTOS GOT ZIPZIPED.</Text>

                    <Text style={[styles.text,{fontFamily:'HelveticaNeueLTStd-Md'}]}>Find your photos in:</Text>
                    <Text style={[styles.text,{fontFamily:'HelveticaNeueLTStd-Md'}]}>Photos/MyAlbums/zipzip-Piczip</Text>
                    <FlatGrid
                        //itemDimension={200}
                        staticDimension={200}
                        items={this.state.data}
                        fixed={true}
                        itemContainerStyle={{justifyContent: 'center', alignItems: 'center',marginTop:40,}}
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

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92} onPress={() => this.props.navigation.navigate('DashboardUser')}>
                                <Text style={styles.textButton}>
                                    Back to Home </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92} onPress={() => this.props.navigation.navigate('BuyPicZip')}>
                            <Text style={styles.textButton}>
                                BUY</Text>
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
        backgroundColor: '#fff'
    },
    circle:{backgroundColor:'#fff',height:80,width:80,alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:70,borderRadius:70,marginBottom: 10,borderWidth:10,borderColor:"#000"},
    icon:{justifyContent:"center",alignItems:"center",fontSize: 40, color: '#000',padding:10,alignSelf:"center" },
    text:{
        color: '#000',
        fontSize: width>400?18:16,
        marginTop:10,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
    },
    textTable:{color:"#fff",fontSize: 18,fontFamily: 'FuturaStd-Bold',textAlign:"center",padding:5},
    result:{flex:2,flexDirection:"row",borderBottomWidth:3,borderBottomColor:"#000",marginHorizontal:60},
    photo:{flex:1,paddingHorizontal:2},
    volume:{flex:1,backgroundColor:"#000",paddingHorizontal:2,borderBottomWidth:2,borderBottomColor:"#fff"},
    buttonContainer:{
        flex:5,
        marginTop: 70,
        width:'90%',
        alignSelf:'center'
    },
    buttonStyle: {
        backgroundColor: '#000',
        height: 60,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius:5
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
});
