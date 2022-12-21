import React, { useEffect, useState } from 'react';
import "./Activities.css";

const Activities = () => {
    const [activities, setActivities] = useState([])

    useEffect(() =>{
        fetch('activities.json')
        .then(res =>res.json())
        .then(data => setActivities(data))

    }, [])
    return (
       <section>
            <h1 className='section-title'>Recent Activities{activities.length}</h1>
            <div className='activities-container'>
                {
                    activities.slice(0, 8).map(activity =>
                    <div key={activity.id} className='activities'>
                         <div className='date'>
                        <h1>{activity.date}</h1>
                        <p>{activity.month}</p>
                        </div>
                    <div className='activities-contant'>
                        <h2>{activity.title}</h2>
                        <p>{activity.body}</p>
                    </div>

                    </div>)
                }
            </div> 
       </section>
    );
};

export default Activities;