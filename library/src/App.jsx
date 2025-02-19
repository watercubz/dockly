import Dock from "./components/dock-component";

import { DockItems, DockOption, icons } from "./xd";

export default function App() {
  return (
    <>
      <section className="block w-full h-screen bg-[radial-gradient(farthest-corner_at_100%_100%,#0400ffff_0%,#8400ffff_25%,#ff70cbff_50%,#ebbdffff_75%,#00eaffff_100%),radial-gradient(farthest-side_at_0%_0%,#7a78ffff_0%,#be78ffff_25%,#ff90d6ff_50%,#d678ffff_75%,#7ab2ffff_100%)] bg-blend-screen">
        <figure className="w-full h-full">
          <Dock
            DockItems={DockItems}
            DockOption={DockOption}
            icon1={icons[0]}
            icon2={icons[1]}
            icon3={icons[2]}
          />
        </figure>
      </section>
    </>
  );
}
