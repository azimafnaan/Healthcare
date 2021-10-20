import React from 'react';
import { Table } from 'react-bootstrap';
import Header from '../Header/Header';
import './Appointment.css';
const Appointment = () => {
    return (
        <div>
            <Header></Header>
            <h2>Contact for the Appointment</h2>
            <Table responsive="sm" className="table" striped bordered hover size="sm">
                <thead>
                    <tr>

                        <th>Doctor Name</th>
                        <th>Specialist</th>
                        <th>Call For Serial</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>Dr. Sigmund Freud</td>
                        <td>Neurologist</td>
                        <td>+345335</td>
                    </tr>
                    <tr>

                        <td>Dr. Charles R. Drew </td>
                        <td>Blood Transfer Surgeon</td>
                        <td>+325324</td>
                    </tr>
                    <tr>

                        <td>Dr. Larry</td>
                        <td>Medicine Specialist</td>
                        <td>+43635634</td>
                    </tr>
                    <tr>

                        <td>Dr. René Laennec</td>
                        <td>Physician Specialist</td>
                        <td>+098635634</td>
                    </tr>
                    <tr>

                        <td>Dr. Terry Dubrow</td>
                        <td> Plastic Surgeon</td>
                        <td>+133635634</td>
                    </tr>
                    <tr>

                        <td>Dr. Patrick Soon-Shiong</td>
                        <td>Transplant Surgeon</td>
                        <td>+5367635634</td>
                    </tr>
                    <tr>

                        <td>Dr. Frederick Banting</td>
                        <td>Lung Surgeon Specialist</td>
                        <td>+0043635634</td>
                    </tr>
                    <tr>

                        <td>Dr. Larry</td>
                        <td>Medicine Specialist</td>
                        <td>+43635634</td>
                    </tr>
                    <tr>

                        <td>Dr. Alexis Carrel</td>
                        <td>Liver Cancer Specialist</td>
                        <td>+0456546546</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Appointment;