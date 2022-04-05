import React,{useState, useEffect} from 'react';

function Api() {

    const [users, setusers] = useState([]);

    const getUsers = async()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        setusers(await response.json());
        
    }

    useEffect(()=>{
        getUsers();
    },[])

  return (
      <div className='aa'>
        <h1>Api Hit</h1>
        <div className='container-fluid'>
        <div className='row'>
            {
                users.map((res)=>{
                    return(
                        <div className='col-md-4 col-lg-4 col-sm-12'>
                        <div className="card">
                            
                            <div className="card-body">
                                <h5 className="card-title">{res.name}</h5>
                                <h5 className="card-title">{res.username}</h5>
                                <p className="card-text">{res.email}</p>
                                
                         </div>
</div>
</div>
                    )
                    
                }
                )
            }
        </div>
        
      </div>
      </div>
  );
}

export default Api;

