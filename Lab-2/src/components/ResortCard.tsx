import type { ResortListing } from "../data/data";
function stars(value: number) {
  if (value < 4) {
    return "red";
  }
  return "green";
}
export default function ResortCard({
  pic,
  country,
  location,
  rating,
  price,
}: ResortListing) {
  return (
    <div className="ResortCard">
      <img src={pic} alt="" width="100px" className="ResortPic"></img>
      <b>
        <p className="country">{country}</p>
      </b>
      <i>
        <p className="grey"> {location}</p>
      </i>
      <p className={stars(rating)}>{rating}★</p>
      <i>
        <p className="grey">{price}</p>
      </i>
    </div>
  );
}
