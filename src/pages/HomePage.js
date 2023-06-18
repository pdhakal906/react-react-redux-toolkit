import React, { useState } from 'react'

import { useFormik } from 'formik';

import every from '../dummy/sample'
import { useSelector } from 'react-redux';


const HomePage = () => {

  // console.log(every.some.name);
  console.log(every.hello);


  const dat = useSelector((store) => store);




  // console.log(dat.todos[0].userId);
  console.log(dat.todos);
  // initilize empty array
  const [data, setData] = useState([]);
  const oldData = [22, 55, 77];

  // console.log([...oldData, 90]);



  const formik = useFormik({
    initialValues: {

      todo: '',
      lio: ''

    },
    onSubmit: (val, { resetForm }) => {
      // console.log(val);
      setData([...data, val.todo]);

      resetForm();
    }
  });

  console.log(data);


  return (
    <div>

      <div className='p-5'>
        <h1 className='text-2xl '>Sample Todo App</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className='space-y-2'>
            <label htmlFor="todo">Add Todo Activities</label>
            <br />
            <input onChange={formik.handleChange} value={formik.values.todo} name='todo' id="todo" type="text" className='border border-black outline-none px-2 py-1' />
          </div>

          {data.map((d, i) => {
            return <h1 key={i}>{d}</h1>
          })}

        </form>
      </div>

      <div className='border-2 border-black ml-5'>
        <h1 className='text-5xl font-bold text-center mt-5'>Posts</h1>
        {
          dat.todos.map((d, i) => {
            return (
              <div key={i} className='p-5'>
                <h1>User id: {d.userId}</h1>
                <h1>Post id: {d.id}</h1>
                <div>
                  <h1 className='font-bold'>Title: {d.title}</h1>
                  <p >{d.body}</p>
                </div>

              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default HomePage

