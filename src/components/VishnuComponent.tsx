import { ReactElement } from 'react';
import { Alert, Button, View } from 'react-native';

export default function VishnuComponent(): ReactElement {
  return (
    <>
      <View className="flex-1 items-center justify-center bg-white">
        <Button
          title="Vishnu Component"
          onPress={() => {
            Alert.alert('Hello');
          }}
        />
      </View>
    </>
  );
}
