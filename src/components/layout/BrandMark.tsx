import Image from "next/image";

/** Site logo using logo.png from the public folder. */
export function BrandMark({ size = 26 }: { size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt="Site logo"
      width={size}
      height={size}
      className="rounded-sm object-contain"
      priority
    />
  );
}
