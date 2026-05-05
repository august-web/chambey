import { useNavigate, useLocation } from "react-router-dom";
import { useMode } from "@/hooks/useMode";
import { navItems } from "@/data/siteContent";

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const { mode } = useMode();
  const isOrganization = mode === "Organization";
  const isSupportPage = location.pathname === "/support";
  const showCandidSeal = isSupportPage || isOrganization;

  const handleNavClick = (href: string) => {
    navigate(href);
  };

  return (
    <footer className="footer">
      <div className="fi">
        <div className="ft">
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
            <div className="flogo">
              <img src={isOrganization ? "/favicon.png" : "/logo-corridors.png"} alt="" className="flogo-mark" style={{ width: isOrganization ? 22 : 24, height: "auto" }} />
              <span>CHAMBEY</span>
            </div>
            {showCandidSeal && (
              <a
                aria-label="Chambey Organization"
                href="https://app.candid.org/profile/15510989/chambey-organization-99-2404801/?pkId=fce6856e-d617-42b3-8d0b-0ca7b53b451c"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt=""
                  src="https://widgets.guidestar.org/prod/v1/pdp/transparency-seal/15510989/svg"
                  style={{ width: 100, height: "auto" }}
                />
              </a>
            )}
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
