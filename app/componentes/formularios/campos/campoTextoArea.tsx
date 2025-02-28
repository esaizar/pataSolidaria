import { TextInput } from "react-native-paper";
import { Controller } from "react-hook-form";

type Props = {
    label: string,
    nombre: string,
    style?: object,
    cantLineas?: number,
    control?: any,
}

export default function CampoTextoArea({label,nombre,control,style,cantLineas}: Props) {
    return (
        <Controller 
            name={nombre}
            control={control}
            render={({field: {onChange, value, onBlur}} ) => (
                <TextInput
                    mode='outlined'
                    style={{ marginHorizontal:'5%',backgroundColor:'transparent',...style}}
                    label={label}
                    value={value}
                    onChangeText={value => onChange(value)}
                    multiline
                    numberOfLines={cantLineas || 5}
                />
                )}
        />
    )
}