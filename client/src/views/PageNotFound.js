import React, {useEffect} from "react";
import "./PageNotFound.scss";
import { gsap , Linear } from "gsap";

const PageNotFound = () => {
	useEffect(()=>{
		let t1 = gsap.timeline();
		let t2 = gsap.timeline();
		let t3 = gsap.timeline();
	
		t1.to(".cog11", {
			transformOrigin: "50% 50%",
			rotation: "+=360",
			repeat: -1,
			ease: Linear.easeNone,
			duration: 8,
		});
	
		t2.to(".cog22", {
			transformOrigin: "50% 50%",
			rotation: "-=360",
			repeat: -1,
			ease: Linear.easeNone,
			duration: 8,
		});
	
		t3.fromTo(
			".wrong-paraa",
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 1,
				stagger: {
					repeat: -1,
					yoyo: true,
				},
			}
		);

	})

  return (
    <div className="tester">
      <h1 className="first-fourr">4</h1>
      <div className="cog-wheel11">
        <div className="cog11">
          <div className="topp"></div>
          <div className="downn"></div>
          <div className="left-topp"></div>
          <div className="left-downn"></div>
          <div className="right-topp"></div>
          <div className="right-downn"></div>
          <div className="leftt"></div>
          <div className="rightt"></div>
        </div>
      </div>

      <div className="cog-wheel22">
        <div className="cog22">
          <div className="topp"></div>
          <div className="downn"></div>
          <div className="left-topp"></div>
          <div className="left-downn"></div>
          <div className="right-topp"></div>
          <div className="right-downn"></div>
          <div className="leftt"></div>
          <div className="rightt"></div>
        </div>
      </div>
      <h2 className="second-fourr">4</h2>
      <p className="wrong-paraa">Uh Oh! Page not found!</p>
    </div>
  );
};

export default PageNotFound;
