import React, { useEffect, useState } from "react";
import {DataGrid } from "@mui/x-data-grid";
import * as UserService from "../service/UserService";
const UserList = () => {
    const [userList, setUserList] = useState([]);
    const handleSuerList = async () => {
        const data = await UserService.userList();
        setUserList(data.data);
    }
    useEffect(() => {
        handleSuerList();
    },[]);
    const columns = [
        {
        field: 'firstName',
        headerName: 'first name'
        },
        {
            field: 'lastName',
            headerName:'Last Name',
            width: 150
        },
        {
            field: "dob",
            headerName: 'Date of Birth',
            width: 150
        },
        {
            field: "email",
            headerName: 'Email',
            width: 400
        }
    ]
    let rows = [];
    userList.map((item) => {
        rows.push(item)
    })

    return (
        <>
        <div style={{ height:400, width:'100%'}}>
            <DataGrid 
                rows={rows}
                columns={columns}
                pageSize={10}
            />
        </div>
        </>
    )

}

export default UserList;