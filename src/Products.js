import React from "react";
import {useState} from 'react';
import ProductList from './ProductList';


const Products=()=>{
    const [herbs,setHerbs ]= useState([
        {
            id: 1,
            name:"Mint",
            image:"./public/images/3.jpg",
            description:" Kraut",
            packaging:"1",
            weight: "1",
            best_before_date:"2024-05-10",
            price: 5.87
        },
        {
            id: 2,
            name:"Lavender",
            image:"./public/images/11.jpg",
            description:"Kraut",
            packaging:"2",
            weight: "1",
            best_before_date:"2024-10-21",
            price: 6.00
        },
        {
            id: 3,
            name:"Rosemary",
            image:"./public/images/6.jpg",
            description:"Kraut",
            packaging:"3",
            weight: "1",
            best_before_date:"2024-09-30",
            price: 8.27
        },
        {
            id: 4,
            name:"Parsley",
            image:"./public/images/9.jpg",
            description:"Kraut ",
            packaging:"4",
            weight: "1",
            best_before_date:"2025-10-10",
            price: 5.00
        },
        {
            id: 5,
            name:"Basil",
            image:"./public/images/8.jpg",
            description:"Kraut",
            packaging:"5",
            weight: "1",
            best_before_date:"2025-05-10",
            price: 15.50
        },
        {
            id: 6,
            name:"Camomile",
            image:"./public/images/1.jpg",
            description:"Kraut",
            packaging:"6",
            weight: "1",
            best_before_date:"2026-10-10",
            price: 5.00
        },
        {
            id: 7,
            name:"Dill",
            image:"./public/images/17.jpg",
            description:"Kraut",
            packaging:"",
            weight: "1",
            best_before_date:"2026-04-22",
            price: 20.87
        },
        {
            id: 8,
            name:"Cloves",
            image:"./public/images/14.jpg",
            description:"Kraut",
            packaging:"8",
            weight: "1",
            best_before_date:"2025-10-20",
            price: 3.87
        },
        {
            id: 9,
            name:"Turmeric",
            image:"../images/18.jpg",
            description:"Kraut",
            packaging:"9",
            weight: "1",
            best_before_date:"2026-07-11",
            price: 3.87
        },
        {
            id: 10,
            name:"Garlic",
            image:"./public/images/4.jpg",
            description:"Kraut",
            packaging:"10",
            weight: "1",
            best_before_date:"2024-10-10",
            price: 3.87
        }
    ]);
    
    
    
    return(
    
        < ProductList herbs = {herbs} title = "Products!"/>
         
        )
    
}
export default Products;