import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { buildLitanySignupUrl, type LitanyHandoffDetail } from "@/utils/litany";

export function LitanyHandoff() {
  const [handoff, setHandoff] = useState<LitanyHandoffDetail | null>(null);

  useEffect(() => {
    const handleHandoff = (event: Event) => {
      const customEvent = event as CustomEvent<LitanyHandoffDetail>;
      setHandoff(customEvent.detail ?? {});
    };

    window.addEventListener("litany-handoff", handleHandoff);
    return () => window.removeEventListener("litany-handoff", handleHandoff);
  }, []);

  const close = () => setHandoff(null);

  const continueToLitany = () => {
    window.location.href = buildLitanySignupUrl(handoff ?? {});
  };

  return (
    <AnimatePresence>
      {handoff ? (
        <motion.div
          className="handoff-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="handoff-modal"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="handoff-title"
          >
            <button className="handoff-close" onClick={close} aria-label="Close Litany handoff">
              <X width={17} height={17} />
            </button>
            <div className="handoff-kicker">Powered by Litany</div>
            <h2 id="handoff-title" className="handoff-title">
              You're about to enter Chambey's platform (Litany)
            </h2>
            <p className="handoff-copy">
              Where pathways are structured and progress is tracked.
            </p>
            <button className="btn btn-co handoff-action" onClick={continueToLitany}>
              Continue to Litany <ArrowRight width={14} height={14} />
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
