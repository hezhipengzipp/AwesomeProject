import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createSlice, configureStore} from '@reduxjs/toolkit';
const countSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: state => {
      state.value += 1;
    },
    decremented: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {incremented, decremented} = countSlice.actions;
// 创建一个包含应用程序 state 的 Redux store。
// 它的 API 有 { subscribe, dispatch, getState }.
let store = configureStore(
  {
    reducer: countSlice.reducer,
  },
);

// 你可以使用 subscribe() 来更新 UI 以响应 state 的更改。
// 通常你会使用视图绑定库（例如 React Redux）而不是直接使用 subscribe()。
// 可能还有其他用例对 subscribe 也有帮助。

store.subscribe(() => console.log(store.getState()));

// 改变内部状态的唯一方法是 dispatch 一个 action。
// 这些 action 可以被序列化、记录或存储，然后再重放。

const RaduxDemo = () => {
  const onpres = () => {
    store.dispatch(incremented());
    // {value: 1}
    store.dispatch(incremented());
    // {value: 2}
    store.dispatch(decremented());
    // {value: 1}
  };
  return (
    <View style={styles.contains}>
      <TouchableOpacity style={styles.button} onPress={onpres}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  contains: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
  },
});
export default RaduxDemo;
