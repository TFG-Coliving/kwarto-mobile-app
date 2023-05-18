import React, { useState } from 'react';
import {View, TouchableOpacity, Text, } from 'react-native';

const ToggleButton = ({ label, active, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                paddingVertical: 5,
                paddingHorizontal: 20,
                borderWidth: 2,
                borderColor: "#8667f1",
                borderRadius: 10,
                backgroundColor: active ? '#8667f1' : '#fff',
                marginLeft: 5,
                marginRight: 5
            }}
        >
            <Text>{label}</Text>
        </TouchableOpacity>
    );
};

const SwitchBidRentComponent = ({ properties, onFilter }) => {
    const [toggle, setToggle] = useState('rent');

    const handleToggleChange = (value) => {
        setToggle(value? 'bid' : 'rent');
        const filteredProperties = properties.filter(
            (property) => property._bid === value
        );
        onFilter(filteredProperties);
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <ToggleButton
                label="Rent"
                active={toggle === 'rent'}
                onPress={() => handleToggleChange(false)}
            />
            <ToggleButton
                label="Bid"
                active={toggle === 'bid'}
                onPress={() => handleToggleChange(true)}
            />
        </View>
    );
};

export default SwitchBidRentComponent;
