import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react'
import { Text, View, TextInput, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { useForm } from '../../hooks/useForm';
import { LoginInterface } from '../../interfaces/interfaces';


interface Props extends NativeStackScreenProps<any, any> { }

const Component = (props: Props) => {
    const { navigation } = props;
    const { email, password, onChange } = useForm<LoginInterface>({
        email: '',
        password: '',
    });

    useEffect(() => {
        console.log(`Email -> ${email}`);
        console.log(`Passwrod -> ${password}`);
    }, [email, password]);

    let validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const doLogin = () => {
        if (email === '' || password === '') {
            Alert.alert('ERROR', 'Fill all data');
        } else {
            if (validation.test(email) === false) {
                Alert.alert('ERROR', 'Type a valid email');
            } else {
                navigation.navigate('CharacterScreen');
            }
        }
    };

    return (
        <View style={(styles.Container)}>
            <Image style={(styles.Image)} source={require('../../assets/images/login.png')} />
            <View style={(styles.InputsContainer)}>
                <TextInput style={(styles.InputEmail)}
                    placeholder="user@example.com" onChangeText={value => onChange('email', value)} keyboardType="email-address" numberOfLines={1} />
                <TextInput style={(styles.InputPassword)}
                    placeholder="Password" secureTextEntry={true} onChangeText={value => onChange('password', value)} numberOfLines={1}
                />
                    <View style={(styles.ButtonContainer)}>
                        <TouchableOpacity style={(styles.ButtonLogin)} onPress={doLogin}>
                            <Text style={(styles.ButtonText)}  > Log in</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        backgroundColor: 'white'
    },
    Image: {
        width: '100%',
        height: '50%',
        marginTop: 0,
    },
    InputsContainer: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'white',
        marginTop: -9,
    },
    InputEmail: {
        marginTop: 0,
        fontSize: 20,
        fontWeight: '400',
        letterSpacing: 3,
        fontStyle: 'italic',
        height: 70,
        color: '#050000',
        margin: 12,
        padding: 20,
        width: 280,
        borderWidth: 1,
        borderBottomColor: 'gray',
        borderColor: 'white',
    },
    InputPassword: {
        marginTop: 0,
        fontSize: 20,
        fontWeight: '400',
        letterSpacing: 3,
        fontStyle: 'italic',
        height: 60,
        color: '#050000',
        margin: 12,
        padding: 20,
        width: 280,
        borderWidth: 1,
        borderBottomColor: 'gray',
        borderColor: 'white',
    },
    ButtonContainer: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        padding: 60,
    },
    ButtonLogin: {
        backgroundColor: '#ba0a65',
        height: 50,
        width: 240,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ButtonText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
    },
});
export default Component;
