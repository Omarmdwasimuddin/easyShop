import React, {Suspense} from 'react';
import Master from "@/components/master/Master";
import Slider from "@/components/product/slider";
import Features from "@/components/features/features";
import FeaturesSkeleton from "@/skeleton/features-skeleton";
import CategoriesSkeleton from "@/skeleton/categories-skeleton";
import Categories from "@/components/product/categories";
import Brands from "@/components/product/brands";
import BrandsSkeleton from "@/skeleton/brands-skeleton";
import Products from "@/components/product/products";

const Page = () => {
    return (
        <Master>
            
             <Slider/>

             <Suspense fallback={<FeaturesSkeleton/>}>
                 <Features/>
             </Suspense>

             <Suspense fallback={<CategoriesSkeleton/>}>
                <Categories/>
             </Suspense>

            <Products/>

            <Suspense fallback={<BrandsSkeleton/>}>
                <Brands/>
            </Suspense>

        </Master>
    );
};
export default Page;
