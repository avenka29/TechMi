import Container from "@/app/components/Container";
import { db } from "@/app/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import ProductDetails from "./ProductDetails";


interface IPrams {
    productId?: string;
  }

const Product = async({ params }: { params: IPrams }) => {
    const {productId} = await params
    const q = query(collection(db, "Products"), where("id", "==", productId));
    const productData = await getDocs(q);
    let products: any[] = []
    productData.forEach((doc)=>{
        products.push(doc.data())
    })
    return (
        <div className="p-8">
          <Container>
            <ProductDetails product={products[0]} />
          </Container>
        </div>
      );
};

export default Product