import { motion } from "framer-motion";
import { ArrowRight, Laptop, Palette, Briefcase } from "lucide-react";
import { useMode } from "@/hooks/useMode";
import { impactAreas } from "@/data/siteContent";

export function FieldsPage() {
  const { mode } = useMode();
  const isFoundation = mode === "foundation";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="ph">
        <div className="ph-i">
          <p className="eyebrow ey-l">{isFoundation ? "Impact areas" : "Active sectors"}</p>
          <h1 className="pt">{isFoundation ? "Where collaboration creates impact" : "Where deals are moving"}</h1>
          <p className="ps">
            {isFoundation
              ? "The sectors where cross-border work moves fastest."
              : "The sectors with the most live activity across our corridors."}
          </p>
        </div>
      </div>

      <section className="sec s-cream">
        <div className="si" style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          {impactAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.1 }}
                className={`card ${isFoundation ? "card-f" : "card-c"}`}
                style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: "1.5rem", alignItems: "center" }}
              >
                <div className={`c-icon ${isFoundation ? "ci-co" : "ci-sa"}`} style={{ margin: 0 }}>
                  <Icon width={17} height={17} />
                </div>
                <div>
                  <div className="c-title" style={{ fontSize: 17 }}>{area.title}</div>
                  <div className="c-body">{area.description}</div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, justifyContent: "flex-end", minWidth: 140 }}>
                  {area.tags.map((tag, j) => (
                    <span key={j} className="tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}