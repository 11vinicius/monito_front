import React from "react"

interface TableProps {
    columns: string[],
    children: React.ReactNode
}

const TableComponent: React.FC<TableProps> = ({columns, children}:TableProps) => {
    return (
        <div className="overflow-x-auto rounded-md">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-green-100 text-center">
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {children}
                </tbody>
            </table>
        </div>
    )
}


export default TableComponent