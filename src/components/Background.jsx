// Static, low-cost page background inspired by trahoangdev.me:
// a few soft blurred color washes and a faint grid. No canvas, no animation.
export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-[20%] -left-[10%] h-[70%] w-[70%] rounded-full bg-cyan/10 opacity-50 blur-[120px]" />
      <div className="absolute top-[10%] -right-[10%] h-[60%] w-[60%] rounded-full bg-violet/10 opacity-50 blur-[120px]" />
      <div className="absolute -bottom-[20%] left-[20%] h-[60%] w-[60%] rounded-full bg-blue/10 opacity-50 blur-[120px]" />
      <div className="absolute inset-0 grid-fade" />
    </div>
  );
}
