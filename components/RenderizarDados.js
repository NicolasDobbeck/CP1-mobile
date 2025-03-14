import { Text, View, StyleSheet } from "react-native";

export default (props) => {

  const valorOriginal = parseFloat(props.valueOriginal);
  const porcentagem = parseFloat(props.porcentagem);

  if (isNaN(valorOriginal) || isNaN(porcentagem)) {
    return <Text style={styles.resultText}>Por favor, insira valores válidos.</Text>;
  }

  const valorAumento = (valorOriginal * porcentagem) / 100;
  const novoValor = valorOriginal + valorAumento;

  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>Valor Original: R$ {valorOriginal.toFixed(2)}</Text>
      <Text style={styles.resultText}>Porcentagem de Aumento: {porcentagem}%</Text>
      <Text style={styles.resultText}>Valor do Aumento: R$ {valorAumento.toFixed(2)}</Text>
      <Text style={styles.resultText}>Novo Valor: R$ {novoValor.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    marginTop: 5,
    alignItems: "center",
  },
  resultText: {
    fontSize: 18,
    color: "#fff",
    marginVertical: 5,
  },
});
