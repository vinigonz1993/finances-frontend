import React, { useEffect, useState } from "react";
import ApiCategories from '../../api/categories';
import { ResponsePage } from "../../interfaces/response";
import { Category } from "../../interfaces/category";
import { Table } from "react-bootstrap";

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
                <thead>
                    <tr>
                        <th>UUID</th>
                        <th>Name</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>
                    {categories && categories.results?.map((category) => (
                        <tr>
                            <td>{category.uuid}</td>
                            <td>{category.name}</td>
                            <td>{category.color}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default Categories;
