import React, { useReducer } from "react";

import {
    Route,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom"

import { ContextApp, rowsReducer, initialState} from './hooks/reducer'
// import Catalog from "./components/Catalog";
// import Detail from './components/Detail';

function App() {
    const [state, dispatch] = useReducer(rowsReducer, initialState);
    // const { history } = this.props;
    return (
        <ContextApp.Provider value={{dispatch, state}}>
            <Switch>
                {/* <Route history={history} path='/' component={Catalog} />
                <Route history={history} path='/detail' component={Detail} />
                <Redirect from='/' to='/'/> */}
            </Switch>
        </ContextApp.Provider>
    );
}

export default withRouter(App)
