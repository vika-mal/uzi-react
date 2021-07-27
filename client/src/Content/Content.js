import "./Content.scss";
import { Route } from "react-router-dom";
import Hepar from "./Hepar/Hepar";
import GallBlad from "./GallBlad/GallBlad";
import Gyn from "./Gyn/Gyn";
import Mamm from "./Mamm/Mamm";
import Pancreas from "./Pancreas/Pancreas";
import Ren from "./Ren/Ren";
import Spleen from "./Spleen/Spleen";
import Thyroid from "./Thyroid/Thyroid";
import Auth from "../Auth/Auth";
import Reg from "../Reg/Reg";

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
      <Route exact path="/" component={Auth} />
      <Route exact path="/registration" component={Reg} />

    </div>
  );
}

export default Content;
