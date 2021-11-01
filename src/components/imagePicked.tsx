import React, { useEffect } from "react";
import { StyleSheet, Image, Pressable, Text, View } from "react-native";
import { REMOVE_IMAGE, ADD_FAVORITES, REMOVE_FAVOURITES} from '../types';
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

interface props1 {
    navigation: any,
    route: any,
    addToFavorites: (id: number) => any,
    removeFromFavorites: (id: number) => any,
    removeFromStore: (id: number, path: string) => any,
}
const PickedImage: React.FC<props1> = ({ removeFromStore, addToFavorites, removeFromFavorites, navigation, route }) => {
    let { text, isFavourite, id } = route?.params;
    useEffect(() => {
        navigation.setOptions({ title: text })
    });

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={{ width: 400, height: 400, marginTop: 50 }}
                    source={{
                        uri: `file://` + text,
                    }}
                />
            </ScrollView>
            <View style={{
                marginLeft: 15,
                marginRight: 15,
                marginBottom: 15
            }}>
                {
                    isFavourite === true ?
                        <Pressable onPress={() => { removeFromFavorites(id); navigation.goBack() }} style={styles.button1}>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                <Image source={require('../../assets/unlike.png')}
                                    style={{
                                        height: 20,
                                        width: 20
                                    }} />
                                <Text style={{ ...styles.text, marginTop: 14 }}>Убрать из избранного</Text>
                            </View>
                        </Pressable>
                        :
                        <Pressable onPress={() => { addToFavorites(id); navigation.goBack() }} style={styles.button1}>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                <Image source={require('../../assets/like.png')}
                                    style={{
                                        height: 20,
                                        width: 20
                                    }} />
                                <Text style={{ ...styles.text, marginTop: 14 }}>Добавить в избранное</Text>
                            </View>
                        </Pressable>
                }
                <Pressable onPress={() => { removeFromStore(id,text); navigation.goBack() }} style={styles.button2}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <Image source={require('../../assets/rubbish.png')}
                            style={{
                                height: 20,
                                width: 20
                            }} />
                        <Text style={{ ...styles.text, marginTop: 8 }}>Удалить изображение</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button2: {
        height: 43,
        backgroundColor: '#FFFFFF',
        width: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    button1: {
        height: 43,
        backgroundColor: '#FFFFFF',
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    text: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});
const mapDispatchToProps = (dispatch: any) => ({
    removeFromStore: (id,path) =>
        dispatch({
            type: REMOVE_IMAGE,
            id,
            path
        }),
    addToFavorites: (id) =>
        dispatch({
            type: ADD_FAVORITES,
            id,
        }),
    removeFromFavorites: (id) =>
        dispatch({
            type: REMOVE_FAVOURITES,
            id,
        })
});

export default connect(null, mapDispatchToProps)(PickedImage);
