import React, { useState } from 'react'

type TitleProps = {
  text: string;
}

type reactNodeType = {
  children: React.ReactNode
}

const Title = ({text}: TitleProps) =>{
  return <h1>
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
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Title text="A Title here"/>
      <Content>A Content Here 🤚</Content>
      <ReactNode><span>A React Node here</span></ReactNode>
    </div>
  )
}

export default App
