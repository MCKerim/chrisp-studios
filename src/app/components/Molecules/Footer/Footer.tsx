import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer items-center p-4 bg-secondary text-neutral-content">
      <div className="items-center grid-flow-col">
        <p>Copyright © 2023 - All right reserved</p>
        <Link href={"/PrivacyPolicy"}>Privacy Policy</Link>
      </div>
    </footer>
  );
}
