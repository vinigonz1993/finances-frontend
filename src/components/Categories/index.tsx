import React, { useEffect, useState } from "react";
import ApiCategories from '../../api/categories';
import { ResponsePage } from "../../interfaces/response";
import { Category } from "../../interfaces/category";
import { Table } from "react-bootstrap";
import TableHeader from "../../common/Table/TableHeader";
import TableCell from "../../common/Table/TableCell";

const Categories = () => {
    const [categories, setCategories] = useState<ResponsePage<Category>>(
        {} as ResponsePage<Category>,
    );

    useEffect(() => {
        ApiCategories.get().then(
            (response) => setCategories(response.data),
        );
    }, []);

    return (
        <>
            <h2>Categories</h2>
            <Table>
                <TableHeader>
                    <tr>
                        <th>UUID</th>
                        <th>Name</th>
                        <th>Color</th>
                    </tr>
                </TableHeader>
                <tbody>
                    {categories && categories.results?.map((category) => (
                        <tr>
                            <TableCell>{category.uuid}</TableCell>
                            <TableCell>{category.name}</TableCell>
                            <TableCell>
                                <input
                                    type="color"
                                    value={category.color}
                                />
                            </TableCell>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default Categories;
