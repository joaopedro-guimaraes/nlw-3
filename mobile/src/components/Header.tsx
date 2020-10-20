import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

interface Props {
    title: string;
    showCancelButton?: boolean;
}

export default function Header({ title, showCancelButton = true }: Props) {
    const navigation = useNavigation();

    function handleBackToHomePage() {
        navigation.navigate('OrphanagesMap');
    }

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={navigation.goBack}>
                <Feather name="arrow-left" size={24} color="#15B6D6" />
            </BorderlessButton>

            <Text style={styles.title}>{title}</Text>

            {showCancelButton ? (
                <BorderlessButton onPress={handleBackToHomePage}>
                    <Feather name="x" size={24} color="#FF969D" />
                </BorderlessButton>
            ) : <View style={{ width: 24 }} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        paddingTop: 44,
        backgroundColor: '#F9FAFC',
        borderBottomWidth: 1,
        borderColor: '#DDE3F0',

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#8FA7B3',
        fontSize: 16
    }
});