import { Link } from "react-router-dom";
export default function Button({ name, url }) {
  return (
    <div>
      <Link to={url}>
        <button type="button">{name}</button>
      </Link>
    </div>
  );
}
