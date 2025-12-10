import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Link, router } from 'expo-router';
import { EditScreenInfo } from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>{title} Vishnu</Text>
      <View className={styles.separator} />
      <EditScreenInfo path={path} />
      {children}
      <Link href="/users/1">User 1</Link>
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: '/users/[id]',
            params: { id: '2' },
          })
        }>
        <Text>User 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: '/vishnu',
          })
        }>
        <Text>Vishnu Page</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = {
  container: `items-center flex-1 justify-center bg-white`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
