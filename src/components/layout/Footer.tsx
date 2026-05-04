import { useNavigate } from "react-router-dom";
import { navItems } from "@/data/siteContent";

export function Footer() {
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    navigate(href);
  };

  return (
    <footer className="footer">
      <div className="fi">
        <div className="ft">
          <div className="flogo">
            <img src="/favicon.png" alt="" className="flogo-mark" />
            <span>CHAMBEY</span>
          </div>
          <div className="flinks">
            {navItems.map((item) => (
              <button
                key={item.href}
                className="flink"
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </button>
            ))}
            <button
              className="flink"
              style={{ color: "var(--tealD)" }}
              onClick={() => handleNavClick("/support")}
            >
              Support
            </button>
          </div>
        </div>
        <div className="fb">
          <span className="fc">© 2026 Chambey. Cross-border collaboration infrastructure.</span>
          <div style={{ display: "flex", gap: 7 }}>
            <span className="badge bl">Litany</span>
            <span className="badge bm">Mulacanoe</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
