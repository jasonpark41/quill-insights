import { Link, useLocation } from "react-router-dom";

export const Sidebar = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const location = useLocation();
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button className="absolute top-4 right-4 text-2xl" onClick={onClose}>✕</button>
      <nav className="mt-16 flex flex-col gap-4 px-6">
        <Link
          to="/"
          className={`text-lg font-semibold hover:text-primary ${location.pathname === "/" ? "text-primary" : ""}`}
          onClick={onClose}
        >
          Home
        </Link>
        <Link
          to="/purchasing-manager"
          className={`text-lg font-semibold hover:text-primary ${location.pathname === "/purchasing-manager" ? "text-primary" : ""}`}
          onClick={onClose}
        >
          Purchasing Manager
        </Link>
      </nav>
    </div>
  );
};