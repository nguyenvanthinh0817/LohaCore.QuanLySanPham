/** @format */

import React, { Component } from 'react';

import ListItem from './../GridView/ListItem';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const columns = [
    {
        right: false,
        lable: 'Dessert (100g serving)',
    },
    {
        right: true,
        lable: 'Calories',
    },
    {
        right: true,
        lable: 'Fat (g)',
    },
    {
        right: true,
        lable: 'Carbs (g)	',
    },
    {
        right: true,
        lable: 'Protein (g)',
    },
];

class test extends Component {
    onClickDeleteAll = (selected) => {
        console.log(selected);
    };

    onClickView = item => {
        console.log(item)
    }

    onClickEdit = item =>{
      console.log(item)
    }
    onClickDelete = item =>{
      console.log(item)
    }
    render() {
        return (
            <ListItem
                columns={columns}
                rows={rows}
                onClickDeleteAll={this.onClickDeleteAll}
                onClickDelete={this.onClickDelete}
                onClickEdit={this.onClickEdit}
                onClickView={this.onClickView}
            />
        );
    }
}

export default test;
