import React, { useEffect } from 'react';
import { KTDataTable } from '../metronic/core/components/datatable/datatable'; // Adjust import path as necessary
import dataTableOptions from '../metronic/app/datatables/allowed-ip-addresses';

const AllowedIpAddressesTable = () => {
  useEffect(() => {
    const element: HTMLElement = document.querySelector('#ip_addresses_table');
    if (element) {
      const dataTable = new KTDataTable(element, dataTableOptions);

      // Cleanup on component unmount
      return () => {
        // dataTable.destroy();
      };
    }
  }, []);

  return (
    <div className="datatable-container">
      <table id="ip_addresses_table" className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="text-left p-2">Status</th>
            <th className="text-left p-2">IP Address</th>
            <th className="text-left p-2">Last Session</th>
            <th className="text-left p-2">Label</th>
            <th className="text-left p-2">Method</th>
            <th className="text-left p-2">Edit</th>
            <th className="text-left p-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={7} className="text-center p-4">Loading data...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllowedIpAddressesTable;
