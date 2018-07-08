import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: "#39424e !important",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});
let id = 0;
function createData(name, date, status) {
    id += 1;
    return { id, name, date, status};
}
const data = [
    createData('Solve Hello World', '2018-04-05', 'Solved'),
    createData('Prime number challenge', '2018-03-05', 'Solved'),
    createData('String reverse challenge', '2018-02-31', 'Solved'),
    createData('Even Odd challenge', '2018-01-05', 'Failed'),
    createData('String converstion challenge', '2018-01-03', 'Solved'),
];

class History extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="margin-top-50">
                <div className="container">
                    <div className="row legend">
                        <span>Challenges History</span>
                    </div>
                    <div className="row">
                        <Paper className={classes.root}>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <CustomTableCell>Sr.</CustomTableCell>
                                        <CustomTableCell>Challenge</CustomTableCell>
                                        <CustomTableCell>Date</CustomTableCell>
                                        <CustomTableCell>Status</CustomTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map(n => {
                                        return (
                                            <TableRow className={classes.row} key={n.id}>
                                                <CustomTableCell>{n.id}</CustomTableCell>
                                                <CustomTableCell>{n.name}</CustomTableCell>
                                                <CustomTableCell>{n.date}</CustomTableCell>
                                                <CustomTableCell>{n.status}</CustomTableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </Paper>
                    </div>
                </div>
            </div>
        )
    }
}

History.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(History);