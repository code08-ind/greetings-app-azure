import React from 'react';

const Logic = () => {
    let date = new Date();
    let time = date.getHours();
    let greetings = "";
    let color = "";

    if (time >= 0 && time < 12) {
        greetings = "Morning";
        color = "cyan";
    }
    else if (time >= 12 && time <= 19) {
        greetings = "Afternoon";
        color = "orange";
    }
    else {
        greetings = "Night";
        color = "red";
    }
    return (
        <>
            <div className="container">
                <h1>Hello Sir, <span style={{ color: color }}>Good {greetings}</span> </h1>
            </div>
        </>
    );
}

export default Logic;
