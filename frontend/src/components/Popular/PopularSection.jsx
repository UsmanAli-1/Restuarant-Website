import SmallCard from "../SmallCard";

export default function PopularSection() {
  return (
    <>
      <div className="w-full h-130 bg-[#32a852] ">
        <h2 className="">Popular</h2>
        <SmallCard image={".././logo.jpg"} title="Boss Zinger" price="700" />
        <SmallCard image={".././logo.jpg"} title="Zinger" price="800" />

      </div>
    </>
  );
}
