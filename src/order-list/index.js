/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.2
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import RequireAuth from "components/RequireAuth";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DataTable from "examples/Tables/DataTable";
import useAuth from "hooks/useAuth";

// Data
import dataTableData from "order-list/data/dataTableData";
import { useEffect } from "react";

function OrderList() {
// const {requireAuthorization}=useAuth();
// useEffect(()=>{
// requireAuthorization(['ROLE_CLIENT', 'ROLE_ADMIN']);
// },[]);
  return (
    <DashboardLayout>
      <SoftBox my={3}>
        <SoftBox display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
          <SoftButton variant="gradient" color="info">
            new order
          </SoftButton>

        </SoftBox>
        <Card>
          <DataTable table={dataTableData} />
        </Card>
      </SoftBox>
    </DashboardLayout>
  );
}

//export default RequireAuth(['ROLE-CLIENT', 'ROLE-ADMIN']) (OrderList);
export default OrderList;
