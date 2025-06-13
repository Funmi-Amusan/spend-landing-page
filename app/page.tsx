import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Wallets from "@/components/sections/Wallets";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
     <Hero />
     <Gallery />
     <Wallets />
     {/* <ShopOnline />
     <PayBills />
     <FAQs />
      <Contact /> */}
    </main>
  );
}
