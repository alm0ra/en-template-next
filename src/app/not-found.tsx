import Link from "next/link";

export default function NotFound() {
  return (
    <div className="state-shell">
      <div className="state-card">
        <p className="eyebrow">404</p>
        <h2>Page not found</h2>
        <p className="state-copy">
          The route you requested isn&apos;t defined in this shell. Start from the home page or one of the existing route handlers.
        </p>
        <Link className="primary-link" href="/">
          Back to home
        </Link>
      </div>
    </div>
  );
}
