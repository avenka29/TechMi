'use client'
import HomeIcon from '@mui/icons-material/Home';
import LaptopIcon from '@mui/icons-material/Laptop';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useRouter } from 'next/navigation';
import Container from "../Container";


const Categories = () => {
    const router = useRouter()
    return (  
        <div className="bg-slate">
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto bg-slate-200 gap-7">
                <div onClick={()=>router.push('/')}>
                    <BottomNavigationAction showLabel label="Home" icon={<HomeIcon />} />
                </div>

                <div onClick={()=>router.push('/categories/Phones')}>
                    <BottomNavigationAction showLabel label="Phones" icon={<PhoneAndroidIcon />} />
                </div>

                <div onClick={()=>router.push('/categories/Laptops')}>
                    <BottomNavigationAction showLabel label="Laptops" icon={<LaptopIcon />} />
                </div>

                <div onClick={()=>router.push('/categories/Tablets')}>
                    <BottomNavigationAction showLabel label="Tablets" icon={<TabletMacIcon />} />
                </div>


            </div>
        </Container>
    </div> 

    );
}
 
export default Categories;