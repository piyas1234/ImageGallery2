import React, { useContext } from 'react'
import { StyleSheet, Text, View , TextInput } from 'react-native'
import { DataContext } from '../../../App'

const Input = () => {
    
    const {input , setInput } = useContext(DataContext)
    console.log(input)

    return (
        <View>
            <TextInput onChangeText={(text)=>setInput(text)} placeholder="#Search image here.." placeholderTextColor="red"  />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({})
