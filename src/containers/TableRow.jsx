import React from "react";

const TableRow = ({item}) => {
    return (
        <tr>
            <th scope="row">{item.id}</th>
            <td><img src={item.image} alt="table-row" style={{height:150}}/></td>
            <td> {item.name}</td>
            <td>{item.cost} </td>
            <td> {item.qty} </td>
            <td><button>Remove</button></td>  
        </tr>
    )
}

export default TableRow