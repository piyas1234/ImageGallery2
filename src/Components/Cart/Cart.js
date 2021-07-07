import React from 'react'
import { StyleSheet, Text, View , Image } from 'react-native'

const Cart = (props) => {
    console.log(props)
    const {item , name} = props;
    console.log(name)

    return (
        <View style={styles.container}>
            <View style={styles.main}>
             
            <Image style={styles.image} source={{uri:item.url_s}} />
        
            </View>
        </View>
         
    )
}

export default Cart

const styles = StyleSheet.create({


    container: {
        width: '50%',
      },
      main: {
        borderWidth: 5,
        borderColor: 'white',
        width: '100%',
        height: 200,
        elevation: 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      image: {
        height: '100%',
        width: '100%',
      },
    
})
