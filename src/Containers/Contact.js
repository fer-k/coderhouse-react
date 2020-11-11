import React from 'react';

const Contact= () => {

    return (
        <div>
            <h1>Contacto</h1>
            <form>
    <div>
        <label >Name</label>
        <input type="text"/>
    </div>
    <div >
        <label >Email address</label>
        <input type="email"/>
    </div>
    <div >
        <label>Message</label>
        <textarea  ></textarea>
    </div>
    <button >Submit</button>
</form>
        </div>
    );
}

export default Contact;