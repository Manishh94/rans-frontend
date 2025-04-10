export default function SearctBar() {
  return (
    <div className="search-div d-flex align-items-center ">
      <input
        type="email"
        class="form-control search-filde me-2 "
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <button type="button" class="btn search-button ">S</button>
    </div>
  );
}
