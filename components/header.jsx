import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <Link href="/">
        <a>
          <img
            alt="pacific-surfacing-logo"
            width="150px"
            src="/headerLogo.png"
          />
        </a>
      </Link>
      <nav>
        <Link href="/projects">
          <a>Recent Projects</a>
        </Link>
        <Link href="/about">
          <a>Who We Are</a>
        </Link>
        <Link href="/contact">
          <a>Contact Us</a>
        </Link>
      </nav>
    </header>
  );
};
