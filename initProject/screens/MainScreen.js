import { Platform, StatusBar, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '@react-navigation/elements';

const MainScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="default" />
            <Text style={styles.pageTitle}>TODO APP</Text>
            <View style={styles.listView}>
                <Text style={styles.listTitle}>할 일</Text>
            </View>
            <View style={styles.separator}/>
             <View style={styles.listView}>
                <Text style={styles.listTitle}>완료된 일</Text>
            </View>
        </SafeAreaView>
    );
};

export default MainScreen;

// 스타일링은 Styles 객체를 사용해서 추가할 수 있습니다.
// 예: const styles = StyleSheet.create({ container: { flex: 1, padding: 16 } });
// 그리고 SafeAreaView에 styles.container를 적용할 수 있습니다.

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 : 0,
        backgroundColor: '#f7f8fa',
    },
    pageTitle: {
        marginBottom: 35,
        paddingHorizontal: 15,
        fontSize: 54,
        fontWeight: '600',
    },
    separator: {
        marginHorizontal: 10,
        marginTop: 25,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    },
    listView: {
        flex: 1,
    },
    listTitle: {
        marginBottom: 10,
        paddingHorizontal: 15,
        fontSize: 41,
        fontWeight: '500',
    },

});