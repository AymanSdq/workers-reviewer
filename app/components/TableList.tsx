
import React  from "react";

const TableList : React.FC<any> = ({onOpen}) => {

    interface clientArray {
        id : number,
        name : string,
        email : string,
        age : number,
        job : string,
        rate : number,
        isActive : boolean
    }

    const clientData : clientArray[] = [
        {id : 1 ,name : "Ayman Sedqi", email : "sedqiayman02@gmail.com", age : 22 , job : "Full Stack Developer", rate : 8.5, isActive : true},
        {id : 2 ,name : "Mehdi Bidoud", email : "bidoud.mehdi33@gmail.com", age : 23 , job : "Developer", rate : 6.5, isActive : true},
        {id : 3 ,name : "Aatmane Oulmouden", email : "aatmaneoulmouden27@gmail.com", age : 21 , job : "Full Stack Developer", rate : 7.5, isActive : false},
        {id : 4 ,name : "Mohamed Amine Hnioua", email : "mohamedaminehnioua@gmail.com", age : 21 , job : "Mobile Developer", rate : 9.5, isActive : true},

    ]


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
            {clientData.map( (client) => (
                <tr key={client.id}>
                    <th>{client.name}</th>
                    <td>{client.email}</td>
                    <td>{client.job}</td>
                    <td>{client.age}</td>
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
