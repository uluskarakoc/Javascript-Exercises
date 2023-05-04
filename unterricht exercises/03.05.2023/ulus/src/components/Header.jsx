import "./Header.css";
const Aufgaben = (props) => {
  return (
    <div>
      <h1>{props.mainText}</h1>
      <p>{props.subText}</p>
    </div>
  );
};
export default Aufgaben;
