import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setIsReadOnly, setCardInfo } from '../../redux/actions/profile/paymentActions';
import CreditCardComponent from "../../components/fields/CreditCardComponent";

const PaymentScreen = () => {


  return (
      <View style={styles.container}>
        <CreditCardComponent />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#f6f6f6',
  }
});

export default PaymentScreen;
