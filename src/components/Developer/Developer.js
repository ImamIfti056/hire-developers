import React from 'react';
import './Developer.css';

const Developer = (props) => {
    const {owner, channelName, salary, age, subscribers, img} = props.developer;
    return (
        <div className='developer'>
            <div className='developer-img'>
                <img src={img} alt="developer-img" />
            </div>
            <div className="developer-info">
                <h3 className='developer-name'>Name: {owner}</h3>
                <h4><b>Salary:</b> ${salary} </h4>
                <p><b>Channel:</b> {channelName} </p>
                <p><small>Subscribers: {subscribers} </small><small>Age: {age} </small></p>
                <button onClick={() => props.handleAddButton(props.developer)} className="btn-add"><i class="fas fa-plus"></i> Hire</button>
            </div>
        </div>
    );
};

export default Developer;