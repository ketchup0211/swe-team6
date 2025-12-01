import { useNavigate } from "react-router-dom";
import NavIcon from "../../assets/nav-button.svg?react";

export default function NavButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)}>
      <NavIcon />
    </button>
  );
}
