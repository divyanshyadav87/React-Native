import react from 'react';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

function App(){
  return (
    <SafeAreaView>
      <View>
        <Text> Hello World </Text>
        <TouchableOpacity>
          <Text>Press Me</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default App;