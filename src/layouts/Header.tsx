import React from "react";

interface Props {
  name: string;
  children?: React.ReactNode;
}
const Header: React.FC<Props> = ({ name, children }) => {
  return (
    <header className="header-h lh-[var(--header-h)] flex items-center justify-between gap-12 bg-#fff color-#0F172A">
      <div className="text-h3 ml-24">{name}</div>

      <div className="mr-24 flex gap-16 py-18 header-h">{children}</div>
    </header>
  );
};

export default Header;
