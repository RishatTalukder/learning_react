import { useRef, useEffect } from "react";
import { useAppContext } from "../context/AppContext"; // importing the useAppContext hook  
import "../styles/submenu.css"; // importing the submenu styles

const Submenu = () => {
  const { isSubmenuOpen, submenuPosition, section, openSubmenu, closeSubmenu } = useAppContext(); // consuming the global context value

  const container = useRef(null); // creating a ref to the submenu container

  useEffect(() => {
    const submenu = container.current; // accessing the current value of the ref
    const { center, bottom } = submenuPosition;
    submenu.style.left = `${center}px`; // setting the left position of the submenu modal box
    submenu.style.top = `${bottom}px`; // setting the top position of the submenu modal box
  }, [submenuPosition]); // updating the position when the submenuPosition changes

  return (
    <div ref={container} className={`${isSubmenuOpen ? "submenu show-submenu" : "submenu"}`}
    onMouseEnter={() => {
      openSubmenu(section.title, submenuPosition); // preventing submenu from closing on mouse enter
    }} // preventing submenu from closing on mouse enter
    onMouseLeave={
      closeSubmenu // closing the submenu on mouse leave
    }
    >
      <h5>{section.title}</h5>
      <div className="submenu-links">
        {section.links.map((link, index) => (
          <a key={index} href={link.url}>
            <link.icon className="me-2" />
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
export default Submenu;
