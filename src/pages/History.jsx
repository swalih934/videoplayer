import React, { useEffect, useState } from 'react'
import { getHistory,delHistory } from '../services/AllApis'
function History() {

    const [history, SetHistory] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const result = await getHistory()
        console.log(result);
        if (result.status == 200) {
            SetHistory(result.data)
        }
    }

    const deleteHistory=async(id)=>{
        const resullt=await delHistory(id)
        console.log(resullt);
        if(resullt.status==200){
            getData()
        }
    }
    return (
        <>
            <div className='p-5'>
                <h5>Watch History</h5>
                {
                    history.length > 0 ?
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Video ID</th>
                                    <th>Title</th>
                                    <th>Video Url</th>
                                    <th>Date and time</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    history.map(item => (
                                        <tr>
                                            <td>{item.videoId}</td>
                                            <td>{item.title}</td>
                                            <td>{item.url}</td>
                                            <td>{item.dateTime}</td>
                                            <td>
                                                <button onClick={()=>deleteHistory(item.id)} className='btn'>
                                                    <i  className="fa-solid fa-trash" style={{ color: "#aa0325", }} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                        :
                        <h6 className='text-center text-info'>No Watch History</h6>
                }

            </div>
        </>)
}

export default History