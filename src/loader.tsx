import React, { useEffect } from "react";
import { connect } from "react-redux";
import { GET_IMAGES, projectState } from './types';
import MainNavigator from './navigation/Navigator'
import { Text, View, Image } from "react-native";
interface loaderProps {
    isImagesLoaded: boolean,
    getImageFromSite: any
}

const Loader: React.FC<loaderProps | undefined> = ({ isImagesLoaded, getImageFromSite }) => {
    useEffect(() => {
        if (!isImagesLoaded)
            getImageFromSite()
    });
    return (isImagesLoaded ?
        <MainNavigator />
        :
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={require('../assets/loading.gif')}
                style={{ width: 100, height: 100 }}
            />
            <Text style={{
                fontFamily: 'Open Sans',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: 32,
            }}>LOADING</Text>
        </View>
    )
}
function mapStateToProps(state: projectState): any {
    return { isImagesLoaded: state.isImagesLoaded };
}

const mapDispatchToProps = (dispatch: any) => ({
    getImageFromSite: () =>
        dispatch({
            type: GET_IMAGES
        }),
})
export default connect(mapStateToProps, mapDispatchToProps)(Loader)