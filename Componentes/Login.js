import React , {Component} from 'react';
import { NavigationActions } from 'react-navigation';
import {View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';



class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:'',
        };
    }




    onPressButton=(props)=>{
        const navigateAction = NavigationActions.navigate({
            routeName: 'Opciones',
            params: {
                id: '2',
                nombre: 'cesar'
            }
        });

        this.props.navigation.dispatch(navigateAction);


        /*console.log(this.state);
        fetch('http://cesarapiprueba.proyectosuniversitarios.com/public/api/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            }),

        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.status=== 'true') {
                    const navigateAction = NavigationActions.navigate({
                        routeName: 'Opciones',
                        params: {
                            id: responseJson.id,
                            nombre: responseJson.nombre
                        }
                    });

                    this.props.navigation.dispatch(navigateAction);
                }else{
                    alert('email o password erroneos');
                }



            })
            .catch((error) => {
                console.error(error);
            });*/
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
                        onChangeText={(email) => this.setState({email})}
                    style={styles.input}
                    />
                    <TextInput
                        placeholder="password"
                        secureTextEntry
                        returnKeyType="go"
                        onChangeText={(password) => this.setState({password})}
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
    container1: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
});

export default Login;
