import {ScrollView, Text,StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CardFamiliar from "../componentes/cardFamiliar";

export default function VistaCasos() {
  return (
    <SafeAreaView style={{ alignItems: "center",flex:1}}>
    <View style={{ flex:1}}>          
        <ScrollView
          style={ styles.scrollView }
          contentContainerStyle={{ alignItems: "center"  ,width: '100%'}}
        >
          <View style={{flexDirection: 'row'}}>
            <CardFamiliar style={ styles.cardFamiliar } navigateTo="Familiar"  data={{nombre: 'Chili', especie: 'Canino'}} />
            <CardFamiliar style={ styles.cardFamiliar } navigateTo="Familiar"  data={{nombre: 'Duque', especie: 'Canino'}} />
            
          </View>
          <View style={{flexDirection: 'row', width:'100%'}}>
            <CardFamiliar style={ styles.cardFamiliar } navigateTo="Familiar"  data={{nombre: 'Draco', especie: 'Canino'}} />
            <CardFamiliar style={ styles.cardFamiliar } navigateTo="Familiar"  data={{nombre: 'Sur', especie: 'Felino'}} />
          </View>
          <View style={{flexDirection: 'row', width:'100%'}}>
            <CardFamiliar style={ styles.cardFamiliar } navigateTo="Familiar"  data={{nombre: 'Draco', especie: 'Canino'}} />
            <CardFamiliar style={ styles.cardFamiliar } navigateTo="Familiar"  data={{nombre: 'Sur', especie: 'Felino'}} />
          </View>
          <View style={{flexDirection: 'row', width:'100%'}}>
            <CardFamiliar style={ styles.cardFamiliar } navigateTo="Familiar"  data={{nombre: 'Draco', especie: 'Canino'}} />
            <CardFamiliar style={ styles.cardFamiliar } navigateTo="Familiar"  data={{nombre: 'Sur', especie: 'Felino'}} />
          </View>
          <View style={{flexDirection: 'row', width:'100%'}}>
            <CardFamiliar style={ styles.cardFamiliar } navigateTo="Familiar"  data={{nombre: 'Draco', especie: 'Canino'}} />
            <CardFamiliar style={ styles.cardFamiliar } navigateTo="Familiar"  data={{nombre: 'Sur', especie: 'Felino'}} />
          </View>
        </ScrollView>
      
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 5,
    width: '100%'
  },
  containerScroll: {
    paddingBottom: 20,
    borderRadius: 10,
    margin: 12,
  },
  cardFamiliar: {
    margin: 5,
  }
});
