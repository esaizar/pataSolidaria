import { View, StyleSheet } from 'react-native'
import { TextInput,Text as TextPaper, Button, useTheme } from 'react-native-paper'
import CampoTexto from './campos/campoTexto'
interface Props {
    onSumbit: Function,
    data: {
        nombre: string,
        celular: string,
        domicilio: string
    }
}
export default function FormularioEditarPerfil({data, onSumbit} : Props) {
    const theme = useTheme()
    return(
        <View style={{gap:20,marginVertical: 16,justifyContent: 'center',paddingHorizontal: '5%'}}>
            <CampoTexto
                label="Nombre"
                value={data?.nombre}
            />
            <CampoTexto
                label="Celular"
                value={data?.celular}
            />
            <CampoTexto
                label="Domicilio"
                value={data?.domicilio}
            />
            {/* <Button icon="map-marker" buttonColor={theme.colors.tertiary} style={{width: '100%', marginBottom: 24,borderRadius:10}} uppercase mode="contained" onPress={() => console.log('Pressed')}>
                Cargar otra ubicación
            </Button> */}
                
                <View style={{ flexDirection:'column', justifyContent:'space-evenly', width: '100%'}}>
                <Button buttonColor={theme.colors.primary} style={{  marginVertical: 8,borderRadius:10}} uppercase mode="contained" onPress={() => onSumbit((e:any)=>!e)}>
                    <TextPaper variant='labelLarge' style={{color: theme.colors.onPrimary, marginLeft: "5%"}}>Guardar</TextPaper>
                </Button>
                <Button  buttonColor={theme.colors.secondary} style={{  marginVertical: 8 ,borderRadius:10}} uppercase mode="contained" onPress={() => onSumbit((e:any)=>!e)}>
                    <TextPaper variant='labelLarge' style={{color: theme.colors.onSecondary, marginLeft: "5%"}}>Cancelar</TextPaper>
                </Button>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        alignItems: "center",
    },
    fotoFamiliar: {
        marginTop: 35,
    },
    nombreFamiliar: {
        // borderBottomWidth: 1,
        // borderEndColor: 'black',
        textAlign: 'center',
        width: 150,
        padding: 15,
    }
});
