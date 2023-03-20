import React from 'react'
import "./Style.css"
import{RiGlobalLine}from"react-icons/ri"
import{IoMdContacts}from"react-icons/io"
import{FaRegFileAlt}from"react-icons/fa"
import{AiOutlineFileText}from"react-icons/ai"
import {AiOutlineMail} from"react-icons/ai"
import{MdOutlineVideoCall}from"react-icons/md"
import{Link}from"react-router-dom"
import {AiOutlinePlusCircle}from"react-icons/ai"
import{BsFileEarmarkText}from"react-icons/bs"
import{AiOutlineLock}from"react-icons/ai"
export default function File1() {
  return (
    <div>
        <div className='app2'>
        <div className='app1'>
        <img src="data:image/png;base64,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 "></img>
        </div>
                <h1>Google Drive Risk Report</h1>
               
                <h5>Risk Source :</h5>
                <button>High</button>
    </div>
   
    <hr></hr>
    
    <div className='app3'>
        <div className='app4'>
        <img src=" data:image/jpeg;base64,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"></img>

    </div>
    
    <div className='boxxe'>
      <h1>  <RiGlobalLine/> </h1>
      <h2>796</h2>
      <h5>Public files</h5>
      <p>files that are availeable to anyone<br></br>
      over the web via link sharing</p>
    </div>
    <div className='boxxe1'>
        <h1><IoMdContacts/></h1>
        <h4>34</h4>
        <h5>People with access</h5>
        <p>People who have access to file <br></br>
        in your google drive</p>
    </div>
  
    <div className='boxxe2'>
        <h1><FaRegFileAlt/></h1>
        <h4>29</h4>
        <h5>File Shared Externaly</h5>
        <p>Files that have shared directly<br></br>
        with other People</p>
    </div>
    </div>
    <hr></hr>
    <div className='span1'>
    <h1> 1.      &nbsp;796 files are  Publicly accessible for anyone with the link</h1> 
    </div>
    <div className='span3' >
    <table className='table'>
      <thead>
        <tr>
          <th>File name</th>
          <th>Access setting</th>
          <th>Shared with</th>
          <th>Created by</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> <AiOutlineFileText/>&nbsp;Customer journey</td>
          <td><RiGlobalLine/>&nbsp;Anyone with link</td>
          <td> <IoMdContacts/> 11</td>
          <td>MonkeyBox Technology&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
        </tr>
        <tr>
          <td><AiOutlineFileText/>&nbsp;SchoolWise Kids Reports</td>
          <td><RiGlobalLine/>&nbsp;Anyone with link</td>
          <td> <IoMdContacts/>&nbsp;&nbsp;4</td>
          <td>Vijay Gorfad&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <AiOutlineMail/></td>
        </tr>
        <tr>
          <td><MdOutlineVideoCall/>&nbsp;Img_7409.MOV</td>
          <td><RiGlobalLine/>&nbsp;Anyone with link</td>
          <td> <IoMdContacts/>&nbsp;&nbsp;2</td>
          <td>Soham Kapadia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
        </tr>
        <tr>
          <td><MdOutlineVideoCall/>&nbsp;Img_7401.MOV</td>
          <td><RiGlobalLine/>&nbsp;Anyone with link</td>
          <td> <IoMdContacts/>&nbsp;&nbsp;2</td>
          <td>Soham Kapadia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
        </tr>
        <tr>
          <td><MdOutlineVideoCall/>&nbsp;Img_7402.MOV</td>
          <td><RiGlobalLine/>&nbsp;Anyone with link</td>
          <td> <IoMdContacts/>&nbsp;&nbsp;2</td>
          <td>Soham Kapadia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
        </tr>
        <tr>
          <td><MdOutlineVideoCall/>&nbsp;Img_7405.MOV</td>
          <td><RiGlobalLine/>&nbsp;Anyone with link</td>
          <td> <IoMdContacts/>&nbsp;&nbsp;2</td>
          <td>Soham Kapadia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
        </tr>
        <tr>
          <td><MdOutlineVideoCall/>&nbsp;Img_7463.MOV</td>
          <td><RiGlobalLine/>&nbsp;Anyone with link</td>
          <td> <IoMdContacts/>&nbsp;&nbsp;2</td>
          <td>Soham Kapadia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
        </tr>
        <tr>
          <td><MdOutlineVideoCall/>&nbsp;Img_7687.MOV</td>
          <td><RiGlobalLine/>&nbsp;Anyone with link</td>
          <td> <IoMdContacts/>&nbsp;&nbsp;2</td>
          <td>Soham Kapadia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
        </tr>
        <tr>
          <td><MdOutlineVideoCall/>&nbsp;Img_7575.MOV</td>
          <td><RiGlobalLine/>&nbsp;Anyone with link</td>
          <td> <IoMdContacts/>&nbsp;&nbsp;2</td>
          <td>Soham Kapadia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
        </tr>
        <tr>
          <td><MdOutlineVideoCall/>&nbsp;Img_7406.MOV</td>
          <td><RiGlobalLine/>&nbsp;Anyone with link</td>
          <td> <IoMdContacts/>&nbsp;&nbsp;2</td>
          <td>Soham Kapadia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
        </tr>
      </tbody>
    </table>

    </div>
    <div className='bb'>
    <Link to="/view"><AiOutlinePlusCircle/>  Viewmore</Link>
    </div>
    <hr></hr>
    <div className='container'>
   <h2>  2.&nbsp;&nbsp;&nbsp;There are 34 People with access to your Google drive</h2>
    </div>
    <div className='container2'>
      <div className='ban1'>
     <h6>Neal Prajapti&nbsp;&nbsp;&nbsp;  nealpraja40120@gmail.com</h6>
    </div>
    <div className='ban'>
    <h6>Has access to <BsFileEarmarkText/> 258 File </h6>
    </div>
    </div>
    <div className='conta'>
    <table className='table'>
      <thead>
        <tr>
        <th>File name</th>
          <th>Access setting</th>
          <th>Shared with</th>
          <th>Created by</th>
        </tr>
        <tr>
        <td><MdOutlineVideoCall/>&nbsp;Img_7687.MOV</td>
          <td><RiGlobalLine/>&nbsp;Anyone with link</td>
        <td> <IoMdContacts/>&nbsp;&nbsp;2</td>
          <td>Soham Kapadia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
          
        </tr>
        <tr>
        <td><MdOutlineVideoCall/>&nbsp;Img_7575.MOV</td>
          <td><RiGlobalLine/>&nbsp;Anyone with link</td>
        <td> <IoMdContacts/>&nbsp;&nbsp;2</td>
          <td>Soham Kapadia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
          
        </tr>
        <tr>
        <td><MdOutlineVideoCall/>&nbsp;Img_7579.MOV</td>
          <td><RiGlobalLine/>&nbsp;Anyone with link</td>
        <td> <IoMdContacts/>&nbsp;&nbsp;2</td>
          <td>Soham Kapadia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
          
        </tr>
        <tr>
        <td><MdOutlineVideoCall/>&nbsp;Img_7580.MOV</td>
          <td><RiGlobalLine/>&nbsp;Anyone with link</td>
        <td> <IoMdContacts/>&nbsp;&nbsp;2</td>
          <td>Soham Kapadia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
          
        </tr>
        <tr>
        <td><MdOutlineVideoCall/>&nbsp;Img_7588.MOV</td>
          <td><RiGlobalLine/>&nbsp;Anyone with link</td>
        <td> <IoMdContacts/>&nbsp;&nbsp;2</td>
          <td>Soham Kapadia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
          
        </tr>
      </thead>
    </table>
    </div>
    <div className='conta2'>
      <Link to="view2">View more People</Link>
    </div>
    <hr></hr>
    <div className='p'>
      <h5>Manan Depala     manandepala@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Has access to 24 files</h5>

    </div>
    <div className='p2'>
      <h5>Sandip Kannambadi.&nbsp;&nbsp;&nbsp;Sandip@monkeybox.in.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Has access to 19 files</h5>

    </div>
    <div className='p3'>
      <h5>MonkeyBox&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Has access to 12 files </h5>
    </div>
    <div className='conta3'>
      <h2>3.&nbsp;&nbsp;&nbsp;29 files are shared externaly</h2>
    </div>
    <div className='conta4'>
      <table className='table'>
        <thead>
        <tr>
        <th>File name</th>
          <th>Access setting</th>
          <th>Shared with</th>
          <th>Created by</th>
        </tr>
        <tr>
          <td><AiOutlineFileText/>Screenshort from 2022-10-13 17-38-38.png</td>
          <td><AiOutlineLock/> External</td>
          <td> <IoMdContacts/>&nbsp;&nbsp;10</td>
          <td>Vijay Gorfad&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
        </tr>
        <tr>
          <td><AiOutlineFileText/>Mb_work_trackar</td>
          <td><AiOutlineLock/> External</td>
          <td> <IoMdContacts/>&nbsp;&nbsp;8</td>
          <td>Lift Curve&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
        </tr>
        <tr>
        <td><AiOutlineFileText/>Teach tram budget</td>
          <td><AiOutlineLock/> External</td>
          <td> <IoMdContacts/>&nbsp;&nbsp;7</td>
          <td>Pranjal Agraval&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
        </tr>
        <tr>
        <td><AiOutlineFileText/>WebEngege event</td>
          <td><AiOutlineLock/> External</td>
          <td> <IoMdContacts/>&nbsp;&nbsp;7</td>
          <td>Vijay Gorfad&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
         </tr>
         <tr>
        <td><AiOutlineFileText/>Notification</td>
          <td><AiOutlineLock/> External</td>
          <td> <IoMdContacts/>&nbsp;&nbsp;6</td>
          <td>MonkeyBox <br></br>Technology&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
         </tr>
         <tr>
        <td><AiOutlineFileText/>WebEngege event</td>
          <td><AiOutlineLock/> External</td>
          <td> <IoMdContacts/>&nbsp;&nbsp;10</td>
          <td>Vijay Gorfad&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
         </tr>
            <tr>
        <td><AiOutlineFileText/>Kids</td>
          <td><AiOutlineLock/> External</td>
          <td> <IoMdContacts/>&nbsp;&nbsp;10</td>
          <td>Sandip<br></br> Kannambadi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
         </tr>
            <tr>
        <td><AiOutlineFileText/>Mb Last Mile Delivary.Xlsx</td>
          <td><AiOutlineLock/> External</td>
          <td> <IoMdContacts/>&nbsp;&nbsp;10</td>
          <td>Krishan Iyer-R&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
         </tr>
            <tr>
        <td><AiOutlineFileText/>Gap Annalises</td>
          <td><AiOutlineLock/> External</td>
          <td> <IoMdContacts/>&nbsp;&nbsp;10</td>
          <td>MonkeyBox<br></br>Technology&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
         </tr>
            <tr>
        <td><AiOutlineFileText/>Qa Testing</td>
          <td><AiOutlineLock/> External</td>
          <td> <IoMdContacts/>&nbsp;&nbsp;10</td>
          <td>Hardik Makadiya&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
         </tr>
            <tr>
        <td><AiOutlineFileText/>Kids_Reports_31th_Dec_to_9_jan</td>
          <td><AiOutlineLock/> External</td>
          <td> <IoMdContacts/>&nbsp;&nbsp;10</td>
          <td>Vijay Gorfad&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineMail/></td>
         </tr>
        </thead>
      </table>
    </div>
    </div>
  )
}
