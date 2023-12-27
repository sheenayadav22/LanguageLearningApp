import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  centered: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  safeAreaContainer: {
    flex: 1
  },
  titleArea20: {
    flex: 0.2,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  titleArea15: {
    flex: 0.15,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  titleArea10: {
    flex: 0.1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  contentArea65: {
    flex: 0.65,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column'
  },
  contentArea70: {
    flex: 0.75,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  contentArea75: {
    flex: 0.75,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  navigationButtonArea: {
    flex: 0.15,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  lessonNameArea: {
    flex: 0.06,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ABA194'
  },
  lessonContentArea: {
    flex: 0.82
  },
  lessonNavButtonArea:{
    flex: 0.12,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  nextScreenButton: {
    justifyContent: "center",
    backgroundColor:'teal',
    color: "white",
  },
  dialogLeft: {
    flexDirection:"row",
    justifyContent: "flex-start"
  },
  dialogRight: {
    flexDirection:"row",
    justifyContent: "flex-end"
  },
  multilineCenteredText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  },
  levelButton: {
    marginRight:10,
    marginLeft:10,
    marginTop:5,
    marginBottom:5,
    backgroundColor:'white',
    borderRadius:15,
    borderColor: '#fff',
    justifyContent: "center"
  },
  levelSelectText: {
    marginRight:10,
    marginLeft:10,
    marginTop:5,
    marginBottom:5,
    paddingBottom:5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "#1EA896",
    fontSize: 18
  },
  lessonIntroText: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    color: 'black',
    fontSize: 16
  },
  languageTitle: {
    flexDirection:"row",
    justifyContent: 'space-between',
    backgroundColor:'white',
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 20
  },
  languageTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#1EA896",
    alignSelf: 'center',
    textAlign: 'center'
  },
  backButtonLarge: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: "#1EA896",
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10
  },
  backButtonText: {
    marginTop:10,
    marginBottom:10,
    color: "white",
    fontSize: 18
  },
  subTitleText: {
    flexDirection:"row",
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16
  },
  topicSelect: {
    flex: 1,
    flexDirection: 'column',
  },
  navButtonPair: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navButton: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: "#1EA896",
    marginBottom: 10
  },
  navButtonText: {
    marginTop:10,
    marginBottom:10,
    color: "white",
    fontSize: 18
  },
  scrollView: {
    flex: 1,
    width: '90%'
  },
  lessonTitleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 12,
    paddingLeft: 12
  },
  lessonTitleText: {
    color: 'white',
    fontSize: 16
  },
  lessonContinueButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: "#1EA896",
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 5
  },
  lessonContinueButtonText: {
    marginTop:10,
    marginBottom:10,
    color: "white",
    fontSize: 18
  }
});
