import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View , Image, ScrollView ,FlatList } from 'react-native'
import Cart from '../../Components/Cart/Cart'
const HomeScreens = () => {

    const [data, setData] = useState([])
    
    useEffect(() => {
        LoadData()
    }, [])

    const LoadData = async ()=>{
        const Data = await axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s')
        setData(Data.data.photos.photo)
         
    }

    console.log(data)

 

    return (
         <View > 
             <FlatList
              style={styles.imageCart}
              data={data} 
              numColumns={2}
              renderItem={(item)=><Cart item={item.item} name="jamal" /> }
              keyExtractor={item=>item.id} 
              />
              
         </View>
    )
}

export default HomeScreens

const styles = StyleSheet.create({
    
   
     
})
