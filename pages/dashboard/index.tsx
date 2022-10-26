import React from "react";
import type { NextPage} from 'next'
import DashboardLayout from "../../components/layouts/dashboard/dashboardLayout/DashboardLayout";
import {Typography} from "@mui/material";


const DashboardHome: NextPage = () => {

    const getLayout = DashboardLayout.getLayout ?? ((page) => page);

    return getLayout(
        <>
        <Typography variant={"h2"} sx={{m:10}}>Dashboard Home</Typography>
        </>
    ,["Dashboard", "Home"]);
    }


export default DashboardHome;
