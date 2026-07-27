
// import React from 'react'
import Card from './components/card'
import User from './components/User'

// const App = () => {
  // const arr = [10,20,30,40]
  // return (
  // <div className='parent'>
      {/* <Card/> */}
      {/* <User user = "Mohnish"/> */}
      {/* <h1>{arr}</h1> */}
      {/* <h1>{arr[0]}</h1> */}
      
      // {arr.map((elem)=>{
        // return <h1>{elem}</h1>
        // return <h1>Mohnish</h1>
      // })}
      
  // </div>
    
  // )
// }




/*
const App = () => {

  const arr = [10,20,30,40];

  return (
    <div className='parent'>
      {arr.map((elem)=>{
        console.log(elem);
      })}
    </div>
  )
}
*/
//                     array inside objects // Array of objects
/*
const App = () => {

  const arr = [{user:'Mohnish',
    age:'22'
  },
    {user:'Shiva',
      age:'1'
    },
    {user:'Piyush',
      age:'23'
    }];

  return (
    <div className='parent'>
      {arr.map((elem)=>{
        console.log(elem.user);
        // console.log(arr)
      })}
    </div>
  )
}
*/

//                           user ko arr.map function me bhi import kr sakte hain
/*
const App = () => {

   const arr = [10,20,30,40];

  return (
    <div className='parent'>
      {arr.map((elem)=>{
        return <User name={elem}/>
        // console.log(elem);
        
      })}
    </div>
  )
}
*/

//                                     Created a card Project with the help of props

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg",
    company: "Google",
    datePosted: "3 days ago",
    post: "Frontend React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoft.svg",
    company: "Microsoft",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$72/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazon.svg",
    company: "Amazon",
    datePosted: "5 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/meta.svg",
    company: "Meta",
    datePosted: "2 weeks ago",
    post: "React.js Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/apple.svg",
    company: "Apple",
    datePosted: "4 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$85/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/netflix.svg",
    company: "Netflix",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nvidia.svg",
    company: "NVIDIA",
    datePosted: "6 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$90/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobe.svg",
    company: "Adobe",
    datePosted: "3 weeks ago",
    post: "JavaScript Developer",
    tag1: "Hybrid",
    tag2: "Junior Level",
    pay: "$68/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/salesforce.svg",
    company: "Salesforce",
    datePosted: "12 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$78/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg",
    company: "OpenAI",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Internship",
    tag2: "Entry Level",
    pay: "$45/hr",
    location: "Remote"
  }
];

  return (
    <div className='parent'>
      {jobOpenings.map((elem, idx)=>{
        // console.log(idx)
        return <div key={idx}>
          <Card companyName = {elem.company} datePosted ={elem.datePosted

        } brandLogo = {elem.brandLogo} post = {elem.post} tag1 = {elem.tag1} tag2 = {elem.tag2} pay = {elem.pay} location = {elem.location} />
        </div>
      })}
    </div>
  )
}












export default App
