import "./styles.css";

export default function Header({ title = "Biblioteca Musical" }) {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
    </header>
  );
}
