import "./Slide_HomePage/styled";
import SimpleSlider from "./Slide_HomePage/SlideView";
import Button from "./../../components/Button/index";
import CategoryBanner from "./../../containers/Homepage/Category_HomePage/Category";

function HomePage() {
  return (
    <div>
      <Button />
      <SimpleSlider />
      <CategoryBanner />
    </div>
  );
}

export default HomePage;
