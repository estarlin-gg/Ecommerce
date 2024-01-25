export const Header = () => {
  return (
    <header className="w-full flex justify-between items-center p-6 fixed top-0 bg-white shadow-lg">
        <div className="logo">
            <h2 className="text-3xl">Logo</h2>
        </div>
      <nav className="flex gap-4">
        <a href="" className="text-2xl font-medium">item</a>
        <a href="" className="text-2xl font-medium">item</a>
        <a href="" className="text-2xl font-medium">item</a>
        <a href="" className="text-2xl font-medium">item</a>
      </nav>
    </header>
  );
};
