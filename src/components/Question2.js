import React from 'react'
export const Question2 = () => {
    let payload = {
        id: 1,
        firstName: 'John',
        lastName: 'Bob',
        email: 'john.doe@yopmail.com'
     }
     Object.defineProperty(payload, 'id', {
        writable: false
            
      });
    // payload.id = 2; 
      console.log(payload.id);
      return (
        <div> <h2>User Information</h2>
        <p>ID: {payload.id}</p>
        <p>First Name: {payload.firstName}</p>
        <p>Last Name: {payload.lastName}</p>
        <p>Email: {payload.email}</p></div>
      );
}

    