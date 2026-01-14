/* eslint-disable react-hooks/incompatible-library */
import { GrLocation } from "react-icons/gr";
import { Header } from "../components";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useDeferredValue, useState } from "react";

const Employees = ({ data }) => {
  const [searchInput, setSearchInput] = useState("");
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  });
  const [sorting, setSorting] = useState([]);
  const deferredSearch = useDeferredValue(searchInput);

  const columns = [
    {
      accessorKey: "Name",
      header: "Employee",
      meta: {
        width: "150px",
      },
      enableSorting: true,
      cell: (info) => {
        return (
          <div className="flex items-center gap-2 ml-2">
            <img
              className="rounded-full w-10 h-10"
              src={info.cell.row.original.EmployeeImage}
              alt="employee"
            />
            <p className="text-start">{info.cell.row.original.Name}</p>
          </div>
        );
      },
    },
    {
      accessorKey: "Title",
      header: "Designation",
      meta: {
        width: "135px",
      },
      enableSorting: true,
    },
    {
      accessorKey: "Country",
      header: "Country",
      meta: {
        width: "120px",
      },
      enableSorting: false,
      cell: (info) => {
        return (
          <div className="flex items-center justify-center gap-2">
            <GrLocation />
            <span>{info.cell.row.original.Country}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "HireDate",
      header: "Hire Date",
      meta: {
        width: "135px",
      },
      enableSorting: false,
    },
    {
      accessorKey: "ReportsTo",
      header: "Reports To",
      meta: {
        width: "120px",
      },
      enableSorting: false,
    },
    {
      accessorKey: "EmployeeID",
      header: "Employee ID",
      meta: {
        width: "125px",
      },
      enableSorting: false,
    },
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter: deferredSearch,
      pagination,
      sorting,
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="m-2 mt-20 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg dark:text-gray-200">
      <Header category="Page" title="Employees" />

      <div className="w-full overflow-x-auto">
        {/* Search Input */}
        <div className="mb-4 flex justify-end">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search employees..."
            className="border p-2 rounded w-full md:w-1/3 dark:bg-secondary-dark-bg dark:text-gray-200 outline-none"
          />
        </div>

        <table className="w-full min-w-[900px] table-fixed border-collapse border">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={(e) => {
                      e.preventDefault();
                      header.column.getToggleSortingHandler()(e);
                    }}
                    className="p-3 border-b font-extrabold text-md text-gray-700 cursor-pointer select-none dark:text-gray-200"
                    style={{ minWidth: header.column.columnDef.meta?.width }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}

                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted()] ?? null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="p-3 border-b text-center"
                    style={{ minWidth: cell.column.columnDef.meta?.width }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-center gap-10 my-4">
          <div className="text-sm">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="px-3 py-1 border rounded disabled:opacity-40"
            >
              Prev
            </button>

            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="px-3 py-1 border rounded disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
