// @flow
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const HIT_SLOP = {top: 15, left: 15, right: 15, bottom: 15};

const styles = StyleSheet.create({
    closeButton: {
        alignSelf: 'flex-start',
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: 'rgb(248 247 247)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        marginLeft: 16.5,
    },
    closeButton__text: {
        backgroundColor: 'transparent',
        fontSize: 26,
        lineHeight: 26,
        color: 'rgb(0, 115, 207)',
        textAlign: 'center',
    },
});

export default ({onPress}: {onPress: () => *}) => (
    <TouchableOpacity
        hitSlop={HIT_SLOP}
        style={styles.closeButton}
        onPress={onPress}
    >
        <Text style={styles.closeButton__text}>×</Text>
    </TouchableOpacity>
);
