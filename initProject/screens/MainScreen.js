import { StatusBar, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const MainScreen = () => {
    return (
        <SafeAreaView>
            <StatusBar barStyle="default" />
            <Text>TODO APP</Text>
            <View>
                <Text>할 일</Text>
            </View>
            <View />
            <View>
                <Text>완료된 일</Text>
            </View>
        </SafeAreaView>
    );
};

export default MainScreen;
