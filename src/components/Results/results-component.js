import React, { useEffect, useState } from 'react';
import ResultsComponentWrapper from './results-component.style';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

const sortIcon = <ArrowDownward />;

const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
      }
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };

const Results= ({value}) => {
    const columns = [{
        name: 'Avatar_Url',
        selector: row => row['avatar_url'],
        sortable: true
    },
    {
        name: 'Login',
        selector: row => row['login'],
        sortable: true
    },
    {
        name: 'Type',
        selector: row => row['type'],
        sortable: true
    }]
    const [data, setData] = useState([])
    useEffect(() => {
        if(value) {
            axios({
                method: 'GET',
                url: `https://api.github.com/search/users?q=${value}`,
            })
            .then(resultData => {
                setData(resultData.data.items);
                console.log(resultData.data.items);
            })
            .catch(err => console.log(err))
        }
    }, [value])
  return (
    <ResultsComponentWrapper>
     { (data.length > 0) ? <DataTable title="Results Table" customStyles = {customStyles} center={true} highlightOnHover={true} striped={true} sortIcon={sortIcon} columns={columns} data={data} pagination={true} paginationPerPage={9}/> : null}
    </ResultsComponentWrapper>
  );
}

export default Results;
