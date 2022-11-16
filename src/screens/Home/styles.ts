import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },

  eventName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },

  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
    marginTop: 7
  },

  input: {
    flex:1,
    height: 56,
    marginRight: 12,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFF',
    padding: 16,
    fontSize: 16
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },

  form: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 36,
    marginBottom: 42
  },

  listEmptyText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center'
  }
});
