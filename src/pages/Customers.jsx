/* eslint-disable react-hooks/incompatible-library */
import { useState } from "react";
import { Header } from "../components";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Trash2, XCircle } from "lucide-react";

const Customers = ({ data }) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  });
  const [sorting, setSorting] = useState([]);
  const [rowSelection, setRowSelection] = useState({});
  const [newData, setNewData] = useState(data);

  const handleDeleteSelected = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete selected items?"
    );

    if (!confirmed) return;

    const selectedIds = table
      .getSelectedRowModel()
      .rows.map((row) => row.original.CustomerID);

    setNewData((prev) =>
      prev.filter((item) => !selectedIds.includes(item.CustomerID))
    );

    setRowSelection({});
  };

  const columns = [
    {
      id: "select",
      header: ({ table }) => (
        <input
          type="checkbox"
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
          className="dark:accent-black accent-white"
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
          className="dark:accent-black accent-white"
        />
      ),
      size: 40,
    },
    {
      accessorKey: "CustomerName",
      header: "Name",
      meta: {
        width: "200px",
      },
      enableSorting: true,
      cell: (info) => {
        return (
          <div className="image flex gap-4 items-center">
            <img
              className="rounded-full w-10 h-10"
              src={info.cell.row.original.CustomerImage}
              alt="employee"
            />
            <div>
              <p className="text-start">
                {info.cell.row.original.CustomerName}
              </p>
              <p className="text-start text-gray-400 text-sm">
                {info.cell.row.original.CustomerEmail}
              </p>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "ProjectName",
      header: "Project Name",
      meta: {
        width: "150px",
      },
      enableSorting: true,
    },
    {
      accessorKey: "Status",
      header: "Status",
      meta: {
        width: "130px",
      },
      enableSorting: true,
      cell: (info) => {
        return (
          <div className="flex gap-2 justify-center items-center capitalize">
            <p
              style={{ background: info.cell.row.original.StatusBg }}
              className="rounded-full h-3 w-3"
            />
            <p>{info.cell.row.original.Status}</p>
          </div>
        );
      },
    },
    {
      accessorKey: "Weeks",
      header: "Weeks",
      meta: {
        width: "100px",
      },
      enableSorting: true,
    },
    {
      accessorKey: "Budget",
      header: "Budget",
      meta: {
        width: "120px",
      },
      enableSorting: true,
    },
    {
      accessorKey: "Location",
      header: "Location",
      meta: {
        width: "150px",
      },
      enableSorting: false,
    },
    {
      accessorKey: "CustomerID",
      header: "Customer ID",
      meta: {
        width: "120px",
      },
      enableSorting: false,
    },
  ];

  const table = useReactTable({
    data: newData,
    columns,
    state: {
      pagination,
      sorting,
      rowSelection,
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg dark:text-gray-200">
      <Header category="Page" title="Customers" />

      <div className="flex items-center gap-3 mb-3">
        <button
          onClick={handleDeleteSelected}
          disabled={!table.getIsSomeRowsSelected()}
          className="
                      flex items-center gap-1.5
                      px-3 py-1.5
                      text-sm
                      text-red-600
                      border border-red-200
                      rounded-md
                      hover:bg-gray-200
                      disabled:opacity-40
                      disabled:cursor-not-allowed
                      dark:border-red-500
                      dark:hover:text-black
                    "
        >
          <Trash2 size={16} />
          <span>Delete</span>
        </button>
        {table.getIsSomeRowsSelected() && (
          <button
            onClick={() => table.resetRowSelection()}
            className="
                        flex items-center gap-1.5
                        px-3 py-1.5
                        text-sm
                        text-gray-600
                        border
                        rounded-md
                        hover:bg-gray-100
                        dark:text-gray-200
                      "
          >
            <XCircle size={16} />
            <span>Clear</span>
          </button>
        )}
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[900px] table-auto border-collapse border">
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
              <tr
                key={row.id}
                onClick={row.getToggleSelectedHandler()}
                className={`
                cursor-pointer
                hover:bg-gray-50
                dark:text-gray-200
                dark:hover:text-black
                ${row.getIsSelected() ? "bg-blue-50" : ""}
              `}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="p-3 border-b text-center"
                    style={{ minWidth: cell.column.columnDef.meta?.width }}
                    // onClick={(e) => e.stopPropagation()}
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

export default Customers;
