export type LitanyIntent = "user" | "partner" | "donor";

export type LitanyHandoffDetail = {
  intent?: LitanyIntent;
};

const LITANY_BASE_URL = import.meta.env.VITE_LITANY_BASE_URL ?? "https://litany.world";

export const buildLitanySignupUrl = ({
  intent = "user",
}: LitanyHandoffDetail = {}) => {
  const params = new URLSearchParams({
    utm_source: "chambey",
    utm_medium: "referral",
    intent,
  });

  return `${LITANY_BASE_URL}/register?${params.toString()}`;
};

export const openLitanyHandoff = (detail: LitanyHandoffDetail = {}) => {
  window.dispatchEvent(new CustomEvent<LitanyHandoffDetail>("litany-handoff", { detail }));
};
