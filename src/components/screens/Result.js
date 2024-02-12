import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
} from 'react-native';
import {Card} from 'react-native-paper';
export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    image: require('../../../assets/images/PicZip.png'),
                },
                {
                    id: 2,
                    image: require('../../../assets/images/PicZip.png'),
                },
                {
                    id: 3,
                    image: require('../../../assets/images/PicZip.png'),
                },
                {
                    id: 4,
                    image: require('../../../assets/images/PicZip.png'),
                },
                {
                    id: 5,
                    image: require('../../../assets/images/PicZip.png'),
                },
                {
                    id: 6,
                    image: require('../../../assets/images/PicZip.png'),
                },
                {
                    id: 7,
                    image: require('../../../assets/images/PicZip.png'),
                },
                {
                    id: 8,
                    image: require('../../../assets/images/PicZip.png'),
                },
                {
                    id: 9,
                    image: require('../../../assets/images/PicZip.png'),
                },
                {
                    id: 10,
                    image: require('../../../assets/images/PicZip.png'),
                },
                {
                    id: 11,
                    image: require('../../../assets/images/PicZip.png'),
                },
                {
                    id: 12,
                    image: require('../../../assets/images/PicZip.png'),
                },
                {
                    id: 13,
                    image: require('../../../assets/images/PicZip.png'),
                },
                {
                    id: 14,
                    image: require('../../../assets/images/PicZip.png'),
                },
                {
                    id: 15,
                    image: require('../../../assets/images/PicZip.png'),
                },
                {
                    id: 16,
                    image: require('../../../assets/images/PicZip.png'),
                },
                {
                    id: 17,
                    image: require('../../../assets/images/PicZip.png'),
                },
                {
                    id: 18,
                    image: require('../../../assets/images/PicZip.png'),
                },
            ],
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={this.state.data}
                    horizontal={false}
                    numColumns={3}
                    keyExtractor={item => {
                        return item.id;
                    }}
                    renderItem={({item}) => {
                        return (
                            <Image style={styles.Image} source={item.image} />

                        );
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor: '#fff',
        marginHorizontal: 10

    },
    listContainer: {
        alignItems: 'center',
        backgroundColor: "#fff",

    },
    Image: {
        height: 120,
        width: 120,
        alignSelf: 'center',
        borderWidth: 3,
        marginHorizontal: 5,
        marginVertical: 5,
        backgroundColor: "#fff"

    },

});
