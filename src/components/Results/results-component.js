import React, { useEffect, useState } from "react";
import ResultsComponentWrapper from "./results-component.style";
import axios from "axios";
import DataTable from "react-data-table-component";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";

const sortIcon = <ArrowDownward />;
const Results = ({ value }) => {
  const getAPIData = (value, pageNo) => {
    axios({
      method: "GET",
      url: `https://api.github.com/search/users?q=${value}&page=${pageNo}&per_page=9`,
    })
      .then((resultData) => {
        setData(resultData.data.items);
        console.log(resultData.data.items);
      })
      .catch((err) => console.log(err));
  };

  const columns = [
    {
      name: "Avatar_Url",
      selector: (row) => row["avatar_url"],
      sortable: true,
    },
    {
      name: "Login",
      selector: (row) => row["login"],
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => row["type"],
      sortable: true,
    },
  ];
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  }));
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, page) => {
    setPage(page);
    getAPIData(value, page);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    if (value) {
      getAPIData(value, 1);
    }
  }, [value]);

  return (
    <ResultsComponentWrapper>
      {data.length > 0 ? (
        <div className="container-fluid table">
          {" "}
          <DataTable
            title="Results Table"
            center={true}
            highlightOnHover={true}
            striped={true}
            sortIcon={sortIcon}
            columns={columns}
            data={data}
          />
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              {}
              <div className={classes.root}>
                <Pagination
                  count={10}
                  page={page}
                  shape="rounded"
                  variant="outlined"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* { (data.length > 0) ? <DataTable/> : null} */}
    </ResultsComponentWrapper>
  );
};

export default Results;
