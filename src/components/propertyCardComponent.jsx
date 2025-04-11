export default function PinedCard({ src, imageStyle }) {
  return (
    <>
      <div className="pinedCard ">
        <img src={src} class={` ${imageStyle}`} alt="..." />
      </div>
    </>
  );
}
