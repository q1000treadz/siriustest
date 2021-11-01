import React from "react";
import { Pressable, Image } from 'react-native';
import { ImageApp, projectState, imageArray } from '../types';
import { connect } from "react-redux";
import { NavigationScreenProp } from 'react-navigation';
import { ScrollView } from "react-native-gesture-handler";

interface MainProps {
    image: Array<ImageApp>,
    navigation: NavigationScreenProp<any, any>
}

const Favourites: React.FC<MainProps> = ({ navigation, image }) => {
    return (
        <ScrollView style={{ paddingTop: 15, paddingLeft: 15, paddingRight: 15 }} contentContainerStyle={{ flexDirection: 'row', flexGrow: 1, flexWrap: 'wrap' }}>
            {image.map((img: ImageApp, index: number) =>
                <Pressable
                    onPress={() => navigation.navigate('PickedImage', { text: img.img, isFavourite: img.isFavourite, id: img.id })}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        height: 81,
                        width: '25%',
                        marginTop: 10, paddingLeft: 5, paddingRight: 5
                    }}
                    key={img.img}
                >
                    <Image
                        style={{ width: '100%', height: '100%', }}
                        source={{
                            uri: `file://` + img.img,
                        }}
                    />
                    <Image
                        source={require('../../assets/like.png')}
                        style={{
                            position: 'absolute',
                            left: '12%',
                            bottom: '7%',
                            height:20,
                            width:20
                        }}
                    />
                </Pressable>
            )}
        </ScrollView>
    )
}

function mapStateToProps(state: projectState): imageArray {
    let favouriteImages = state.image.filter((image: ImageApp) => image.isFavourite);
    return { image: favouriteImages };
}

export default connect(mapStateToProps)(Favourites)