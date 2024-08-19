import { Product } from "@prisma/client"
import Image from "next/image";
import Link from "next/link";
interface ProductCard2Props {
    product: Product;
}
export default async function ProductCard2({product}: ProductCard2Props){
 return(
    <Link className="card card-body p-0 sm:w-[15em] sm:h-[25em] hover:scale-x-105 hover:text-green-400 transition duration-500 pt-2 shadow-xl"
    href={"./Products/" + product.id}
    >           
      <Image
        src={product.imageUrl}
        className="w-full h-full rounded-xl brightness-75 hover:brightness-50"
        width={1920}
        height={1080}
        alt={product.name}
      />
      <h1 className="absolute bottom-3 sm:bottom-[10%] text-3xl font-bold font-mono ml-10">
        {product.name}
      </h1>
     
    </Link>
 )   
}