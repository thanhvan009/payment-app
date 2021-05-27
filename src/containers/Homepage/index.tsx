import "./Slide_HomePage/styled";
import SimpleSlider from "./Slide_HomePage/SlideView";
import Menu from "../../components/Menu/index";
import CategoryBanner from "./../../containers/Homepage/Category_HomePage/Category";
import { Product } from "./Product_HomePage/Product";
import { SlideMenu } from "../../components/Menu/slideMenu/SlideMenu";

function HomePage() {
  return (
    <div>
      <Menu />
      <SlideMenu />
      <SimpleSlider />
      <CategoryBanner />
      <Product />
    </div>
  );
}

export default HomePage;
