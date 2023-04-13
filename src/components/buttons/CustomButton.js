import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton({label,onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={{backgroundColor:'#8667f1',padding:20,borderRadius:10,marginBottom:30}}>
            <Text style={{
                color:'#fff',
                fontSize:15,
                fontWeight:'700',
                textAlign:'center'
            }}>{label}</Text>
        </TouchableOpacity>
    );
}