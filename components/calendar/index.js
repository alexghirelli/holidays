import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction"

export function Calendar(props) {
    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView='timeGridWeek'
            nowIndicator={true}
            firstDay={1}
            slotMinTime={'09:00:00'}
            slotMaxTime={'18:00:00'}
            height={500}
            editable={true}
            weekNumbers={true}
            weekends={false}
            selectable={true}
            selectMirror={true}
            selectAllow={() => true}
            dragScroll={true}
            events={props?.events}
            initialEvents={props?.initialEvents}
            businessHours={{
                daysOfWeek: [ 1, 2, 3, 4, 5 ],
                startTime: '09:00',
                endTime: '18:00',
            }}
            select={props.onSelect}
        />
    )
}