import Banner from "@/components/banner";
import BestDeals from "@/components/BestDeals";
import BestSells from "@/components/BestSells";


export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <Banner></Banner>
      </div>
      <BestDeals></BestDeals>
      <BestSells></BestSells>
    </div>
  );
}
