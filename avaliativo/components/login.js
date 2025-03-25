import { View,Text,StyleSheet,Image,Button,TextInput } from 'react-native';

export default function Login()
{
    return(
        
        <View style = {styles.arruma}>
            
            <Text style = {styles.titulo}>
                Seja bem vindo ao login, aqui estão as opções 
            </Text>
            <TextInput
            placeholder='Nome'
            placeholderTextColor={'white'}
             />
            <TextInput
            placeholder='Senha'
            placeholderTextColor={'white'}
            />

            <Button  title="Fazer login"
            color={'purple'}
            //disabled para desabilitar
            />
        </View>

    )


}

const styles = StyleSheet.create({
    arruma: {
        alignItems:'center',
    },
    titulo:{
        fontSize:20,
        fontWeight:'bold'
    }
  });
  
