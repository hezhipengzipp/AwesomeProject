import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import App from './App';
import KeyboardAvoidingComponent from './AvoidingViewCompan';
import FetchDemo from './FetchDemo';
import FlexDirectionBasics from './FlexDemo';
import DisplayAnImageWithStyle from './ImageDisplay';
import PressDemo from './PressDemo';
import RaduxDemo from './ReaduxDemo';
import ToastUtil from './ToastUtil';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  rele: {
    position: 'relative',
    left: 0,
  },
});

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({route, navigation}) {
  console.log(route);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go Flex" onPress={() => navigation.navigate('Flex')} />
      <Button
        title="KeyboardAvoid"
        onPress={() => navigation.navigate('Keyboard')}
      />
      <Button
        title="show toast"
        onPress={() => ToastUtil.show('hello world')}
      />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="show imageView"
        onPress={() => navigation.navigate('DisplayImage')}
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={styles.rele}>按键来的</Text>
      <Button
        title="按压状态"
        onPress={() => navigation.navigate('PressDemo')}></Button>
      <Button
        title="FetchDemo"
        onPress={() => navigation.navigate('FetchDemo')}
      />
      <Button
        title="RaduxDemo"
        onPress={() => navigation.navigate('RaduxDemo')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function HomeScre() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="Flex" component={FlexDirectionBasics} />
        <Stack.Screen name="Keyboard" component={KeyboardAvoidingComponent} />
        <Stack.Screen name="DisplayImage" component={DisplayAnImageWithStyle} />
        <Stack.Screen name="PressDemo" component={PressDemo} />
        <Stack.Screen name="FetchDemo" component={FetchDemo} />
        <Stack.Screen name="RaduxDemo" component={RaduxDemo} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{itemId:34}}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeScre;
