import {
    GET_IMAGES,
    GET_IMAGES_SUCCESS,
    REMOVE_IMAGE,
    REMOVE_IMAGE_SUCCESS,
    REMOVE_IMAGE_FAILED,
    ADD_FAVORITES,
    REMOVE_FAVOURITES
} from '../types';

export function getImg() {
    return { type: GET_IMAGES };
}

export function getImgSuccess(urls: any) {
    return { type: GET_IMAGES_SUCCESS, urls: urls };
}

export function removeImageFromStore(id: number, path: string) {
    return { type: REMOVE_IMAGE, path: path, id: id };
}

export function removeImageSuccess(id: number) {
    return { type: REMOVE_IMAGE_SUCCESS, id: id };
}

export function removeImageFailed(id: number) {
    return { type: REMOVE_IMAGE_FAILED, id: id };
}

export function addImageToFavourites(id: number) {
    return { type: ADD_FAVORITES, id: id };
}

export function removeImageFromFavourites(id: number) {
    return { type: REMOVE_FAVOURITES, id: id };
}