import {ScrollView,StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CardFamiliar from "../componentes/cardFamiliar";
import CardExtravio from "../componentes/cardExtravio";
import { Banner, Divider, Text, useTheme } from "react-native-paper";

export default function VistaCasos() {
  const theme = useTheme()
  return (
    <View>
          <Banner visible style={{margin: 10, borderRadius: 20,backgroundColor: theme.colors.tertiaryContainer}}>
            <Text style={{textAlign: 'center',color:theme.colors.onTertiaryContainer}}>Aquí podrás todos los casos de compañeros perdidos y avistados</Text>
          </Banner>
          <ScrollView
            style={{width: '100%'}}
            contentContainerStyle={{ alignItems: "center"  ,width: '100%'}}
          >
            <View style={{flexDirection: 'row'}}>
              <CardExtravio style={ styles.cardFamiliar } navigateTo="Familiar"  data={{nombre: 'Chili', especie: 'Canino'}} />
              <CardExtravio style={ styles.cardFamiliar } navigateTo="Familiar"  data={{nombre: 'Duque', especie: 'Canino'}} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <CardExtravio style={ styles.cardFamiliar } navigateTo="Familiar"  data={{nombre: 'Draco', especie: 'Canino'}} />
              <CardExtravio style={ styles.cardFamiliar } navigateTo="Familiar"  data={{nombre: 'Sur', especie: 'Felino'}} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <CardExtravio style={ styles.cardFamiliar } navigateTo="Familiar"  data={{nombre: 'Draco', especie: 'Canino'}} />
              <CardExtravio style={ styles.cardFamiliar } navigateTo="Familiar"  data={{nombre: 'Sur', especie: 'Felino'}} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <CardExtravio style={ styles.cardFamiliar } navigateTo="Familiar"  data={{nombre: 'Draco', especie: 'Canino'}} />
              <CardExtravio style={ styles.cardFamiliar } navigateTo="Familiar"  data={{nombre: 'Sur', especie: 'Felino'}} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <CardExtravio style={ styles.cardFamiliar } navigateTo="Familiar"  data={{nombre: 'Draco', especie: 'Canino'}} />
              <CardExtravio style={ styles.cardFamiliar } navigateTo="Familiar"  data={{nombre: 'Sur', especie: 'Felino'}} />
            </View>
          </ScrollView>
    </View> 
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: '100%'
  },
  containerScroll: {
    paddingBottom: 20,
    borderRadius: 10,
  },
  cardFamiliar: {
    margin: 8,
  }
});
