export default function Footer() {
  const curYear = new Date().getFullYear();

  return (
    <footer className="footer text__center py-4">
      <p className="paragraph">
        Copyright &copy; <span>{curYear}</span> | All Rights Reserved.
      </p>
    </footer>
  );
}
