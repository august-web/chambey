import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, DollarSign, Globe, Group, Handshake, Loader, Users } from "lucide-react";
import { donationTiers, fundingUses } from "@/data/siteContent";
import { cn } from "@/utils/cn";

export function SupportPage() {
  const [freq, setFreq] = useState<"monthly" | "onetime">("monthly");
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const tierColors: Record<string, string> = {
    teal: "var(--tealD)",
    cobalt: "var(--cobalt)",
    salmon: "var(--salmon)",
  };

  const handleSelectTier = (tier: string) => {
    setSelectedTier(tier);
  };

  const closeModal = () => {
    setSelectedTier(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      {/* Hero */}
      <section className="don-hero">
        <div className="don-hero-grid"></div>
        <div className="don-orb don-orb-1"></div>
        <div className="don-orb don-orb-2"></div>
        <div className="don-inner">
          <p className="eyebrow ey-l" style={{ justifyContent: "center", marginBottom: "1.25rem" }}>
            Chambey Organization
          </p>
          <h1 className="don-title">
            Support cross-border<br />opportunity
          </h1>
          <p className="don-sub">
            Help connect talent, ideas, and opportunities across Global Emerging Domestic Markets, Africa, Brazil, and Southeast Asia.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
            <button className="btn btn-teal" onClick={() => document.getElementById("don-tiers")?.scrollIntoView({ behavior: "smooth" })}>
              Support Chambey
              <ArrowRight width={15} height={15} />
            </button>
            <button className="btn btn-ghost" onClick={() => document.getElementById("don-why")?.scrollIntoView({ behavior: "smooth" })}>
              Why this matters
            </button>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="sec s-cream" id="don-why">
        <div className="si">
          <div className="split" style={{ gap: "5rem" }}>
            <div>
              <p className="eyebrow ey-te">Why this matters</p>
              <h2 className="sec-title" style={{ marginBottom: "1.25rem" }}>
                Talent is everywhere.<br />Opportunity is not.
              </h2>
              <p className="sec-desc" style={{ marginBottom: "1.25rem" }}>
                People are building, creating, and solving problems, but access to opportunities is often limited to geography.
              </p>
              <p className="sec-desc" style={{ marginBottom: "1.25rem" }}>
                Chambey exists to change that. We connect people across regions so collaboration leads to real-world outcomes.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.75rem" }}>
                <span className="don-outcome-pill">Jobs</span>
                <span className="don-outcome-pill">Partnerships</span>
                <span className="don-outcome-pill">Trade</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p className="don-quote">
                "This is not charity. It's building infrastructure for opportunity."
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginTop: "0.75rem" }}>
                {[
                  "Expand access to cross-border collaboration",
                  "Connect individuals to opportunities beyond their environment",
                  "Enable partnerships across Global EDMs, Africa, Brazil, and SEA",
                  "Build infrastructure for long-term economic mobility",
                ].map((item, i) => (
                  <div key={i} className="don-check-row">
                    <div className="don-check">
                      <Check width={14} height={14} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The System */}
      <section className="sec s-navy">
        <div className="si" style={{ textAlign: "center" }}>
          <p className="eyebrow ey-te" style={{ justifyContent: "center" }}>
            How it compounds
          </p>
          <h2 className="sec-title light" style={{ margin: "0 auto 3rem", maxWidth: "520px" }}>
            From collaboration to outcomes
          </h2>
          <div className="don-flow">
            {[
              { num: "1", label: "Conversations", sub: "begin here" },
              { num: "2", label: "Collaborations", sub: "take shape" },
              { num: "3", label: "Opportunities", sub: "become real" },
              { num: "4", label: "Real outcomes", sub: "across borders", accent: true },
            ].map((step, i) => (
              <div key={i}>
                <div className={cn("don-flow-step", step.accent ? "don-flow-step-accent" : "")}>
                  <div className={cn("don-flow-num", step.accent ? "don-flow-num-accent" : "")}>
                    {step.num}
                  </div>
                  <div className={cn("don-flow-label", step.accent ? "don-flow-label-accent" : "")}>
                    {step.label}
                  </div>
                  <div className={cn("don-flow-sub", step.accent ? "don-flow-sub-accent" : "")}>
                    {step.sub}
                  </div>
                </div>
                {i < 3 && <div className="don-flow-arrow">→</div>}
              </div>
            ))}
          </div>
          <p className="sec-desc light" style={{ margin: "2.5rem auto 0", maxWidth: "480px" }}>
            Your support helps make that system accessible to more people, across regions, across borders, across opportunity gaps.
          </p>
        </div>
      </section>

      {/* How Funds Are Used */}
      <section className="sec s-surf">
        <div className="si">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="eyebrow ey-co" style={{ justifyContent: "center" }}>
              Where it goes
            </p>
            <h2 className="sec-title" style={{ maxWidth: "480px", margin: "0 auto" }}>
              How contributions are used
            </h2>
          </div>
          <div className="g3">
            {fundingUses.map((item, i) => (
              <div key={i} className="card card-f">
                <div className="c-icon ci-co">
                  {item.icon === Loader && <Loader width={17} height={17} />}
                  {item.icon === Group && <Group width={17} height={17} />}
                  {item.icon === Globe && <Globe width={17} height={17} />}
                </div>
                <div className="c-title">{item.title}</div>
                <div className="c-body">{item.description}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <a
              aria-label="Chambey Organization"
              href="https://app.candid.org/profile/15510989/chambey-organization-99-2404801/?pkId=fce6856e-d617-42b3-8d0b-0ca7b53b451c"
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-flex" }}
            >
              <img
                alt=""
                src="https://widgets.guidestar.org/prod/v1/pdp/transparency-seal/15510989/svg"
                style={{ width: 120, height: "auto" }}
              />
            </a>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="sec s-cream" id="don-tiers">
        <div className="si">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="eyebrow ey-te" style={{ justifyContent: "center" }}>
              Levels of involvement
            </p>
            <h2 className="sec-title" style={{ maxWidth: "520px", margin: "0 auto 0.75rem" }}>
              Choose your level of involvement
            </h2>
            <p className="sec-desc" style={{ margin: "0 auto", textAlign: "center" }}>
              Every level represents a different depth of participation, not a different size of transaction.
            </p>
          </div>

          {/* Frequency toggle */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
            <div className="don-toggle">
              <button
                className={cn("don-toggle-btn", freq === "monthly" ? "active" : "")}
                onClick={() => setFreq("monthly")}
              >
                Monthly
              </button>
              <button
                className={cn("don-toggle-btn", freq === "onetime" ? "active" : "")}
                onClick={() => setFreq("onetime")}
              >
                One-time
              </button>
            </div>
          </div>

          <div className="g3" style={{ alignItems: "stretch" }}>
            {donationTiers.map((tier, i) => (
              <div key={i} className={cn("don-tier-card", tier.featured ? "don-tier-featured" : "")}>
                {tier.featured && <div className="don-tier-featured-label">Most chosen</div>}
                <div className="don-tier-dot" style={{ background: tierColors[tier.color] }}></div>
                <div className="don-tier-label">{tier.label}</div>
                <div className="don-tier-price">
                  <span className="don-tier-amount">
                    {freq === "monthly" ? tier.monthly : tier.oneTime}
                  </span>
                  <span className="don-tier-period">
                    {freq === "monthly" ? "/month" : "one-time"}
                  </span>
                </div>
                <p className="don-tier-pos">{tier.description}</p>
                <div className="don-tier-divider"></div>
                <div className="don-tier-section-label">Level of involvement</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.75rem" }}>
                  {tier.benefits.map((benefit, j) => (
                    <div key={j} className="don-tier-item">
                      <span className="don-tier-dot-sm" style={{ background: tierColors[tier.color] }}></span>
                      {benefit}
                    </div>
                  ))}
                </div>
                <button
                  className="btn don-tier-btn"
                  style={{ background: tierColors[tier.color], color: "#fff", width: "100%", justifyContent: "center" }}
                  onClick={() => handleSelectTier(tier.label)}
                >
                  Support as {tier.label}
                </button>
              </div>
            ))}
          </div>

          {/* Custom */}
          <div style={{ marginTop: "1.5rem", padding: "1.5rem", borderRadius: 14, border: "1px dashed rgba(8,48,73,0.2)", textAlign: "center" }}>
            <p style={{ fontSize: 14, color: "var(--mid)", fontWeight: 300 }}>
              Looking for a different level of involvement?
            </p>
            <button className="btn btn-outline" style={{ marginTop: "0.85rem", fontSize: 13, padding: "9px 20px" }}>
              Get in touch directly
            </button>
          </div>
        </div>
      </section>

      {/* Donations → Outcomes Loop */}
      <section className="sec s-navy">
        <div className="si">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="eyebrow ey-te" style={{ justifyContent: "center" }}>
              The feedback loop
            </p>
            <h2 className="sec-title light" style={{ maxWidth: "520px", margin: "0 auto" }}>
              How donations connect to institutional impact
            </h2>
          </div>
          <div className="don-loop">
            {[
              { icon: DollarSign, title: "Donations", desc: "Fund access, platform operations, and community programs" },
              { icon: Users, title: "Access grows", desc: "More people enter the network and build cross-border connections" },
              { icon: Handshake, title: "Collaboration", desc: "Conversations become deals, partnerships, and real economic outcomes" },
              { icon: Globe, title: "Proof & data", desc: "Outcomes generate credibility, reports, and evidence for institutional funders" },
              { icon: Loader, title: "Institutional funding", desc: "Grants, partnerships, and institutional capital amplify the impact further", accent: true },
            ].map((item, i) => (
              <div key={i}>
                <div className={cn("don-loop-item", item.accent ? "don-loop-item-accent" : "")}>
                  <div
                    className="don-loop-icon"
                    style={{
                      background: item.accent ? "rgba(0,150,121,0.2)" : `rgba(${item.icon === DollarSign ? "0,150,121" : item.icon === Users ? "6,110,178" : item.icon === Handshake ? "241,136,100" : "247,178,96"},0.15)`,
                      color: item.accent
                        ? "var(--tealD)"
                        : item.icon === DollarSign
                        ? "var(--tealD)"
                        : item.icon === Users
                        ? "var(--cobalt)"
                        : item.icon === Handshake
                        ? "var(--salmon)"
                        : "#A07000",
                    }}
                  >
                    {(() => {
                      const Icon = item.icon;
                      return <Icon width={20} height={20} />;
                    })()}
                  </div>
                  <div className={cn("don-loop-title", item.accent ? "don-loop-title-accent" : "")}>
                    {item.title}
                  </div>
                  <div className={cn("don-loop-desc", item.accent ? "don-loop-desc-accent" : "")}>
                    {item.desc}
                  </div>
                </div>
                {i < 4 && <div className="don-loop-arrow">→</div>}
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 18px", borderRadius: 100, border: "1px solid rgba(0,150,121,0.3)", background: "rgba(0,150,121,0.1)" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--tealD)", display: "inline-block" }}></span>
              <span style={{ fontSize: 12, color: "var(--tealD)", fontWeight: 500, letterSpacing: "0.04em" }}>
                The loop continues — more access, more outcomes, more funding
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: "var(--tealD)", padding: "4.5rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.7rem,2.8vw,2.4rem)", color: "#fff", marginBottom: "1rem", lineHeight: 1.15, fontWeight: 300 }}>
            Help expand access to opportunity
          </h2>
          <p style={{ color: "rgba(255,255,255,0.72)", marginBottom: "2rem", fontWeight: 300, maxWidth: 380, margin: "0 auto" }}>
            Be part of building infrastructure for opportunity across regions, not charity, infrastructure.
          </p>
          <button
            className="btn"
            style={{ background: "#fff", color: "var(--tealD)", fontWeight: 500 }}
            onClick={() => document.getElementById("don-tiers")?.scrollIntoView({ behavior: "smooth" })}
          >
            Support Chambey
            <ArrowRight width={14} height={14} />
          </button>
        </div>
      </section>

      {/* Confirmation Modal */}
      {selectedTier && (
        <div
          style={{
            display: "flex",
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 500,
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <div style={{ background: "var(--cream)", borderRadius: 18, padding: "2.5rem", maxWidth: 440, width: "100%", textAlign: "center", position: "relative" }}>
            <button
              onClick={closeModal}
              style={{ position: "absolute", top: "1rem", right: "1rem", fontSize: 18, color: "var(--mid)", background: "none", border: "none", cursor: "pointer" }}
            >
              ✕
            </button>
            <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(0,150,121,0.1)", color: "var(--tealD)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
              <Check width={24} height={24} />
            </div>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.6rem", fontWeight: 300, color: "var(--navy)", marginBottom: "0.75rem" }}>
              Thank you for your support
            </h3>
            <p style={{ color: "var(--mid)", fontSize: 14, lineHeight: 1.65, marginBottom: "1.5rem" }}>
              We'll be in touch with next steps for your <strong>{selectedTier}</strong> level of involvement.
            </p>
            <button className="btn btn-co" onClick={closeModal} style={{ width: "100%", justifyContent: "center" }}>
              Continue exploring Chambey
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
