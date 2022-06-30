import { StatusBar,SafeAreaView, View } from 'react-native';
import { Cesta } from './src/telas/Cesta/Cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import mock from './src/mocks/cesta';

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular":Montserrat_400Regular,
    "MontserratBold":Montserrat_700Bold
  });

  if(!fonteCarregada){
    return <AppLoading />
  }

  return (
    <View>
      <StatusBar />
      <StatusBar style="auto" />
      <Cesta {...mock}/>
    </View>
  );
}