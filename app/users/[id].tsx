import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'

export default function UserPage() {
    const id = useLocalSearchParams().id;
    const router = useRouter();
  return (
    <View className={styles.container}>
      <Text>User page: {id}</Text>
      <TouchableOpacity className='flex align-middle content-center' onPress={() => router.back()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = {
  container: `items-center flex-1 justify-center bg-white`,
};