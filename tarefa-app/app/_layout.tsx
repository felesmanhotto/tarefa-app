import { Slot } from 'expo-router';

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return <Slot screenOptions={{ headerShown: false }} />;
}
