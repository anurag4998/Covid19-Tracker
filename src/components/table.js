import React, { useContext } from 'react';
import Jsoncontext from '../context/context';
import { Table } from 'reactstrap';
const State_data = (props) => {
    let { stateWise: total } = useContext(Jsoncontext)
    let table;
    if (total !== undefined) {

        table = total.filter(item => item.confirmed > 0)
        table = table.filter(item => item.state !== 'Total')
        table = table.map(item => {
            return (
                <tr className='row-container' key={item.state}>
                    <td className='state' >
                        <div className='state-val'>
                            {item.state}</div>
                    </td>
                    <td className='value'>
                        <div className='val'>
                            {item.confirmed}</div>
                    </td>
                    <td className='value'>
                        <div className='val'>
                            {item.recovered}</div>
                    </td>
                    <td className='value'>
                        <div className='val'>
                            {item.active}</div>
                    </td>
                    <td className='value'>
                        <div className='val'>
                            {item.deaths}</div>
                    </td>
                    <td className={item.deltaconfirmed > 0 ? 'value delconfirmed' : 'value'}>
                        <div className='val '>
                            {item.deltaconfirmed > 0 ? `+${item.deltaconfirmed}` : 0}</div>
                    </td>
                    <td className={item.deltarecovered > 0 ? 'value delconfirmed' : 'value'}>
                        <div className='val '>
                            {item.deltarecovered > 0 ? `+${item.deltarecovered}` : 0}</div>
                    </td>

                    <td className='value'>
                        <div className='val'>
                            {/* eslint-disable-next-line */}
                            {item.confirmed == 0 ? '0' : (parseInt(item.active) / parseInt(item.confirmed) * 100).toFixed(2)}</div>
                    </td>
                    <td className='value'>
                        <div className='val'>
                            {/* eslint-disable-next-line */}
                            {item.confirmed == 0 ? '0' : (parseInt(item.recovered) / parseInt(item.confirmed) * 100).toFixed(2)}</div>
                    </td>
                </tr>
            )
        })
    }
    return (
        <div className='table-container' >
            <h1> STATEWISE CASES</h1>
            <Table responsive striped hover bordered >
                <thead>
                    <tr className='header-container' >
                        <th className='state'>State</th>
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Cases Today</th>
                        <th>Recovered<br></br> Today</th>
                        <th>Active ratio</th>
                        <th>Recovery <br></br> ratio</th>

                    </tr>
                </thead>
                <tbody>
                    {table}

                </tbody>
            </Table>
        </div>
    )
}

export default State_data