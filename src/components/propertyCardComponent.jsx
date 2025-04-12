export default function PinedCard({ src, imageStyle }) {
  return (
    <>
      <div className="pinedCard p-3">
        <img src={src} class={` ${imageStyle}`} alt="..." />
      </div>
    </>
  );
}
