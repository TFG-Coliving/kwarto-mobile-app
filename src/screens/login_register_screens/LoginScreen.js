import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView, Keyboard} from 'react-native';
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import CustomButton from "../../components/buttons/CustomButton";
import useAuth from "../../redux/modules/auth/useAuth";
import Input from "../../components/fields/Input";
import {useSelector} from "react-redux";


const LoginScreen = ({navigation}) => {

    const [inputs,setInputs] = React.useState({
        email:'',
        password:'',
    });

    const { handleLogin } = useAuth();

    const [errors,setErrors] = React.useState({});

    let loginOK = useSelector(state => state.authentication.isLoggedIn);
    let error = useSelector(state => state.authentication.error);

    const handleError = (errorMessage, input) =>{
        setErrors((prevState) => ({...prevState,[input]: errorMessage}))
    }

    const handleOnChange = (text,input) => {
        setInputs((prevState) => ({...prevState,[input]: text}))
    }

    const validate = () => {
        Keyboard.dismiss();
        let valid = true;
        if(!inputs.email){
            handleError('Email is required','email');
            valid = false;
        } else if(!inputs.email.match(/\S+@\S+\.\S+/)){
            handleError('Please input valid email','email');
            valid = false;
        }
        if(!inputs.password) {
            handleError('Password is required', 'password');
            valid = false;
        }

        if (valid) {
            handleLogin({email:inputs.email,password:inputs.password, preventDefault: () => {} });
        }
        //34:00
    };


    useEffect(() => {
        if (loginOK && error===null) {
            navigation.navigate('Home');
        }

        console.log(error);
        if (error !== null) {
            handleError('Network error', 'email');
            handleError('Network error', 'password');
        }
    }, [loginOK, error]);

    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
            <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal: 25}}>

                <View style={{alignItems: 'center',marginBottom:-20,marginTop:10}}>
                    <Image
                        source={require('../../assets/misc/logoinsideapp.png')}
                        style={{width: 100, height: 100}}
                        resizeMode="contain"
                        alt="My Image"
                    />
                </View>

                <View style={{alignItems: 'center'}}>
                    <Image
                        source={require('../../assets/misc/people.png')}
                        style={{width: 200, height: 200}}
                        resizeMode="contain"
                        alt="My Image"
                    />
                </View>

                {/*Login Text*/}
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: '500',
                        color: '#333',
                        marginBottom: 30,
                    }}> Log in </Text>

                <Input
                    placeholder = "Enter your email address"
                    iconName = "email-outline"
                    label="Email"
                    error={errors.email}
                    onFocus={() => handleError(null, 'email')}
                    onChangeText={text => handleOnChange(text,'email')}
                />
                <Input
                    placeholder = "Enter your password"
                    iconName = "lock-outline"
                    label="Password"
                    error={errors.password}
                    onFocus={() => handleError(null, 'password')}
                    onChangeText={text => handleOnChange(text,'password')}
                    password
                />

                {/*BOTON LOGIN*/}

                <CustomButton
                    label={'Login'}
                    onPress={() => {
                        validate();
                    }}
                />

                <Text style ={{textAlign: 'center', color:'#666',marginBottom:30}}>Or login with ...</Text>

                <View style ={{flexDirection:'row', justifyContent:'space-evenly'}}>
                    <TouchableOpacity onPress = {()=>{}} style = {{borderColor:'#ddd', borderWidth:2,borderRadius:10,paddingHorizontal:30,paddingVertical:10}}>
                        <Image
                            source={require('../../assets/misc/google.png')}
                            style={{width: 30, height:30}}
                            resizeMode="contain"
                            alt="My Image"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {()=>{}} style = {{borderColor:'#ddd', borderWidth:2,borderRadius:10,paddingHorizontal:30,paddingVertical:10}}>
                        <Image
                            source={require('../../assets/misc/facebook.png')}
                            style={{width: 30, height:30}}
                            resizeMode="contain"
                            alt="My Image"
                        />
                    </TouchableOpacity>
                </View>

                <View style ={{flexDirection:'row', justifyContent:'center',marginBottom:10,paddingVertical:20}}>
                <Text>New to the app?  </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={{color:'#8667f1', fontWeight:'700'}}>Register</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default LoginScreen