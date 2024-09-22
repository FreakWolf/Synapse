import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Frame1 = ({ navigation }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Onboarding')
        }, 5000)

        return () => clearTimeout(timer)
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image source={require('../assets/synapse.png')} style={styles.logo} />
                <Text style={styles.text}>Synapse</Text>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 24,
        color: '#0f766e',
        marginTop: 8,
        // fontFamily: 'Carattere-Regular',
    },
});

export default Frame1;