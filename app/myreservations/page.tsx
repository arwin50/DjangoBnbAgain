import Image from "next/image";
import { apiService } from "../services/apiService";
import Link from "next/link";

export default async function MyReservationsPage() {
  const reservations = await apiService.get("/api/auth/myreservations/");
  console.log(reservations);
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="my-6 text-2xl">My Reservations</h1>

      <div className="space-y-4">
        {reservations.map((reservation: any, index: any) => (
          <div
            key={`${reservation}_${index}`}
            className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border borderr-gray-300 rounded-xl"
          >
            <div className="col-span-1">
              <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                  src={reservation.property.image_url}
                  fill
                  className="hover:scale-110 object-cover transition h-full w-full"
                  alt="Beach House"
                />
              </div>
            </div>
            <div className="col-span-1 md:col-span-3">
              <h2 className="mb-4 text-xl">{reservation.property.title}</h2>
              <p className="mb-2">
                <span className="font-bold">Check in date:</span>{" "}
                {reservation.start_date}
              </p>
              <p className="mb-2">
                <span className="font-bold">Check out date:</span>{" "}
                {reservation.end_date}
              </p>
              <p className="mb-2">
                <span className="font-bold">Number of nights:</span>{" "}
                {reservation.number_of_nights}
              </p>
              <p className="mb-2">
                <span className="font-bold">Total price:</span> $
                {reservation.total_price}
              </p>
              <Link
                href={`properties/${reservation.property.id}`}
                className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl"
              >
                Go to property
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
