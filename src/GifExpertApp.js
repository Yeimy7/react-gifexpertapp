import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';



const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Timothee Chalamet']);
    // const handleAdd = () => {
    //     const val="Dylan O'brien";
    //     setCategories([...categories,val]);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            key={category}
                            category={category} />
                    )
                }
            </ol>
        </>
    )
}
export default GifExpertApp