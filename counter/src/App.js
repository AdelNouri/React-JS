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
//                 <Counter count={5}/>
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
            <Counter count={5} myArray={[1,2,3,4]} firstName='Adel'/>
            <Counter/>
            <Counter count={10}>
                این شمارنده ی من است
            </Counter>
        </div>
    )
}

export default App;