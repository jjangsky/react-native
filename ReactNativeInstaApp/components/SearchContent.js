import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const searchData = [
  {
    id: 0,
    images: [
      require('../../assets/images/post1.jpeg'),
      require('../../assets/images/post2.jpeg'),
      require('../../assets/images/post3.jpeg'),
      require('../../assets/images/post4.jpeg'),
      require('../../assets/images/post5.jpeg'),
      require('../../assets/images/post6.jpeg'),
    ],
  },
  {
    id: 1,
    images: [
      require('../../assets/images/post7.jpeg'),
      require('../../assets/images/post8.jpeg'),
      require('../../assets/images/post9.jpeg'),
      require('../../assets/images/post10.jpeg'),
      require('../../assets/images/post11.jpeg'),
      require('../../assets/images/post12.jpeg'),
    ],
  },
  {
    id: 2,
    images: [
      require('../../assets/images/post13.jpeg'),
      require('../../assets/images/post14.jpeg'),
      require('../../assets/images/post15.jpeg'),
    ],
  },
];

const SearchContent = () => {
  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <View key={index}>
            {data.id === 0 ? (
              <View
                style={{
                  flexDirection: 'row',
                  flewWarp: 'wrap',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                {data.images.map((imageData, imageIndex) => {
                  return (
                    <TouchableOpacity
                      key={imageIndex}
                      style={{ padddingBottom: 2, width: '33%' }}
                    >
                      <Image
                        source={imageData}
                        style={{ width: '100%', height: 150 }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

export default SearchContent;
