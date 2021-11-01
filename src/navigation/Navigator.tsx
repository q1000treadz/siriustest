import React from "react"
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Gallery from "../components/gallery";
import Favourites from "../components/favourites";
import PickedImage from "../components/imagePicked";
import { Image, View } from "react-native";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator: React.FC = () => {
    return (
        <Tab.Navigator screenOptions={screen}>
            <Tab.Screen name='Gallery' component={Gallery}
                options={{
                    title: 'Все изображения',
                    tabBarLabel: 'Галерея',
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={focused ? require('../../assets/gallery_focused.png') : require('../../assets/gallery.png')}
                                style={{
                                    height: 24,
                                    width: 24
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name='Favourites' component={Favourites}
                options={{
                    title: 'Избранное',
                    tabBarLabel: 'Избранное',
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={focused ? require('../../assets/favourite_focused.png') : require('../../assets/favourite.png')}
                                style={{
                                    height: 24,
                                    width: 24
                                }}
                            />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const MainNavigator: React.FC = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name='pages' component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name='PickedImage' component={PickedImage}
                options={{
                    headerStyle: {
                        backgroundColor: '#790598'
                    },
                    headerTintColor: '#FFFFFF',
                    headerTitleStyle: {
                        fontSize: 22,
                        fontWeight: '600',
                        fontFamily: 'Open Sans',
                    },
                    headerTitleAlign: 'center',
                }}
            />
        </Stack.Navigator>
    )
}

const screen: BottomTabNavigationOptions = {
    tabBarActiveTintColor: '#A10D99',
    tabBarInactiveTintColor: '#949494',
    tabBarStyle: {
        height: 60,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: '600',
        fontFamily: 'Open Sans',
    },
    headerStyle: {
        backgroundColor: '#790598',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        height: 60,
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
        fontSize: 22,
        fontWeight: '600',
        fontFamily: 'Open Sans',
    },
    headerTitleAlign: 'center',
};

export default MainNavigator
