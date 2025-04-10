import UseButtonHook from "../hooks/useButtonHooks";
export default function Button() {
  const { handleClick, buttonText } = UseButtonHook();
  return (
    <button type="button" class="btn btn-primary" onClick={handleClick}>
      {buttonText}
    </button>
  );
}
