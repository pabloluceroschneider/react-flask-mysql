import React, {useState, useEffect} from "react";

const List = () => {
  const [datos, setDatos] = useState([]);

  useEffect(()=>{
    let getProd = async () => {
      await fetch('/products')
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
    }
    getProd()
  })

  return (
    <>
      { datos }
    </>
  );
};

export default List;
