import React from 'react';

const SimpleButton = (props) => {
    const { clickEvent, btnLabel } = props;
    return (
        <>
            <button
                onClick={clickEvent}
                className="
                    mdl-cell
                    mdl-cell--12-col
                    mdl-color--teal-300
                    mdl-button mdl-button--raised
                    mdl-button--colored
                    mdl-js-button
                    mdl-js-ripple-effect
                    mdl-color-text--white
                ">
                {btnLabel}
            </button>
        </>
    );
};

export default SimpleButton;
