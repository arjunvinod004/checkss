import React, { useState } from 'react';
import './App.css';
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'
import { useEffect } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function BasicExample(Id) {
  let [isOpen, setIsOpen] = useState(false);
  const[data,setData]=useState([]);
  const[response,setResponse]=useState([]);
  const[currentimage,setCurrentimage]=useState('');
  const [imageindex,setImageindex]=useState('')

  // const [typecheck,setTypeCheck]=useState([])
  const apiurl= 'https://coinoneglobal.in/teresa/'
  const images=[];
  const navigate=useNavigate()
  images.push({ src: currentimage }
   
    );

  
    // })

 
// { src: apiurl + data[i].FilePath }
  for (let i = 0; i < data.length; i++) {
    if(currentimage!= apiurl+data[i].FilePath){
      images.push({ src: apiurl + data[i].FilePath });
    }
  //  setData(previmage=>[...previmage,imageurl1])
     
    
  }

  useEffect(()=>{
  axios.get(`http://localhost:8000/getdata`)
  .then(res=>{
  //  console.log(res.data);
  setData(res.data)
  const newdata=res.data
  // console.log(newdata);

  },[])


})

const [checkboxes, setCheckboxes] = useState([]);
const handleCheckboxChange = (checkboxName) => {

  setCheckboxes((prevCheckboxes) => ({

    ...prevCheckboxes,
    [checkboxName]: !prevCheckboxes[checkboxName],

  }));
};

const selectedCheckboxCount = Object.values(checkboxes).filter(Boolean).length;
// useEffect(()=>{
    
    
    



  const Submit=()=>{
    axios.get(`http://localhost:8000/getresponse`)

    .then(res=>{
      const newResponse=res.data
      // setResponse(res.data)
    
      console.log(res.data.Message);

      if(res.data.ErrorCode==0){
        // Swal.fire({
        //   title: "Data sucess",
        //    text: "wow Awesome🙂",
        //   icon: "success"
        // });
       navigate('/page')
        // console.log(newResponse);
        console.log(res.data.ErrorCode);
      // history('/page')
      }else{
        Swal.fire({
          title: "failed",
           text:`${res.data.Message}`,
          icon: "error"
        });
      }

      // if(response.length>0){
      // console.log(response.length);
      // }
    
    })

    console.log( 'Id',checkboxes)
    
   

 
  // alert('hi✌️')
  // if(checkboxes.length==0){
  // alert('please select atleast one checkbox')
  // }
  // else{
  // alert('selected sucessfully')
  // }


  }
// })
  

return (

 

  <div>

  <Container>
  <Row>
    {data.map((items,index)=>(
      
      
      <div className="col-md-3 mb-4 mt-4" style={{textAlign:'center',}} >
       
        {/* <span class="">Bottom Left</span> */}
        <div className="image">
       
  <input type="checkbox" className='selectItem' style={{height:'30px',width:'25px', borderRadius:'100%'}} name={items.Id} checked={checkboxes.index} onChange={()=>handleCheckboxChange(items.Id)} />
 
  {/* <Col xs={6} md={4}> */}
        < img variant='top'  src={apiurl+items.FilePath} 
        onClick={() => {
          setCurrentimage(apiurl+items.FilePath);
          setImageindex(currentimage);
          setIsOpen(true);

        }
        }/>

<div class="overlay"></div>
       <div class="text-overlay">
         <p>{items.Code}</p>
         <p>{items.Rate}</p>
         {/* <p>{items.Rate}</p> */}
       </div>


        
      {/* </Col> */}

    {/* <img variant="top" src={apiurl+items.FilePath}  style={{width:'270px',margin:'4px',borderRadius:'15px',textAlign:'center'}}   /> */}
   
   
    </div>
   
  </div>
   ))}
   </Row>
   <Row>
   <div style={{justifyContent:'right',
  display: 'flex',
  position: 'relative',

}}>


 { selectedCheckboxCount>0 && 
//  <Link to={`/page/${checkboxes}`}>
 <Button style={{position:'fixed',bottom:'18px',right:'55px', padding:'10px'}}  variant="success" onClick={Submit} >Submit <span style={{background:'white',borderRadius:'10%',padding:'5px 10px 5px 10px',color:'black',fontSize:'15px',fontWeight:'bold'}}>{selectedCheckboxCount}</span> </Button>
//  </Link>
 }
   </div>
  
   {/* images={images} */}
 
<SlideshowLightbox
          theme="dark"
          images={images}
          open={isOpen}
          onClose={() => {
                   setIsOpen(false);
                 }}
          showThumbnails={true}
         
          lightboxIdentifier="lbox1"
         
        >
         
        </SlideshowLightbox>
        
  </Row>
  </Container>

  </div>
);
// Assuming 'data' is an array of objects containing image information




};

export default BasicExample;
