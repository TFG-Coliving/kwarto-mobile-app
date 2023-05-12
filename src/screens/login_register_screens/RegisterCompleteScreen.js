import React, {useEffect} from "react";
import {Image, SafeAreaView, View, Dimensions, BackHandler, TouchableOpacity, Text} from "react-native";
import CustomButton from "../../components/buttons/CustomButton";

const RegisterCompleteScreen = ({navigation}) => {

    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;

    const handleBackButton = () => {
        return true;
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        return () => BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    }, []);


    return(
        <SafeAreaView  style={{flex: 1, justifyContent: 'center'}}>

            <Text
                style={{
                    fontSize: 30,
                    fontWeight: '500',
                    color: '#333',
                    marginBottom: 30,
                    textAlign:'center'
                }}> Register completed! </Text>
            <View style={{alignItems: 'center',marginBottom:screenHeight*0.10,marginTop:0}}>
                <Image
                    source={require('../../assets/misc/completed.png')}
                    style={{width: 300, height: 300}}
                    resizeMode="contain"
                    alt="My Image"
                />
            </View>

            <View style={{marginHorizontal: screenWidth*0.1}}>
                <CustomButton label="Go back to login" onPress={() => navigation.navigate('Login')} />
            </View>

        </SafeAreaView>
    );
}

export default RegisterCompleteScreen;
