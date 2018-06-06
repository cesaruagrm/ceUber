import React , {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';


class Vehiculo extends Component {

    constructor(props) {
        super(props);
       //  console.log(props);
        this.state = {
            idUser: this.props.navigation.state.params.id,
            nombreUser:this.props.navigation.state.params.nombre,
            auto:this.props.navigation.state.params.auto,
            nombre:'',
            email:'',
            foto:'',
        }
        //  console.log(this.state.auto);
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        fetch('http://cesarapiprueba.proyectosuniversitarios.com/public/api/mostrar_usuario/'+this.state.auto.id_chofer)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                   nombre:responseJson.nombre,
                    email:responseJson.email,
                    foto:responseJson.foto,
                })
                console.log(this.state.foto)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    IdentificarUsuario=()=>{

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.buttonText}> Placa: {this.state.auto.placa}</Text>
                <Text style={styles.buttonText}>Color: {this.state.auto.color}</Text>
                <Text style={styles.buttonText}>Capacidad de Persona: {this.state.auto.capacidad}</Text>
                <Image
                    style={{width: 150, height: 75}}
                    source={{uri: 'http://cesarapiprueba.proyectosuniversitarios.com/public/img/auto/'+this.state.auto.id_chofer+'/'+this.state.auto.foto}}
                />
                        <Text>Datos Personales</Text>
                <Text style={styles.buttonText}> Nombre: {this.state.nombre}</Text>
                <Text style={styles.buttonText}>Email: {this.state.email}</Text>
                <Image
                    style={{width: 150, height: 75}}
                    source={{uri: 'http://cesarapiprueba.proyectosuniversitarios.com/public/img/foto/'+this.state.auto.id_chofer+'/'+this.state.foto}}
                />

                <TouchableOpacity style={styles.button} onPress={this.IdentificarUsuario}>
                    <Text style={styles.buttonText}>tomar Foto para Idenfiticar</Text>
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

export default Vehiculo;