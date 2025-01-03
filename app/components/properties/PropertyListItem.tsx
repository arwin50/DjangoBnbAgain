import Image from "next/image";

export const PropertyListItem = () => {
  return (
    <div className="cursor-pointer">
      <div className=" relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src="/beach1.jpg"
          sizes="(max-width:768px) 768px, (max-width:1200px):768px,768px"
          className="hover:scale-110 object-cover transition h-full w-full"
          alt="Beach house"
        />
      </div>
      <div className="mt-2">
        <p className="text-lg font-bold">Property name</p>
      </div>
      <div className="mt-2">
        <p className="text-sm">
          {" "}
          <span className="font-bold text-gray-500">$200</span> per night
        </p>
      </div>
    </div>
  );
};
