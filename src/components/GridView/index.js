/** @format */

import React, { Component } from 'react';

import ListItem from './../GridView/ListItem';

class GridView extends Component {

    constructor(props){
        super(props);
        this.state = {
            columns: [
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
            ],
            rows: [
                {
                    name:'Frozen yoghurt',
                    calories: 1,
                    fat: 2,
                    carbs: 3,
                    protein: 4.
                },
                {
                    name:'dua hau',
                    calories: 1,
                    fat: 2,
                    carbs: 3,
                    protein: 4.
                },
                {
                    name:'Banh quan',
                    calories: 1,
                    fat: 2,
                    carbs: 3,
                    protein: 4.
                },
            ]
        }
    }
    onClickDeleteAll = (selected) => {
        console.log(selected);
        this.setState({
            rows: []
        })
    };

    onClickView = (item) => {
        console.log(item);
    };

    onClickEdit = (item) => {
        console.log(item);
    };
    onClickDelete = (item) => {
        console.log(item);

    };
    render() {
        const { name } = this.props;
        const { columns, rows} = this.state;
        return (
            <ListItem
                name={name}
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

export default GridView;
