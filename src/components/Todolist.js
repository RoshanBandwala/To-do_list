
import React from 'react';
import Todo from './Todo';

export default function Todolist(props) {
  
    return (props.list.length > 0 ?
      props.list.map((todo,i)=>{
        return <Todo todo={todo} key={i} index={i} remove={props.remove}/> 
      })
      :
      <>
      <h4 className='mt-5 col-8 text-center'>(Added todo's will be shown here) </h4>
      </>
  )
}
