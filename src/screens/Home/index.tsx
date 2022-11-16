import { Text, TextInput, View, TouchableOpacity } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from "./styles";


export function Home() {
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
      <Participant name='Tiago Augusto' onRemove={() => handleParticipantRemove("Tiago Augusto")} />
      <Participant name='Karen Camargo' onRemove={() => handleParticipantRemove("Karen Camargo")} />
      <Participant name='Ester Jade' onRemove={() => handleParticipantRemove("Ester Jade")} />
      <Participant name='Roseli Guirau' onRemove={() => handleParticipantRemove("Roseli Guirau")} />
    </View>
  );
}