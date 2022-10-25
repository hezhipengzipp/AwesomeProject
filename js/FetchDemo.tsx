import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Alert, FlatList, Text, View} from 'react-native';
import {Button} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const FetchDemo = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(true);
  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then(reponse => reponse.json())
      .then(json => setData(json.movies))
      .catch(msg => console.log(msg))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={Object.values(data)}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
};
export default FetchDemo;
