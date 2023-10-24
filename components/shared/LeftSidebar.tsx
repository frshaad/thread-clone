import LogOutButton from "./LogOutButton";
import NavLinks from "./NavLinks";

export default function LeftSidebar() {
  return (
    <aside className="custom-scrollbar sticky left-0 top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto border-r border-r-dark-4 bg-dark-2 pb-5 pt-28 max-md:hidden">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        <NavLinks variant="sidebar" />
      </div>

      <div className="mt-10 px-6">
        <LogOutButton hasLabel />
      </div>
    </aside>
  );
}
