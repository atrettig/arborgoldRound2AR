import './App.css';
import { useState } from 'react';



function App() {


  const [showData, setShowData] = useState()

  const url = 'https://60ac9dff9e2d6b0017457815.mockapi.io/ag/contacts'


let displayData
  function fetchJson() {
    fetch(url)
    .then(response => response.json())
    .then(responseData => {
      displayData = responseData.map(function(data){
        return(
          
    

          <tr key={data.id}>
            <td>{data.first_name}</td>
            <td>{data.last_name}</td>
            <td>{data.phone}</td>
            <td>{data.email}</td>
            <td>{data.company}</td>
            <td>{data.job_title}</td>

          </tr>

        )
      })
      setShowData(displayData)

    })
  }


  fetchJson()
  
  return (
  
    <div className='container'>
      <div>

      <table className='table'>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Company</th>
          <th>Job Title</th>
        </tr>
      {showData}
      </table>
      </div>

    </div>
    
    
    
  );
}

export default App;
