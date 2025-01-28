'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps{
    product: any
}


const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    const router = useRouter()
    return ( 
    <div
        onClick={() => router.push(`/products/${product.id}`)}
        className="col-span-1
        cursor-pointer
        border-[1.2px]
        border-slate-200
        bg-slate-50
        rounded-sm
        p-2
        transition
        hover:scale-105
        text-center
        text-sm
        rounded-md
        "
        >
        <div
            className="
        flex
        flex-col
        items-center
        w-full
        gap-1
        "
        >
            <div className="aspect-square overflow-hidden relative w-full">
            <Image
                fill
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-contain"
            />
            </div>
            <div className="mt-4">{product.name}</div>
            <div className="font-semibold">{product.price}</div>
        </div>
        </div>


     );
}
 
export default ProductCard;