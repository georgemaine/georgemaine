import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { wrap, useKeyPress, swipePower } from "../components/Helpers";
import { motion } from "framer-motion";
import { Nav } from "../components/Nav";
import { Caption, Manifesto } from "../components/Typography";
import { IndicatorList } from "../components/IndicatorList";
import { A } from "../components/Link/style";
import { Video } from "../components/Video";
import { Button } from "../components/Button";
const navItems = [{ name: "About" }, { name: "Work" }, { name: "Icons" }];
const workItems = [
  { name: "Mollie Mobile" },
  { name: "Mollie Event Video" },
  { name: "Mollie Checkout" },
  { name: "Mollie Apple Pay Video" },
];
const slideItems = [
  { name: "About" },
  { name: "Mollie Mobile" },
  { name: "Mollie Event Video" },
  { name: "Mollie Checkout" },
  { name: "Mollie Apple Pay Video" },
  { name: "Icons" },
];
export default () => {
  // Handle page switches
  const [slide, setSlide] = useState(0);

  // Wrap pages so that you can always navigate between pages without hitting a dead end
  const slideIndex = wrap(0, slideItems.length, slide);

  // Wrap hook so that it can be shared
  function handleIndexChange(index: number) {
    setSlide(index);
    !applePayVideoMuted && setApplePayVideoMuted(true);
    !mollieEventsVideoMuted && setMollieEventsVideoMuted(true);
  }

  const [applePayVideoMuted, setApplePayVideoMuted] = useState(true);
  const [mollieEventsVideoMuted, setMollieEventsVideoMuted] = useState(true);

  // Keyboard navigation helper
  function paginate(direction: number) {
    setSlide(slide + direction);
    !applePayVideoMuted && setApplePayVideoMuted(true);
    !mollieEventsVideoMuted && setMollieEventsVideoMuted(true);
  }
  const ArrowRightDown = useKeyPress("ArrowRight");
  const ArrowLeftDown = useKeyPress("ArrowLeft");

  // Keyboard navigation trigger
  useEffect(() => {
    ArrowRightDown && paginate(1);
    ArrowLeftDown && paginate(-1);
  }, [ArrowRightDown, ArrowLeftDown]);

  return (
    <Wrapper>
      <Nav list={navItems} current={slideIndex} onClick={handleIndexChange} />
      <Slides
        applePayMuteButtonOnClick={setApplePayVideoMuted}
        applePayVideoMuted={applePayVideoMuted}
        mollieEventsVideoMuted={mollieEventsVideoMuted}
        mollieEventsMuteButtonOnClick={setMollieEventsVideoMuted}
        onDragEndHelper={paginate}
        current={slideIndex}
        list={slideItems}
      />
      {slideIndex >= 1 && slideIndex <= 4 && (
        <IndicatorList current={slideIndex} list={workItems} />
      )}
    </Wrapper>
  );
};

type SlideItemProps = {
  name: string;
};

interface SlidesProps {
  list: SlideItemProps[];
  current: number;
  applePayMuteButtonOnClick: Function;
  mollieEventsMuteButtonOnClick: Function;
  onDragEndHelper: Function;
  applePayVideoMuted: Boolean;
  mollieEventsVideoMuted: Boolean;
}

function Slides({
  list,
  current,
  applePayMuteButtonOnClick,
  applePayVideoMuted,
  mollieEventsMuteButtonOnClick,
  mollieEventsVideoMuted,
  onDragEndHelper,
}: SlidesProps) {
  const applePayVideoRef = useRef(null);

  const mollieEventsVideoRef = useRef(null);

  useEffect(() => {
    // Hide the default controls
    // applePayVideoRef.current.controls = false;
    // mollieEventsVideoRef.current.controls = false;
  });
  return (
    <motion.ul
      style={{
        margin: 0,
        padding: 0,
      }}
    >
      {list.map((listItem, index) => {
        return (
          <Li
            style={{
              backgroundImage: "url(images/slide-reactions.jpg)",
            }}
            animate={{
              x:
                current === index
                  ? `0vw`
                  : index < current
                  ? `-100vw`
                  : index > current
                  ? `calc(${index - current} * 100vw)`
                  : `calc(${index} * 100vw)`,
              scale: index === current ? 1 : 0.8,
              opacity: index === current ? 1 : 0,
            }}
            key={index}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 100,
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              !mollieEventsVideoMuted && mollieEventsMuteButtonOnClick(true),
                !applePayVideoMuted && applePayMuteButtonOnClick(true);
              if (swipe < -100000) {
                onDragEndHelper(1);
              } else if (swipe > 10000) {
                onDragEndHelper(-1);
              }
            }}
          >
            <Caption mobileWidth={"300px"} width={"330px"}>
              <strong>2020. </strong>Designed Mollie’s iOS and Android apps to
              make your phone a place where you can quickly manage payments and
              watch your business grow.
            </Caption>
          </Li>
        );
      })}
    </motion.ul>
  );
}

export const Li = styled(motion.li)`
  display: inline-block;
  background-size: contain;
  position: fixed;
  background-position: center;
  background-repeat: no-repeat;
  top: 20px;
  right: 0;
  bottom: 50px;
  left: 0;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
`;

export const SlideDiv = styled.div`
  align-self: center;
  height: 100%;
  width: 100%;

  @media only screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Wrapper = styled.main`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: #ebedef;
  color: #111;
`;

export const IconList = styled.ul`
  padding: 0;
  margin: 30px auto 0;
  list-style: none;
  display: flex;
  width: 204px;
  justify-content: space-between;

  @media only screen and (min-width: 600px) {
    margin: 48px auto 0;
  }
`;

export const MobileImg = styled.figure`
  width: 100%;
  height: calc(100% - 72px);
  padding: 0;
  margin: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("images/mollie-mobile-mockup.png");

  @media only screen and (min-width: 375px) {
    height: calc(100% - 60px);
  }
`;
export const CheckoutImg = styled.figure`
  width: 100%;
  height: calc(100% - 72px);
  padding: 0;
  margin: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("images/mollie-checkout-mockup.png");

  @media only screen and (min-width: 375px) {
    height: calc(100% - 60px);
  }
`;

export const MemojiImg = styled.img`
  width: calc(186px * 0.75);
  margin: 0 auto 24px;
  pointer-events: none;

  @media only screen and (min-width: 600px) {
    width: 186px;
    margin: 0 auto 36px;
  }
`;
