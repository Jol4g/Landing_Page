import React from 'react'
import {Textfield, Button} from 'react-mdl'
import './Contact.css'
class Contact extends React.Component{
    render(){
        return(
        <div>
            <div  className="card-contact">
                <h1>Contact</h1>
               <form>
                <div className="Email">
                <Textfield
    onChange={() => {}}
    label="Email"
    floatingLabel
    style={{width: '380px'} } required 
/>                
</div>
                <div className="nom-pre">
                    <div className="Nom">
                     <Textfield
    onChange={() => {}}
    label="Nom"
    floatingLabel
    style={{width: '180px'}} required
/>                
 </div>
                
                    <div className="Prenom">
                    <Textfield
    onChange={() => {}}
    label="Prenom"
    floatingLabel
    style={{width: '180px'}} required
/>  
</div>
                </div>
                <div className="message">
                <Textfield  onChange={() => {}}    label="Text lines..."   maxRows={3} required='false'   style={{width: '300px'}}/>               </div>
               <div className="submit">
               <Button raised ripple>Envoyer</Button>
               </div>
               </form>
            </div>

        </div>
        
        )}
}
export default Contact;