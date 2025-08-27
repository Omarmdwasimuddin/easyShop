import React from 'react';
import Master from "@/components/master/Master";
import ProductList from "@/components/product/ProductList";


async function getData(key) {
    return (await (await fetch(`${process.env.BASE_URL}/api/product/list-by-keyword?keyword=${key}`,{ cache: "no-store" })).json())['data']
}


const Page = async ({searchParams}) => {
const key = (await searchParams)?.key || "";
const data = key ? await getData(key) : [];

    return (
        <Master>
            <ProductList data={data}/>
        </Master>
    );
};

export default Page;