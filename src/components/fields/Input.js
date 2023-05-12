import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from "../colors";

const Input = ({
    label,
    iconName,
    error,
    password,
    onFocus=()=>{},
    ...props
}) => {
    const [isFocused,setIsFocused] = React.useState(false);
    const [hidePassword,setHidePassword] =React.useState(password);
    return(
        <View style={{marginBottom: 20}}>
            <Text style={style.label}>{label}</Text>
            <View style={[style.inputContainer,
                {
                borderColor: error
                    ? COLORS.red
                    : isFocused
                    ? COLORS.black
                    : COLORS.grey,
                },
                ]}>
                <Icon
                    name = {iconName}
                    style={{fontSize:22,color:COLORS.black, marginRight: 10}}
                />
                <TextInput
                    secureTextEntry={hidePassword}
                    autoCorrect={false}
                    onFocus={()=> {
                        onFocus();
                        setIsFocused(true);
                    }}
                    onBlur={()=>{
                        setIsFocused(false)
                    }}
                    style={{color:COLORS.black, flex: 1}}
                    {...props}
                />
                {password &&
                    <Icon
                        onPress={()=>setHidePassword(!hidePassword)}
                        style={{fontSize:22,color:COLORS.black}}
                        name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                    />
                }
            </View>
            {error &&(
                <Text
                    style={{color:COLORS.red,fontSize:12,marginTop:7}}>
                    {error}
                </Text>
            )}

        </View>
    );
};

const style = StyleSheet.create({
    label: {
        fontSize: 14,
        marginVertical: 5,
        color: COLORS.black,
    },
    inputContainer: {
        height: 55,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        paddingHorizontal:15,
        borderWidth: 1,
        borderColor: COLORS.black,
        alignItems: 'center',
    }
});
export default Input;


