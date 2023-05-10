import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, Keyboard} from 'react-native';
import CustomButton from "../../components/buttons/CustomButton";
import useAuth from "../../redux/actions/auth/useAuth";
import Input from "../../components/fields/Input";
import {useSelector, useDispatch} from "react-redux";

const RegisterScreen = ({navigation}) => {

    const [inputs,setInputs] = React.useState({
        firstname:'',
        lastname:'',
        email:'',
        phone:'',
        password:'',
    });
    const [errors,setErrors] = React.useState({});

    let error = useSelector(state => state.authentication.error);

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
        if(!inputs.firstname){
            handleError('First name is required','firstname');
            valid = false;
        }
        if(!inputs.lastname){
            handleError('Last name is required','lastname');
            valid = false;
        }
        if(!inputs.phone){
            handleError('Phone is required','phone');
            valid = false;
        }
        if(!inputs.password){
            handleError('Password is required','password');
            valid = false;
        } else if (inputs.password.length < 5 ){
            handleError('Password must be at least 5 characters','password');
            valid = false;
        }

        if (valid) {
            handleRegister({firstname: inputs.firstname, lastname: inputs.lastname, email: inputs.email, phone: inputs.phone, password: inputs.password, preventDefault: () => {} });
            navigation.navigate('RegisterComplete');
        }
        //34:00
    };

    const handleOnChange = (text,input) => {
        setInputs((prevState) => ({...prevState,[input]: text}))
    }

    const handleError = (errorMessage, input) =>{
        setErrors((prevState) => ({...prevState,[input]: errorMessage}))
    }
    const { handleRegister } = useAuth();

    useEffect(() => {
        if (error !== null) {
            navigation.navigate('RegisterError');
        }
    }, [error]);

    /*const registerUserAsync = async () => {
            const response = await handleRegister({
                firstname: inputs.firstname,
                lastname: inputs.lastname,
                email: inputs.email,
                phone: inputs.phone,
                password: inputs.password,
                preventDefault: () => {}
            });
             if (response && response.data) {
        // El response.data no es nulo, puedes hacer algo aquí...
        console.log('Registro exitoso:', response.data);
      } else {
        // El response.data es nulo o no existe, puedes hacer algo aquí...
        console.log('Error en el registro:', response);
      }
    };*/
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

                <View style = {{marginVertical: 20}}>
                    <Input
                        placeholder = "Enter your email address"
                        iconName = "email-outline"
                        label="Email"
                        error={errors.email}
                        onFocus={() => handleError(null, 'email')}
                        onChangeText={text => handleOnChange(text,'email')}
                    />

                    <Input
                        placeholder = "Enter your first name"
                        iconName = "account-outline"
                        label="First name"
                        error={errors.firstname}
                        onFocus={() => handleError(null, 'firstname')}
                        onChangeText={text => handleOnChange(text,'firstname')}
                    />

                    <Input
                        placeholder = "Enter your last name"
                        iconName = "account-outline"
                        label="Last name"
                        error={errors.lastname}
                        onFocus={() => handleError(null, 'lastname')}
                        onChangeText={text => handleOnChange(text,'lastname')}
                    />

                    <Input
                        keyboardType="numeric"
                        placeholder = "Enter your phone number"
                        iconName = "phone-outline"
                        label="Phone number"
                        error={errors.phone}
                        onFocus={() => handleError(null, 'phone')}
                        onChangeText={text => handleOnChange(text,'phone')}
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
                </View>

                <CustomButton label="Register" onPress={validate}/>

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