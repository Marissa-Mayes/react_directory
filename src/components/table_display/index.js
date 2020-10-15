import React from "react"

function table(props){
    return (
        <>
        <table>
            <tr>
                <th scope = "row">{props.id}</th>
                <th>{props.name}</th>
                <th>{props.email}</th>
                <th>{props.phone}</th>
            </tr>
        </table>
        </>
  );
    }

    export default table;