
import React, { useState } from "react";
import "./App.css";
const App = () => {
  const users = ["Alan", "Bob", "Carol", "Dean", "Elin"];
  const [message, setmessage] = useState("");
  const [todo, setTodo] = useState([]);
  const [count, setcount] = useState(0);

  const messageSubmit = (e) => {
    e.preventDefault();
    const user = users[Math.floor(Math.random() * users.length)];
    
    const newarr = { id: new Date().getTime().toString(),
       message,
        user,
        
        Time:new Date().toLocaleTimeString()
       };
    setTodo([...todo, newarr]);
    setmessage("");
  };

  return (
    <div>
    
      <div className="maindiv">
        <div className="intro">
         
        <h2 className="head">Chat Application</h2> 
          <p>This Channel is for Company Wide Chatter </p>
          {/* <span>  3/100 <i class="fa-solid fa-user-group"></i></span> */}
          <hr />
          {todo.map((elem) => {
            return (
              <div key={elem.id}>
              
                 
             <div className="incoming_msg_img">
            <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />  
             <p className="time">  <b>{elem.user}</b>{elem.Time} </p>
             </div> 
                <p className="message">
                  {" "}
                  {elem.message}
                  {
                    <i
                      onClick={() => setcount(count + 1)}
                     
                      className="fa-solid fa-thumbs-up"
                    >
                      <p className="count">{count}</p>
                    </i>
                  }
                </p>
                &nbsp;
              </div>
            );
          })}
          <form className="form" onSubmit={messageSubmit}>
            <input type="text" placeholder="Type Message" value={message}
              onChange={(e) => setmessage(e.target.value)}
              autoFocus={true}
            />
            <button>&gt;</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;































// // import './App.css';
// // import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// // import HomePage from './components/homePage';
// // import CityPage from './components/CityPage';
// // import { useState } from 'react';
// // import FavoriteCityContext from './context';
// // /*
// // function App() {
// //   const [activeTab,setActiveTab] = useState('home');
// //   function changeState(newTab) {
// //     setActiveTab(newTab);
// //     let url
// //     if(newTab==='home') {
// //       url = 'http://localhost:3000/';
// //     }
// //     else if (newTab === 'city') {
// //       url = 'http://localhost:3000/city'
// //     }
// //     alert(url)
// //     window.history.pushState({'tab':'tab'},newTab,'http://localhost:3000/')
// //   }
// //   let page
// //   if (activeTab === 'home') {
// //     page = (
// //       <div className='content'>
// //         <Header />
// //         <FavouriteCities cities={[]}/>
// //       </div>
// //     );
// //   } else if(activeTab==='city') {
// //     page=(
// //       <div className='content'>
// //         <CityTab />
// //       </div>
// //     );
// //   }
// //   return (
// //     <>
// //       <Sidebar activeTab={{activeTab,changeState}}/>
// //       {page}
      
// //     </>
// //   );
// // }
// // */
// // const router = createBrowserRouter([
// //   {
// //     path:"/",
// //     element:<HomePage/>
// //   },
// //   {
// //     path:"city",
// //     element:<CityPage/>
// //   }
// // ])

// // function App() {
// //   const [favoriteCities, setFavoriteCities] = useState([]);
  
// //   return (
// //     <> 
    
// //       <FavoriteCityContext.Provider value={{favoriteCities,setFavoriteCities}} >
// //         <RouterProvider router={router}/>
// //       </FavoriteCityContext.Provider>
// //     </>
// //   );
// // }
// // export default App;
