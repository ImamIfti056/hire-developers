import React from 'react';
import './Developer.css';

const Developer = (props) => {
    const {owner, channelName, salary, age, subscribers, img} = props.developer;
    return (
        // developer card
        <div className='developer'>
            <div className='developer-img'>
                <img src={img} alt="developer-img" />
            </div>
            <div className="developer-info">
                <h3 className='developer-name'>Name: {owner}</h3>
                <h4><span>Salary:</span> ${salary} </h4>
                <p><span>Channel:</span> {channelName} </p>
                <p>
                    <small><span>Subscribers:</span> {subscribers}</small>
                    <small><span>Age:</span> {age}</small>
                </p>
                
                <button onClick={() => props.handleAddButton(props.developer)} className="btn-add"><i className="fas fa-plus"></i> Hire</button>
            </div>
        </div>
    );
};

export default Developer;