import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface AccordionPanelInterface {
  itemkey: number;
  color: string;
  Icon: LucideIcon;
  imageSrc: string;
  title: string;
  content: string;
  expanded?: boolean;
  toggle: (itemKey: number) => void;
}

/** Some of the values bellow are calculated according to hard coded values,
  * I could add a variable to keep track of it, but the idea is that the
  * accordion will maintain the same values whatever the place it is. */
function AccordionPanel({itemkey, color, Icon, imageSrc, title, content, expanded, toggle}: AccordionPanelInterface) {
  const iconColor =`text-${color}`;
  const outlineColor = `outline-${color}`; 
  
  return (
    // * The basis is calculated by 2 * the padding of the panel (p-3 = 0.75rem) +
    // the size of of the button (h-12 = 3rem)
    // * Rounded must follow the shape of the button, that we can archive by
    // setting the round to half of the height of the button
    <div
      className={`focus-within:outline outline-4 ${outlineColor} outline-offset-2 relative isolate ${expanded && "flex-1"} ${expanded ? "basis-[clamp(15rem,40vh,20rem)]" : "basis-[4.5rem]"} overflow-hidden p-3 max-tablet:pr-20 rounded-[calc(4.5rem/2)] motion-reduce:transition-none transition-basis duration-500`}
      onClick={() => toggle(itemkey)}   
    >
      <h2 id={`panel-heading-${itemkey}`}>
        <button
          className="outline-0 flex items-center gap-4 max-tablet:bg-neutral-800 max-tablet:bg-opacity-70 max-tablet:rounded-full max-tablet:pr-3"
          aria-controls={`panel-content-${itemkey}`}
          aria-expanded={expanded}
        >
          <Icon
            className={`bg-neutral-800 w-12 h-12 p-3 rounded-full ${iconColor}`}
            aria-hidden="true"
          />
          <span
            id={`panel-title-${itemkey}`}
            className="text-3xl font-bold max-w-2xl"
          >
            {title}
          </span>
        </button>
      </h2>
      <div
        id={`panel-content-${itemkey}`}
        aria-labelledby={`panel-heading-${itemkey}`}
        aria-hidden={!expanded}
        role="region"
      >
        {/** The ml is calculated thru the sum of the button size and the
           * gap between the icon and the title (which is gap-4 or 1rem)*/}
        <p
          className={`${expanded ? "translate-y-0 opacity-1" : "translate-y-8 opacity-0"} motion-reduce:transition-none transition duration-500 ml-[calc(3rem+1rem)]`}
        >
          {content}
        </p>
        <img
          id={`panel-image-${itemkey}`}
          className={`absolute inset-0 object-cover w-full h-full -z-10 ${expanded && "brightness-50 motion-reduce:transition-none transition duration-500"}`}
          src={imageSrc}
          alt="A sailboat at see during sunset"
        />
      </div>
    </div>
  )
}

interface AccordionInterface {
  accordionObjects: {
    itemkey: number;
    color: string;
    Icon: LucideIcon;
    imageSrc: string;
    title: string;
    content: string;
  }[]
}


export default function Accordion({accordionObjects}: AccordionInterface) {
  const [isExpanded, toggleAccordion] = useState(1)
  return (
    <div className="flex flex-col gap-4 tablet:flex-row tablet:h-[40rem] content">
      {
        accordionObjects.map((obj) => (
          <AccordionPanel
            itemkey={obj.itemkey}
            color={obj.color}
            Icon={obj.Icon}
            imageSrc={obj.imageSrc}
            title={obj.title}
            content={obj.content}
            expanded={isExpanded == obj.itemkey}
            toggle={toggleAccordion}
          />
        ))
      }
    </div>
  )
}
