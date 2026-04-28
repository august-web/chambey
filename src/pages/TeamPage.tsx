import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Users, Briefcase, Zap } from "lucide-react";
import { useMode } from "@/hooks/useMode";
import { teamDomains } from "@/data/siteContent";

export function TeamPage() {
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
          <p className="eyebrow ey-l">{isFoundation ? "Collaboration domains" : "Request types"}</p>
          <h1 className="pt">{isFoundation ? "Where collaboration happens" : "What you can request"}</h1>
          <p className="ps">{isFoundation ? "Three domains. Unlimited corridors." : "Talent, trade, or partnership — across three regions."}</p>
        </div>
      </div>

      <section className="sec s-cream">
        <div className="si">
          <div className="g3">
            {teamDomains.map((domain, i) => {
              const Icon = domain.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.1 }}
                  className={`card ${isFoundation ? "card-f" : "card-c"}`}
                >
                  <div className={`c-icon ${isFoundation ? "ci-co" : "ci-sa"}`}>
                    <Icon width={17} height={17} />
                  </div>
                  <div className="c-title">{domain.title}</div>
                  <div className="c-body" style={{ marginBottom: "1rem" }}>{domain.description}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {domain.tags.map((tag, j) => (
                      <span key={j} className="tag">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.3 }}
            style={{
              marginTop: "2.75rem",
              padding: "1.75rem",
              borderRadius: 14,
              background: isFoundation ? "rgba(6,110,178,0.06)" : "rgba(241,136,100,0.06)",
              border: `1px solid ${isFoundation ? "rgba(6,110,178,0.11)" : "rgba(241,136,100,0.15)"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 19, color: "var(--navy)", marginBottom: 5, fontWeight: 300 }}>
                {isFoundation ? "Ready to connect?" : "Ready to execute?"}
              </div>
              <div style={{ fontSize: "13.5px", color: "var(--mid)" }}>
                {isFoundation ? "Tell us what kind of collaboration you're looking for." : "Submit your request and get matched within 48 hours."}
              </div>
            </div>
            <button
              className={isFoundation ? "btn btn-co" : "btn btn-sa"}
              onClick={() => handleNavClick("/contact")}
            >
              {isFoundation ? "Get started" : "Submit request"} <ArrowRight width={14} height={14} />
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}