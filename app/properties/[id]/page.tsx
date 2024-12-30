import Image from "next/image";
import { ReservationSidebar } from "@/app/components/properties/ReservationSidebar";

export default function PropertyDetailPage() {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[54vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          fill
          src="/beach1.jpg"
          className="object-cover w-full h-full"
          alt="Beachc house"
        />
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-3 py-6 pr-6">
          <h1 className="mb-4 text-4xl">Property name</h1>
          <span className="mb-6 block text-lg text-gray-600">
            4 guests - 2 bedrooms - 1 bathroom
          </span>

          <hr />

          <div className="py-6 flex items-center space-x-4">
            <Image
              src="/profile_pic_1.jpg"
              width={50}
              height={50}
              className="rounded-full"
              alt="The user name"
            />

            <p>
              <span className="font-bold">John Doe</span> is your host
            </p>
          </div>

          <hr />

          <p className="mt-6 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <ReservationSidebar />
      </div>
    </main>
  );
}
