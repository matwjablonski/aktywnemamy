import Image from 'next/image';
import Link from 'next/link';

const ReviewCTA = () => {
  return (
    <div
      className="
        fixed
        bottom-20
        right-5
        md:right-20
        z-20
        bg-main
        p-3
        md:p-7
        shadow-xl
        group
        rounded-[50px]
        hover:rounded-none
        transition-all
        hover:transition-all
        cursor-pointer
        motion-safe:animate-bounce
      "
    >
      <Link href="https://forms.gle/CKPqcLJ3cpAAUWiX9" target="_blank">
        <Image src="/stars.svg" height={50} width={50} alt="" />
        <div
          className="
            absolute
            -top-28
            md:-top-20
            w-60
            md:w-80
            right-0
            md:right-10
            bg-secondary
            p-4
            text-xl
            md:text-base
            text-white
            invisible
            group-hover:visible
            transition-all
            group-hover:transition-all

            after:content
            after:absolute
            after:w-0
            after:h-0
            after:right-10
            after:-bottom-[20px]
            after:border-[10px]
            after:border-t-secondary
            after:border-r-secondary
            after:border-b-transparent
            after:border-l-transparent
          "
        >
          Hej! Napisz co myślisz o naszej inicjatywie!
        </div>
      </Link>
    </div>
  )
}

export default ReviewCTA;
