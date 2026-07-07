"use client";

import Link from "next/link";
import React from "react";

type NavLinkProps = {
  href: string;
  title: string;
  classname?: string;
  onHashClick: (e: React.MouseEvent<HTMLAnchorElement>, target: string) => void;
};

export default function NavLink({
  href,
  title,
  classname,
  onHashClick,
}: NavLinkProps) {
  const isHashLink = href.includes("#");

  if (isHashLink) {
    const hashTarget = href.slice(href.indexOf("#"));

    return (
      <Link
        href={href}
        className={classname}
        onClick={(e) => onHashClick(e, hashTarget)}
      >
        {title}
      </Link>
    );
  }

  return (
    <Link href={href} className={classname}>
      {title}
    </Link>
  );
}
