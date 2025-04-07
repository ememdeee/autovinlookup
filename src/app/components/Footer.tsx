import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-secondary">
      <div className="container px-4 py-8 md:py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <span className="text-sm font-medium font-serif text-primary">Services</span>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors font-serif"
                >
                  Auto VIN Lookup
                </Link>
              </li>
              <li>
                <Link
                  href="/window-sticker-by-vin"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors font-serif"
                >
                  Window Sticker
                </Link>
              </li>
              <li>
                <Link
                  href="/build-sheet-by-vin"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors font-serif"
                >
                  Build Sheet By VIN
                </Link>
              </li>
              <li>
                <Link
                  href="/warranty-by-vin"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors font-serif"
                >
                  Warranty Check By VIN
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <span className="text-sm font-medium font-serif text-primary">Others</span>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/unlimited-vin-check-carfax-for-dealers"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors font-serif"
                >
                  Find Dealers
                </Link>
              </li>
              <li>
                <Link
                  href="/paint-code-by-vin"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors font-serif"
                >
                  Paint Code by VIN
                </Link>
              </li>
              <li>
                <Link
                  href={process.env.SAMPLE_URL || "#"}
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors font-serif"
                >
                  Sample
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  target="_blank"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors font-serif"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <span className="text-sm font-medium font-serif text-primary">Legal</span>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors font-serif"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors font-serif"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <span className="text-sm font-medium font-serif text-primary">Connect</span>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors font-serif"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors font-serif"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap.xml"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors font-serif"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-primary/20 pt-8">
          <p className="text-center text-sm text-foreground/60 font-serif">
            © 2025{" "}
            <Link href="/" className="hover:text-primary transition-colors">
              {process.env.SITE_NAME}
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}