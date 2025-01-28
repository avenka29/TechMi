import Link from "next/link";
import Container from "../Container";
import Categories from "./Categories";
const NavBar = () => {
    return ( 
        <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm">
        <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex items-center justify-start gap-7 md:gap-0">
              <Link
                href="/"
                className={'font-bold text-2xl mr-5'}
              >
                TechMi
              </Link>

              <div className="ml-5">
              </div>

            </div>

          </Container>
          <Categories/>
        </div>

      </div>
     );
}
 
export default NavBar;