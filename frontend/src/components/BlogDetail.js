import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Blogdetail=(props) => {
    const [blogging,setBlog] =useState({});

    useEffect(()=>{
        const slug=props.match.params.id;

        const fetchData=async() => {
            try{
                const res=await axios.get(`${process.env.REACT_APP_API_URL}/api/blogging/${slug}`)
                setBlog(res.data);
;            }
            catch(err){

            };
        };
        fetchData();
    },   [props.match.params.id])
    const createBlog = ()=> {
        return {__html: blogging.content}
    };
    const capitalizerFirstLetter =(word)=> {
        if(word)
            return word.charAt(0).toUpperCase()+word.slice(1);
        return '';
    };
    return(
        <div className='container mt-3'>
            <h1 className='display-2'>{blogging.title}</h1>
            <h2 className='text-muted mt-3'>Category:{capitalizerFirstLetter(blogging.category)}</h2>
            <h4>{blogging.month} {blogging.day}</h4>
            <div className='mt-5 mb-5' dangerouslySetInnerHTML={createBlog()}/>
            <hr />
            <p className='lead mb-5'><Link to='/blog' className='font-weight-bold'>Back to blog</Link></p>
        </div>
    );
};

export default Blogdetail;