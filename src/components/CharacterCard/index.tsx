import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { CharacterInterface } from '../../interfaces/interfaces';
//import { Icon } from 'react-native-elements';
interface Props {
    character: CharacterInterface
}

const Component = (props: Props) => {
    const { character } = props;
    const { name, img, nickname, status } = character;

    return (
        <TouchableHighlight style={styles.Container}>
            <View style={styles.ImageContainer}>
                <Image
                    style={styles.Image}
                    source={{ uri: img }}
                ></Image>
                <View style={styles.DataContainer}>
                    <Text style={styles.Name}>{name}</Text>
                    <Text style={styles.NickName}>{nickname}</Text>
                </View>
                <View style={styles.Status}>
                <Text>{status}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'pink',
        borderColor: 'gray',
        borderBottomWidth: 0.2,
        height: 100,
        width: '100%',
        flexDirection: 'row',
        display: 'flex',
        padding: 20,

    },
    ImageContainer: {
        alignContent: 'center',
        display: 'flex',
        flex: 0.2,
        height: '100%',
        justifyContent: 'center',
    },
    Image: {
        height: '100%',
        width: '80%',
        borderRadius: 100,
        marginTop: 5,
    },
    DataContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 0.7,
        padding: 1,
        marginTop: -60,
        width: 200,
        marginLeft: 70,
    },
    Name: {
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 2,

    },
    NickName: {
        color: 'gray'
    },
    Status: {
        borderWidth: 2,
        width: 130,
        marginLeft: 200,
        alignItems: 'center',
        height: 20,
        borderBottomColor: 'white',
        borderColor: 'pink'
    }
});

export default Component;