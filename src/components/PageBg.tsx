import woman1 from "@/assets/imgs/woman1.png";
import woman2 from "@/assets/imgs/woman2.png";
import star from "@/assets/svgs/star.svg";
import curve from "@/assets/svgs/curve.svg";
import longCurve from "@/assets/svgs/longCurve.svg";
import { ReactSVG } from "react-svg";
import { useRef, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useAppStore } from "@/stores";

interface Props {
  index: number;
}

const PageBg: React.FC<Props> = ({ index = 0 }) => {
  const img0Ref = useRef<HTMLImageElement>(null);
  const img1Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    console.log(img0Ref.current);
    console.log(img1Ref.current);
  }, []);

  return (
    <div className="size-full relative overflow-hidden bg-liner">
      <TransitionGroup>
        {index === 0 && (
          <CSSTransition key="index-0" timeout={500} classNames="fade">
            <div key="index-0" className="fade">
              <img
                className="block absolute top--72 left--165 w-713 h-1061"
                src={woman1}
                ref={img0Ref}
                alt=""
              />
              <ReactSVG
                src={star}
                className="absolute top-104 left-268 z-2 color-corcal size-24"
              />
              <ReactSVG
                src={star}
                className="absolute top-88 left-300 z-2 color-corcal size-9"
              />
              <ReactSVG
                src={curve}
                className="absolute top-198 left-72 z-2 color-salmon w-13 h-49"
              />
              <ReactSVG
                src={longCurve}
                className="absolute top-280 left-276 z-2 color-#0F172A w-28 h-64 rotate-18"
              />
            </div>
          </CSSTransition>
        )}

        {index === 1 && (
          <CSSTransition key="index-1" timeout={500} classNames="fade">
            <div key="index-1" className="fade">
              <img
                className="block absolute top-58 left--146 w-557 h-780"
                src={woman2}
                ref={img1Ref}
                alt=""
              />
              <ReactSVG
                src={star}
                className="absolute top-320 left-269 z-2 color-salmon size-24"
              />
              <ReactSVG
                src={star}
                className="absolute top-354 left-299 z-2 color-salmon size-8"
              />
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default PageBg;
