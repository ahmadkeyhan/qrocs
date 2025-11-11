import {Globe, ImageIcon} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ICustomer } from "@/models/Customer"


type Customer = Omit<ICustomer,"createdAt" | "updatedAt">

export default function Customer({cus} : {cus: Customer}) {
    return (
                <div className="flex flex-col items-center gap-4">
                  <p className="text-xl">{cus.name}</p>
                  <Image src={cus.logo} alt="logo" width={100} height={100}/>
                  <div className="flex justify-between gap-4">
                    <Link href={`/customers/${cus.slug}`}>
                      <ImageIcon className="w-4 h-4" />
                    </Link>
                    {cus.website ? <Link href={cus.website}><Globe className="w-4 h-4" /></Link> : <Globe className="w-4 h-4" />}
                  </div>
                </div>
              )
}