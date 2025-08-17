import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

function Stories() {
  const navigation = useNavigation();
  const storyInfo = [
    {
      id: 1,
      name: '나의 스토리',
      image: require('../../assets/images/userProfile.jpeg'),
    },
    {
      id: 0,
      name: 'john',
      image: require('../../assets/images/profile1.jpeg'),
    },
    {
      id: 0,
      name: 'tonny',
      image: require('../../assets/images/profile2.jpeg'),
    },
    {
      id: 0,
      name: 'daniel',
      image: require('../../assets/images/profile3.jpeg'),
    },
    ,
    {
      id: 0,
      name: 'sojeong',
      image: require('../../assets/images/profile4.jpeg'),
    },
    ,
    {
      id: 0,
      name: 'jaeho',
      image: require('../../assets/images/profile5.jpeg'),
    },
  ];

  return (
    <ScrollView horizontal={true} style={{ paddingVeritcal: 20 }}>
      {
        (storyInfo,
        map((data, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                //파라미터로 스토리 이름과 이미지를 전달하여 Status 화면으로 이동
                navigation.push('Status', {
                  name: data.name,
                  image: data.image,
                })
              }
            >
              <View
                style={{
                  flexDirection: 'column',
                  paddingVeritcal: 8,
                  position: 'relative',
                }}
              >
                {data.id === 1 ? (
                  <View
                    style={{
                      position: 'absolute',
                      bottom: 15,
                      right: 10,
                      zIndex: 1,
                    }}
                  >
                    <Entypo
                      name="circle-with-plus"
                      style={{
                        fontSize: 20,
                        color: '$405de6',
                        backgroundColor: 'white',
                        borderRadius: 10,
                        overflow: 'hidden',
                      }}
                    />
                  </View>
                ) : null}
                <View
                  style={{
                    width: 68,
                    height: 68,
                    backgroundColor: 'white',
                    borderWitdth: 1.8,
                    borderRadius: 100,
                    borderColor: '#c13584',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={data.image}
                    style={{
                      resizeMode: 'cover',
                      width: '92%',
                      height: '92%',
                      borderRadius: 100,

                      borderColor: 'orange',
                    }}
                  />
                </View>

                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 5,
                    fontSize: 12,
                  }}
                >
                  {data.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }))
      }
    </ScrollView>
  );
}

export default Stories;
