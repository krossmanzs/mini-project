import ButtonItem from "@/components/ButtonItem";
import HeroBanner from "@/components/HeroBanner";
import SearchBox from "@/components/SearchBox";

export default function Home() {
  return (
    <div>
      <div className="flex gap-4">
        <SearchBox />
        <ButtonItem text="Hotels" isActive={true} />
        <ButtonItem text="Flights" isActive={false} />
        <ButtonItem text="Trains" isActive={false} />
        <ButtonItem text="Bus & Travel" isActive={false} />
        <ButtonItem text="Car Rental" isActive={false} />
        <ButtonItem text="Event" isActive={false} />
        <ButtonItem text="Event" isActive={false} />
        <ButtonItem text="Event" isActive={false} />
      </div>

      <HeroBanner />
    </div>
  );
}
