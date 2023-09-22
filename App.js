import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
export default function App() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-black`}>
      <Text style={tw`text-white`}>Open up App.js to start working on your app!</Text>
      <TouchableOpacity style={tw`bg-teal-500 mt-5`}>
<Text style={tw`text-white px-4 py-4`}>Hello Welcome</Text>
      </TouchableOpacity>
      <StatusBar style="auto"/>
    </View>
  );
}

//install npm i twrnc then in style use tw`` to use native
