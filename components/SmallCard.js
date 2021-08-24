import Image from "next/image";

function SmallCard({ img, distance, location }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image className="rounded-lg" src={img} layout="fill" />
      </div>
      <div>
          <h2 className="">{location}</h2>
          <h2 className="">{distance}</h2>
      </div>
    </div>
  );
}

export default SmallCard;
