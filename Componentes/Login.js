import React , {Component} from 'react';
import {View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';



class Login extends Component {

    onPressButton=()=>{
        alert('hola')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../asset/uber.png')}/>
                </View>

                <View style={styles.FormContainer}>
                    <TextInput
                        placeholder="email"
                        returnKeyType="next"
                        keyboardType="email-address"
                    style={styles.input}
                    />
                    <TextInput
                        placeholder="password"
                        secureTextEntry
                        returnKeyType="go"
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.button} onPress={this.onPressButton}>
                        <Text style={styles.buttonText}>Iniciar Sesion</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: 'black',
        margin:'auto',

    },
    logo:{
      width:200,
      height:100
    },
    logoContainer:{
        alignItems:'center',
        flexGrow:1,
        justifyContent:'center'
    },
    FormContainer:{
        alignContent:'center',
        flex:1,
        justifyContent:'center'
    },
    input:{
        height:40,
        backgroundColor:'#20B2AA',
        marginBottom:10,
        color:'#fff',
        fontWeight:'bold',
        paddingHorizontal:10
    },
    button: {
        backgroundColor: '#B22222',
        paddingHorizontal:16,
        marginVertical:10,
        paddingVertical:12,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
});

export default Login;
