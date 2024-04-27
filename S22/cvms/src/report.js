import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Report = () => {
    const [reportData, setReportData] = useState([]);

    useEffect(() => {
        const fetchReport = async () => {
            try {
                const response = await axios.get('/api/votes/report');
                setReportData(response.data);
            } catch (error) {
                console.error('Error fetching report:', error);
            }
        };
        fetchReport();
    }, []);

    return (
        <div>
            <h2>Voting Report</h2>
            <ul>
                {reportData.map((reportItem, index) => (
                    <li key={index}>
                        {`Username: ${reportItem.uname}, Candidate: ${reportItem.candidate}, Votes: ${reportItem.votes}`}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Report;
