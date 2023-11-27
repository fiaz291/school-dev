import css from "styled-jsx/css";

export default css`
.table-container {
    padding: 30px;
    background-color: rgba(0,0,0,0.2);
    margin-bottom: 40px;
}
  table.report {
    border-collapse: collapse;
  }

  table.report td {
    border: 1px solid #fff;
    padding: 10px;
    border-top: 0px;
    border-bottom: 0px;
  }

  tr.title td {
    border-left: 0px;
    border-right: 0px;
    border-top: 0px;
    background-color: #293447;
    border: 1px solid #fff;
  }

  td.normal {
    min-width: 200px;
    text-align: center;
  }

  .center {
    padding-left: 10px;
    text-align: left;
    color: #fff;
    margin: 0;
    text-transform: uppercase;
  }

  table td:first-child,
  table td:last-child {
    border-left: 0px;
    border-top: 0px;
  }

  table td:last-child {
    border-right: 0px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

  tr:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.2);
  }

  tr.new {
    background-color: #293447;
  }

  tr.new td {
    color: #fff;
    text-align: center;
    text-transform: uppercase;
  }

table.report th {
    border-bottom: 1px solid #fff;
    padding: 5px;
    border-top: 0px;
  }

  @media(max-width: 768px) {
    td.normal {
      min-width: 100px;
      text-align: center;
    }
  }
`;
