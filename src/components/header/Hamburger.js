export default function Hamburger({ onMobileNavOpen }) {
  return (
    <>
      <input type="checkbox" id="toggler" />
      <label
        htmlFor="toggler"
        className="header__hamburger"
        onClick={onMobileNavOpen}
      >
        <span className="line"></span>
      </label>
    </>
  );
}
