"use client";

export function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <body className="bg-[#f8f5d7] font-[FeatureFlatHeadline,Times_New_Roman,Times,serif] select-none overflow-x-hidden antialiased">
      {children}
    </body>
  );
}
