import { c as create_ssr_component, f as each, e as escape } from "../../../../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currencyData = [];
  let dates = [];
  return `${$$result.head += `<!-- HEAD_svelte-nwtvyr_START --><script src="https://www.gstatic.com/charts/loader.js"><\/script><style>table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }

    th,
    td {
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid #ccc;
    }

    th {
      background-color: #f2f2f2;
      font-weight: bold;
    }

    td {
      background-color: #ffffff;
    }

    #chart_div {
      width: 100%;
      height: 400px;
    }
  </style><!-- HEAD_svelte-nwtvyr_END -->`, ""}

<div id="chart_div"></div>

<table><thead><tr><th>Moneda</th>
      ${each(dates, (date) => {
    return `<th>${escape(date)}</th>`;
  })}</tr></thead>
  <tbody>${each([...new Set(currencyData.map((item) => item.currency))], (currency) => {
    return `<tr><td>${escape(currency)}</td>
        ${each(dates, (date) => {
      return `${currencyData.filter((item) => item.currency === currency && item.date === date).length ? each(currencyData.filter((item) => item.currency === currency && item.date === date), (entry) => {
        return `<td>${escape(entry.value)}</td>`;
      }) : `<td>-</td>`}`;
    })}
      </tr>`;
  })}</tbody></table>`;
});
export {
  Page as default
};
