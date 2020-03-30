import React, {useState, useEffect} from "react";
import { Productos } from "./Productos";
import Table from './reusable/htmlTable'

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
    {/* <Productos productos={productos}></Productos> */}
    <Table title={"Productos"} columns={["Nombre", "Precio"]} data={productos} />
  </div>  );
};

export default List;
