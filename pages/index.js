import { React, useState } from 'react'
import { Calendar } from '../components/calendar'

export default function Home() {
  const [events, setEvents] = useState([]);
  const [initialEvents, setInitialEvents] = useState([]);
  const [initialState, setInitialState] = useState({
    totalVacantionsHours: 205,
    previousYearVacationsHours: 0,
    usedVacantionHours: 0,
  });

  const onSelect = (p) => {
    p.id = Math.round(Math.random() * 500);

    setEvents([...events, {
      id: p.id,
      start: p.start,
      end: p.end,
    }]);
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-row mb-5 mt-5 items-center justify-between">
        <h1 className="text-3xl font-bold mb-5 mt-5">
          Holidays planner
        </h1>
        
        <div className="flex flex-row">
          <label className="relative block mr-5">
            <span className="sr-only">Previous year residual</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2"></span>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Previous year residual" type="text" name="pyv"/>
          </label>

          <label className="relative block">
            <span className="sr-only">Planned holidays (YTD)</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2"></span>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Planned holidays (YTD)" type="text" name="pyv"/>
          </label>
        </div>
      </div>

      <Calendar events={events} onSelect={onSelect}/>

      <div className="flex flex-col mt-5">
        <p>Total hours: { (initialState.previousYearVacationsHours + initialState.totalVacantionsHours)} </p>
        <p>Total hours planned (YTD): { initialState.usedVacantionHours } </p>
        <p>Remaning hours to plan: { ((initialState.previousYearVacationsHours + initialState.totalVacantionsHours) - initialState.usedVacantionHours)} </p>
      </div>

      <div className="flex flex-col mt-5">
        <p>Total days: { (initialState.previousYearVacationsHours + initialState.totalVacantionsHours) / 8 } </p>
        <p>Total days planned (YTD): { initialState.usedVacantionHours / 8 } </p>
        <p>Remaning days to plan: { ((initialState.previousYearVacationsHours + initialState.totalVacantionsHours) - initialState.usedVacantionHours) / 8 } </p>
      </div>
    </div>
  )
}
