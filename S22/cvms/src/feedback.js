import React, { useState, memo } from 'react';
import './feedback.css';

const Feedback = memo(() => {
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your submit logic here
        console.log('Feedback submitted:', { comment, rating });
        // Display alert notification
        window.alert('Feedback submitted successfully!');
    };

    return (
        <div className="App">
            <h1>Feedback Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="comment">Comments:</label>
                <textarea
                    id="comment"
                    name="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows="4"
                    cols="50"
                    required
                ></textarea>
                <br />
                <label htmlFor="rating">Rating:</label>
                <select
                    id="rating"
                    name="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    required
                >
                    <option value="">Select a rating</option>
                    <option value="1">1 (Poor)</option>
                    <option value="2">2 (Fair)</option>
                    <option value="3">3 (Good)</option>
                    <option value="4">4 (Very Good)</option>
                    <option value="5">5 (Excellent)</option>
                </select>
                <br />
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
});

export default Feedback;
