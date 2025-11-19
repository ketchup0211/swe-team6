import Button from "../ui/Button";

export default function BottomNav() {
  return (
    <div>
      <Button name={"home"} url={"/"} />
      <Button name={"profile"} url={"/profile"} />
    </div>
  );
}
