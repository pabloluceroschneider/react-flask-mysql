import React from "react";

const Table = ({ title, columns, data }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map(colName => {
              return <th> {colName} </th>;
            })}
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {console.log(data)}
          {data.map(row => {
            return (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>{row.price}</td>
                <td><button>Editar</button></td>
                <td><button>Eliminar</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
