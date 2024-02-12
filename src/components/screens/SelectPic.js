import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar, Modal,Dimensions
} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import {ProgressBar} from 'react-native-multicolor-progress-bar';
import ImagePicker from "react-native-customized-image-picker";
export default class SelectPic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notEnoughStorage:false,
            greaterThan100mb:false,
            sizeSelectedImage:false,
            images:[],
            totalSize:0,
            count:0,
            unit:'',

            progress: 30,
            progressWithOnComplete: 0,
            progressCustomized: 0,
        };
    }

    increase = (key, value) => {
        this.setState({
            [key]: this.state[key] + value,
        });
    }

    customeSelectPic(){
        ImagePicker.openPicker({
            title:'Select Photos to zipzip',
            multiple: true,
            cropping: true,
            maxSize:100,
            imageLoader:'PICASSO',
            storageOptions: {
                skipBackup: true,
                path: 'zipzip',
            },
        }).then(images => {

            let totalSize=0;
            for (let i=0;i<images.length;i++){
                console.log('images'+i+'=',images[i].size);
                totalSize+=images[i].size
            }
            if (totalSize<=1024) {
                this.setState({totalSize:  (totalSize).toFixed(2),unit:'B'});
                this.clickEventListenersizeselectedImage();

            } else if(totalSize<=1024*1024){
                this.setState({
                    totalSize:  (totalSize/(1024)).toFixed(2),unit:'KB'});
                this.clickEventListenersizeselectedImage();

            }
            else if(totalSize<=1024*1024*1024){
                if((totalSize>=(100*1024*1024))){
                    this.setState({totalSize:  (totalSize/(1024*1024)).toFixed(2),unit:'MB'});
                   // this.clickEventListenergreaterThan100mb();
                }
                else
                this.setState({totalSize:  (totalSize/(1024*1024)).toFixed(2),unit:'MB'});
                this.clickEventListenersizeselectedImage();
            }
            ///set state
            this.setState({count:images.length})
            this.setState({
                image: null,
                images: images.map(i => {
                  //  console.log('received image', i);
                   return {uri: i.path, mime: i.mime};
                    this.setState({uri:i.path,mime: i.mime,size:i.size});
                })
            });
        }).catch(e => alert(e));
    }

    clickEventListenersizeselectedImage = () => {
        this.setModalVisiblesizeSelectedImage(true);
    }
    setModalVisiblesizeSelectedImage(visible) {
        this.setState({sizeSelectedImage: visible});
    }
    clickEventListenernotEnoughStorage = () => {
        this.setModalVisiblenotEnoughStorage(true);
    }
    setModalVisiblenotEnoughStorage(visible) {
        this.setState({notEnoughStorage: visible});
    }
    clickEventListenergreaterThan100mb = () => {
        this.setModalVisiblegreaterThan100mb(true);
    }
    setModalVisiblegreaterThan100mb(visible) {
        this.setState({greaterThan100mb: visible});
    }

    render() {
        const barWidth = Dimensions.get('screen').width - 100;
        const progressCustomStyles = {
            backgroundColor: 'red',
            borderRadius: 0,
            borderColor: 'orange',
        };
     //   const  image = this.state;
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#000'}
                           barStyle="light-content" />
                <ScrollView>
                    <View style={{ marginTop:70, flex: 20,
                        justifyContent: "center",
                        alignItems: "center",}}>

                    <TouchableOpacity activeOpacity={0.92} onPress={() => this.customeSelectPic()}>
                        <View style={{justifyContent:"center",alignItems:"center",alignSelf:"center",borderRadius:5,backgroundColor:"#000",marginHorizontal:110,marginVertical:20,width:'50%',height:100,shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5}}>
                            <Text style={{color:"#fff",fontFamily: 'FuturaStd-Bold',fontSize:25,alignSelf:"center",padding:35}}>Gallery</Text>
                        </View>
                    </TouchableOpacity>
                        <Text style={{color:"#000",fontFamily: 'HelveticaNeueLTStd-Md',fontSize:18,alignSelf:"center",marginTop:20}}>Select photos from the gallery to zipzip</Text>
                        <Image
                            style={{width: 120, height: 120,marginTop:10}}
                            source={require('../../../assets/images/select.png')}
                        />
                        <Image
                        style={{width:310, height:100,marginBottom:5,alignSelf:"center",marginTop:20}}
                        source={require('../../../assets/images/movimg.png')}
                    />
                    </View>
                    {/*<View style={{alignItems:'center',justifyContent:"center",marginTop:20}}>*/}
                    {/*<ProgressBarAnimated backgroundColor={'#000'} height={20}*/}
                    {/*    borderRadius={5}*/}
                    {/*    width={barWidth}*/}
                    {/*    value={this.state.progress}*/}
                    {/*    backgroundColorOnComplete="#000"*/}
                    {/*/>*/}
                    {/*</View>*/}
                    <View style={styles.buttonContainer}>
                    {/*<TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92} onPress={() => this.clickEventListenernotEnoughStorage()}>*/}
                        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92} onPress={() => this.props.navigation.navigate('ZipSuccess')}>

                        <Image style={{width: '55%', height: 35}}
                                    source={require('../../../assets/images/ZipZipWhite.png')}
                                />
                    </TouchableOpacity>
                    </View>
                    <View>
                    </View>
                </ScrollView>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.sizeSelectedImage}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Image
                                style={{width:250, height:80,marginBottom:5,alignSelf:"center",marginTop:20}}
                                source={require('../../../assets/images/movimg.png')}
                            />
                            {/*<Divider style={styles.divider} />*/}
                            {/*<ProgressBar textStyle={{fontFamily: 'FuturaStd-Bold',color:'#000',fontSize:14,alignSelf:'center',textAlign: 'center',marginTop :-25}}*/}
                            {/*             parentViewStyle={{alignItems:'stretch'}}*/}
                            {/*             onStartProgressStyle={{borderTopLeftRadius:0,borderBottomLeftRadius:0}}*/}
                            {/*             backgroundBarStyle={{alignItems:'stretch',height:30,marginHorizontal:15,marginTop: 40,borderRadius: 0,borderWidth:2,borderColor:"#000",backgroundColor: '#fff'}}*/}
                            {/*             arrayOfProgressObjects={[*/}
                            {/*                 {*/}
                            {/*                     color: '#000',*/}
                            {/*                     value:(this.state.totalSize)/100,*/}
                            {/*                     opacity: 1,*/}
                            {/*                     nameToDisplay: this.state.totalSize+" "+this.state.unit*/}
                            {/*                 },*/}
                            {/*                 {*/}
                            {/*                     color: '#fff',*/}
                            {/*                     value:1-this.state.totalSize/100,*/}
                            {/*                     opacity: 1,*/}
                            {/*                     nameToDisplay: "100MB"*/}
                            {/*                 },*/}
                            {/*             ]}*/}
                            {/*/>*/}
                            <Text style={[styles.textButton,{color: '#000',marginTop:10}]}>{this.state.totalSize} {this.state.unit}</Text>

                            <View style={{alignItems:'center',justifyContent:"center",marginTop:10}}>
                                <ProgressBarAnimated backgroundColor={'#000'} height={20}
                                                     borderRadius={2}
                                                     maxValue={100}
                                                     borderWidth={1.5}
                                                     width={barWidth}
                                                     value={(this.state.totalSize)}
                                                     backgroundColorOnComplete="#000"
                                />
                            </View>
                            <TouchableOpacity style={styles.buttonStyledialog} activeOpacity={0.92} onPress={() => { this.setModalVisiblesizeSelectedImage(false) }}>
                                <Text style={styles.textButton}>
                                    OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>


                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.notEnoughStorage}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={{marginTop:10,color:"#d21404",fontFamily: 'FuturaStd-Bold',fontSize:20,alignSelf:"center"}}>NOT ENOUGH STORAGE</Text>
                            <Divider style={styles.divider} />
                            <Text style={{padding:5,fontFamily: 'HelveticaNeueLTStd-Md',fontSize:20,alignSelf:"center",textAlign:'center'}}>you should empty your storage for zipziped photos</Text>
                            <Divider style={styles.divider} />
                            <Text style={{paddingTop:10,fontFamily: 'FuturaStd-Bold',fontSize:18,alignSelf:"center"}}>ZIPZIP FOLDER SIZE: 25 MB</Text>
                            <TouchableOpacity style={styles.buttonStyledialog} activeOpacity={0.92} onPress={() => { this.setModalVisiblenotEnoughStorage(false) }}>
                                <Text style={styles.textButton}>
                                    Got it</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.greaterThan100mb}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Image
                                style={{width: 265, height: 85,marginBottom:5,alignSelf:"center",marginTop:10}}
                                source={require('../../../assets/images/movimg.png')}/>
                            <Text style={{marginTopTop:5,fontFamily: 'FuturaStd-Bold',fontSize:18,alignSelf:"center"}}>Overflow</Text>

                            <Text style={{marginTop:8,fontFamily: 'HelveticaNeueLTStd-Md',fontSize:16,alignSelf:"center",textAlign:'center'}}>selected photos over 100 MB</Text>
                            {/*<Divider style={styles.divider} />*/}

                            <ProgressBar textStyle={{fontFamily: 'HelveticaNeueLTStd-Md',color:'#d21404',fontSize:16,alignSelf:'center',textAlign: 'center',marginTop :-30}}
                                         parentViewStyle={{alignItems:'stretch'}}
                                         onStartProgressStyle={{borderTopLeftRadius:0,borderBottomLeftRadius:0}}
                                         backgroundBarStyle={{alignItems:'stretch',height:30,marginHorizontal:15,marginTop: 40,borderRadius: 0,borderWidth:2,borderColor:"#000",backgroundColor: '#fff'}}
                                         arrayOfProgressObjects={[
                                             {
                                                 color: '#d21404',
                                                 value:1,
                                                 opacity: 1,
                                                 nameToDisplay: this.state.totalSize+" "+this.state.unit
                                             },
                                         ]}/>
                            <TouchableOpacity style={styles.buttonStyledialog} activeOpacity={0.92} onPress={() => { this.setModalVisiblegreaterThan100mb(false) }}>
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
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 30,
        width:350,
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
    buttonContainer:{
        flex:1,
        marginTop: 60,
        width:'90%',
        alignSelf:'center',

    },
    buttonStyle: {
        backgroundColor: '#000',
        height: 60,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 30,
        borderRadius:5,

    },
    buttonStyledialog: {
        backgroundColor: '#000',
        height: 45,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius:5,

    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    dialog:{
        backgroundColor:'#fff',
        width:370,
        height:280,
        justifyContent:"center",
        alignItems:"center",
        borderRightWidth:8,
        borderBottomWidth:4,
        borderLeftWidth:2,
        borderTopWidth:2,
        borderColor:"#000",
    },
    divider:{height:1,width:300,marginTop: 10,backgroundColor:"#000"},
});
