
import Header from './Header';
import Sidebar from './Sidebar';
import Data from './Data';
import { useState } from 'react';
import { auth, provider } from './firebase';


function App() {
  const [user, setUser] = useState(null);

  const signIn =()=>{
    auth.signInWithPopup(provider).then(({user})=>{
      setUser(user)
    }).catch(error=>{
      alert(error.message);
    })
  }
  return (
    <>
    {
      user ? (
        <>
        <Header photoURL={user.photoURL}/>
        <div className="App">
          <Sidebar/>
      
            <Data/>
          </div>
        </>
      ):(
        <div className="loginWrap">
          <img src="https://i.blogs.es/404a76/drive1/450_1000.webp" alt="" />
          <button onClick={signIn}>Log In To Google Drive Clone</button>
        </div>
      )
    }
    
    </>
  );
}

export default App;
