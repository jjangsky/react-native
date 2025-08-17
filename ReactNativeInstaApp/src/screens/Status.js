import { View, Text, Platform } from 'react-native';
import { StatusBar } from 'react-native/types_generated/index';
import React, { useEffect } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import { useRef } from 'react';
import { Animated } from 'react-native/types_generated/index';
import Ionic from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Status = ({ route, navigation }) => {
  const { name, image } = route.params;
  // 애니메이션을 위한 useRef 훅 사용
  const progress = useRef(new Animated.Value(0)).current;
  const statusBarHeight = getStatusBarHeight();

  useEffect(() => {
    // 컴포넌트가 마운트될 때 애니메이션 시작
    Animated.timing(progress, {
      toValue: 5,
      duration: 5000, // 5초 동안 진행
      useNativeDriver: false, // width 애니메이션은 native driver를 사용할 수 없음
    }).start();
  }, [progress]);

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000); // 5초 후에 Status 화면을 닫음
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  return (
    // navigation으로 전달받은 정볼르 route로 전달 받아서 사용함
    <SafeAreaView
      style={{
        backgroundColor: 'black',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View
        style={{
          // ios와 안드로이드 상태바 높이를 다르게 설정(기본 환경 차이 이슈로 맞춰줘야함)
          marginTop: Platform.OS === 'ios' ? statusBarHeight : 0,
          height: 3,
          width: '95%',
          boderWidth: 1,
          backgroundColor: 'gray',
          position: 'absolute',
          top: 18,
        }}
      >
        <Animated.View
          // 애니메이션을 적용하여 진행률 표시, width를 애니메이션 값으로 설정
          style={{
            width: progress.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
            }),
            height: '100%',
            backgroundColor: 'white',
          }}
        />
      </View>
      <View
        style={{
          marginTop: Platform.OS === 'ios' ? statusBarHeight : 0,
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          top: 12,
          left: 0,
          width: '90%',
        }}
      >
        <View
          style={{
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={image}
            style={{
              boederRadius: 100,
              backgroundColor: 'orange',
              width: '92%',
              height: '92%',
              resizeMode: 'cover',
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <Text style={{ color: 'white', fontSize: 15, paddingLeft: 10 }}>
            {name}
          </Text>
          <TouchableOpacity onpress={() => navigation.goBack()}>
            <Ionic
              name="close"
              style={{ color: 'white', fontSize: 15, opacity: 0.6 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={image}
        style={{ position: 'absolute', width: '100%', height: 600 }}
      />
    </SafeAreaView>
  );
};

export default Status;
