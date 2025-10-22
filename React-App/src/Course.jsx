import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
// console.log("PropTypes object:", Course.propTypes);

function Course(props){
    //Internal CSS
    // const styles = {
    //     backgroundColor: "green",
    // }
    
    // console.log("Rating type:", typeof props.rating);

    // let purchased = false;
    
    // Use State Hook
    const [purchased, setPurchased] = useState(false);

    function BuyCourse(discount,event){
        console.log(props.name,"purchased with",discount,"% discount");
        // console.log(event);
        // purchased = true;
        setPurchased(true);
        console.log(purchased);
    }

    // useEffect(()=>{
    //     console.log("Inside Course Use Effect");
    // });

    const [discount,setDiscount] = useState(props.price)
    function ApplyDiscount(price){
        setDiscount(discount - price);
        // return price - (price*discount)/100;
    }

    return(
    <div className="card">
        <img src={props.image} alt="" />
        <h3>{props.name}</h3>
        <p>{discount}</p>
        {/* <span>{props.rating}</span> */}
        <button onClick={(event)=>BuyCourse(20,event)}>Buy now</button>
        <p>{purchased ? "Already Purchased" : "Get it now!!"}</p>
        <button onClick={()=>ApplyDiscount(20)}>Apply Discount</button>
        {/* Methods as Props */}
        <button onClick={()=>props.delete(props.id)}>Delete</button>
    </div>
    ); 
    
}

// Depreciated in React 18+
// Course.defaultProps = {
//     image: HTML
// }

Course.propTypes = {
    name: PropTypes.string,
    rating: PropTypes.number,
    // show: PropTypes.bool
}


export default Course;