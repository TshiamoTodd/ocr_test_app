import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowLeft } from 'lucide-react-native'
import { router } from 'expo-router'

const Header = ({title, subTitle, isTransparent}: {title: string, subTitle?:string, isTransparent: boolean}) => {
  return (
    <View className='flex flex-row items-center w-full justify-between px-3'>
        <View className='flex'>
            <Text className='text-2xl font-semibold'>{title}</Text>
            <Text>
                {subTitle}
            </Text>
        </View>
        <TouchableOpacity
            onPress={() => router.replace('/')}
        >
            <ArrowLeft color={'teal'} size={30} />
        </TouchableOpacity>
    </View>
  )
}

export default Header