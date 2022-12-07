import { func } from 'prop-types'
import React, { useState } from 'react'

function sumNumbers( a: number, b: number){
  return a + b
}

function List<ItemType>({items, render}:{
  items: ItemType[];
  render:(item:ItemType, index:number)=> React.ReactNode}){return(
    <ul>
      {items.map((item, index)=>{
        return render(item, index)
      })}
    </ul>
  )
}

const items = [
  { 
    id: 1,
    name: "Wandinha"
  },
  {
    id: 2,
    name: "Wednesday" 
  }
]

const user = {
  id: 1, 
  name: "John Doe",
  age: 33,
  isAdmin: false,
}

type UserAttributes = typeof user

const newUser: UserAttributes = {
  id: 2,
  name: "Priscila",
  age: 29,
  isAdmin: true
}
console.log(newUser.name)

type TitleProps = {
  text: string
  size?: 'small' | 'large'
}

type reactNodeType = {
  children: React.ReactNode
}

type StyleProps = {
  color: string
}
const Title = ({text, size, color}: TitleProps & StyleProps) =>{
  return <h1 
    style={{fontSize: size == "small" ? "1.5rem" : "3rem", color: color}}    
  >
    {text}
  </h1>
}

const Content = ({children }: {children: string}) =>{
  return <h1>
    {children}
  </h1>
}

const ReactNode = ({children}: reactNodeType) =>{
  return <h1>
    {children}
  </h1>
}

function App() {
  const [count, setCount] = useState<number | null>(null)
  if(count != null){
    return<div>{count}</div>
  }
  return (
    <div className="App">
      <Title text="A Title here" size="small" color="Violet"/>
      <Content>A Content Here 🤚</Content>
      <ReactNode><span>A React Node here</span></ReactNode>
      <List
        items={items}
        render={(item, index)=>{
            if(item.id == 1){
              return <p>{item.name}</p>
            }
            return <h3>{item.name}</h3>
        }}

      ></List>
    </div>
  )
}

export default App
