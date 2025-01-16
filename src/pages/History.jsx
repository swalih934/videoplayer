import React from 'react'

function History() {
  return (
<>
<div className='p-5'>
    <h5>Watch History</h5>
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
            <tr>
                <td>1</td>
                <td>barcelona</td>
                <td>http//;sdfgbbs.sfghjk</td>
                <td>2025-01-14</td>
                <td>
                    <button className='btn'>
                    <i className="fa-solid fa-trash" style={{color: "#aa0325",}} />
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</>  )
}

export default History