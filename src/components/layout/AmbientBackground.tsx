/**
 * Fixed ambient colour field behind all content. Gives the glass materials
 * something to refract: two slow-drifting accent glows plus a page wash.
 */
export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="ambient-float-a absolute -top-[20%] right-[-15%] h-[38rem] w-[38rem] rounded-full opacity-[0.16] blur-3xl dark:opacity-25"
        style={{
          background:
            "radial-gradient(closest-side, var(--accent) 0%, transparent 72%)",
        }}
      />
      <div
        className="ambient-float-b absolute top-[32%] left-[-18%] h-[34rem] w-[34rem] rounded-full opacity-[0.1] blur-3xl dark:opacity-[0.16]"
        style={{
          background:
            "radial-gradient(closest-side, #8b5cf6 0%, transparent 72%)",
        }}
      />
      <div
        className="absolute bottom-[-25%] right-[8%] h-[30rem] w-[30rem] rounded-full opacity-[0.07] blur-3xl dark:opacity-[0.12]"
        style={{
          background:
            "radial-gradient(closest-side, #38bdf8 0%, transparent 72%)",
        }}
      />
    </div>
  );
}
