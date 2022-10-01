// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
// import { getByTitle } from '@testing-library/react';
import Profile from "./imagse/git.png"
import errorrr from "./imagse/rename.png"

function App() {
  const [inputvalue, setinputvalue] = useState("")
  const [userdata, setuserdata] = useState("")
  const [error, seterror] = useState(false)
  const [caller, setcaller] = useState(false)
  function khan(e){
    setinputvalue(e.target.value)
  }
 
  useEffect( ()=>{
  axios.get(`https://api.github.com/users/${inputvalue ? inputvalue : "tahakhan2004"}`)
  .then(function (response) {
     // console.log(response)
    setuserdata(response.data)
    seterror(false)
  })
  .catch(function (err) {
    // console.log(err);
    seterror(true)
  })
  },[caller])


  function handleform(e){
      e.preventDefault()
      // console.log(inputvalue)

      // axios.get(`https://api.github.com/users/${inputvalue ? inputvalue : "tahakhan2004"}`)
      // .then(function (response) {
      //   // console.log(response)
      //   setuserdata(response.data)
      //   seterror(false)
      // })
      // .catch(function (err) {
      //   // console.log(err);
      //   seterror(true)
      // })


  setcaller(!caller)
  // setinputvalue("")
  }
  function removeuser(){
   setinputvalue("") 
  }
  
  return (
    <>
    
    <section className='box1'>
    <section className='box2 p-3'>
    <h1 className='heading'>Github user Search </h1>
    <form onSubmit= {handleform} className="w-75 me-auto ms-auto pt-5">
      {/* <input type="text" /> */}
      <input type="text" required value={inputvalue} onChange = {khan} className='form-control p-2 fs-5 ' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Search Username...'/>
    </form>  
          <div className='container  w-75'>
      <button onClick={removeuser} className="btn btn-danger mt-4 w-50 fs-5">Remove</button>
          </div>

    </section>

   {error === false ? (
    <section className='mt-md-2'>
    <div className="card  box3 me-auto ms-auto" style={{ maxWidth: 540 }}>
  <div className="row g-0 p-2 mt-2">
    <div className="col-md-4 ">
    <img src={userdata ?  userdata.avatar_url : Profile} className="img-thumbnail rounded " alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body ">
<p><strong>Name</strong> : {userdata ? userdata.name : "Username"}</p>
<p><strong>Bio</strong> : {userdata ? userdata.bio : "User Bio"}</p>
<p><strong>Followers</strong> : { userdata ? userdata.followers : "User Followers"}</p>
<p><strong>Following</strong> :  {userdata ? userdata.following : "User Following"}</p>
<p><strong>Repositries</strong> : {userdata ? userdata.public_repos : "User Respositries"}</p>
<p><strong>ID</strong> : {userdata ? userdata.id : "user id"}</p>   
      </div>
    </div>
  </div>
</div>
    </section>):(
    <img src={errorrr} className="err img-fluid" alt="..." />
    )
   }
    </section>

    </>
  );
}

export default App;
