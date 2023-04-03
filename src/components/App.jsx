import React, { useState, useEffect } from "react";
import Card from "./Card";


function createCard(contact) {
  const { id,  imgURL, phone, email, username, website, address, company } = contact;
  const { street, suite, city, zipcode } = address;  
  const {name} = company

  return (
    <Card
      key={contact.id}
      name={contact.name}
      tel={contact.phone}
      email={contact.email}
      website={contact.website}
      street={street}
      company={name}
      suite={suite}
      zipcode={zipcode}

    />
  );
}

function App() {
  const [data, setData]= useState([])
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users").then(result =>{
      result.json().then(resp =>{
        // console.warn("result",resp);
        setData(resp);
      })
    })
  },[])

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {data.map(createCard)}
      

    </div>
  );
}

export default App;
