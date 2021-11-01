export const GET_IMAGES = "GET_IMAGES"
export const GET_IMAGES_SUCCESS = "GET_IMAGES_SUCCESS"
export const REMOVE_IMAGE = "REMOVE_IMAGE"
export const REMOVE_IMAGE_SUCCESS = "REMOVE_IMAGE_SUCCESS"
export const REMOVE_IMAGE_FAILED = "REMOVE_IMAGE_FAILED"
export const ADD_FAVORITES = "ADD_FAVORITES"
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES"

interface GetImagesAction {
    type: typeof GET_IMAGES,
}

interface GetImagesSuccess {
    type: typeof GET_IMAGES_SUCCESS,
    urls: Array<string>
}
interface RemoveImageAction {
    type: typeof REMOVE_IMAGE,
    path: string,
    id: number
}

interface RemoveImageSuccess {
    type: typeof REMOVE_IMAGE_SUCCESS,
    id: number
}

interface removeImageFailed {
    type: typeof REMOVE_IMAGE_FAILED,
    id: number
}

interface AddToFavouritesAction {
    type: typeof ADD_FAVORITES,
    id: number
}

interface RemoveFromFavoutitesAction {
    type: typeof REMOVE_FAVOURITES,
    id: number
}

export interface ImageApp {
    img: string,
    isFavourite: boolean,
    id: number
}

export interface projectState {
    isImagesLoaded: boolean,
    image: Array<ImageApp>
}

export interface imageArray {
    image: Array<ImageApp>
}


export type FeedActionTypes = GetImagesAction | GetImagesSuccess | removeImageFailed | RemoveImageAction | RemoveImageSuccess | AddToFavouritesAction | RemoveFromFavoutitesAction