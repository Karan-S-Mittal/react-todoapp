import React, { Component } from "react";
import "./index.css";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const { characterData, removeCharachter } = props;
    const rows = characterData.map((row, index) => {
        return (
            <tr>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => removeCharachter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

const Table = (props) => {
    const { characterData, removeCharachter } = props;

    return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharachter={removeCharachter} />
        </table>
    )
}

export default Table