import React from 'react';
import { Link } from "react-router-dom";

const GameItem = ({item}) => {
    return (
        <tr>
            <td className="mdl-data-table__cell--non-numeric">{item.status}</td>
            <td className="mdl-data-table__cell--non-numeric">{item.date}</td>
            <td className="mdl-data-table__cell--non-numeric">
                <Link to={`/game/${item.id}`}>View</Link>
            </td>
        </tr>
    )
};

export default GameItem;