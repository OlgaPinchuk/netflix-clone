export default function Footer() {
  // Const
  const footerLinks = [
    "FAQ",
    "Help Centre",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
  ];

  // Components
  const Links = footerLinks.map((link, index) => (
    <li key={index}>
      <p>{link}</p>
    </li>
  ));

  return (
    <footer className="site-footer">
      <p className="footer-top">
        Questions? Call 
        <a className="footer-top-a" href="tel:020-79 06 35">
        &nbsp; 020-79 06 35
        </a>
      </p>
      <ul className="footer-links">{Links}</ul>
    </footer>
  );
}
