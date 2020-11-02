import React, { useState } from 'react';

const SubHeading = () => {
    const [subHeading, setSubHeading] = useState("Espero que se encuentre muy bien!"); 

    const changesubHeading = () => {
        setSubHeading("Me alegro mucho!")
    }

    return (
        <div>
            <h2>{subHeading}</h2>
            <button onClick={changesubHeading}>Aprete aquí si se encuentra muy bien!</button>
        </div>
    );
}

export default SubHeading;