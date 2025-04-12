export default function SearchBar() {
  return (
    <div className="search-div d-flex align-items-center col-lg-5 col-md-5 col-sm-6">
      <input
        type="email"
        class="form-control search-filde me-2 "
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Search city, amenities, property size"
      />
      <button type="button" class="btn search-button px-1 mx-2">
        <img className="h-75" src="./images/Vector.png" alt="" />
      </button>
    </div>
  );
}
