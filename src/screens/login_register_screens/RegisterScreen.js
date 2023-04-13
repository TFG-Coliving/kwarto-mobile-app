import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity,ScrollView,CheckBox} from 'react-native';
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import InputFields from "../../components/fields/InputFields";
import CustomButton from "../../components/buttons/CustomButton";

const RegisterScreen = ({navigation}) => {
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

                {/*FOTO PERSONAS*/}

                <View style={{alignItems: 'center'}}>
                    <Image
                        source={require('../../assets/misc/register.png')}
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
                    }}> Register </Text>

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

                <Text style ={{textAlign: 'center', color:'#666',marginBottom:30,paddingVertical:20}}>Or register with email</Text>

                <InputFields
                    label={'Full Name'}
                    icon={<Ionicons name={'person-outline'} size={24} color={'#333'} style={{marginRight: 5}}/>}
                />

                <InputFields
                    label={'Email'}
                    icon={ <MaterialIcons name={'alternate-email'} size={24} color={'#333'} style={{marginRight: 5}}/>}
                    keyboardType="email-address"
                />

                <InputFields
                    label={'Password'}
                    icon={ <Ionicons name={'ios-lock-closed-outline'} size={24} color={'#333'} style={{marginRight: 5}}/>}
                    inputType='password'
                />

                <InputFields
                    label={'Confirm Password'}
                    icon={ <Ionicons name={'ios-lock-closed-outline'} size={24} color={'#333'} style={{marginRight: 5}}/>}
                    inputType='password'
                />


                {/*BOTON LOGIN*/}

                <CustomButton label={'Register'} onPress={()=>{}}/>

                <View style ={{flexDirection:'row', justifyContent:'center',marginBottom:20,paddingVertical:10}}>
                    <Text>Have an account?  </Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{color:'#8667f1', fontWeight:'700'}}>Login</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default RegisterScreen;