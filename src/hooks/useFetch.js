import React from 'react';
import { useState, useEffect } from "react";

const useFetch=(url)=>{
    
    const [elementos, setElementos] = useState([]);

    useEffect(() => {
      fetch( url)
        .then((res) => res.json())
  
        .then((data) => setElementos(data));
    }, []);
  
    return elementos


};

export default useFetch;