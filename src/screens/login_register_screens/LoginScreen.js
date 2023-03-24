import React from 'react';
import {View, Text, SafeAreaView, Image, TextInput, TouchableOpacity,ScrollView} from 'react-native';
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import CustomButton from "../../components/buttons/CustomButton";
import InputFields from "../../components/fields/InputFields";


const LoginScreen = ({navigation}) => {
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

                <InputFields
                    label={'Email'}
                    icon={ <MaterialIcons name={'alternate-email'} size={24} color={'#333'} style={{marginRight: 5}}/>}
                    keyboardType="email-address"
                />
                <InputFields
                    label={'Password'}
                    icon={ <Ionicons name={'ios-lock-closed-outline'} size={24} color={'#333'} style={{marginRight: 5}}/>}
                    inputType='password'
                    fieldButtonLabel={"Forgot?"}
                    fieldButtonFunction={()=>{}}
                />

                {/*BOTON LOGIN*/}

                <CustomButton
                    label={'Login'}
                    onPress={()=>{}}
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