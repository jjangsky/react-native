import { Pressable, StyleSheet, Text, View } from 'react-native';
import ChecbokxUnchecked from '../assets/svg/checkbox-unchecked.svg';
import CheckboxChecked from '../assets/svg/checkbox-checked.svg';
import Delete from '../assets/svg/delete.svg';
import React from 'react';

const TodoItem = () => {
    return (
        <View style={styles.itemContainer}>
            <Pressable style={styles.itemCheckbox} hitSlop={10}>
                <ChecbokxUnchecked />
                <CheckboxChecked style={styles.itemCheckboxCheckedIcon} />
            </Pressable>
            <Pressable>
                <Text>TodoItem</Text>
            </Pressable>
            <Text style={[styles.itemText, styles.itemTextChecked]}>코딩하기</Text>
            <Pressable style={[styles.deleteButton, styles.deleteButtonDone]} hitSlop={10}>
                <Delete />
            </Pressable>
        </View>
    );
};

export default TodoItem;

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 15,
        paddingHorizontal: 15,
        borderBottomColor: '#e0e0e0',
    },
    itemCheckbox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
        marginRight: 13,
        borderRadius: 6,
    },
    itemCheckboxCheckedIcon: {
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 4,
        },
    },
    itemText: {
        marginRight: 'auto',
        paddingRight: 25,
        fontSize: 15,
        lineHeight: 20,
        color: '#737373',
    },
    itemTextChecked: {
        opacity: 0.3,
        textDecorationLine: 'line-through',
    },
    deleteText: {
        marginRight: 'auto',
        paddingRight: 25,
        fontSize: 15,
        lineHeight: 20,
        color: '#737373',
    },
    deleteButton: {
        opacity: 0.8,
    },
    deleteButtonDone: {
        opacity: 0.4,
    },
});
