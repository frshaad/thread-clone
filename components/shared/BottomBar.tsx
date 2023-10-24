import NavLinks from "./NavLinks";

export default function BottomBar() {
  return (
    <section className="fixed bottom-0 z-10 w-full rounded-t-3xl bg-glassmorphism p-4 px-7 backdrop-blur-lg md:hidden">
      <div className="flex items-center justify-between gap-3 xs:gap-5">
        <NavLinks variant="bottombar" />
      </div>
    </section>
  );
}
