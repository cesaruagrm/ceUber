import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './Login';
import Opciones from './Opciones';
import VehiculosDisponibles from './VehiculosDisponibles';

const Navigation = StackNavigator({
    Login:{
        screen: Login,
        navigationOptions:{
            header:null,
        }
    },
    Opciones:{
        screen:Opciones,
        navigationOptions:{
            header:null,
        }
    },
    VehiculosDisponibles:{
        screen:VehiculosDisponibles,
        navigationOptions:{
           title:'listas de vehiculos',
        }
    },

},{
});

export { Navigation };
