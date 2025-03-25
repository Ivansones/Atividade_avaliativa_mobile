import { View,Text,StyleSheet,Image,Button,TextInput } from 'react-native';
import { ImageBackground } from 'react-native-web';

export default function Home()
{
    return(
        

        <View style = {styles.fundo}>
            
            <View style = {styles.meio}  >
            <Text>Ola aqui eramos falar sobre cachorros sim olha o quao fofiho são esse doguinhos, mas lembrese que cuidar dels não
                é coisa facil, precisa de muuto esforço para impedir eles de destruir suas coisas e tambem necessitam de varios cuidados
            </Text>
            <View style = {styles.junta}>
            <Image source={require('../assets/fofo.jpg')} style = {{width:200,height:200}}/>
            <Image source={require('../assets/petisco.jpg')} style = {{width:200,height:200}}/>
            </View >
            <Text style = {styles.meio}>Então quando decidir ter um cachorro preste muita atenção sobre as  necessidades dele
                para que eles possa ter uma boa casa e moradia, e se possivel adote em vez de comprar
                isto ajuda os pobrecitos que estão nas ruas ter uma casa confortavel
            </Text>
            <View style = {styles.junta}>
                <Image  source={require('../assets/brincadera.jpg')} style = {{width:200,height:200}}/>
                <Image  source={require('../assets/comida.jpg')} style = {{width:200,height:200}}/>
            </View>
            <Text style = {styles.meio}> Assim finalizamos nossa conversinha sobre cachorros, top 1 animal do mundo na minha opiniao, agora aqui em baixo vai ter um login para que voce possa se juntar ao grupo que adora falar sobre dogs, muito cool</Text>
            </View>
        </View>


    )



}

const styles = StyleSheet.create({
  fundo: {
    flex:1,
  },
  meio: {

  },
    junta:
    {
        flexDirection:'row',
        justifyContent:'space-evenly'
    }
});