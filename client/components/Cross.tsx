export default function Cross(props?) {
  const btnClass = props.type
  return (
    <button className={btnClass} id="fakeX">
      X
    </button>
  )
}
