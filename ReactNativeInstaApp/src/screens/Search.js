import { View, Text } from 'react-native';

import SearchInput from './../../components/SearchInput';

const Search = () => {
  return (
    <SafeAreaView
      style={{ width: '100%', backgroundColor: 'white', position: 'relative' }}
    >
      <ScrollView>
        <SearchInput />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
