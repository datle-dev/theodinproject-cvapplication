import '../styles/MonthYearDropdown.css';

function MonthYearDropDown({ legend, selectedMonth, selectedYear, dataKey, dataType, onChange }) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  let years = [];
  for (let i = 0; i < 100; i++) {
    years.push(String(currentYear - i));
  }

  return (
    <>
      <div>
        <fieldset className="month-year-fieldset">
          <legend>{legend}</legend>
          <label htmlFor="month">Month</label>
          <select
            name="month"
            id="month"
            data-key={dataKey}
            data-field="month"
            data-type={dataType}
            onChange={onChange}
            defaultValue={selectedMonth}
          >
            {months.map((month) => {
              return (
                <option key={month} value={month}>
                  {month}
                </option>
              );
            })}
          </select>
          <label htmlFor="year">Year</label>
          <select
            name="year"
            id="year"
            data-key={dataKey}
            data-field="year"
            data-type={dataType}
            onChange={onChange}
            defaultValue={selectedYear}
          >
            {years.map((year) => {
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </fieldset>
      </div>
    </>
  );
}

export default MonthYearDropDown;
