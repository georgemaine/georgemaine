import { A } from "../Typography";
import Icon from "../Icon";
import { ContactListData } from "../../../data/index";
import { AnimatePresence } from "framer-motion";
import { PopoverList, PopoverListItem, PopoverListItemLabel } from "./style";

export default function Popover({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <PopoverList
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -8, opacity: 0 }}
        >
          {ContactListData.map((data, index) => {
            return (
              <PopoverListItem key={index} tabindex={index}>
                <A
                  href={data.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <Icon glyph={data.name} />
                  <PopoverListItemLabel>{data.name}</PopoverListItemLabel>
                </A>
              </PopoverListItem>
            );
          })}
        </PopoverList>
      )}
    </AnimatePresence>
  );
}
