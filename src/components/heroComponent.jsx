import NavBar from "./layout/header";
import Button from "./buttonComponent";
export default function HeroCompoment() {
  return (
    <>
      <div className="container-fluid main-container">
        <NavBar />
        <Button />
      </div>
    </>
  );
}
