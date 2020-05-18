import React from 'react';
import './App.css';
import Counter from './components/Counter3';
import SuperMarket from "./components/Supermarket/SuperMarket";
// import DevTools from 'mobx-react-devtools';

function App() {
    return (
        <div>
            <Counter/>
            <hr/>
            <SuperMarket/>
            {/*{process.env.NODE_ENV === 'development' && <DevTools/>} /!* mobx-react-devtools 개발도구 사용*!/*/}
        </div>
    );
}

export default App;
