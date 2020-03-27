import {StyleSheet, } from 'react-native'
import Constants from 'expo-constants'


export default StyleSheet.create({ 
    Container: { 
 flex: 1, 
 paddingHorizontal: 24,
 paddingTop: Constants.statusBarHeight + 20,

    }, 
    header:  { 
        flexDirection: 'row', 
        justifyContent: 'space-between' , 
        alignItems: 'center'

    }, 
    headerText:  { 
        fontSize: 15,
        color: '#737380'
    },

    headerTextBolds: { 
        fontWeight: 'bold'
    }, 

    title: { 
        fontSize: 30,
        marginBottom: 18,
        marginTop: 48, 
        color: '#13131a',
        fontWeight: 'bold'
    }, 
    description : { 
        fontSize: 18 ,
        lineHeight: 24,
        color: '#737380'
    },
   
    incidentlist: { 
        marginTop: 32,
    },

    incident: { 
        padding: 24,
        borderRadius:9,
        backgroundColor: '#fff',
        marginBottom: 18

    },
      incidentproperty: { 
          fontSize: 14,
          color: '#41414d',
          fontWeight: 'bold',

      },

      incidentvalue: { 
         marginTop: 9 , 
         fontSize: 15,
         marginBottom: 24, 
         color: '#737380', 
                 
      }, 

    detailsbutton: { 
        flexDirection: 'row', 
        justifyContent: 'space-between',
           alignItems: 'center'
    }, 
   detailsbuttontext: { 
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
   }
      
     









}) 
