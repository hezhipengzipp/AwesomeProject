import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

const FetchDemo = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(true);
  let obj = {
    p: ['Hello', {y: 'World'}],
  };
  let {
    p,
    p: [x, {y}],
  } = obj;
  console.log('FetchDemo:' + p);

  let jsonData = {
    id: 42,
    status: 'OK',
    data: [867, 5309],
  };

  let {id, status, data: num} = jsonData;

  console.log(id, status, num);

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
