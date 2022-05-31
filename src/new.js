import React, {createContext,useContext, useState} from 'react'
import {data} from './data'
import {v4 as uuidv4} from 'uuid'

const personContext = React.createContext()
console.log(personContext);


export const New = () => {
  const [people, setPeople] = useState(data);
  
  function onDelete(e, id){
        e.preventDefault()
        console.log(id);
        const newP = people.filter((i)=>{
            return i.id!==id
        })
        console.log(newP);
        setPeople(newP)
    }
  return (
    <personContext.Provider value={{onDelete, people}}>
        <h3>Prop Drilling</h3>
        <List people={people} />
    </personContext.Provider>
  )
}

const List =({people})=>{
    return(
        <div>
            {people.map((each)=>{
                const {name, id} = each
                return(
                        <SinglePerson id={id} key={uuidv4()} idc={uuidv4()} each={name}  />
                )
            })}
        </div>
    )
}

const SinglePerson =({each, id})=>{
    const {onDelete}= useContext(personContext)
    return (<div >
        <h4>{each}</h4>
        <button onClick={(e)=> onDelete(e, id)}>Delete</button>
    </div>
    )
}
