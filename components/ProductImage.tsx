'use client'
import Image from "next/image";

interface ProductImageProps {
    selectedImg: any
    product: any
    updateImage: any
  }
  
const ProductImage: React.FC<ProductImageProps> = ({product, selectedImg, updateImage }) => {
    return ( 
    <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px] rounded-md">
          {product.images.map((image: string) => {
            return (
              <div
                key={image}
                onClick={() => updateImage(image)}
                className='relative w-[80%] aspect-square rounded border-teal-300 hover:scale-105'>
                <Image
                  src={image}
                  alt={image}
                  fill
                  className="object-contain"
                />
              </div>
            );
          })}
        </div>
        <div className="col-span-5 relative aspect-square">
          <Image
            fill
            src={selectedImg.image}
            alt={product.name}
            className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"
            />
        </div>
      </div> );
}
 
export default ProductImage;