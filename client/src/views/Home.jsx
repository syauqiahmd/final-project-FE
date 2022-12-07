import { Helmet } from "react-helmet";
import Slideshow from "../components/Slideshow";
import TopProject from "../components/TopProject";
import About from "../components/About";
import CustomCarousel from "../components/CustomCarousel";
export default function Home(){

	return (
		<>
        <Helmet>
          <title>DIT-HUB | Do It Together</title>
        </Helmet>
        <div id="bannerCustom" className="mt-2">
          <div className="container" >
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <CustomCarousel />
              </div>
            </div>
          </div>
        </div>
        <Slideshow />
        {/* <TopProject /> */}
        <About />
    </>
	)
}
