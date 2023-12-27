import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  numberBox: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#808080',
    width: 90,
    height: 90,
    borderRadius:10
  },
  numberBoxCompleted: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#1EA896',
    width: 90,
    height: 90,
    borderRadius:10
  },
  descriptionBox: {
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 10
  },
  numberText: {
    fontSize: 30,
    color: 'white',
    marginLeft: 5
  },
  statusText: {
    fontSize: 10,
    color:'white',
    marginLeft: 5
  },
  latinText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  englishText: {
    fontSize: 18,
    color: '#808080'
  },
  selectButtonUnlocked: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: "#1EA896",
    borderRadius: 10,
    marginRight: 30,
    marginLeft: 30
  },
  selectButtonLocked: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: "#B8D0CD",
    borderRadius: 10,
    marginRight: 30,
    marginLeft: 30,
    
  },
  selectButtonText: {
    marginTop:5,
    marginBottom:5,
    color: "white",
    fontSize: 16  
  }
});