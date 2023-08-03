
import React, { useState } from 'react';
import '../assets/signup.css';

const Question3 = () => {
    const [formData, setFormData] = useState({
        userName: '',
        age: 0,
        gender: '',
        subscription: false,
        interests: [],
        file: null
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        const newValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
        setFormData({
            ...formData,
            [name] : newValue

        });
    };

    const handleInterestsChange = (event) => {
        const { value, checked } = event.target;
        const updatedInterests = checked
            ? [...formData.interests, value]
            : formData.interests.filter((interest) => interest !== value);

        setFormData({
            ...formData,
            interests: updatedInterests
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Data:", formData);
        setFormData({
            userName: '',
            age: 0,
            gender: '',
            subscription: false,
            interests: [],
            file: null
        });

    };

    return (
        <div className="login-container">
            <h2>Signup Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Username:</label>
                    <input
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Gender:
                        <select name="gender" value={formData.gender} onChange={handleInputChange}>
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                </div>
                <div className="checkBox">
                    <label>
                        Subscription:
                        <input
                            type="checkbox"
                            name="subscription"
                            checked={formData.subscription}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div className="checkBox">
                    <label>
                        Interests:
                        <input
                            type="checkbox"
                            name="interests"
                            value="coding"
                            checked={formData.interests.includes('coding')}
                            onChange={handleInterestsChange}
                        /> Coding
                        <input
                            type="checkbox"
                            name="interests"
                            value="sports"
                            checked={formData.interests.includes('sports')}
                            onChange={handleInterestsChange}
                        /> Sports
                        <input
                            type="checkbox"
                            name="interests"
                            value="music"
                            checked={formData.interests.includes('music')}
                            onChange={handleInterestsChange}
                        /> Music
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Upload File:
                        <input
                            type="file"
                            name="file"
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default Question3;

