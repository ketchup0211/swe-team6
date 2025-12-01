import starIcon from "../../assets/star-icon.png";
import Button from "../../components/ui/Button";

function ShortcutButton({ name, url = "/" }) {
  return (
    <span>
      <Button name={name} url={url} icon={starIcon} />
    </span>
  );
}

export default ShortcutButton;
