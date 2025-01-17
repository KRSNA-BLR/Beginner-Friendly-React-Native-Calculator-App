import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Dimensions,
  ScaledSize,    // <-- Importamos el tipo ScaledSize
} from 'react-native';

// Definimos la forma del evento que emite Dimensions al rotar
type DimensionChange = {
  window: ScaledSize;
  screen: ScaledSize;
};

function App(): JSX.Element {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Manejo de la orientación (opcional si quieres aplicar estilos condicionales)
  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    // Especificamos el tipo para el parámetro del callback
    const onChange = ({ window: { width, height } }: DimensionChange) => {
      setIsPortrait(height >= width);
    };

    // Suscribimos el listener al evento de cambio de orientación
    const subscription = Dimensions.addEventListener('change', onChange);

    // Cuando el componente se desmonte, removemos el listener
    return () => {
      subscription.remove();
    };
  }, []);

  const handlePress = (value: string) => {
    setInput(prev => prev + value);
  };

  const calculateResult = () => {
    try {
      const sanitizedInput = input
        .replace(/√/g, 'Math.sqrt')
        .replace(/\^/g, '**');
      // eslint-disable-next-line no-eval
      const evalResult = eval(sanitizedInput);
      setResult(String(evalResult));
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabecera con logotipo */}
      <View style={styles.header}>
        <Image
          source={require('./assets/kbasesorias-logo-react-calculadora.png')}
          style={styles.logo}
        />
      </View>

      {/* Pantalla de la calculadora */}
      <View style={styles.screen}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      {/* Botones de la calculadora */}
      <ScrollView contentContainerStyle={styles.buttonContainer}>
        {/* Botones Científicos */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('sin(')}>
            <Text style={styles.buttonText}>sin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('cos(')}>
            <Text style={styles.buttonText}>cos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('tan(')}>
            <Text style={styles.buttonText}>tan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('√')}>
            <Text style={styles.buttonText}>√</Text>
          </TouchableOpacity>
        </View>

        {/* Botones Matemáticos */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('^')}>
            <Text style={styles.buttonText}>^</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('(')}>
            <Text style={styles.buttonText}>(</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(')')}>
            <Text style={styles.buttonText}>)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('log(')}>
            <Text style={styles.buttonText}>log</Text>
          </TouchableOpacity>
        </View>

        {/* Fila 1 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Fila 2 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>

        {/* Fila 3 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('*')}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>

        {/* Fila 4 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={clearInput}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={calculateResult}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 250,
    height: 100,
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  inputText: {
    fontSize: 40,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 50,
    color: '#000',
    textAlign: 'center',
  },
  buttonContainer: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  button: {
    flex: 1,
    backgroundColor: '#E10600',
    marginHorizontal: 5,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
