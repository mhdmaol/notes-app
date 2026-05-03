function SearchBar({ value, setValue }) {
  return (
    <div className="flex flex-col shadow-md mt-4 p-6 gap-2 rounded m-2 dark:bg-gray-900 dark:text-white">
      <h1>Cari Catatan</h1>
      <input
        type="text"
        className="border p-2 rounded"
        placeholder="Cari kontak disini.."
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

export default SearchBar;
