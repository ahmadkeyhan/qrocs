import Image from "next/image"

export default function Feature({title,description, image, color} : {title: string, description:string, image: string, color: string | undefined}) {
    return (
        <div className="bg-background relative rounded-3xl overflow-hidden p-4 flex flex-col items-start gap-2 h-auto group">
            {image && <div className="relative aspect-[2/1] w-full rounded-2xl overflow-hidden">
                <Image
                    src={image}
                    alt="sdf"
                    fill
                    className="object-cover"
                />
            </div>}
            <h3 className={`text-xl text-foreground group-hover:text-primary mt-2`}>{title}</h3>
            <p className="text-subtext">{description}</p>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute bottom-0 top-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />
            <div className="absolute bottom-0 top-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />
        </div>
    )
}