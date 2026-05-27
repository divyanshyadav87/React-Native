import React from 'react';

import {
  View, 
  Text,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
function AppPro() {

    const isDarkMode = useColorScheme() === 'dark';

    return(
        <SafeAreaView 
            style={[styles.safeArea,
        {
            backgroundColor: isDarkMode ? '#000000' : '#ffffff'
        }
            ]}>
        <View style={styles.Container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello World</Text>
            <Text style={isDarkMode ? styles.redText : styles.greenText}>Hello World 01</Text>
            <Text style={isDarkMode ? styles.blueText : styles.yellowText}>Hello World 02</Text>
            <Text style={isDarkMode ? styles.purpleText : styles.orangeText}>Hello World 03</Text>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
    },
    safeArea: {
        flex: 1,
    },
    whiteText: {
        color: 'white',
    },
    darkText: {
        color: '#000000',
    },
    redText: {
        color: 'red',
    },
    greenText: {
        color: 'green',
    },
    blueText: {
        color: 'skyblue',
    },
    yellowText: {
        color: '#b8860b',
    },
    purpleText: {
        color: 'violet',
    },
    orangeText: {
        color: 'orange',
    }
});

export default AppPro;