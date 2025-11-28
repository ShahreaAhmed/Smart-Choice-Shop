import Banner from "@/components/banner";
import BestDeals from "@/components/BestDeals";
import BestSells from "@/components/BestSells";
import TrendingCategories from "@/components/TrendingCategories";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center mt-10">
        <Banner></Banner>
      </div>
      <BestDeals></BestDeals>
      <BestSells></BestSells>
      <TrendingCategories></TrendingCategories>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
