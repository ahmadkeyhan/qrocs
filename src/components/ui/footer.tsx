import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <div className="p-4">
            <Link 
                target="_blank"
                referrerPolicy="origin"
                href='https://trustseal.enamad.ir/?id=600925&Code=jnraP2kVdCFziKkq229EqCp3XAVhSt9F'
            >
                <div className="relative w-28 h-28">
                    <Image 
                        referrerPolicy='origin' 
                        src='https://trustseal.enamad.ir/logo.aspx?id=600925&Code=jnraP2kVdCFziKkq229EqCp3XAVhSt9F' 
                        alt='e-namad'
                        loading="lazy" 
                        fill
                        className='cursor-pointer object-cover' 
                    />
                </div>
            </Link>
        </div>
    )
}