'use client';

import useSWR from 'swr';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import parse from 'html-react-parser';

const fetcher = url => axios.post(url).then(res => res.data);

export default function ProductDetailsPage() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id'); 

    const { data, error, isLoading } = useSWR(
        id ? `/api/product/details?id=${id}` : null,
        fetcher
    );

    if (isLoading) return <p className="text-center mt-4">Loading...</p>;
    if (error) return <p className="text-center mt-4 text-danger">{error.message}</p>;
    if (!data || data.status !== 'success') return <p className="text-center mt-4 text-danger">Product not found</p>;

    const product = data.data;
    const details = product.product_details;

    if (!details) {
        return (
            <div className="container py-4">
                <h1 className="h3 mb-3">{product.title}</h1>
                <p className="text-muted">No product details available.</p>
            </div>
        );
    }

    const images = [
        details.img1, details.img2, details.img3, details.img4,
        details.img5, details.img6, details.img7, details.img8
    ].filter(Boolean);

    return (
        <div className="container py-4">
            <div className="row g-4">
                {/* Images Section */}
                <div className="col-md-6">
                    {images.length > 0 ? (
                        <div>
                            {/* First Image - full size */}
                            <img
                                src={images[0]}
                                alt={`Product Image 1`}
                                className="img-fluid rounded border mb-2"
                            />

                            {/* Remaining Images - small size with hover zoom */}
                            <div className="d-flex flex-wrap gap-2 mt-2">
                                {images.slice(1).map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Product Image ${index + 2}`}
                                        className="img-thumbnail zoom-img"
                                        style={{ width: '100px', height: '100px', objectFit: 'cover', cursor: 'pointer' }}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p className="text-muted">No images available</p>
                    )}
                </div>

                {/* Product Details Section */}
                <div className="col-md-6">
                    <h1 className="h3 mb-3">{product.title}</h1>
                    <p className="text-muted mb-2"><strong>Colors:</strong> {details.color}</p>
                    <p className="text-muted mb-2"><strong>Sizes:</strong> {details.size}</p>
                    <p className="h5 fw-semibold mb-3">
                        Price: ${product.discount ? product.discount_price : product.price}
                    </p>
                    <div>{parse(details.des)}</div>
                </div>
            </div>

            {/* Zoom effect CSS */}
            <style jsx>{`
                .zoom-img {
                    transition: transform 0.3s ease;
                }
                .zoom-img:hover {
                    transform: scale(1.5);
                    z-index: 10;
                    position: relative;
                }
            `}</style>
        </div>
    );
}