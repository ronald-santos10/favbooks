import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BookList from "./components/BookList";

export default function Home() {
  return (
    <div class="sm: pl-5 pr-5">
      <Header />
      <HeroSection />
      <BookList />
    </div>
  );
}
