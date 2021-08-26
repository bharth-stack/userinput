import Card from "./Card.js";
// import classes from "../input/AddForm.module.css";
import classc from "./DataDetail.module.css";
const Details = (props) => {
  return (
    <Card className={classc.users}>
      <ul>
        <li>
          {props.addDetail.name} ({props.addDetail.age} Yearsold)
        </li>
      </ul>
    </Card>
  );
};
export default Details;
