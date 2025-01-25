import React, { useEffect, useState } from 'react'
import { getCategory } from '../services/AllApis'
import { deleteCategory } from '../services/AllApis'
function Categorylist({response}) {

    const [category, SetCategory] = useState([])

    useEffect(() => {
        getData()
    }, [response])

    const getData = async () => {
        const result = await getCategory()
        console.log(result);
        if (result.status == 200) {
            SetCategory(result.data)
        }

    }

    const delCategory=async(id)=>{
        const resullt=await deleteCategory(id)
        console.log(resullt);
        if(resullt.status==200){
            getData()
        }
        
    }
    return (
        <>
            <div className='border  border-3 container-fluid p-2 mt-3'>
                {category.length > 0 ?
                    <div>
                        {category.map(item => (
                            <div className='m-2 p-2 border border-2 d-flex justify-content-around '>
                                <h3>{item.title}</h3>
                                <button onClick={()=>{delCategory(item.id)}} className='btn'>
                                    <i className="fa-solid fa-trash" style={{ color: "#aa0325", }} />
                                </button>
                            </div>
                        ))}
                    </div>
                    :
                    <h4>no category</h4>}
            </div>

        </>)
}

export default Categorylist