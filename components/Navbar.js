import Link from "next/link";

export default function Navbar() {
  return (
        <nav role="navigation">
          <div>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/documentation">
                  <a>Documentation</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
  )
}
