import Banner from '@/components/Banner'
import { Header } from '@/components/Header'
import ProductFeed from '@/components/ProductFeed'
// import imgtest from '../public/images/1.jpg'
// import Image from 'next/image';



export default function Home() {
  // console.log(products)
  return (
    <>
      <Header />
      <main className="mx-auto ">
        {/* banner */}
        <Banner />

        {/* product feed */}
        <ProductFeed />
      </main>
      {/* <Image src={imgtest} alt='' /> */}

    </>
  )
}
