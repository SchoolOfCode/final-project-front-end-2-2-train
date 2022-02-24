import React from 'react'

function deleteButton() {

    function sayHello() {
      alert('Hello!');
    }
    
    return (
      <button onClick={sayHello}>
        Click me!
      </button>
    );
  }

export default deleteButton