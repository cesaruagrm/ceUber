import React , {Component} from 'react';
import { NavigationActions } from 'react-navigation';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

class Opciones extends Component {

    constructor(props) {
        super(props);
      //  console.log(props);
        this.state = {
            idUser: this.props.navigation.state.params.id,
            nombreUser:this.props.navigation.state.params.nombre,
        }
       //  console.log(this.state.iduser);

    }

    VehiculosDisponibles = () => {
        const navigateAction = NavigationActions.navigate({
            routeName: 'VehiculosDisponibles',
            params: {
                id: this.state.idUser,
                nombre: this.state.nombreUser
            }
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return(

            <View style={styles.container}>
                <View style={styles.Cabereza}>
                    <Text  style={styles.buttonText}> Opciones </Text>
                    <Text  style={styles.buttonText}> Bienvenido:  {this.state.nombreUser} </Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.VehiculosDisponibles}>
                    <Text style={styles.buttonText}>Vehiculo disponibles</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    Cabereza: {
        fontSize: 16,
        height: 60,
        alignItems:'center',
        alignContent:'center',
        textAlign:'center',
        fontWeight: '500',
        backgroundColor:'black',
        marginBottom:30,
    },

});

export default Opciones;