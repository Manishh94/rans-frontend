export default function PinedCard({ src, imageStyle }) {
  return (
    <>
      <div className="card pinedCard p-2">
        <img src={src} class={`card-img-top ${imageStyle}`} alt="..." />
      </div>
    </>
  );
}
