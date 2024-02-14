import BoatImage from "./assets/boat.webp";
import AnchorImage from "./assets/anchor.webp"
import { Accordion } from "./components"

import { Anchor, Sailboat } from "lucide-react";

function App() {
  const itemObjects = [
    {
      itemkey: 1,
      color: "lime-600",
      Icon: Sailboat,
      imageSrc: BoatImage,
      title: "Boat",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatibus vero maiores ipsum fuga quisquam obcaecati saepe nam nemo facere autem, nihil delectus magni reiciendis, ducimus dicta, consequatur sapiente. Maxime!"
    },
    {
      itemkey: 2,
      color: "rose-600",
      Icon: Anchor,
      imageSrc: AnchorImage,
      title: "Anchor",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatibus vero maiores ipsum fuga quisquam obcaecati saepe nam nemo facere autem, nihil delectus magni reiciendis, ducimus dicta, consequatur sapiente. Maxime!"
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-4 mt-32 font-mono">
      <Accordion accordionObjects={itemObjects} />
    </main>
  )
}

export default App
