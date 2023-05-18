import React, {useEffect, useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    TextInput, BackHandler,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AdCardComponent from "../../components/cards/AdCardComponent";
import {useDispatch, useSelector} from "react-redux";
import { getProperties } from "../../redux/actions/properties/propertyActions";
import { Ionicons } from "@expo/vector-icons";
import SearchBarComponent from "../../components/fields/SearchbarComponent";
import SwitchBidRentComponent from "../../components/buttons/SwitchBidRentComponent";
const HomeScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.authentication.token);
    let properties = useSelector((state) => state.properties.properties);
    useEffect(() => {
        properties = dispatch(getProperties(token));
    }, [token]);

    const [filteredProperties, setFilteredProperties] = useState(properties);
    const handleFilter = (filtered) => {
        setFilteredProperties(filtered)
    };


    const handleBackButton = () => {
        return true;
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        return () => BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    }, []);
    const handleCardPress = (cardData) => cardData._bid ? navigation.navigate("CardPuja", { cardData }) : navigation.navigate("CardAlquiler", { cardData })
    return (
        <View style={styles.container}>
            <View style={{ alignItems: "center", marginBottom: -60, marginTop: 10 }}>
                <Image
                    source={require("../../assets/logoinsideapp.png")}
                    style={{ width: 100, height: 100 }}
                    resizeMode="contain"
                    alt="My Image"
                />
            </View>
            <SearchBarComponent properties={filteredProperties ? filteredProperties : properties } onFilter={handleFilter}/>
            <View style={styles.buttonContainer}>
                <SwitchBidRentComponent properties={properties} onFilter={handleFilter}/>
            </View>

            {filteredProperties ? (
                <ScrollView showsVerticalScrollIndicator={false}>
                    {filteredProperties.map((property) => {
                        return (
                            <AdCardComponent
                                key={property.id}
                                item={property}
                                name={property.name}
                                province={property.province}
                                available_rooms={property.available_rooms}
                                image={"http://172.17.41.21:8000" + property.images[0]?.uri}
                                onPress={() => handleCardPress(property)}
                            />
                        )
                    })}
                </ScrollView>
            ) : properties && (
                <ScrollView showsVerticalScrollIndicator={false}>
                    {properties?.filter(
                        (property) => property._bid === false).map((property) => {
                        return (
                            <AdCardComponent
                                key={property.id}
                                item={property}
                                name={property.name}
                                province={property.province}
                                available_rooms={property.available_rooms}
                                image={"http://172.17.41.21:8000" + property.images[0]?.uri}
                                onPress={() => handleCardPress(property)}
                            />
                        )
                    })}
                </ScrollView>
                )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 15,
    },
    searchInput: {
        height: 50,
        borderRadius: 50,
        paddingHorizontal: 10,
        marginTop: 50,
        marginBottom: 10,
        backgroundColor: "#FFFFFF",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10,
    },
});


export default HomeScreen;