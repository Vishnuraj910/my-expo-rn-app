import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: 'Home Page',
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="users/[id]"
        options={{
          headerShown: true,
          headerTitle: 'User Page',
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="vishnu/index"
        options={{
          headerShown: true,
          headerTitle: 'Vishnu Page',
          animation: 'slide_from_right',
        }}
      />
    </Stack>
  );
}
