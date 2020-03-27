import React from 'react'
import Main from './main/main'
import Navbar from './navbar/navbar'
import Foooter from './footer/footer'
import{Content} from 'react-mdl'
class App extends React.Component{
  

  render(){
         return(
              <>
     <Navbar/>
     <Content >
         <Main />
     </Content>
     <Foooter/>
      </>  
            )
    }}
export default App;
