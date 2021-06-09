import "./Content.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hepar from "./Hepar/Hepar";
import GallBlad from "./GallBlad/GallBlad";
import Gyn from "./Gyn/Gyn";
import Mamm from "./Mamm/Mamm";
import Pancreas from "./Pancreas/Pancreas";
import Ren from "./Ren/Ren";
import Spleen from "./Spleen/Spleen";
import Thyroid from "./Thyroid/Thyroid";

function Content() {
  return (
    <div className="content">
      {/* <Header /> */}
      <Route exact path="/hepar" component={Hepar} />
      <Route exact path="/gallblad" component={GallBlad} />
      <Route exact path="/gyn" component={Gyn} />
      <Route exact path="/mamm" component={Mamm} />
      <Route exact path="/pancreas" component={Pancreas} />
      <Route exact path="/ren" component={Ren} />
      <Route exact path="/spleen" component={Spleen} />
      <Route exact path="/thyroid" component={Thyroid} />
    </div>
  );
}

export default Content;
