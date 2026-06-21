import React from 'react'
import Link from 'next/link';
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div>
      <Link  href={{
        pathname: '/contact',
        query: { name: 'test' },
      }}
      >Go to contact</Link>
      <Link href={"/products/1"}>Go to Product</Link>

      <Image
      src="https://chaicode.com/assets/white-1-CYshgcRl.webp"
      width={200}
      height={200}
      alt="Picture of the author"
    />
    </div>
  )
}

export default AboutPage