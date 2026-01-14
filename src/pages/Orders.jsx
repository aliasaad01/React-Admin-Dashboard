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

const Orders = ({ data }) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  });
  const [sorting, setSorting] = useState([]);

  const columns = [
    {
      accessorKey: "ProductImage",
      header: "Image",
      meta: {
        width: "120px",
      },
      enableSorting: false,
      cell: (info) => {
        return (
          <div>
            <img
              className="rounded-xl h-20 w-20 md:ml-3"
              src={info.cell.row.original.ProductImage}
              alt="order-item"
            />
          </div>
        );
      },
    },
    {
      accessorKey: "OrderItems",
      header: "Item",
      meta: {
        width: "150px",
      },
      enableSorting: true,
    },
    {
      accessorKey: "CustomerName",
      header: "Customer Name",
      meta: {
        width: "150px",
      },
      enableSorting: true,
    },
    {
      accessorKey: "TotalAmount",
      header: "Amount",
      meta: {
        width: "150px",
      },
      enableSorting: true,
      cell: (info) => `$${info.getValue()}`,
    },
    {
      accessorKey: "Status",
      header: "Status",
      meta: {
        width: "120px",
      },
      enableSorting: false,
      cell: (info) => {
        const row = info.row.original;
        return (
          <button
            className="px-3 py-1 rounded-full text-white text-xs"
            style={{ backgroundColor: row.StatusBg }}
          >
            {row.Status}
          </button>
        );
      },
    },
    {
      accessorKey: "OrderID",
      header: "Order ID",
      meta: {
        width: "120px",
      },
      enableSorting: false,
    },
    {
      accessorKey: "Location",
      header: "Location",
      meta: {
        width: "150px",
      },
      enableSorting: false,
    },
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      sorting,
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="m-2 mt-20 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg dark:text-gray-200">
      <Header category="Page" title="Orders" />

      <div className="w-full overflow-x-auto">
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

export default Orders;
