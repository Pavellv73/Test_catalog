import React, { useReducer } from "react";
import { ContextApp, rowsReducer, initialState} from './hooks/reducer'
import Catalog from "./components/Catalog";

function App() {
    const [state, dispatch] = useReducer(rowsReducer, initialState);

    return (
        <ContextApp.Provider value={{dispatch, state}}>
            <Catalog />
        </ContextApp.Provider>
    );
}

export default App;
