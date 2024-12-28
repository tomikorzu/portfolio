import ScrollBar from "./ScrollBar";
import ToggleBtn from "./ToggleBtn";

export default function Navbar() {
  const sections = ["projects", "journey", "skillset", "about", "contact"];

  return (
    <>
      <ScrollBar sections={sections} />
      <ToggleBtn sections={sections} />
    </>
  );
}
