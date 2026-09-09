export type OfficialLink = {
  id: string;
  label: string;
  href: string | null;
  status?: "soon";
};

export const officialLinks = {
  twitter: { id: "twitter", label: "X / Twitter", href: null, status: "soon" },
  telegram: { id: "telegram", label: "Telegram", href: null, status: "soon" },
  discord: { id: "discord", label: "Discord", href: null, status: "soon" },
  qq: { id: "qq", label: "QQ Community", href: null, status: "soon" },
  docs: { id: "docs", label: "Official Docs", href: null, status: "soon" },
  explorer: { id: "explorer", label: "Block Explorer", href: null, status: "soon" },
  contract: { id: "contract", label: "Copy Contract", href: null, status: "soon" },
  website: { id: "website", label: "Website", href: null, status: "soon" }
} satisfies Record<string, OfficialLink>;
