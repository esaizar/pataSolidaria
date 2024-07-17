//import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
      </Drawer>
      {/* <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack> */}
    </GestureHandlerRootView>
  );
}
