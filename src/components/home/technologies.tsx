import Image from "next/image"

export default function Technologies() {
    return (
        <div className="relative flex flex-col justify-center text-center pt-6 w-full max-w-5xl">
            <h2 className="text-3xl">قدرت گرفته از:</h2>
            <div className="relative flex w-full overflow-x-hidden saturate-0">
                <div className="flex py-8 animate-marquee whitespace-nowrap">
                    <div className="flex flex-col items-center gap-2 mx-8 sm:mx-12 lg:mx-16">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden">
                            <Image
                                src='/techIcons/nextjs-icon.svg'
                                alt="sdf"
                                fill
                                className="object-fill"
                            />
                        </div>
                        <p>NEXT JS</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 mx-8 sm:mx-12 lg:mx-16">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden">
                            <Image
                                src='/techIcons/mongodb-icon.svg'
                                alt="sdf"
                                fill
                                className="object-fill"
                            />
                        </div>
                        <p>MONGO DB</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 mx-8 sm:mx-12 lg:mx-16">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden">
                            <Image
                                src='/techIcons/tailwind-css-icon.svg'
                                alt="sdf"
                                fill
                                className="object-fill"
                            />
                        </div>
                        <p>TAILWIND CSS</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 mx-8 sm:mx-12 lg:mx-16">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden">
                            <Image
                                src='/techIcons/node-js-icon.svg'
                                alt="sdf"
                                fill
                                className="object-fill"
                            />
                        </div>
                        <p>NODE JS</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 mx-8 sm:mx-12 lg:mx-16">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden">
                            <Image
                                src='/techIcons/framer-icon.svg'
                                alt="sdf"
                                fill
                                className="object-fill"
                            />
                        </div>
                        <p>FRAMER</p>
                    </div>
                </div>
                <div className="absolute top-0 flex py-8 animate-marquee2 whitespace-nowrap">
                    <div className="flex flex-col items-center gap-2 mx-8 sm:mx-12 lg:mx-16">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden">
                            <Image
                                src='/techIcons/nextjs-icon.svg'
                                alt="sdf"
                                fill
                                className="object-fill"
                            />
                        </div>
                        <p>NEXT JS</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 mx-8 sm:mx-12 lg:mx-16">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden">
                            <Image
                                src='/techIcons/mongodb-icon.svg'
                                alt="sdf"
                                fill
                                className="object-fill"
                            />
                        </div>
                        <p>MONGO DB</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 mx-8 sm:mx-12 lg:mx-16">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden">
                            <Image
                                src='/techIcons/tailwind-css-icon.svg'
                                alt="sdf"
                                fill
                                className="object-fill"
                            />
                        </div>
                        <p>TAILWIND CSS</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 mx-8 sm:mx-12 lg:mx-16">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden">
                            <Image
                                src='/techIcons/node-js-icon.svg'
                                alt="sdf"
                                fill
                                className="object-fill"
                            />
                        </div>
                        <p>NODE JS</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 mx-8 sm:mx-12 lg:mx-16">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden">
                            <Image
                                src='/techIcons/framer-icon.svg'
                                alt="sdf"
                                fill
                                className="object-fill"
                            />
                        </div>
                        <p>FRAMER</p>
                    </div>
                </div>
                <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent"></div>
                <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>
    )
}