'use client'
import ProductImage from "@/app/components/ProductImage";
import { useRouter } from "next/navigation";
import { useState } from "react";


interface ProductDetailsProps {
  product: any;
}

export type SelectedImg = {
  image: string;
};


const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const [selectedImg, setSelectedImg] = useState<SelectedImg>({image: product.images[0]});
    const router = useRouter();

    const updateImage = (url: string) => {
      setSelectedImg({ image: url });
    };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <ProductImage
        selectedImg={selectedImg}
        product={product}
        updateImage={updateImage}
      />
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>


        <div className="text-justify pt-5 text-medium">{product.review}</div>
        <div className="text-justify text-lg pt-6">{product.price}</div>


      </div>
    </div>
  );
};

export default ProductDetails;
