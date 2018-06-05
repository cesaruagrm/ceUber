import React , {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { NavigationActions } from 'react-navigation';


class VehiculosDisponibles extends Component {

    constructor(props) {
        super(props);
        //  console.log(props);
        this.state = {
            idUser: this.props.navigation.state.params.id,
            nombreUser:this.props.navigation.state.params.nombre,
        }
        //  console.log(this.state.iduser);

    }

    Atras = () => {
        console.log(NavigationActions);
        const navigateAction = NavigationActions.back();
        this.props.navigation.dispatch(navigateAction);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text> VehiculosDisponibles </Text>
                <TouchableOpacity style={styles.button} onPress={this.Atras}>
                    <Text style={styles.buttonText}>Atras</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#fff',
    },
});

export default VehiculosDisponibles;