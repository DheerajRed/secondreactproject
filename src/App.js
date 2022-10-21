import React,{useState,useEffect} from 'react'
import firebasedb from './firebase'
import './App.css'

const App=()=>{
  const[getdata,getmydata]=useState({})
  useEffect(()=>{
    firebasedb.child('name').on("value",details=>{
      getmydata(details.val())
    })
  },[])
  const[data,mydata]=useState({
    name:""
  })
  const change=(e)=>{
    mydata({...data,[e.target.name]:e.target.value})
  }
  const submit=(e)=>{
    e.preventDefault();
    firebasedb.child('name').push(
      data,
      err=>{
        if(err){
          console.log(err)
        }
        else{
          alert('uploaded')
        }
      }
    )
  }
  const deleteevent=(key)=>{
    firebasedb.child(`name/${key}`).remove();
  }
  return(
    <div>
      <center>
        <div className='getdata'>
          {getdata &&
          Object.keys(getdata).map(key=>
            <p className='display'>{getdata[key].name} <button onClick={()=>deleteevent(key)}>X</button></p>
            )
          }
        </div>
        <form action="" className='form' onSubmit={submit}>
          <input type="text" name='name'className='name' onChange={change} />
          <input type="submit" name='add' value="add" />
        </form>
      </center>
    </div>
  )
}
export default App