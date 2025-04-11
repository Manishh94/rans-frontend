// import UseButtonHook from "../hooks/useButtonHooks";
export default function CommenButton({buttonText, buttonStyle, handleClick}) {
  return (
    <button type="button" class={`btn  ${ buttonStyle}`} onClick={ handleClick }>
      {buttonText}
    </button>
  );
}
