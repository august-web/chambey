import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Globe, Lightbulb, Link } from "lucide-react";
import { useMode } from "@/hooks/useMode";
import { ecosystemLayers } from "@/data/siteContent";

export function AboutPage() {
  const navigate = useNavigate();
  const { mode } = useMode();
  const isFoundation = mode === "foundation";

  const handleNavClick = (href: string) => {
    navigate(href);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="ph">
        <div className="ph-i">
          <p className="eyebrow ey-l">{isFoundation ? "Our story" : "What we do"}</p>
          <h1 className="pt">{isFoundation ? "Why Chambey exists" : "Operate across borders"}</h1>
          <p className="ps">{isFoundation ? "Talent is everywhere. Opportunity is not." : "Chambey Corridors helps you execute across regions with trusted connections."}</p>
        </div>
      </div>

      <section className="sec s-cream">
        <div className="si">
          <div className="split">
            <div>
              <h2 className="sec-title" style={{ marginBottom: "1.4rem" }}>
                {isFoundation ? "The problem we solve" : "How we work"}
              </h2>
              <p className="sec-desc" style={{ marginBottom: "1.2rem" }}>
                {isFoundation
                  ? "A developer in Lagos has the same skills as one in Jakarta — but unequal access to global markets, clients, and capital. A supplier in Accra is building great products with no path to buyers in São Paulo."
                  : "You tell us what you need. We match you to vetted talent, partners, or trade opportunities across Africa, Brazil, and Southeast Asia. Mulacanoe handles the payments so deals actually close."}
              </p>
              <p className="sec-desc" style={{ marginBottom: "1.75rem" }}>
                {isFoundation
                  ? "Chambey connects people across regions so that collaboration leads to real economic outcomes — not just introductions."
                  : "Every request becomes a live opportunity in our network. You get matched, you execute, and you get paid — or pay — without friction."}
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span className="tag" style={{ background: "rgba(6,110,178,0.1)", color: "var(--cobalt)", fontSize: 12, padding: "5px 13px" }}>
                  Africa
                </span>
                <span className="tag" style={{ background: "rgba(6,110,178,0.1)", color: "var(--cobalt)", fontSize: 12, padding: "5px 13px" }}>
                  Brazil
                </span>
                <span className="tag" style={{ background: "rgba(6,110,178,0.1)", color: "var(--cobalt)", fontSize: 12, padding: "5px 13px" }}>
                  Southeast Asia
                </span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div className={`card ${isFoundation ? "card-f" : "card-c"}`} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div className="c-icon ci-co" style={{ margin: 0 }}>
                  <Globe width={17} height={17} />
                </div>
                <div>
                  <div className="c-title">{isFoundation ? "Cross-border by design" : "Vetted connections only"}</div>
                  <div className="c-body">
                    {isFoundation
                      ? "Built for the regions driving the next wave of global growth."
                      : "Every talent, partner, and supplier in Corridors is reviewed before entering the network."}
                  </div>
                </div>
              </div>
              <div className={`card ${isFoundation ? "card-f" : "card-c"}`} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div className="c-icon ci-sa" style={{ margin: 0 }}>
                  <Lightbulb width={17} height={17} />
                </div>
                <div>
                  <div className="c-title">{isFoundation ? "Outcomes, not just networks" : "Deals that actually close"}</div>
                  <div className="c-body">
                    {isFoundation
                      ? "Every connection in Chambey is oriented toward a deal, a hire, or a partnership."
                      : "Escrow, payment rails, and settlement built into every cross-border transaction."}
                  </div>
                </div>
              </div>
              <div className={`card ${isFoundation ? "card-f" : "card-c"}`} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div className="c-icon ci-te" style={{ margin: 0 }}>
                  <Link width={17} height={17} />
                </div>
                <div>
                  <div className="c-title">{isFoundation ? "Integrated infrastructure" : "Full transaction coordination"}</div>
                  <div className="c-body">
                    {isFoundation
                      ? "Litany for clarity. Mulacanoe for payments. Chambey for coordination."
                      : "Mulacanoe handles payments, escrow, and settlement so you don't have to."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec s-steel">
        <div className="si" style={{ textAlign: "center" }}>
          <p className="eyebrow ey-co" style={{ justifyContent: "center" }}>
            The ecosystem
          </p>
          <h2 className="sec-title" style={{ margin: "0 auto 2.75rem", maxWidth: 460 }}>
            Three layers, one system
          </h2>
          <div className="g3">
            {ecosystemLayers.map((layer, i) => (
              <div key={i} className="card card-steel card-f">
                <div className="c-title" style={{ fontSize: 18, marginBottom: 4 }}>{layer.name}</div>
                <div style={{ fontSize: "10.5px", fontWeight: 500, color: "var(--mid)", marginBottom: "0.7rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  {layer.role}
                </div>
                <div className="c-body">{layer.description}</div>
                {i === 0 && (
                  <div style={{ marginTop: "1rem" }}>
                    <span className="badge bl">Litany</span>
                  </div>
                )}
                {i === 2 && (
                  <div style={{ marginTop: "1rem" }}>
                    <span className="badge bm">Mulacanoe</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}