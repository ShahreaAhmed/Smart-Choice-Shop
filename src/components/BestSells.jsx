import React from "react";
import dayjs from "dayjs";

export default function BestSells() {
  const monthName = dayjs().format("MMMM");

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-4xl text-center font-bold">Best Sellers</h1>
      <p className="text-xl text-center font-semibold">Do not miss the current offers until the end of {monthName}</p>
      <div className="mt-10">
        <div className="grid sm:grid-cols-3 lg:grid-cols-3 md:grid-cols-4 gap-5">
          <div className="card bg-base-100 w-full shadow-sm">
            <figure className="bg-[#f7f7f7]">
              <img
                src="/ps5Image.png"
                className=" w-40"
                alt="ps5 photo comming soon.."
              />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="card-title">
                PlayStation 5 Slim
              </h2>
                <div className="badge badge-secondary">IN STOCK</div>
              </div>
              <p>
                Take the next-generation gaming experience with full PS5 power
                and 1TB SSD storage in a slim design.
              </p>

              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-full shadow-sm">
            <figure className="bg-[#f7f7f7]">
              <img
                src="/headPhoneImage.png"
                className=" w-70 h-51"
                alt="Headphone photo comming soon.."
              />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="card-title">
                PlayStation 5 Slim
              </h2>
                <div className="badge badge-secondary">IN STOCK</div>
              </div>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-full shadow-sm">
            <figure className="bg-[#f7f7f7]">
              <img
                src="/laptopImage.avif"
                className=" w-50 py-9.5"
                alt="Laptop photo comming soon.."
              />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="card-title">
                Microsoft Surface Laptop
              </h2>
                <div className="badge badge-secondary">IN STOCK</div>
              </div>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-full shadow-sm">
            <figure className="bg-[#f7f7f7]">
              <img
                src="/samsungWatch.png"
                className=" w-50"
                alt="Samsung Galaxy Watch-4 photo comming soon.."
              />
            </figure>
            <div className="card-body">
               <div className="flex justify-between">
                <h2 className="card-title">
                Samsung Galaxy Watch-4
              </h2>
                <div className="badge badge-secondary">IN STOCK</div>
              </div>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-full shadow-sm">
            <figure className="bg-[#f7f7f7]">
              <img
                src="/iPhone17.png"
                className=" w-30 py-6"
                alt="ps5 photo comming soon.."
              />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="card-title">
                I Phone 17 Pro Max
              </h2>
                <div className="badge badge-secondary">IN STOCK</div>
              </div>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-full shadow-sm">
            <figure className="bg-[#f7f7f7]">
              <img
                src="/actionCamera.png"
                className=" w-50"
                alt="ps5 photo comming soon.."
              />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="card-title">
                WOLFANG GA420 Action Camera 4K 60FPS 24MP
              </h2>
                <div className="badge badge-secondary">IN STOCK</div>
              </div>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
