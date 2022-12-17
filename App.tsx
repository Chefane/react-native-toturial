import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { createMetaProperty } from "typescript";

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.navigation}>
        <Text style={styles.textStyle}>Properties</Text>
  
          <Text style={styles.icons}>
            <Ionicons name="notifications-outline" size={20} color="black" />
          </Text>
          <Text style={styles.antDesign}>
          <AntDesign name="hearto" size={20} color="black" />
          </Text>
            
        
        
      </View>
      <View style={styles.body}>
        <Text>Body</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },

  navigation: {
    flex: 2,
    marginTop: 60,
    marginLeft: 20,
    color: "white",
    width: "100%",
  },

  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  icons: {
  textAlign: 'right',
  marginRight: 40,
  marginTop: -30
    
  },

  antDesign: {
  textAlign: 'right',
  marginRight: 70,
  marginTop: -25
  },

  body: {
    flex: 20,
    alignItems: "center",
  }
});
