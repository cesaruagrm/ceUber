import React , {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity,ListView,Image} from 'react-native';
import { NavigationActions } from 'react-navigation';


class VehiculosDisponibles extends Component {

    constructor(props) {
        super(props);
        //  console.log(props);
        this.state = {
            idUser: this.props.navigation.state.params.id,
            nombreUser:this.props.navigation.state.params.nombre,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1,row2) => row1 !== row2
            })
        }
        //  console.log(this.state.iduser);
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        fetch('http://cesarapiprueba.proyectosuniversitarios.com/public/api/lista_auto')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseJson)
                })
                console.log(this.state.dataSource)
            })
            .catch((error) => {
                console.error(error);
            });
    }


    Atras = () => {
        console.log(NavigationActions);
        const navigateAction = NavigationActions.back();
        this.props.navigation.dispatch(navigateAction);
    }

    SeleccionarVehiculo(auto){
        const navigateAction = NavigationActions.navigate({
            routeName: 'Vehiculo',
            params: {
                id: this.state.idUser,
                nombre: this.state.nombreUser,
                auto}
        });
        this.props.navigation.dispatch(navigateAction);
    }

    renderVehiculo(auto){
        console.log(auto)
        return(
            <View style={styles.auto}>
                <Text style={styles.buttonText}> Placa: {auto.placa}</Text>
                <Text style={styles.buttonText}>Color: {auto.color}</Text>
                <Text style={styles.buttonText}>Capacidad de Persona: {auto.capacidad}</Text>
                <Image
                    style={{width: 150, height: 75}}
                    source={{uri: 'http://cesarapiprueba.proyectosuniversitarios.com/public/img/auto/'+auto.id_chofer+'/'+auto.foto}}
                />
                <TouchableOpacity  onPress={() => this.SeleccionarVehiculo(auto)}>
                    <Text style={styles.buttonText}>Seleccionar</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderVehiculo.bind(this)}
                    style={styles.ListView}
                />
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

        backgroundColor: '#fff',
    },
    auto: {
        flex: 1,
        alignItems:'center',
        backgroundColor: 'yellow',
        marginBottom:10,
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
        textAlign: 'center'
    },
});

export default VehiculosDisponibles;