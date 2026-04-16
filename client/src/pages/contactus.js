import { useState } from "react";

const Contact = () => {
    const [data, setData] = useState(
        {name: '', email:"", phone:"", message:""}
    );
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Details Submitted Successfully!")
    }
    return ( 
        <div className="contact-page-unique-root">
            <div className="contact-container">
                <form method='post' onSubmit={handleSubmit} className="contact-form">
                    <h1>Contact Us</h1>
                    <p className="contact-subtext">We'd love to hear from you. Send us a message.</p>
                    
                    <div className="input-group">
                        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} value={data.name} required />
                    </div>
                    
                    <div className="input-group">
                        <input type="email" name="email" placeholder="example@gmail.com" onChange={handleChange} value={data.email} required />
                    </div>
                    
                    <div className="input-group">
                        <input type="tel" name="phone" placeholder="+91 Your Phone" onChange={handleChange} value={data.phone} required />
                    </div>
                    
                    <div className="input-group">
                        <textarea name="message" placeholder="Your Message" onChange={handleChange} value={data.message} required></textarea>
                    </div>
                    
                    <button type='submit' className="contact-button">Connect</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;