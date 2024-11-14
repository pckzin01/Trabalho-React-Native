import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Home } from './src/screens/Home';
import { Login } from './src/screens/Login';
import { LoginInput } from './src/screens/LoginInput';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Home />
      {/* <Login /> */}
      {/* <LoginInput /> */}
    </>
  );
}
