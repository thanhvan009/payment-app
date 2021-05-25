import "./Slide_HomePage/styled";
import SimpleSlider from "./Slide_HomePage/SlideView";
import Button from "./../../components/Button/index";
import CategoryBanner from "./../../containers/Homepage/Category_HomePage/Category";
import { Product } from "./Product_HomePage/Product";

function HomePage() {
  return (
    <div>
      <Button />
      <SimpleSlider />
      <CategoryBanner />
      <Product />
    </div>
  );
}

export default HomePage;
