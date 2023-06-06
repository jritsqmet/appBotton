import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Welcome from '../Screens/Welcome';
import Perfil from '../Screens/Perfil';

const Tab = createBottomTabNavigator();

function MyTab(){
    return(
        <Tab.Navigator tabBarOptions={{
            tabBarLabelStyle: { color: '' } 
          }}>
            <Tab.Screen name= 'Welcome' component={ Welcome }

                options={{tabBarIcon:({color, size})=>
                <MaterialCommunityIcons name="home-outline" size={24} color="black" />    
                }}
            />
            <Tab.Screen name= 'Perfil' component={ Perfil }   
                options={{tabBarIcon:({})=>
                <MaterialCommunityIcons name="account-cowboy-hat-outline" size={24} color="black" />
            }}
            />
        </Tab.Navigator>
    )
}

export default function BottonTab(){
    return(
        <NavigationContainer>
            <MyTab/>
        </NavigationContainer>
    )
}