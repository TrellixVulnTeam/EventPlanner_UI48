import React from 'react';
import {EventList} from '../helpers/EventList';


function Events(){
    return(
        <div className ="events">
            <h1 className= "allEvents">All Events</h1>
            <div className="eventList">{EventList.map((eventNo, key) => {
                return  <div> {eventNo.name}</div>
                    
            })}
            </div>
        </div>
    )
}
export default Events;