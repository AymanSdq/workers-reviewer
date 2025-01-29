'use client'
import axios from "axios";
import React, { useEffect, useState }  from "react";


interface clientArray {
    id : number,
    name : string,
    email : string,
    age : number,
    job : string,
    rate : number,
    isactive : boolean
}

const TableList : React.FC<any> = ({handleOpen, searchTerm}) => {

    const [tableData , setTableData] = useState([]);
    const [errorData , setErrorData] = useState(null)

    useEffect( () => {
        const fetchData = async() => {

            try {
                const response = await axios.get("http://localhost:3002/api/clients")
                setTableData(response.data);
            } catch (error) {
                
            }
        }
        fetchData();
    } , [])


    // Function to delete
    const deleteClient = async (id : number)  =>  {
        try {
            const deleteClient = await axios.delete(`http://localhost:3002/api/deleteclient/${id}`)
            .then( (result) => {
                console.log("Deleted Successfully")
            })
        } catch (error) {
            
        }
    }


    // Filtering the data
    const filteredData = tableData.filter((client : clientArray)  => 
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.job.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="overflow-x-auto my-10 px-16">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Job</th>
                <th>Rate</th>
                <th>Active</th>
            </tr>
            </thead>
            <tbody className="hover">
            {filteredData.map( (client : clientArray) => (
                <tr key={client.id}>
                    <th>{client.name}</th>
                    <td>{client.email}</td>
                    <td>{client.job}</td>
                    <td>{client.rate}</td>
                    <td>{ client.isactive ? 
                        <button className="btn rounded-md bg-primary w-20"> Active </button>    
                        :
                        <button className="btn rounded-md btn-outline btn-primary w-20"> Not Active </button>
                    }</td>

                    <td>
                        <button onClick={() => handleOpen("update", client)} className="btn btn-secondary">Update</button>
                    </td>
                    <td>
                        <button onClick={() => deleteClient(client.id)}  className="btn btn-error">Delete</button>
                    </td>
                </tr>
            ) )}
            </tbody>
        </table>
        </div>
    );
};

export default TableList;
