import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {Route, Routes, useParams} from "react-router-dom";
import Home from "./HomeComponent";
import Catalog from "./CatalogComponent";
import Contact from "./ContactComponent";
import ItemDetail from "./ItemdetailComponent";
import About from "./AboutComponent";
import {useSelector} from "react-redux";
import {selectEmployees} from "../features/employees/employeesSlice";
import {selectItems} from "../features/items/itemsSlice";
import {selectComments} from "../features/comments/commentsSlice";

export function Main(){
  const employees = useSelector(selectEmployees);
  const items = useSelector(selectItems);
  const comments = useSelector(selectComments);
  const ItemWithId = (props) => {
    console.log(props.match);
    const {itemId} = useParams();
    return (
      <ItemDetail item={items.filter((item) => item.id === parseInt(itemId, 10))[0]}
                  comments={comments.comments.filter((comment) => comment.itemId === parseInt(itemId, 10))}/>
    );
  };

    return (
      <div>
        <Header/>
        <Routes>
          <Route path='/home' element={
            <Home item={items.filter(item => item.featured)[0]}
                  employee={employees.filter(employee => employee.featured)[0]}/>
          }/>
          <Route exact path='catalog' element={<Catalog items={items}/>}>
          </Route>
          <Route path='catalog/:itemId' element={<ItemWithId/>}/>
          <Route exact path='/contactus' element={<Contact/>}/>
          <Route exact path='/aboutus' element={<About employees={employees}/>}/>
          <Route
            path="*"
            element={<Home
              item={items.filter(item => item.featured)[0]}
              employee={employees.filter(employee => employee.featured)[0]}
            />}/>
        </Routes>
        <Footer/>
      </div>
    );
}

export default Main;
