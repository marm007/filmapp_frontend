import React, { useEffect, useReducer, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { initialProfileState, profileReducer } from './reducer';

import Film from '../../models/film';
import Playlist from '../../models/playlist';

import * as userApi from '../../../services/userService'
import * as playlistApi from '../../../services/playlistService'
import * as filmApi from '../../../services/filmService'

import { pageInitialMaxFetchCount, pageMaxFetchCount } from '../../../config';

import UserContext from '../../../helpers/contexts/user/userContext';
import RemoveModalContext from '../../../helpers/contexts/removeModal/removeModalContext';
import useBottomScrollListener from '../../../helpers/hooks/useBottomScrollListener';

import image_not_found from '../../../images/image_not_found.png'; // Tell Webpack this JS file uses this image
import Skeleton from '../../models/film/skeleton'
import 'core-js/modules/esnext.promise.all-settled'

const Profile = () => {

    const { user, clearUser } = useContext(UserContext)

    const { showModal, clear, removeModalData } = useContext(RemoveModalContext)

    let history = useHistory()

    const [state, dispatch] = useReducer(profileReducer, initialProfileState)
    const { data, isLoading, isAllFetched, isInitialLoaded, error, isRemoving, toRemove, filmsCount, playlistsCount } = state

    const handleProfileOnBottom = useCallback(() => {
        if (!isLoading && !isAllFetched && isInitialLoaded && !error) {
            dispatch({
                type: 'load'
            })
        }
    }, [isLoading, isAllFetched, isInitialLoaded, error])

    useBottomScrollListener(handleProfileOnBottom, { triggerOnNoScroll: true })

    useEffect(() => {
        if (!user.auth && user.isInitialLoaded) {
            history.replace(`${process.env.REACT_APP_PATH_NAME}`)
            history.push(`${process.env.REACT_APP_PATH_NAME}login`)
            clearUser()
        }
    }, [user, history, clearUser])

    useEffect(() => {
        async function fetchInitialData() {

            const [response] = await Promise.allSettled([
                userApi.me({ skipFilms: 0, skipPlaylists: 0, limit: pageInitialMaxFetchCount })
            ])

            let data = []

            let films = []
            let playlists = []

            if (response.status === "fulfilled") {
                films = response.value.data.films.map(film => {
                    return {
                        ...film,
                        img: `${process.env.REACT_APP_API_URL}films/${film.id}/thumbnail`,

                    }
                })

                playlists = response.value.data.playlists.map(playlist => {
                    const image = playlist.film_id ?
                        `${process.env.REACT_APP_API_URL}films/${playlist.film_id}/thumbnail` :
                        image_not_found
                    return {
                        ...playlist,
                        img: image,
                        isPlaylist: true

                    }
                })

                data = [...data, ...films, ...playlists]
            }

            dispatch({
                type: 'initial-success',
                data: data,
                filmsCount: films.length,
                playlistsCount: playlists.length,
            })
        }

        dispatch({ type: 'clear' })
        fetchInitialData()

    }, [])

    useEffect(() => {
        async function fetchData() {
            const [response] = await Promise.allSettled([
                userApi.me({ skipFilms: filmsCount, skipPlaylists: playlistsCount, limit: pageMaxFetchCount })
            ])

            let data = []

            let films = []
            let playlists = []

            if (response.status === "fulfilled") {
                films = response.value.data.films.map(film => {
                    return {
                        ...film,
                        img: `${process.env.REACT_APP_API_URL}films/${film.id}/thumbnail`,

                    }
                })

                playlists = response.value.data.playlists.map(playlist => {
                    const image = playlist.film_id ?
                        `${process.env.REACT_APP_API_URL}films/${playlist.film_id}/thumbnail` :
                        image_not_found
                    return {
                        ...playlist,
                        img: image,
                        isPlaylist: true

                    }
                })

                data = [...data, ...films, ...playlists]
            }

            dispatch({
                type: 'success',
                data: data,
                filmsCount: films.length,
                playlistsCount: playlists.length,
            })
        }

        if (isLoading && isInitialLoaded) fetchData()
    }, [filmsCount, isLoading, playlistsCount, isInitialLoaded])

    useEffect(() => {
        async function remove() {

            try {
                if (toRemove.isPlaylist) {
                    const resPlaylist = await playlistApi.remove(toRemove.id)
                    if (resPlaylist.status === 204) {
                        dispatch({
                            type: 'remove-success'
                        })
                        clear()
                    }
                } else {
                    const resFilm = await filmApi.remove(toRemove.id)
                    if (resFilm.status === 204) {
                        dispatch({
                            type: 'remove-success'
                        })
                        clear()
                    }
                }
            } catch (err) {
                console.error(err)
            }
        }
        if (isRemoving && removeModalData.isRemoving && toRemove &&
            removeModalData.id === toRemove.id && removeModalData.title === toRemove.title &&
            removeModalData.type === (toRemove.isPlaylist ? 'playlist' : 'film')) remove()
    }, [isRemoving, removeModalData, toRemove, clear])

    const handleRemove = (e, resource) => {
        e.stopPropagation()
        if (removeModalData.isRemoving) return
        dispatch({
            type: 'remove',
            payload: resource
        })
        showModal(resource.id, resource.isPlaylist ? 'playlist' : 'film', resource.title)
    };

    const handleRedirectFilm = (id) => {
        history.push({ pathname: `${process.env.REACT_APP_PATH_NAME}film/` + id });
    }

    const handleRedirectPlaylist = (record) => {
        if (!record.film_id) return
        history.push({
            pathname: `${process.env.REACT_APP_PATH_NAME}film/` + record.film_id,
            search: `?list=${record.id}`
        });
    }

    return (
        <div className="row mt-5 mx-2">
            {
                data ? data.map((record, index) => {
                    if (record.isPlaylist) {
                        return <Playlist key={record.id}
                            playlist={record} index={index}
                            isProfile={true}
                            dispatchPrivacyUpdate={dispatch}
                            handleRedirect={() => handleRedirectPlaylist(record)}
                            handleRemove={(e) => handleRemove(e, record)} />
                    } else {
                        return <Film key={record.id} isProfile={true}
                            film={record} index={index}
                            handleRedirect={() => handleRedirectFilm(record.id)}
                            handleRemove={(e) => handleRemove(e, record)} />
                    }
                })  : ([...Array(20)].map((_, index) => (
                        <Skeleton key={index} />
                    )))
            }

            {
                !isAllFetched && <div className="fetch-loader d-flex justify-content-center">
                    {
                        (isLoading) &&
                        <div className="spinner-border" />
                    }
                </div>
            }
        </div>
    )
}


export default Profile
