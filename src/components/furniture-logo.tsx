import Image from 'next/image'

export function FurnitureLogo() {
    return (
        <div className="flex items-center gap-2">
            <div className="size-10 rounded-full flex items-center justify-center">
               <Image src="/logo.png" alt="logo" width={500} height={500}/>
            </div>
            <h1 className="text-xl font-bold text-black">HoangHa<span className='text-yelly text-3xl'>.</span></h1>
        </div>
    )
}
