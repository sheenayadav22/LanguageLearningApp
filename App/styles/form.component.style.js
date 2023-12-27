import { StyleSheet } from 'react-native';

const form = StyleSheet.create({
  inputContainer: {
    flex: 1,
    borderBottomWidth: 0,
    height: 40,
  },
  inputView: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    paddingTop: 20
  },
  inputText: {
    height: 10,
  },
  termsText: {
    fontSize: 12,
    padding: 10
  },
  button: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  },
  picker: {
    height: 150,
    width: "80%",
    color: '#1EA896',
    justifyContent: 'center',
  }
});

export default form;
