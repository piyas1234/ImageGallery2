import  React, { createContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreens from './src/Screens/HomeScreens';
import AccountScreens from './src/Screens/AccountScreens';
import axios from 'axios';
const Stack = createStackNavigator();



export const  DataContext = createContext() 

const App = () => {

const [data, setData] = useState([])
const [input, setInput] = useState("")
const [page, setPage] = useState(1)
const value = { data,  setData , input, setInput , page, setPage}

useEffect(() => {
    LoadData()
    
}, [ page])

const searchData = async ()=>{
    const Data = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s&text=${input}`)
    setData(Data.data.photos.photo)
     
}

const LoadData = async ()=>{
    const Data = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=${page}&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s`)
    setData(Data.data.photos.photo)
     
}


console.log(data)

  return (
    <DataContext.Provider value={value}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreens} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Profile" component={AccountScreens} />
      </Stack.Navigator>
    </NavigationContainer>
    </DataContext.Provider>
 
  );
};


export default App;