'use client'
import axios from "axios";
import React, { useEffect, useState }  from "react";

const TableList : React.FC<any> = ({onOpen}) => {

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

    interface clientArray {
        id : number,
        name : string,
        email : string,
        age : number,
        job : string,
        rate : number,
        isActive : boolean
    }


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
            {tableData.map( (client : clientArray) => (
                <tr key={client.id}>
                    <th>{client.name}</th>
                    <td>{client.email}</td>
                    <td>{client.job}</td>
                    <td>{client.rate}</td>
                    <td>{ client.isActive ? 
                        <button className="btn rounded-md bg-primary w-20"> Active </button>    
                        :
                        <button className="btn rounded-md btn-outline btn-primary w-20"> Not Active </button>
                    }</td>

                    <td>
                        <button onClick={onOpen} className="btn btn-secondary">Update</button>
                    </td>
                    <td>
                        <button className="btn btn-error">Delete</button>
                    </td>
                </tr>
            ) )}
            </tbody>
        </table>
        </div>
    );
};

export default TableList;
