import clsx from "clsx";
import { useEffect, useState } from "react";

function ProductList() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<string[]>([]);
  useEffect(() => {
    setItems(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]);
  }, []);

  const handelDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button
        onClick={handelDropdown}
        className="btn dropdown-toggle"
        aria-expanded={isOpen ? "true" : "false"}
      >
        Expand dropdown
      </button>
      <ul className={clsx("dropdown-menu", isOpen && "show")}>
        {items.map((item) => (
          <li key={item} className="dropdown-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductList;
