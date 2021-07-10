import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { DataContext } from '../../../App'

const Pagination = () => {

    const {page, setPage} = useContext(DataContext)
    console.log(page)
    return (
        <View style={styles.main}>
            <Button onPress={()=>setPage(page > 1 && page-1)} title="pre" />
            <Button onPress={()=>setPage(page)} title={`${page}`} />
            <Button onPress={()=>setPage(page+1)} title={`${page+1}`} />
            <Button onPress={()=>setPage(page+2)} title={`${page+2}`} />
            <Button onPress={()=>setPage(page+3)} title={`${page+3}`} />
            <Button onPress={()=>setPage(page+4)} title={`${page+4}`} />
            <Button onPress={()=>setPage(page+5)} title={`${page+5}`} />
            <Button  onPress={()=>setPage(page+6)} title={`${page+6}`} />
            <Button  onPress={()=>setPage(page+1)}  title="Next" />
        </View>
    )
}

export default Pagination

const styles = StyleSheet.create({

    main:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    }
})
