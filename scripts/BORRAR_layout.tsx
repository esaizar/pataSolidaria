import { Tabs } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";

export default function TabLayout() {
  
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: "#006064",
        tabBarActiveTintColor: "black",
        headerStyle: { backgroundColor: "#006064" },
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerLeftContainerStyle: { marginLeft: 10 },
        headerLeft: ({tintColor}) => <MaterialIcons name="menu" size={24} color={tintColor} />,
        headerRightContainerStyle: { marginRight: 10 },
        headerRight: ({tintColor}) => <Ionicons name="person-circle-outline" size={24} color={tintColor} />,
      }}
    >
      <Tabs.Screen
        name="casos"
        options={{
          title: "Casos",
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ?{ backgroundColor: "#00606435", paddingHorizontal: 18, paddingVertical: 3, borderRadius: 18 } : null}>
              <MaterialIcons name="crisis-alert" size={24} color={"#006064"} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        // Esta ruta será la principal porque index es la primer ruta que busca en la carpeta
        name="index"
        options={{
          title: "Familia",
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ?{ backgroundColor: "#00606435", paddingHorizontal: 18, paddingVertical: 3, borderRadius: 18 } : null}>
              <MaterialIcons name="pets" size={24} color={"#006064"} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="adopciones"
        options={{
          title: "Adopciones",
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ?{ backgroundColor: "#00606435", paddingHorizontal: 18, paddingVertical: 3, borderRadius: 18 } : null}>
              <MaterialIcons name="favorite" size={24} color={"#006064"} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}