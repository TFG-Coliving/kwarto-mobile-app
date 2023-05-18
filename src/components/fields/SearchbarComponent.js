import React, { useState } from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

const SearchBarComponent = ({ properties, onFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (value) => {
        setSearchTerm(value);
        filterProperties(value);
    };

    const filterProperties = (term) => {
        const filteredProperties = properties.filter((property) =>
            property.province.toLowerCase().startsWith(term.toLowerCase())
        );
        onFilter(filteredProperties);
    };

    return (
        <View>
            <TextInput
                style={styles.searchInput}
                value={searchTerm}
                onChangeText={handleInputChange}
                placeholder="Write a province"
            />
            <Ionicons
                name="search-outline"
                size={24}
                color="gray"
                style={{ position: "absolute", right: 20, top: 60 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchInput: {
        height: 50,
        borderRadius: 50,
        paddingHorizontal: 10,
        marginTop: 50,
        marginBottom: 10,
        backgroundColor: "#FFFFFF",
    }
});

export default SearchBarComponent;

