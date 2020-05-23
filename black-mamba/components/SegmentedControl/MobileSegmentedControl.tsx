import React from "react";
import {
  SegmentNavContainer,
  SegmentNavSelectionBackground,
  SegmentNavTabList,
  SegmentNavMobileItem,
  SegmentNavSelectionBackgroundVariants,
} from "./style";
import { MenuItem } from "../../../data";

interface Props {
  activeMenuItem: number;
  menuList?: MenuItem[];
  onClick?: Function;
}

export default function MobileSegmentedControl({
  activeMenuItem,
  menuList,
  onClick,
}: Props) {
  return (
    <SegmentNavContainer>
      <SegmentNavTabList>
        <SegmentNavSelectionBackground
          initial="first"
          variants={SegmentNavSelectionBackgroundVariants}
          animate={
            activeMenuItem === 1
              ? "second"
              : activeMenuItem === 2
              ? "third"
              : activeMenuItem === 3
              ? "fourth"
              : "first"
          }
          transition={{
            duration: 0.3,
            bezierCurve: "0.1, 0, 0, 1",
          }}
          menuList={menuList.length}
        />
        {menuList.map((menuItem, index) => {
          return (
            <SegmentNavMobileItem
              isAnimated={index === activeMenuItem}
              key={index}
              onClick={() => onClick(index)}
            >
              {menuItem.name}
            </SegmentNavMobileItem>
          );
        })}
      </SegmentNavTabList>
    </SegmentNavContainer>
  );
}

// left: ${(props) =>
//   props.currentPosition === 0
//     ? "4px"
//     : props.currentPosition === props.menuList - 1
//     ? `calc(${props.currentPosition} * 152px - 4px)`
//     : `calc(${props.currentPosition} * 152px)`};
