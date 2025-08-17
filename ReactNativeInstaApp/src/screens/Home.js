import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Stories from '../components/Stories';
import Post from '../components/Post';
import { ScrollView } from 'react-native/types_generated/index';

const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}
      >
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Instagram</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}
        >
          <FontAwesome
            name="plus-square-o"
            style={{ fontSize: 24, paddingHorizontal: 10 }}
          />
          <Feather name="navigation" style={{ fontSize: 24 }} />
        </View>
      </View>
      <ScrollView>
        <Stories />
        <Post />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
