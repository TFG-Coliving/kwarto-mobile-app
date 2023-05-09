import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import COLORS from "../colors";

const InputProperty = ({
  label,
  onFocus=()=>{},
  ...props
}) => {
  const [isFocused,setIsFocused] = React.useState(false);
  return(
      <View style={{marginBottom: 20}}>
        <Text style={style.label}>{label}</Text>
        <View style={[style.inputContainer,
          {
            borderColor: isFocused
                    ? COLORS.primary
                    : COLORS.grey,
          },
        ]}>
          <TextInput
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
        </View>
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
export default InputProperty;