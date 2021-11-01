import {
    GET_IMAGES,
    GET_IMAGES_SUCCESS,
    REMOVE_IMAGE,
    ADD_FAVORITES,
    REMOVE_IMAGE_SUCCESS,
    REMOVE_IMAGE_FAILED,
    REMOVE_FAVOURITES,
    FeedActionTypes,
    ImageApp,
    projectState
} from '../types';

const defaultState: projectState = {
    isImagesLoaded: false,
    image: []
};

export const mainReducer = (state: projectState = defaultState, action: FeedActionTypes): projectState => {
    switch (action.type) {
        case GET_IMAGES:
            return state;
        case GET_IMAGES_SUCCESS:
            let newimage = [...state.image];
            let id: number = state.image.length == 0 ? 1 : (state.image[state.image.length - 1].id + 1)
            for (let i = 0; i < action.urls.length; i++) {
                newimage.push({ img: action.urls[i], id: id, isFavourite: false });
                id++;
            }
            return {
                ...state,
                isImagesLoaded: true,
                image: newimage
            }
        case REMOVE_IMAGE:
            return (
                state
            )
        case REMOVE_IMAGE_SUCCESS:
            return {
                ...state,
                image: state.image.filter(
                    (img) => img.id === action.id ? false : true
                )
            }
        case REMOVE_IMAGE_FAILED:
            return state;
        case ADD_FAVORITES:
            return {
                ...state,
                image: state.image.map(
                    (img) => img.id === action.id ? { ...img, isFavourite: true } : img
                )
            }
        case REMOVE_FAVOURITES:
            return {
                ...state,
                image: state.image.map(
                    (img) => img.id === action.id ? { ...img, isFavourite: false } : img
                )
            }
        default:
            return state;
    };
}