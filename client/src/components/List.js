import React, {useState, useEffect} from "react";
import { Productos } from "./Productos";

const List = () => {
  const [productos, setDatos] = useState([]);

  useEffect(()=>{
    let getProd = async () => {
      await fetch('/products')
        .then(res => res.json())
        .then(data => {
          setDatos(data)
          console.log(data)
        })
    }
    getProd()
  },[])

  return (<div>
    <Productos productos={productos}></Productos>
  </div>  );
};

export default List;
