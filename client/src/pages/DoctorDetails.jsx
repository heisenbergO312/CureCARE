/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { backendLink } from '..';

const DoctorDetails = () => {
    const params = useParams();
    const [data, setData] = useState({"name":""})
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `${backendLink}/doctors/${params.id}`
                );
                console.log(res.data);
                setData(res.data)
            } catch (error) {
                console.log(`${error}`);
            }
        };
        fetchData();
    },[]);

    return (
        <>
            <div>{params.id}</div>
            <div>{data.name}</div>
        </>
    )
}

export default DoctorDetails