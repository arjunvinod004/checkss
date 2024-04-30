import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { SlideshowLightbox } from "lightbox.js-react";
import 'lightbox.js-react/dist/index.css'
import axios from 'axios';
import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { CardImg } from 'react-bootstrap';
  function App() {
    let [isOpen, setIsOpen] = useState(false);
    const[data,setData]=useState([]);

    // const [typecheck,setTypeCheck]=useState([])
    const apiurl= 'https://coinoneglobal.in/teresa/'
    const images=[];

    for (let i = 0; i < data.length; i++) {
      if(data[i].FilePath!=''){
        images.push({ src: apiurl + data[i].FilePath });
      }
    }

    useEffect(()=>{
    axios.get(`http://localhost:8004/getdata`)
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
    const Submit=()=>{
      console.log(checkboxes)
    // alert('hi✌️')
    // if(checkboxes.length==0){
    // alert('please select atleast one checkbox')
    // }
    // else{
    // alert('selected sucessfully')
    // }
    }

  return (

   

    <div>

    <Container>
    <Row>
      {data.map((items,index)=>(
        
        <div className="col-md-3 image mb-4 mt-4" style={{textAlign:'center'}}>
    <input type="checkbox" className='selectItem' name={items.Id} checked={checkboxes.index} onChange={()=>handleCheckboxChange(items.Id)} />
    {/* <Col xs={6} md={4}> */}
          < Card.Img variant='top' style={{width:'100%',height:''}} src={apiurl+items.FilePath} 
          onClick={() => {
                  setIsOpen(true);
                
                }}/>
        {/* </Col> */}

      {/* <img variant="top" src={apiurl+items.FilePath}  style={{width:'270px',margin:'4px',borderRadius:'15px',textAlign:'center'}}   /> */}
    
    
     
     
    </div>
     ))}
     </Row>
     <Row>
     <div style={{justifyContent:'right',
    display: 'flex',
    position: 'relative',
  
}}>


   { selectedCheckboxCount>0 && <Button style={{position:'fixed',bottom:'18px',right:'55px', padding:'10px'}}  variant="success" onClick={Submit} >Submit <span style={{background:'white',borderRadius:'10%',padding:'5px 10px 5px 10px',color:'black',fontSize:'15px',fontWeight:'bold'}}>{selectedCheckboxCount}</span> </Button>
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
           
          ></SlideshowLightbox>
    </Row>
    </Container>

    </div>
  );
}

export default App;
