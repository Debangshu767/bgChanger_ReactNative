import { View, Text, StatusBar, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { styled } from 'nativewind'

const App = () => {

  const[color,setcolor] = useState('#ABC767')

  const handlepress = () => {

    const hexRange = "0123456789ABCDEF"
    let color = '#'

    for(let i = 0;i<6;i++)
      color += hexRange[Math.floor(Math.random() * 16)]
    setcolor(color)
  }
  console.log(`bg-[${color}]`)
  return (
    <>
      <StatusBar backgroundColor={color} />
      <View className={`h-full p-2 flex justify-center items-center `} style={{backgroundColor : color}} >
        <TouchableOpacity onPress={handlepress}>
          <View className='flex justify-center items-center' >
            <Text className=' text-xl rounded-xl bg-teal-500 p-2 text-white' > press me </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>

  )
}

export default App