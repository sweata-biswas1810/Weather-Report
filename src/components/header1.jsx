import { useState, useEffect } from "react";


function Header() {

    const [getclock, setclock] = useState('');
    const [getdate, setdate] = useState('');
    const [getgreeting, setgreeting] = useState('');

    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12;
        setclock(`${hours}:${minutes} ${ampm}`);
    }

    function updateDate() {
        const now = new Date();

        const options = {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        };

        setdate(now.toLocaleDateString('en-US', options));

    }

    function updateGreeting() {
        const now = new Date();
        const hour = now.getHours();
        let greeting = "";

        if (hour >= 5 && hour < 12) {
            greeting = "Good Morning, Sweata!";
        } else if (hour >= 12 && hour < 17) {
            greeting = "Good Afternoon, Sweata!";
        } else if (hour >= 17 && hour < 21) {
            greeting = "Good Evening, Sweata!";
        } else {
            greeting = "Good Night, Sweata!";
        }

        setgreeting(greeting);
    }

    useEffect(() => {
        updateClock();
        updateDate();
        updateGreeting();

        const clockinterval = setInterval(updateClock, 1000);
        const dateinterval = setInterval(() => {
            updateDate();
            updateGreeting();
        }, 60 * 1000);

        return () => {
            clearInterval(clockinterval);
            clearInterval(dateinterval);
        }
    })



    return (
        <div className="total_greet">
            <div className="greet">
                <h1 id="clock">{getclock}</h1>
                <p id="wed">{getdate}</p>
                <div className="morning">
                    <div id="sun_icon">
                        <img id="sun" src="./images/sun (2).png" alt="weather icon" />
                    </div>
                    <div id="sun_heading">
                        <h2 id="greeting">{getgreeting}</h2>
                    </div>
                </div>
            </div>

            <div className="sun_moon">
                <div className="light">
                    <img className="dim" src="./images/sunny.png" alt="" />
                </div>
                <div className="light">
                    <img className="dim" src="./images/moon (1).png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Header;