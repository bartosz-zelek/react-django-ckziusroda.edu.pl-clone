import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import months from "../common/MonthsDict";

const ArchiveMonths = () => {
  const date = new Date();
  const year_now = date.getFullYear();
  const month_now = date.getMonth();
  let temp_month = month_now;
  let temp_year = year_now;

  const history = useHistory();

  const handleOnClick = (e) => {
    const date_arr = e.target.value.split(" ");
    history.push(`/archiwum/${date_arr[1]}/${date_arr[0]}`);
  };

  return (
    <select
      className="form-control bg-light"
      style={{ maxWidth: "200px", display: "inline-block" }}
      defaultValue=""
    >
      <option disabled value="">
        Wybierz miesiąc
      </option>
      {[...Array(12)].map((x, i) => (
        <Fragment key={i}>
          <option
            onClick={(e) => handleOnClick(e)}
            value={`${temp_month} ${temp_year}`}
          >
            {months[temp_month]} {temp_year}
          </option>
          {temp_month--}
          {temp_month < 1 ? ((temp_month = 12), temp_year--) : null}
        </Fragment>
      ))}
    </select>
  );
};

export default ArchiveMonths;
