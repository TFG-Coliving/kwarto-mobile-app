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

const CreditCardComponent = () => {
  const dispatch = useDispatch();
  const { isReadOnly, cardInfo } = useSelector((state) => state.payment);

  const handleCardNumberChange = (value) => {
    // handle input change
    const newValue = value.replace(/\D/g, '').slice(0, 16);
    dispatch(setCardInfo({ ...cardInfo, cardNumber: newValue, last4Digits: newValue.slice(-4) }));
  };

  const handleExpirationDateChange = (value) => {
    // handle input change
    const [month, year] = value.split('/');
    const newMonth =  parseInt(month);
    const newYear = parseInt(year);
    dispatch(setCardInfo({ ...cardInfo, expirationDate: `${newMonth.toString().padStart(2, '0')}/${newYear.toString().padStart(2, '0')}` }));
  };

  const handleCvcChange = (value) => {
    // handle input change
    const newValue = value.replace(/\D/g, '').slice(0, 3);
    dispatch(setCardInfo({ ...cardInfo, cvc: newValue }));
  };

  const handleEditButtonPress = () => {
    dispatch(setIsReadOnly(false));
  };

  const handleSaveButtonPress = () => {
    dispatch(setIsReadOnly(true));
  };

  return (
      <View style={styles.container}>
        {isReadOnly ? (
            <View style={styles.card}>
              <View style={styles.cardRow}>
                <Text style={styles.cardLabel}>{'Card Number '}</Text>
                <Text style={[styles.cardNumber, {marginLeft: '15%'}]}>{`**** **** **** ${cardInfo.last4Digits}` }</Text>
              </View>
              <View style={styles.cardRow}>
                <View style={styles.cardColumn}>
                  <Text style={styles.cardLabel}>{'Expiration Date'}</Text>
                  <Text style={styles.cardNumber}>{cardInfo.expirationDate }</Text>
                </View>
                <View style={styles.cardColumn}>
                  <Text style={styles.cardLabel}>{'CVC'}</Text>
                  <Text style={styles.cardNumber}>{'***'}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.editButton} onPress={handleEditButtonPress}>
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            </View>

        ) : (
            <View style={styles.card}>
              <View style={styles.cardRow}>
                <Text style={styles.cardLabel}>{'Enter your card number '}</Text>
                <TextInput style={[styles.cardInput, {marginLeft: '15%'}]} value={cardInfo.cardNumber} onChangeText={handleCardNumberChange} />
              </View>
              <View style={styles.cardRow}>
                <View style={styles.cardColumn}>
                  <Text style={styles.cardLabel}>{'MM / YY'}</Text>
                  <TextInput style={styles.cardInput} value={cardInfo.expirationDate} onChangeText={handleExpirationDateChange} />
                </View>
                <View style={styles.cardColumn}>
                  <Text style={styles.cardLabel}>{'Security Code'}</Text>
                  <TextInput style={styles.cardInput} value={cardInfo.cvc} onChangeText={handleCvcChange} />
                </View>
              </View>
              <TouchableOpacity style={styles.saveButton} onPress={handleSaveButtonPress}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
        )
        }
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f6f6f6',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardColumn: {
    flex: 1,
  },
  cardLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#8e8e8e',
    marginBottom: 5,
  },
  cardNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4a4a4a',
  },
  cardInput: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4a4a4a',
    paddingVertical: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  editButton: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#8667f1',
  },
  editButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8667f1',
  },
  saveButton: {
    backgroundColor: '#8667f1',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
});


export default CreditCardComponent;
