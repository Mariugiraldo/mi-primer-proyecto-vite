
import './App.css'
import classComponent from './assets/Components/classComponent'




function App() {
  let elementos =[4,22,25]
  return (
    <>
    <classComponent/>
    <FuncComponent/>
    <Card elemento ={elementos[0]} />  
    <Card elemento ={elementos[1]} />  
    <Card elemento ={elementos[2]} />  
    </>
  )
}

export default App
