import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70svh] flex-col items-center justify-center pt-32 pb-20 text-center">
      <p className="text-gradient font-mono text-sm font-semibold">404</p>
      <h1 className="text-display mt-4 text-balance">
        This page drifted off the glass.
      </h1>
      <p className="text-lede mt-4 max-w-md text-pretty">
        The address doesn&rsquo;t exist here. Head back to the index, or tell me
        what you were looking for.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link href="/" className="btn btn-primary">
          Back to index
          <Icon name="arrowRight" size={17} />
        </Link>
        <Link href="/contact" className="btn btn-glass">
          Contact
        </Link>
      </div>
    </section>
  );
}
