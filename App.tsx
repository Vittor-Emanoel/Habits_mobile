import {
  Inter_400Regular,
  Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, useFonts
} from '@expo-google-fonts/inter'

import { StatusBar } from 'react-native'
import { Loading } from './src/components/Loading'
import { Home } from './src/screens/Home'


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold, 
    Inter_700Bold, 
    Inter_800ExtraBold
  })

  if(!fontsLoaded) {
    <Loading />
  }
  return (
    <>
    <Home />
      <StatusBar barStyle="light-content" backgroundColor='transparent' translucent/>
    </>
  );
}


