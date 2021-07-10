import axios from 'axios'
import React, { useContext  } from 'react'
import { StyleSheet, Text, View , Image, ScrollView ,FlatList } from 'react-native'
import { DataContext } from '../../../App'
import Cart from '../../Components/Cart/Cart'
import Input from '../../Components/Input'
import Pagination from '../../Components/Pagination'
const HomeScreens = () => {
 
     
    const  {data, setData} = useContext(DataContext)
     console.log(data)
     console.log(setData)

    return (
         <View > 

             <Input/>
             <FlatList
              style={styles.imageCart}
              data={data} 
              numColumns={2}
              renderItem={(item)=><Cart items={item.item} name="jamal" /> }
              keyExtractor={item=>item.id} 
               
              />
            <Pagination/>
         </View>
    )
}

export default HomeScreens

const styles = StyleSheet.create({
    
    imageCart:{
        height:'85%'
    }
     
})
