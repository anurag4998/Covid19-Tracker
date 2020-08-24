import React, { useState } from "react";


const Togglebutton = (props) => {

    const [toggle, setToggle] = useState(0);
    const handleClick = () => {
        if (!toggle) {
            setToggle(!toggle)
            props.func(!toggle)
        }
        else {
            setToggle(0)
            props.func(0)

        }

    }

    return (
        <div>
            <div className={toggle ? "toggle-switch--dark" : "toggle-switch--light"}>
                <button onClick={handleClick} className={toggle ? "switchdark on-animationright" : "switchlight on-animationleft"}></button>

            </div>
        </div>

    )
}

export default Togglebutton