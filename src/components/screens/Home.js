import React, {Component} from 'react';
import {
    StyleSheet,
    View,Modal,
    Image, ScrollView,TouchableOpacity, StatusBar, Text,Dimensions
} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {FlatGrid} from 'react-native-super-grid';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Dialog} from 'react-native-simple-dialogs';
import { Divider } from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope, faShareAlt} from '@fortawesome/free-solid-svg-icons';
import {faSms} from '@fortawesome/free-solid-svg-icons/faSms';
import {faFaucet} from '@fortawesome/free-solid-svg-icons/faFaucet';
const {width, height} = Dimensions.get('window');

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    image:require('../../../assets/images/PicZip.png'),

                }
                ,
                {
                    id: 2,
                    image:require('../../../assets/images/MovZip.png'),
                }
                ,
                {
                    id: 3,
                    image:require('../../../assets/images/DocZip.png'),
                }
                ],
            dialogVisibleMovzip: false,
            dialogVisibleDoczip: false,
            modalVisibleDoczip: false,
            modalVisibleMovzip:false

        };
    }
    cardNavigate = (item) => {
        switch (item.id) {
            case 1:
                this.props.navigation.navigate('PicZip');
                break;
            case 2:
                this.clickEventListenerMovzip();
                break;
            case 3:
                this.clickEventListenerDoczip();
                break;
            default:
                this.showMessage(`Not FOUND`);
        }
    };
    clickEventListenerDoczip = () => {
        this.setModalVisibleDoczip(true);
    }
    setModalVisibleDoczip(visible) {
        this.setState({modalVisibleDoczip: visible});
    }

    clickEventListenerMovzip = () => {
        this.setModalVisibleMovzip(true);
    }
    setModalVisibleMovzip(visible) {
        this.setState({modalVisibleMovzip: visible});
    }

    toggleDrawer = () => {
        this.props.navigation.openDrawer();
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#0078db'}
                           barStyle="light-content"/>
                <View style={{flex:1,flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                    <View style={{flexDirection: 'row'}}>
                        {/*<Icon*/}
                        {/*    name='search'*/}
                        {/*    color='#000'*/}
                        {/*    size={25} style={{marginLeft: '25%'}}/>*/}
                        {/*<Image*/}
                        {/*    style={{width: 150, height: 30,marginLeft: '10%'}}*/}
                        {/*    source={require('../../../assets/images/ZipZip.png')}*/}
                        {/*/>*/}
                    </View>
                    <View style={{marginRight: '7%'}}>
                        <Icon onPress={this.props.navigation.openDrawer}
                              name='bars'
                              color='#000'
                              size={28}/>
                    </View>
                </View>

                <FlatGrid
                   // itemDimension={250}
                    staticDimension={160}
                    items={this.state.data}
                    contentContainerStyle={{marginHorizontal:120,justifyContent: 'center', alignItems: 'center',alignSelf:"center"}}
                    renderItem={({item, index}) => (
                        <TouchableOpacity activeOpacity={0.9}
                                          onPress={() => this.cardNavigate(item)}>
                            <View>
                                <Card style={{
                                    width: 150, height: 150,
                                    shadowColor: '#000',
                                    marginVertical:10,
                                    borderRadius:5,
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                        marginRight: 16,
                                        marginBottom: 12,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 12,
                                }}><Card.Cover style={styles.image} source={item.image}/>
                                </Card>
                            </View>
                        </TouchableOpacity>
                    )}/>

                {/*<View style={{flex:15}}>*/}
                {/*    <TouchableOpacity style={styles.touchable} activeOpacity={0.92}*/}
                {/*                      onPress={() => this.props.navigation.navigate('PicZip')}>*/}
                {/*        <Image*/}
                {/*            style={styles.image}*/}
                {/*            source={require('../../../assets/images/PicZip.png')}*/}
                {/*        />*/}
                {/*    </TouchableOpacity>*/}
                {/*    <TouchableOpacity style={styles.touchable} activeOpacity={0.92}*/}
                {/*                      onPress={() => this.clickdialogVisibleMovzip()}>*/}
                {/*        <Image*/}
                {/*            style={[styles.image,{opacity:0.5}]}*/}
                {/*            source={require('../../../assets/images/MovZip.png')}*/}
                {/*        />*/}
                {/*    </TouchableOpacity>*/}
                {/*    <TouchableOpacity style={styles.touchable} activeOpacity={0.92}*/}
                {/*                      onPress={() => this.clickdialogVisibleDoczip()}>*/}
                {/*        <Image*/}
                {/*            style={[styles.image,{opacity:0.5}]}*/}
                {/*            source={require('../../../assets/images/DocZip.png')}*/}
                {/*        />*/}
                {/*    </TouchableOpacity>*/}
                {/*</View>*/}

                <View style={{flex:1,flexDirection:"row",justifyContent:'space-between',marginHorizontal:100}}>
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

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisibleMovzip}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                    <Image
                                        style={{width: 75, height: 75, marginTop: 20,alignSelf: 'center'}}
                                        source={require('../../../assets/images/300mfree.png')}
                                    />
                                    <Text style={styles.textDialog}>
                                        INTELLIGENT VIDEO COMPRESSION</Text>
                                    <View style={styles.view}>
                                        <Text style={[styles.textDialog, {fontFamily: 'HelveticaNeueLTStd-Md',fontSize: 18}]}>
                                            This ability will be added in the next version</Text>
                                        <Text style={[styles.textDialog, {
                                            fontSize: 22,
                                            fontFamily: 'futura-pt-bold-589e44b6aacd3',
                                            letterSpacing: 2,
                                        }]}>
                                            Coming Soon...</Text>
                                    </View>
                                    <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92} onPress={() => { this.setModalVisibleMovzip(false) }}>
                                        <Text style={styles.textButton}>
                                            OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                    </Modal>


                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisibleDoczip}
                        //onRequestClose={() => this.setModalVisible(false)}
                    >
                        <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                            <Image
                                style={{width: 75, height: 75, marginTop: 20,alignSelf: 'center'}}
                                source={require('../../../assets/images/200mfree.png')}
                            />
                        <Text style={styles.textDialog}>
                            INTELLIGENT DOCUMENT COMPRESSION</Text>
                        <View style={styles.view}>
                            <Text style={[styles.textDialog, {fontFamily: 'HelveticaNeueLTStd-Md',fontSize: 18}]}>
                                This ability will be added in the next version</Text>
                            <Text style={[styles.textDialog, {
                                fontSize: 22,
                                fontFamily: 'futura-pt-bold-589e44b6aacd3',
                                letterSpacing: 2,
                            }]}>
                                Coming Soon...</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92} onPress={() => { this.setModalVisibleDoczip(false) }}>
                            <Text style={styles.textButton}>
                                OK</Text>
                        </TouchableOpacity>
                    </View>
                        </View>
                </Modal>

            </View>
    );
    }
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 30,
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal:15,
        alignItems: "center",
        borderRightWidth: 8,
            borderBottomWidth: 6,
            borderLeftWidth: 2,
            borderTopWidth: 2,
            borderColor: '#000',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius:5,
        alignSelf:"center",

    },
    touchable: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 35,
    },
    view:{
        marginTop: 5,
        borderTopWidth: 3,
        borderTopColor: '#000',
        alignSelf: 'center'
    },
    textDialog: {
        color: '#000',
        fontSize: 13.5,
        marginTop: 10,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        textAlign:"center"
    },
    buttonStyle: {
        backgroundColor: '#000',
        height: 45,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 15,
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
