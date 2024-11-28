import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

import { useDeviceOrientation } from "@react-native-community/hooks";
export default function App() {
  const { lanscape } = useDeviceOrientation();
  console.log(lanscape);
  return (
    <SafeAreaView
      style={[
        styles.container,
        { paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
      ]}
    >
      <View
        style={{ width: "100%", height: "30%", backgroundColor: "blue" }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexGrow: 1,
    backgroundColor: "white",
  },
});
