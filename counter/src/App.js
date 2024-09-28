import './App.css';
import Counter from './components/Counter.jsx';

//---------------------------------------------------//
// import { Component } from 'react';

// class App extends Component {
//     render() {
//         return (
//             <div className='text-contaner'>
//                 <h1>شمارنده ی من</h1>
//                 <br></br>
//                 <Counter />
//             </div>
//         )
//     }
// }

// export default App;

//---------------------------------------------------//

const App = () => {
    return (
        <div className='text-contaner'>
            <h1>شمارنده ی من</h1>
            <br></br>
            <Counter/>
        </div>
    )
}

export default App;