import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";

export default function InputFields({label, icon, inputType, fieldButtonLabel, fieldButtonFunction, keyboardType}) {
    return (
        <View
            style={{
                flexDirection: 'row',
                borderBottomColor: '#ccc',
                borderBottomWidth: 1
                , paddingBottom: 8,
                marginBottom: 25,
            }}>
            {icon}
            {inputType === 'password' ? (
                <TextInput
                    placeholder={label}
                    style={{flex: 1, paddingVertical: 0}}
                    secureTextEntry={true}
                />
            ) : (
                <TextInput
                    placeholder={label}
                    keyboardType={keyboardType}
                    style={{flex: 1, paddingVertical: 0}}
                />
            )}

            <TouchableOpacity onPress={fieldButtonFunction}>
                <Text style={{
                    color: '#8667f1',
                    fontWeight: '700'
                }}>{fieldButtonLabel}</Text>
            </TouchableOpacity>
        </View>
    );
}