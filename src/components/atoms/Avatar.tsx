import Image from 'next/image'

export const Avatar = () => {
    return (
        <Image
            src="/avatar.png"
            alt="Avatar"
            width={40}
            height={40}
            className="rounded-full"
        />
    )
}
