// import html from './assets/HTML.jpeg'
// import css from './assets/CSS.jpeg'
// import js from './assets/JS.png';
import Course from './Course';
import useFetch from './useFetch';
function CourseList(){

    
    const [courses,dummy,error] =  useFetch('http://localhost:3000/courses');
    
    function handleDelete(id){
        const newCourses = courses.filter((course) => course.id !== id);
        setCourses(newCourses);
    }
    // courses.sort((x,y)=> y.price - x.price);
    // const vfmcourses = courses.filter((course) =>course.price <1000);

    if(!courses){
        return (
        <>
            {!error && <img src="/loading.gif" alt="Loading..." />}
            {error && <p>{error}</p>}   
        </>
        )
    }
    const coursesList = courses.map((course) => 
    // Methods as Props
    <Course key = {course.id} name = {course.name} price = {course.price} image = {course.image} rating = {course.rating} delete = {handleDelete} id={course.id}/>
    )
    return (
        <>
        {coursesList}
        <button onClick={()=>{setDummy(false)}}>Dummy Button</button>
        </>
    );
}

export default CourseList;