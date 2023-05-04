import "./Student.css";


const Student = (props) => {
  return (
    <div className="student">
      <h2>Name: {props.name} </h2>
      <p>
        <span>Alter:</span> {props.age}{" "}
      </p>
      <p>
        <span>Superkraft:</span> {props.power}{" "}
      </p>
    </div>
  );
};
export default Student