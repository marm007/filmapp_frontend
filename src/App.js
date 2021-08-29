import React, { useContext, lazy, Suspense } from 'react';

import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import './App.css';

import PrivateRoute from './components/pages/privateRoute'

//import UserUpdateDialog from './components/settings'

import RemoveModal from './components/dialogs/removeObject'

import { Route, BrowserRouter as Router } from 'react-router-dom';

//  --------- icons ------------
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faPlay,
    faSortUp,
    faSortDown,
    faTrashAlt,
    faTimes,
    faGlobeEurope,
    faLock,
    faEdit
} from '@fortawesome/free-solid-svg-icons'

import { Switch } from "react-router";

import ToastContext from './helpers/contexts/toast/toastContext'

import WithAxios from "./components/models/withAxios";
import UserProvider from './helpers/contexts/user/userProvider';
import UpdateProvider from './helpers/contexts/updateModal/updateProvider';
import ErrorBoundary from './components/pages/errorBoundary';

import { isMobile } from 'react-device-detect'

window.jQuery = $;
window.$ = $;
global.jQuery = $;


library.add(faPlay, faSortDown, faSortUp, faTrashAlt, faTimes, faGlobeEurope, faLock, faEdit);

const pathName = process.env.REACT_APP_PATH_NAME

const NavbarComponent = lazy(() => import('./components/pages/navbar'))

const ProfileComponent = lazy(() => import('./components/pages/profile'))
const HomeComponent = lazy(() => import('./components/pages/home'))
const FilmComponent = lazy(() => import('./components/pages/film'))
const SearchComponent = lazy(() => import('./components/pages/search'))
const PlaylistsPage = lazy(() => import('./components/pages/playlists'))
const AddFilmComponent = lazy(() => import('./components/pages/filmAdd'))
const NotFoundComponent = lazy(() => import('./components/pages/notFound'))


const LoginDialog = lazy(() => import('./components/dialogs/login'))
const ResetPasswordDialog = lazy(() => import('./components/dialogs/resetPassword'))
const ForgotPasswordDialog = lazy(() => import('./components/dialogs/forgotPassword'))
const RegisterDialog = lazy(() => import('./components/dialogs/register'))
const UserUpdateDialog = lazy(() => import('./components/dialogs/updateUser'))
const FilmUpdateDialog = lazy(() => import('./components/dialogs/updateFilm'))
const PlaylistUpdateDialog = lazy(() => import('./components/dialogs/updatePlaylist'))

const MobileStyle = lazy(() => import('./helpers/css/mobileStyle'))
const DesktopStyle = lazy(() => import('./helpers/css/desktopStyle'))

function App() {

    const { toast } = useContext(ToastContext)

    return (
        <div>
            {
                <div className="toast-root">
                    <div className="toast bg-secondary"
                        id="mainToast" data-autohide="false"
                        role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <strong className="mr-auto">{toast.header}</strong>
                        </div>
                        <div className="toast-body text-light">
                            {toast.message}
                        </div>
                    </div>
                </div>
            }

            <Router>
                <UserProvider>
                    <WithAxios>
                        <ErrorBoundary>
                            <UpdateProvider>
                                <Suspense fallback={<></>}>
                                    {isMobile ? <MobileStyle /> : <DesktopStyle />}

                                    <PrivateRoute exact path={[`${pathName}settings`, `${pathName}profile/settings`, `${pathName}film/:id/settings`, `${pathName}search/settings`, `${pathName}add/settings`, `${pathName}playlists/settings`]}
                                        component={UserUpdateDialog} />

                                    <PrivateRoute exact path={[`${pathName}profile/update-film/:id`]}
                                        component={FilmUpdateDialog} />


                                    <PrivateRoute exact path={[`${pathName}profile/update-playlist/:id`]}
                                        component={PlaylistUpdateDialog} />

                                    <Route exact path={[`${pathName}login`, `${pathName}film/:id/login`, `${pathName}search/login`, `${pathName}add/login`, `${pathName}playlists/login`]}
                                        render={(props) => <LoginDialog {...props} />} />

                                    <Route exact path={[`${pathName}register`, `${pathName}film/:id/register`, `${pathName}search/register`, `${pathName}add/register`, `${pathName}playlists/register`]}
                                        render={(props) => <RegisterDialog {...props} />} />

                                    <Route exact path={[`${pathName}reset/:token`, `${pathName}film/:id/reset/:token`, `${pathName}search/reset/:token`, `${pathName}add/reset/:token`, `${pathName}playlists/reset/:token`]}
                                        render={(props) => <ResetPasswordDialog {...props} />} />

                                    <Route exact path={[`${pathName}forgot`, `${pathName}film/:id/forgot`, `${pathName}search/forgot`, `${pathName}add/forgot`, `${pathName}playlists/forgot`]}
                                        render={(props) => <ForgotPasswordDialog {...props} />} />

                                </Suspense>

                                <Suspense fallback={<div className="suspense-loader"> <div className="spinner-border" /></div>}>

                                    <Route render={() => <NavbarComponent />} />

                                    <Switch>
                                        <Route exact path={[`${pathName}film/:id`, `${pathName}film/:id/login`, `${pathName}film/:id/register`, `${pathName}film/:id/reset/:token`,
                                        `${pathName}film/:id/forgot`, `${pathName}film/:id/settings`]}
                                            render={(props) => <FilmComponent {...props} />} />

                                        <Route exact path={[`${pathName}`, `${pathName}login`, `${pathName}register`, `${pathName}settings`,
                                        `${pathName}reset/:token`, `${pathName}forgot`]}
                                            render={(props) => <HomeComponent {...props} />} />

                                        <Route exact path={[`${pathName}search`, `${pathName}search/login`, `${pathName}search/settings`, `${pathName}search/register`, `${pathName}search/reset/:token`, `${pathName}search/forgot`]}
                                            render={(props) => <SearchComponent {...props} />} />

                                        <Route exact path={[`${pathName}playlists`, `${pathName}playlists/login`, `${pathName}playlists/settings`, `${pathName}playlists/register`, `${pathName}playlists/reset/:token`,
                                        `${pathName}playlists/forgot`]} render={(props) => <PlaylistsPage {...props} />} />

                                        <PrivateRoute exact path={[`${pathName}add`, `${pathName}add/settings`]}
                                            component={AddFilmComponent} />

                                        <PrivateRoute exact path={[`${pathName}profile`, `${pathName}profile/settings`, `${pathName}profile/update-film/:id`, `${pathName}profile/update-playlist/:id`]}
                                            component={ProfileComponent} />

                                        <Route exact path="*" render={(props) => <NotFoundComponent {...props} />} />

                                    </Switch>

                                </Suspense>
                            </UpdateProvider>
                        </ErrorBoundary>
                    </WithAxios>
                </UserProvider>
            </Router>
            <RemoveModal />
        </div >
    );
}

export default App

