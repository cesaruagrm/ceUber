import React , {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';


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
            imagePath: '',
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


    abrirCamera = () => {
        const options = {
            title: 'select Foto',
            storageOptions:{
                skipBackup: true,
                path: 'images'
            }
        }
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('cancelado por el usuario')
            } else if (response.error) {
                console.log('error' + response.error)
            }else if (response.customButton) {
                console.log('user custon' + response.customButton)
            }else {
                this.setState({
                    imagePath: 'data:image/jpeg;base64,'+ response.data
                })
                console.log(this.state.imagePath)

            }

        })

    }

    verificar = (props) => {
        console.log(this.state);
        fetch('http://cesarapiprueba.proyectosuniversitarios.com/public/api/compararDosImagen', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id_chofer: this.state.auto.id_chofer,
            foto: this.state.imagePath,
          }),

        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
           if (responseJson.status=== 'Fail') {
             alert(responseJson.message);
           }
          if (responseJson.status=== 'error') {
             alert(responseJson.message);
           }
           if (responseJson.status=== 'success') {
             alert(responseJson.message);
           }

          })
        .catch((error) => {
              console.error(error);
        });

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

                <Image  style={styles.lugar}
                       source = {{uri: this.state.imagePath}} />

                <TouchableOpacity style={styles.button} onPress={this.abrirCamera.bind(this)}>
                    <Text style={styles.buttonText}>tomar Foto para Idenfiticar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={this.verificar}>
                    <Text style={styles.buttonText}>Verificar Foto</Text>
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
        textAlign: 'center'
    },
    lugar: {
        marginTop:20,
        width:150,
        height:75,

    },
});

export default Vehiculo;