'use client'
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import FeaturedProducts from "./components/FeaturedProducts";

export default function Home() {
  return (
    <main className="min-h-[100% - 48px] flex-col items-center justify-between px-24">
      <section className="banner bg-contain w-full flex flex-col items-center justify-center">
          <h2 className="text-5xl font-bold text-white uppercase mb-4">
            Welcome in our{" "}
            <span>
              <Typewriter
                words={["Shop", "Mobile World"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
        <div className="w-1/2 text-center space-y-4">
          <p className="text-xl font-medium text-slate-200">
            Customers don't just want to shop: they want to feel that the brand
            understands them.
          </p>
          <button className="btn btn-primary"><Link href='/products'>Show All Devices</Link></button>
        </div>
      </section>
      <FeaturedProducts />
    </main>
  );
}
