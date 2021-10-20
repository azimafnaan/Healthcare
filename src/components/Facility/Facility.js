import React from 'react';
import { Card } from 'react-bootstrap';
import Header from '../Header/Header';
import './Facility.css';
const Facility = () => {
    return (
        <div>
            <Header></Header>
            <h1>Why Chose Us</h1>
            <div className="facility-container">
                <div>
                    <Card>
                        <Card.Img className="images" variant="top"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7zvqDQv3o9SZHq4f6KUsA8jzygfFA0HQI5w&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>24 / 7 Emergency</Card.Title>
                            <Card.Text>
                                We   provide  emergency   ambulance   service  to   people  with  acute   illness  and  pregnancy  in  Our Hospital.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <br />
                </div>
                <div>
                    <Card >
                        <Card.Img className="images" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJpgT0IWsl1VZYeSjcdM-XQECN1kcfH9jaE8pPdQWFWS7VkaIWUTlmsJ7rJ12GaR74mBk&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>15 year of Exprience</Card.Title>
                            <Card.Text>
                                It is important to be informed about the surgery being recommended, particularly if it is elective surgery
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card >
                        <Card.Img className="images" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_4luR1qwcqgMVu6plWg7J_bKQH4-m3N-fg&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Offering Sedation Services</Card.Title>
                            <Card.Text>
                                Signature Smiles Dental offers sedation services to those who suffer from dental anxiety. If you fall into this category, contact us in Streetsboro.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card >
                        <Card.Img className="images" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVyY65H1pMF3K2qmeHP95iepISjAOEfsiA&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Invisalign Premier Provider
                            </Card.Title>
                            <Card.Text>
                                The tiers are as follows. Preferred Provider: Treats a minimum of 10 cases of Invisalign per year. Premier Provider
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card >
                        <Card.Img className="images" variant="top" src="https://images.financialexpress.com/2018/10/health-insurance-1.jpg?w=1200&h=800&imflag=true" />
                        <Card.Body>
                            <Card.Title>Work with Most Insurance
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card >
                        <Card.Img className="images" variant="top" src="https://www.practicalbusinessskills.com/assets/images/cards/payment-systems-sq-707-707.jpg" />
                        <Card.Body>
                            <Card.Title>Flexible Payment Options
                            </Card.Title>
                            <Card.Text>
                                Payments play a crucial role in the overall customer experience, but they can sometimes be an afterthought.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Facility;