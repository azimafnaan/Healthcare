import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer-section">
            <div className="contact-info">
                <h3>Contact Information</h3>
                <h4>London</h4>
                <p>+386 489 550 686</p>
                <p>info@example.com</p>
                <p>123, Las Vegas street lorem</p>
            </div>
            <div className="banani-branch">
                <h3>Bangladesh Branch</h3>
                <h5>Banani</h5>
                <p>House # 1, Road # 11,
                    Block # F, Banani,
                    Dhaka- 1213</p>
                <p>10616, 01345645657,09615465334</p>

            </div>

            <div className="form-group">
                <h3>Any Question</h3>
                <form>
                    <input type="text" placeholder="Full Name" />
                    <br /><br />
                    <input type="email" placeholder="Email Address" />
                    <br /><br />
                    <input type="text" placeholder="Subject" />
                    <br /><br />
                    <textarea placeholder="Message" rows="4" cols="23">
                    </textarea>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Footer;