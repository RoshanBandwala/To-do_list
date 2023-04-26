import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Todolist from './components/Todolist';
import React,{useState} from 'react';
import Form from './components/Form';

function App() {
  var list=[
    {
      title :"",
      desc: ""
    }
    

    
  ]
  var [list,setList]=useState([])
  const remove=(index)=>{
    const newlist = [...list];
    newlist.splice(index, 1);
    setList(newlist);

  }
  const Add=(title,desc)=>{
   let newlist=[...list]
    newlist.push({
      title:title,
      desc: desc,
    });
    setList(newlist);
  }
  const Reset=()=>{
    let newlist=[...list]
    newlist.map((todo)=>{
      todo.title=" ";
      todo.desc=" ";
    });
    }
    
  
   
  return (
    <>
    <div className='bg-image'>
    <Navbar Reset={Reset}/>
    <main className='container fs-4 '>
    <div className='fw-bolder fs-3  mb-3 fntsty3 brsty'><p>Add Todos </p></div>
    
    <Form Add={Add}/>
    <hr/>
    <div className='fw-bolder fs-3 mb-3 fntsty3 brsty'><p>TodoList</p></div>
    <div className='row fw-bold bgcolor fntsty'>
                  <div className='col-1'></div>
                  <div className='col-2'>sr no</div>
                  <div className='col-3'>Title</div>
                  <div className='col-4'>description</div>
              </div>
  <Todolist list={list} remove={remove}/>
      </main>
      </div>
    </>
      );
}

export default App;
