import React, { useEffect } from 'react';
import DataTableManager from '../metronic/app/datatables/current-sessions';

const CurrentSessionsTable = () => {
  useEffect(() => {
    // Ensure the DOM is ready before initializing the DataTableManager
    DataTableManager.createInstance();

    // Cleanup if necessary when component unmounts
    return () => {
      // Add any required cleanup logic
    };
  }, []);

  return (
    <div className="datatable-container">
      <table id="current_sessions_table" className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="text-left p-2">Person</th>
            <th className="text-left p-2">Browser</th>
            <th className="text-left p-2">IP Address</th>
            <th className="text-left p-2">Location</th>
            <th className="text-left p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={5} className="text-center p-4">Loading data...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CurrentSessionsTable;
