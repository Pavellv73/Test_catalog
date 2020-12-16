import React, {useState} from "react";
import Catalog from "./components/Catalog";

function App() {
    const [rows, setRows] = useState([
        {
            id: 1,
            title: 'Автоматический выключатель',
            vendor: 'ABB',
            pack:100,
            price:1500,
        },
    ]);

    return (
        <div className="App">
            <Catalog rows={rows}/>
        </div>
    );
}

export default App;
