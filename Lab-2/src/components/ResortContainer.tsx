import ResortCard from "./ResortCard";
import type { ResortListing } from "../data/data";
interface ResortContainerProps {
  data: ResortListing[];
}
export default function ResortContainer({ data }: ResortContainerProps) {
  return (
    <div className="ResortContainer">
      {data.map((list) => (
        <ResortCard key={list.id} {...list} />
      ))}
    </div>
  );
}
