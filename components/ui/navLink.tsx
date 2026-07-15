"use client";

import Link from "next/link";
import React from "react";

type NavLinkProps = {
  href: string;
  title: string;
  className?: string;
  onHashClick: (e: React.MouseEvent<HTMLAnchorElement>, target: string) => void;
};

export default function NavLink({
  href,
  title,
  className,
  onHashClick,
}: NavLinkProps) {
  const isHashLink = href.includes("#");

  if (isHashLink) {
    const hashTarget = href.slice(href.indexOf("#"));

    return (
      <Link
        href={href}
        className={className}
        onClick={(e) => onHashClick(e, hashTarget)}
      >
        {title}
      </Link>
    );
  }

  return (
    <Link href={href} className={className}>
      {title}
    </Link>
  );
}
