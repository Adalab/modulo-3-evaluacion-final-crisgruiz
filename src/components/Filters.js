import "../styleSheets/FilterByName.scss";
import FilterByName from "./FilterByName";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section>
      <form className="form" action="" onSubmit={handleSubmit}>
        <FilterByName handleFilter={props.handleFilter} value={props.value} />
      </form>
    </section>
  );
};
export default Filters;
