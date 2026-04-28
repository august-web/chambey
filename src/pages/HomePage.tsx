import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useMode } from "@/hooks/useMode";
import { quoteText } from "@/data/siteContent";
import { corridors } from "@/data/siteContent";

export function HomePage() {
  const navigate = useNavigate();
  const { mode, setMode } = useMode();
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
      {/* Hero */}
      <section className="hero">
        <div className="hero-grid"></div>
        <div className={`orb orb-1 ${isFoundation ? "orb-f-1" : "orb-c-1"}`}></div>
        <div className={`orb orb-2 ${isFoundation ? "orb-f-2" : "orb-c-2"}`}></div>
        <div className={`orb orb-3 ${isFoundation ? "orb-f-3" : "orb-c-3"}`}></div>
        <div className="hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className={`hero-eye ${isFoundation ? "eye-f" : "eye-c"}`}
          >
            <span className={`eye-dot ${isFoundation ? "dot-f" : "dot-c"}`}></span>
            <span>{isFoundation ? "Africa · Brazil · Southeast Asia" : "Hire · Trade · Partner"}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-title"
          >
            Build beyond<br />
            your <em className={isFoundation ? "em-f" : "em-c"}>environment</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-sub"
          >
            {isFoundation
              ? "A cross-border collaboration and innovation network connecting people, ideas, and opportunities across three of the world's most dynamic economies."
              : "Hire talent, find partners, and execute deals across Africa, Brazil, and Southeast Asia — with payments handled end-to-end."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-btns"
          >
            <button className={isFoundation ? "btn btn-co" : "btn btn-sa"} onClick={() => handleNavClick("/contact")}>
              {isFoundation ? "Join the network" : "Start request"} <ArrowRight width={15} height={15} />
            </button>
            <button className="btn btn-ghost" onClick={() => handleNavClick("/about")}>
              See how it works
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hero-stats"
          >
            <div className="stat">
              <div className="stat-n">3</div>
              <div className="stat-l">Regions</div>
            </div>
            <div className="stat">
              <div className="stat-n">{isFoundation ? "50+" : "48h"}</div>
              <div className="stat-l">{isFoundation ? "Collaborations" : "Match time"}</div>
            </div>
            <div className="stat">
              <div className="stat-n">{isFoundation ? "∞" : "100%"}</div>
              <div className="stat-l">{isFoundation ? "Corridors" : "Deals settled"}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Bar */}
      <div className="quote-bar">
        <p className="quote-text">
          "{quoteText.split("Who build beyond borders.")[0]} <span>Who build beyond borders.</span>"
        </p>
      </div>

      {/* Mulacanoe Strip - Corridors only */}
      {!isFoundation && (
        <div className="mula-strip">
          <div className="mula-inner">
            <span className="badge bm">Mulacanoe</span>
            <p className="mula-text">
              <strong>Payments, escrow, and transaction coordination</strong> powered by Mulacanoe — every deal across Chambey Corridors is settled through our dedicated transaction layer.
            </p>
          </div>
        </div>
      )}

      {/* How It Works */}
      <section className="sec s-surf">
        <div className="si">
          <p className={`eyebrow ${isFoundation ? "ey-co" : "ey-sa"}`}>How it works</p>
          <h2 className="sec-title" style={{ marginBottom: "3.5rem" }}>
            {isFoundation ? "Three steps to cross-border impact" : "From request to executed deal"}
          </h2>
          <div className="steps">
            <div className="step">
              <div className={`step-num ${isFoundation ? "sn-co" : "sn-co"}`}>1</div>
              <div className="step-t">Clarify your path</div>
              <p className="step-d">
                {isFoundation
                  ? "Define what you're building and where you want to go."
                  : "Tell us what you need: talent, trade partners, or market expansion."}
              </p>
              <div style={{ marginTop: 12 }}>
                <span className="badge bl">Powered by Litany</span>
              </div>
            </div>
            <div className="step">
              <div className="step-num sn-nv">2</div>
              <div className="step-t">{isFoundation ? "Connect with people across regions" : "Get matched — fast"}</div>
              <p className="step-d">
                {isFoundation
                  ? "Share ideas, skills, and opportunities with builders who think like you."
                  : "We match you with vetted talent, partners, or trade opportunities within 48 hours."}
              </p>
            </div>
            <div className="step">
              <div className={`step-num ${isFoundation ? "sn-te" : "sn-te"}`}>3</div>
              <div className="step-t">{isFoundation ? "Turn collaboration into real outcomes" : "Execute across borders"}</div>
              <p className="step-d">
                {isFoundation
                  ? "From conversation to contract — real economic results across borders."
                  : "Close deals, hire talent, and execute transactions — Mulacanoe handles every settlement."}
              </p>
              <div style={{ marginTop: 12 }}>
                <span className="badge bm">Supported by Mulacanoe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corridors */}
      <section className="sec s-navy">
        <div className="si">
          <p className={`eyebrow ${isFoundation ? "ey-te" : "ey-sa"}`}>Active corridors</p>
          <h2 className="sec-title light" style={{ marginBottom: "2rem" }}>
            {isFoundation ? "Where collaboration is turning into real activity" : "Live opportunities across corridors"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.7rem", maxWidth: 560 }}>
            {corridors.map((corridor, i) => (
              <div key={i} className={`corr corr-f`}>
                <span className="cdot cdot-f"></span>
                <span className="ctxt">
                  {corridor.from} → {corridor.to}
                </span>
                <span className="carr">→</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "rgba(171,205,214,0.32)", marginTop: "1.5rem", display: "flex", alignItems: "center", gap: 8 }}>
            <span className="badge bm">Mulacanoe</span> Payments coordinated through Mulacanoe
          </p>
        </div>
      </section>

      {/* Why Section - Corridors only */}
      {!isFoundation && (
        <section className="sec s-cream">
          <div className="si">
            <p className="eyebrow ey-sa" style={{ justifyContent: "center", textAlign: "center" }}>
              Why Corridors works
            </p>
            <h2 className="sec-title" style={{ textAlign: "center", margin: "0 auto 2.5rem", maxWidth: 460 }}>
              Built for execution, not just networking
            </h2>
            <div className="g3">
              <div className="card card-c">
                <div className="c-icon ci-sa">
                  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <circle cx={12} cy={12} r={10} />
                    <circle cx={12} cy={12} r={6} />
                    <circle cx={12} cy={12} r={2} />
                  </svg>
                </div>
                <div className="c-title">Vetted connections</div>
                <div className="c-body">Every talent, partner, and supplier is reviewed before entering the network. No cold matches.</div>
              </div>
              <div className="card card-c">
                <div className="c-icon ci-or">
                  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <rect width={18} height={11} x={3} y={11} rx={2} ry={2} />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div className="c-title">Deals that close</div>
                <div className="c-body">Escrow, payment rails, and settlement built in. You don't need to solve the payments problem.</div>
              </div>
              <div className="card card-c">
                <div className="c-icon ci-te">
                  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="c-title">Regional expertise</div>
                <div className="c-body">Our team understands the corridors between Africa, Brazil, and Southeast Asia — the regulations, trust dynamics, speed.</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bridge */}
      <div className={`bridge ${isFoundation ? "bridge-f" : "bridge-c"}`}>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <p className={`eyebrow ${isFoundation ? "ey-sa" : "ey-co"}`} style={{ justifyContent: "center" }}>
            {isFoundation ? "Ready to execute?" : "New to Chambey?"}
          </p>
          <p className="bridge-title">
            {isFoundation ? "Ready to move beyond ideas?" : "New to Chambey?"}
          </p>
          <p className="bridge-desc">
            {isFoundation
              ? "Chambey Corridors is the activation layer — hire, trade, and partner with verified connections across all three regions."
              : "Chambey Foundation is where you build your network, clarify your direction, and connect with the broader ecosystem before executing."}
          </p>
          <button
            className={isFoundation ? "btn btn-sa" : "btn btn-co"}
            onClick={() => setMode(isFoundation ? "corridors" : "foundation")}
          >
            {isFoundation ? "Explore Chambey Corridors" : "Join the Foundation network"} <ArrowRight width={14} height={14} />
          </button>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="cta-strip" style={{ background: isFoundation ? "var(--cobalt)" : "var(--salmon)" }}>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <h2 className="cta-title">
            {isFoundation ? "Ready to build across borders?" : "Ready to operate across borders?"}
          </h2>
          <p className="cta-sub">
            {isFoundation
              ? "Join the network. Tell us what you're building."
              : "Submit your first request. Get matched in 48 hours."}
          </p>
          <button className="btn btn-white" onClick={() => handleNavClick("/contact")}>
            {isFoundation ? "Join the network" : "Start a request"} <ArrowRight width={14} height={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}