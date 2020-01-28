import React from 'react';

const Commentary = ({commentary}) => {
    return (
        <div className="mdl-cell mdl-grid mdl-grid--no-spacing">
            <div className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--12-col-desktop">
                <div className="mdl-card__title mdl-color--teal-300">
                    <h2 className="mdl-card__title-text">Commentary Box</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    <ul className="mdl-list commentary-list">
                        {commentary && commentary.map((action, index) => (
                            <li key={index} className="mdl-list__item li-item">
                                {action}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="demo-separator mdl-cell--1-col"/>
        </div>
    );
};

export default Commentary;
