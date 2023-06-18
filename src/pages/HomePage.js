import React, { useState } from 'react'

import { useFormik } from 'formik';

import some from '../dummy/sample'
import { useSelector } from 'react-redux';


const HomePage = () => {

  const dat = useSelector((store) => store);
  console.log(dat);
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
  console.log(some);

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

    </div>
  )
}

export default HomePage

