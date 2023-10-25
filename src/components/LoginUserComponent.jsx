import React, { useEffect } from "react";
import axios from "axios";

const loginUserComponent = () => {
    const [data , setData] = useEffect([]);

    useEffect(() => {
        
        const apiUrl = `http://localhost:3500/api/v1/login`;
    
        axios.get(apiUrl)
          .then((response) => {
            setData(response.data); 
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);

      return(
        <div>
            <h1>Subjects Enrolled</h1>  

        </div>
      )
}

export default loginUserComponent;