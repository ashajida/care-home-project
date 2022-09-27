import Link from "next/link";
import { useRouter } from "next/router";


export interface FooterProps { }

export default function Footer() {

  return (
    <footer>
      <div className="container mx-auto text-center py-4">
        <div className="flex justify-center gap-4 my-2">
          <small>
            <Link href="/privacy-policy">
              <a className="hover:underline">Our privacy policy</a>
            </Link>
          </small>
        </div>
        <small>© {(new Date().getFullYear())} Jesta ThaRogue, All Rights Reserved</small>
        <br />
        <small>Company No. 04232998 - VAT No. 772 4328 23</small>
      </div>
    </footer>
  );
}
