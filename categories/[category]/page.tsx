import Container from '@/app/components/Container';
import HomeBanner from '@/app/components/nav/HomeBanner';
import ProductCard from '@/app/components/ProductCard';
import { db } from '@/app/lib/firebase';
import { collection, getDocs, query, where } from "firebase/firestore";
interface CategoryProps{
    category?: string
}

const Category= async({ params }: { params: CategoryProps }) => {
    const {category} = await params
    let products: any[] = []
    const q = query(collection(db, "Products"), where("category", "==", category));
    const productData = await getDocs(q);
  
    productData.forEach((doc)=>{
      products.push(doc.data())
      })
    return ( 
        <div className="p-8">
        <Container>
          <div>
            <HomeBanner />
          </div>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {products.map((product: any) => {
              return <ProductCard product={product} key={product.id}/>;
            })}
          </div>
        </Container>
      </div>
    );
}
 
export default Category;