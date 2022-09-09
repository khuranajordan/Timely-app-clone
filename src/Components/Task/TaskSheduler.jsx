import React from 'react'
import {
    Inject,
    ScheduleComponent ,
    Day, 
    Week, 
    WorkWeek, 
    Month, 
    Agenda} from '@syncfusion/ej2-react-schedule';

const TaskSheduler = () => {
  return (
    <div style={{width:'80%'}}>
        <ScheduleComponent>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
    </div>
  )
}

export default TaskSheduler