import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useMode } from "@/hooks/useMode";
import { useCases } from "@/data/siteContent";

export function ContactPage() {
  const { mode } = useMode();
  const isFoundation = mode === "foundation";
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="ph">
        <div className="ph-i">
          <p className="eyebrow ey-l">{isFoundation ? "Let's talk" : "Submit a request"}</p>
          <h1 className="pt">{isFoundation ? "Get in touch" : "Tell us what you need"}</h1>
          <p className="ps">
            {isFoundation
              ? "Tell us what you're building. We'll find the right connection."
              : "Hiring, partners, or expansion — tell us what you need and we'll match you within 48 hours."}
          </p>
        </div>
      </div>

      <section className="sec s-cream">
        <div className="si">
          <div className="split">
            <div>
              <h2 className="sec-title" style={{ marginBottom: "1.2rem" }}>
                {isFoundation ? "Start a conversation" : "How it works"}
              </h2>
              <p className="sec-desc" style={{ marginBottom: "1.75rem" }}>
                {isFoundation
                  ? "Whether you're a developer, a supplier, a founder, or an investor — Chambey is built for people who build."
                  : "Submit your request. We match you within 48 hours. Mulacanoe coordinates any payments needed to close the deal."}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {useCases.map((useCase, i) => {
                  const Icon = useCase.icon;
                  return (
                    <div
                      key={i}
                      style={{ display: "flex", alignItems: "center", gap: 11, color: "var(--mid)", fontSize: "14.5px", fontWeight: 300 }}
                    >
                      <span style={{ color: isFoundation ? "var(--cobalt)" : "var(--salmon)" }}>
                        <Icon width={15} height={15} />
                      </span>
                      {useCase.text}
                    </div>
                  );
                })}
              </div>
            </div>

            {!submitted ? (
              <form
                className={`card ${isFoundation ? "card-f" : "card-c"}`}
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}
              >
                <input
                  className={`field ${isFoundation ? "field-f" : "field-c"}`}
                  placeholder="Your name"
                  required
                />
                <input
                  className={`field ${isFoundation ? "field-f" : "field-c"}`}
                  type="email"
                  placeholder="Email address"
                  required
                />
                <input
                  className={`field ${isFoundation ? "field-f" : "field-c"}`}
                  placeholder="Organisation (optional)"
                />
                <textarea
                  className={`field ${isFoundation ? "field-f" : "field-c"}`}
                  placeholder={
                    isFoundation
                      ? "What are you building? What do you need?"
                      : "What do you need: hiring, trade partners, or expansion?"
                  }
                  required
                />
                <button
                  type="submit"
                  className={isFoundation ? "btn btn-co" : "btn btn-sa"}
                  style={{ alignSelf: "flex-start" }}
                >
                  {isFoundation ? "Send message" : "Submit request"} <ArrowRight width={14} height={14} />
                </button>
              </form>
            ) : (
              <div className="card" style={{ textAlign: "center", padding: "3rem 2rem" }}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    background: "rgba(0,150,121,0.12)",
                    color: "var(--tealD)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.2rem",
                  }}
                >
                  <Check width={22} height={22} />
                </div>
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    color: "var(--navy)",
                    marginBottom: "0.65rem",
                    fontWeight: 300,
                  }}
                >
                  {isFoundation ? "Message received" : "Request submitted"}
                </div>
                <p style={{ color: "var(--mid)", fontSize: "14.5px", fontWeight: 300 }}>
                  We'll be in touch within 2 business days.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
}