import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact-container'>
            <div className="c-title">Get in Touch</div>
            <div className="c-text">Let us know if you're dedicated to 
            providing blood resources for your community's 
            well-being and helping those in need.</div>

        <div className="contact-form">
            <div className="row">
                <div className="column">
                    <label htmlFor="firstName"></label>
                    <input type="text" id="firstName" name="firstName" placeholder="*First Name" />
                </div>
                <div className="column">
                    <label htmlFor="lastName"></label>
                    <input type="text" id="lastName" name="lastName" placeholder="*Last Name" />
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <label htmlFor="email"></label>
                    <input type="email" id="email" name="email" placeholder="*Email"/>
                </div>
                <div className="column">
                    <label htmlFor="phone"></label>
                    <input type="tel" id="phone" name="phone" placeholder="*Phone Number" />
                </div>
            </div>
            <div className="row">
                <div className="column">
                    {/* <label htmlFor="newDonor">New Donor:</label>
                    <input type="checkbox" id="newDonor" name="newDonor" /> */}
                    <select id="newDonor" name="newDonor">
                        <option value="existing donor">I am an existing donor</option>
                        <option value="new donor">I am a new donor</option>
                        <option value="not donor">I haven't donated in a while</option>
                    </select>
                </div>
                <div className="column">
                    {/* <label htmlFor="donate4Times">Donate 4 Times:</label>
                    <input type="checkbox" id="donate4Times" name="donate4Times" /> */}
                    <select id="goal" name="I will">
                        <option value="4 time donor a year">I will donate 4 times a year</option>
                        <option value="4 blood drives">I will host 4 blood drives</option>
                        <option value="venue">I have a venu</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <label htmlFor="companyName"></label>
                    <input type="text" id="companyName" name="companyName" placeholder="Company name / Organization (option)" />
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <label htmlFor="message"></label>
                    <textarea id="message" name="message" rows="4" placeholder="*Type your message ..."/>
                </div>
            </div>
            <div className="row">
                <button type="submit">Submit</button>
            </div>
            
        </div>
    </div>
    
  )
}

export default Contact