import React, {Component} from 'react';
import { Link } from "react-router-dom";

class GameItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <tr>
                <td className="mdl-data-table__cell--non-numeric">
                    <i className="material-icons mdl-color--teal-300">check_circle</i>
                </td>
                <td className="mdl-data-table__cell--non-numeric">{item.status}</td>
                <td className="mdl-data-table__cell--non-numeric">{item.gameTime}</td>
                <td className="mdl-data-table__cell--non-numeric">{item.date}</td>
                <td className="mdl-data-table__cell--non-numeric">
                    <Link to={`/game/${item.id}`}>View</Link>
                </td>
            </tr>
        );
    }
}

export default GameItem;