import Modal from "./Modal";
import { navLinks } from "../data/nav-links";
import { FiX as Close } from "react-icons/fi";

function MobileNav({ isOpen, onClose }) {
  return (
    // <Modal
    //   isOpen={isOpen}
    //   onClose={onClose}
    //   ariaLabel="Menu"
    //   overlayClassName="justify-start"
    //   planelClassName="h-full w-full max-w-[300px] p-6 flex flex-col bg-white">
    // </Modal>

    <nav>
      <button
        onClick={onClose}
        aria-label="Close menu"
        className="mb-10 self-start cursor-pointer">
        <Close aria-hidden="true" />
      </button>
      <div className="">
        <ul className="flex flex-col gap-6 font-bold">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="focus-visible:outline-2 focus-visible:outline-offset-2">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default MobileNav;
