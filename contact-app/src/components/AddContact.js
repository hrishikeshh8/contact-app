import React from "react"

const AddContact = () => {
   
  return (
    <div>
       <h2>Add contact</h2>
       <div>
        <form>

            <label>Name</label>
            <input type='text' name='name' placeholder="name"/>
            <label>Email</label>
            <input type='text' name='Email' placeholder="Email"/>
            <button className='ui button blue'>add</button>

            </form>
            </div>            
    </div>
  )
}

export default AddContact

  
        