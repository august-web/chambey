import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/siteContent";
import { useMode } from "@/hooks/useMode";

export function ProjectsPage() {
  const navigate = useNavigate();
  const { mode } = useMode();
  const isFoundation = mode === "foundation";

  const statusClass: Record<string, string> = {
    Active: "ba",
    Completed: "bd",
    "In progress": "bpg",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="ph">
        <div className="ph-i">
          <p className="eyebrow ey-l">Track record</p>
          <h1 className="pt">Projects in motion</h1>
          <p className="ps">Real collaborations. Real corridors. Real outcomes.</p>
        </div>
      </div>

      {!isFoundation && (
        <div className="mula-strip">
          <div className="mula-inner">
            <span className="badge bm">Mulacanoe</span>
            <p className="mula-text">
              <strong>Payments, escrow, and transaction coordination</strong> powered by Mulacanoe — every deal in this list settled through our transaction layer.
            </p>
          </div>
        </div>
      )}

      <section className="sec s-cream">
        <div className="si">
          <div className="g2">
            {projects.map((project, index) => (
              <motion.div
                key={`${project.from}-${project.to}-${index}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                className={`card ${isFoundation ? "card-f" : "card-c"}`}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.7rem" }}>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 500, color: "var(--navy)", marginBottom: 5 }}>
                      {project.from} <span style={{ color: isFoundation ? "var(--cobalt)" : "var(--salmon)" }}>→</span> {project.to}
                    </div>
                    <span className={`tag ${isFoundation ? "" : "tag-sa"}`}>
                      {isFoundation ? project.typeF : project.typeC}
                    </span>
                  </div>
                  <span className={`badge ${statusClass[project.status]}`}>{project.status}</span>
                </div>
                <p className="c-body">{project.description}</p>
              </motion.div>
            ))}
          </div>

          {isFoundation && (
            <div style={{ marginTop: "1.75rem", display: "flex", alignItems: "center", gap: 8, fontSize: "12.5px", color: "var(--mid)" }}>
              <span className="badge bm">Mulacanoe</span> Payments and escrow coordinated through Mulacanoe
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}