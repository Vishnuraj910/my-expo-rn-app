import { router } from 'expo-router';
import { ReactElement } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'tamagui';

export default function VishnuComponent(): ReactElement {
  return (
    <>
      <View className="flex-1 items-center justify-center bg-white">
        <TouchableOpacity
          className="rounded border-b-4 border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
          onPress={() => {
            Alert.alert('Hello');
          }}>
          <Text>Press Me</Text>
        </TouchableOpacity>
        <Button
          size="$4"
          mt="$4"
          onPress={() => {
            router.back();
          }}>
          {' '}
          Back{' '}
        </Button>
      </View>
    </>
  );
}
