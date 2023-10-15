export const Filter = ({ filter, handleFilterChange, contacts }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        name="filter"
        onChange={handleFilterChange}
        placeholder="Contact name"
        // disabled={!contacts.length > 0}
      />
    </>
  );
};
