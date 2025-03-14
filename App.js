import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import RenderizarDados from './components/RenderizarDados';

export default function App() {
  const[valorOriginal, setValorOriginal] = useState('')
  const[porcentagem,setPorcentagem] = useState('')
  const[mostrarDados,setMostrarDados] = useState(false)


  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={require('./assets/calculadora2.png')}
      />
      <TextInput
        style={styles.input}
        placeholder='Digite o valor'
        autoCapitalize='words'
        maxLength={30}
        value={valorOriginal}
        keyboardType='numeric'
        onChangeText={(valor) => setValorOriginal(valor)}
      />
       <TextInput
        style={styles.input}
        placeholder='Digite porcentagem'
        autoCapitalize='none'
        maxLength={30}
        value={porcentagem}
        keyboardType='numeric'
        onChangeText={(valor) => setPorcentagem(valor)}
      />
      <Button
        title='Enviar Calculo'
        color={'#EDB314'}
        onPress={()=>setMostrarDados(true)}
      />

      {mostrarDados&&<RenderizarDados valueOriginal={valorOriginal} porcentagem={porcentagem}/>}
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1484ED',
    alignItems: 'center',
    justifyContent: 'start',
  },
  imagem: {
    resizeMode: 'center',
    width: 350
  },
  input: {
    backgroundColor: '#fff',
    width: 300,
    borderRadius: 7,
    paddingLeft: 10,
    fontSize: 18,
    marginBottom: 10,
  }
});