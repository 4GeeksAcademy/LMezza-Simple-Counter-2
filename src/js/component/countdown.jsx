import React from 'react';

function Countdown({ letFour, letThree, letTwo, letOne }) {
    return (

        <div class="container p-5">
            <div className="d-flex justify-content-center fs-1 ">
                <div className="wacth">
                    <i className="far fa-clock"></i>
                </div>
                <div className="four">{letFour % 10}</div>
                <div className="three">{letThree % 10}</div>
                <div className="two">{letTwo % 10}</div>
                <div className="one">{letOne % 10}</div>
            </div>
        </div>
    );
}

export default Countdown