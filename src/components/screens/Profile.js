import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput, Dimensions,

} from 'react-native';
import {Card, Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
    faEnvelope,
    faGlassMartini,
    faHdd,
    faIcicles,
    faMailBulk,
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
const {width, height} = Dimensions.get('window');

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:'',
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Card style={styles.card}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                            <View style={{flexDirection:'row',marginLeft:10}}>
                                <Icon onPress={()=>{this.props.navigation.goBack()}}
                                    name='arrow-left'
                                    color='#fff'
                                    size={22}  style={{marginLeft:10}}/>
                            </View>
                        </View>
                        <View style={{
                            backgroundColor:'#fff',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginTop: 35,
                            borderRadius:60
                        }}>
                            <Image
                                style={{width: 100, height: 100, alignSelf: 'center', justifyContent: 'center'}}
                                source={require('../../../assets/images/u1.png')}
                            />
                        </View>
                        <Text style={{
                            alignSelf: 'center',
                            marginTop: 10,
                            fontSize: 18,
                            color: '#fff',
                            fontFamily: 'futura-pt-bold-589e44b6aacd3',
                        }}>
                            M.farhadi@gmail.com
                        </Text>
                    </Card>
                    <Collapse>
                        <CollapseHeader style={styles.header}>
                        <View style={{flexDirection:"row"}}>
                            <Icon
                                name='bar-chart-o'
                                color='#000'
                                size={25} style={{marginHorizontal:5,marginBottom: 5,marginTop:-5}}/>
                            <Text style={{fontFamily:'HelveticaNeueLTStd-Md',fontSize:16}}>Quick Storage Report</Text>
                            <Icon
                                name='angle-right'
                                color='#000'
                                size={25} style={styles.icon}/>
                        </View>
                            <Divider style={styles.divider} />
                        </CollapseHeader>
                    <CollapseBody>
                        <View style={{marginTop:30,justifyContent:"center",alignItems:"center",flex:1}}>
                            <View style={{flex:2,flexDirection:"row",marginHorizontal:40}}>
                                <View style={{flex:2}}><Text style={{fontSize: 18,fontFamily: 'FuturaStd-Bold'}}>TOTAL PHOTOS</Text></View>
                                <View style={{flex:1}}><Text style={{color:"#000",fontSize: 22,fontFamily: 'FuturaStd-Bold'}}>47.3 GB</Text></View>
                            </View>
                            <View style={{flex:2,flexDirection:"row",marginHorizontal:40}}>
                                <View style={{flex:2,}}><Text style={{fontSize: 18,fontFamily: 'FuturaStd-Bold'}}>ZIPZIPED PHOTOS</Text></View>
                                <View style={{flex:1,}}><Text style={{color:"#000",fontSize: 22,fontFamily: 'FuturaStd-Bold',}}>25 GB</Text></View>
                            </View>
                        </View>
                    </CollapseBody>
                </Collapse>
                    <Collapse>
                        <CollapseHeader style={styles.header}>
                            <View style={{flexDirection:"row"}}>
                                <Icon
                                    name='user-circle'
                                    color='#000'
                                    size={25} style={{marginHorizontal:5,marginBottom: 5,marginTop:-5}}/>
                                <Text style={{fontFamily:'HelveticaNeueLTStd-Md',fontSize:16}}>Change Profile Picture</Text>
                                <Icon
                                    name='angle-right'
                                    color='#000'
                                    size={25} style={styles.icon}/>
                            </View>
                            <Divider style={styles.divider} />
                        </CollapseHeader>
                        <CollapseBody>
                            <View style={{backgroundColor:"#fff",marginTop:10,alignSelf:"center",borderRadius:60,borderWidth:3,borderColor:"#000",width:100,height:100}}>
                                <Image
                                    style={{width: 95, height: 95, alignSelf: 'center', justifyContent: 'center'}}
                                    source={require('../../../assets/images/u1.png')}
                                />
                            </View>
                            <View style={{justifyContent:"center",alignItems:"center",marginLeft:'58%',marginTop:-65,backgroundColor:"#000",width:32,height:32,borderRadius:60,marginBottom:30}}>
                            <Icon
                                name='plus'
                                color='#fff'
                                size={20} />
                           </View>
                        </CollapseBody>
                    </Collapse>
                    <Collapse>
                        <CollapseHeader style={styles.header}>
                            <View style={{flexDirection:"row"}}>

                                <FontAwesomeIcon color={'#000'} icon={faEnvelope} size={22} style={{marginHorizontal:5,marginBottom: 5,marginTop:-5}}/>
                                <Text style={{fontFamily:'HelveticaNeueLTStd-Md',fontSize:16}}>Change Email Address</Text>
                                <Icon
                                    name='angle-right'
                                    color='#000'
                                    size={25} style={styles.icon}/>
                            </View>
                            <Divider style={styles.divider} />
                        </CollapseHeader>
                        <CollapseBody>

                            <View style={{backgroundColor:'#fff',height:50,width:'80%',alignSelf:'center',borderRadius:5,marginTop:20,borderWidth:1,borderColor:"#000"}}>
                                <TextInput
                                    style={{textAlign:"center",fontFamily: 'FuturaStd-Bold'}}
                                    placeholder="Please Enter New Email"
                                    underlineColorAndroid="transparent"
                                    keyboardType="email-address"

                                />
                            </View>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textButton}>
                                    Change </Text>
                            </View>
                        </CollapseBody>
                    </Collapse>
                    <Collapse>
                        <CollapseHeader style={styles.header}>
                            <View style={{flexDirection:"row"}}>
                                <Icon
                                    name='mobile'
                                    color='#000'
                                    size={28} style={{marginHorizontal:5,marginBottom: 3,marginTop:-5}}/>
                                <Text style={{fontFamily:'HelveticaNeueLTStd-Md',fontSize:16}}>Change Mobile Number</Text>
                                <Icon
                                    name='angle-right'
                                    color='#000'
                                    size={25} style={styles.icon}/>
                            </View>
                            <Divider style={styles.divider} />
                        </CollapseHeader>
                        <CollapseBody>
                            <View style={{backgroundColor:'#fff',height:50,width:'80%',alignSelf:'center',borderRadius:5,marginTop:20,borderWidth:1,borderColor:"#000"}}>
                                <TextInput
                                    style={{textAlign:"center",alignItems:'flex-start',justifyContent:'flex-end',fontFamily: 'FuturaStd-Bold'}}
                                    placeholder="Please Enter New Number"
                                    underlineColorAndroid="transparent"
                                    keyboardType="numeric"
                                    maxLength={11}
                                />
                            </View>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textButton}>
                                    Change </Text>
                            </View>
                        </CollapseBody>
                    </Collapse>
                    <Collapse>
                        <CollapseHeader style={styles.header}>
                            <View style={{flexDirection:"row"}}>
                                <Icon
                                    name='birthday-cake'
                                    color='#000'
                                    size={25} style={{marginHorizontal:5,marginBottom: 5,marginTop:-5}}/>
                                <Text style={{fontFamily:'HelveticaNeueLTStd-Md',fontSize:16}}>Add Birthdate</Text>
                                <Icon
                                    name='angle-right'
                                    color='#000'
                                    size={25} style={{justifyContent:"center",marginLeft:width-200,paddingVertical:5,marginTop:-10}}/>
                            </View>
                            <Divider style={styles.divider} />
                        </CollapseHeader>
                        <CollapseBody>
                            <View style={{flexDirection:"row",justifyContent:'space-between',marginTop:15,marginHorizontal:15}}>
                            <View style={{backgroundColor:'#fff',height:50,width:'30%',alignSelf:'center',marginTop:10,borderWidth:1,borderColor:"#000",borderRadius:5}}>
                                <TextInput
                                    style={{alignItems:'flex-start',justifyContent:'flex-end',fontFamily: 'FuturaStd-Bold',textAlign:"center"}}
                                    placeholder="Month"
                                    underlineColorAndroid="transparent"
                                    keyboardType="numeric"
                                    maxLength={2}
                                /></View>
                                <View style={{backgroundColor:'#fff',height:50,width:'30%',alignSelf:'center',marginTop:10,borderWidth:1,borderColor:"#000",borderRadius:5}}>
                                    <TextInput
                                        style={{alignItems:'flex-start',justifyContent:'flex-end',fontFamily: 'FuturaStd-Bold',textAlign:"center"}}
                                        placeholder="Day"
                                        underlineColorAndroid="transparent"
                                        keyboardType="numeric"
                                        maxLength={2}
                                    /></View>
                                    <View style={{backgroundColor:'#fff',height:50,width:'30%',alignSelf:'center',marginTop:10,borderWidth:1,borderColor:"#000",borderRadius:5}}>
                                        <TextInput
                                            style={{alignItems:'flex-start',justifyContent:'flex-end',fontFamily: 'FuturaStd-Bold',textAlign:"center"}}
                                            placeholder="Year"
                                            underlineColorAndroid="transparent"
                                            keyboardType="numeric"
                                            maxLength={4}
                                        />
                            </View>
                            </View>
                        </CollapseBody>
                    </Collapse>

                    <AccordionList
                        list={this.state.list}
                        header={this._head}
                        body={this._body}
                        keyExtractor={item => item.key}
                    />
                    <View style={{flex:1,marginTop:150,  justifyContent: 'center',
                        alignItems: 'center',}}>
                        <Icon
                            name='minus'
                            color='#000'
                            size={35} />
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
    card: {
        width: '105%',
        height: 250,
        backgroundColor: '#000',
        marginBottom: 50,
    },
    buttonStyle: {
        backgroundColor: '#000',
        height: 50,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:10,
        marginLeft:40,
        borderRadius:5
    },
    textButton: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    divider:{height:2.5,width:'100%',marginVertical: 5,backgroundColor:"#000"},
    icon:{alignSelf:"center",marginLeft:width-260,marginTop: -10},
    header:{marginHorizontal:15,marginTop:15},
});
