import React from 'react'
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import {Link,Route,BrowserRouter as Router, Switch} from 'react-router-dom';
import About from './about';
import SiderDemo from './comA';


function App(){
  return(
    <div>
    <Router>
    <div>
      <h1 className="heading"><Link to="/about">Tom</Link></h1>
      
      </div>
      <DatePicker /> 
      <SiderDemo />
      
      <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;

//  Add to card project

// import React,{createContext} from 'react'
// import ComA from './comA'
// import './App.css';
// const FirstName = createContext();
// const LastName = createContext();
// function App() {
//   return (
//     <div className="App">
//       <FirstName.Provider value={'zain'}>

//         <LastName.Provider value={'Ali'}>
//         <ComA />

//         </LastName.Provider>
//       </FirstName.Provider>
//     </div>
//   );
// }
// export default App;
// export { FirstName, LastName};

