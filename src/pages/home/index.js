import { Link } from "react-router-dom";
import Style from "./style";
const Home = () => {
  return (
    <Style>
      contact us
      <Link to="/aboutus">go to aboutus</Link>
    </Style>
  );
};
export default Home;
