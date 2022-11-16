import { Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from "./styles";

export function Home() {
  const participants = [
    'Tiago',
    'Karen',
    'Ester',
    'Roseli',
    'Wanderley',
    'Sheron',
    'Suelen',
    'Gustavo',
    'William',
    'Izabel'
  ];

  function handleParticipantAdd() {
    console.log('Você clicou no botão adicionar')
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text style={styles.eventDate}>
        Terça, 8 de Novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  );
}