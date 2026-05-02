export type LitanyIntent = "user" | "partner" | "donor";

export type LitanyHandoffDetail = {
  intent?: LitanyIntent;
  campaign?: string;
};

export const buildLitanySignupUrl = ({
  intent = "user",
  campaign = "homepage",
}: LitanyHandoffDetail = {}) => {
  const params = new URLSearchParams({
    source: "chambey",
    intent,
    campaign,
  });

  return `https://litany.world/register?${params.toString()}`;
};

export const openLitanyHandoff = (detail: LitanyHandoffDetail = {}) => {
  window.dispatchEvent(new CustomEvent<LitanyHandoffDetail>("litany-handoff", { detail }));
};
