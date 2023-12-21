import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./style.scss";
import Modal from '../Modal/Modal';

const CarsContent = () => {
  const [data, setData] = useState();
  const [model, setModel] = useState();
  const [single, setSingle] = useState(); 


  const getSingleEl = (el) => {
    setSingle(el);
  }
  const filterByMark = (event) => {
    console.log("event", event)
    const getMark = [];
    event.forEach(element => {
      if (!getMark.includes(element.make_id)) {
        getMark.push(element.make_id);
      }
    });
    setModel(getMark);
    console.log("getMark", getMark)
  }
  useEffect(() => {
    axios.get("https://example-data.draftbit.com/cars").then((res) => {
      console.log("Res", res)
      setData(res.data);
      filterByMark(res.data)
    })
    .catch((err) => {
      console.log("err", err)
    })
  }, [])

  return (
    <div>
        <h2>Best cars!</h2>
        <div className="content">
          {model?.map((str) => (
            <button>{str}</button>
          ))}
        </div>
        <div className="content">
          {data?.map((el) => (
            <div key={el.id} className="card" onClick={() => getSingleEl(el)}>
              <img src={el.image_thumb} alt='' />
              <p>Mark: {el.make_id}</p>
              <p>Model: {el.model}</p>
            </div>
          ))}
        </div>
        {
          single && (
            <Modal
              color={single.color}
              description={single.description}
              image={single.image}
              make_id={single.make_id}
              model={single.model}
              price={single.price}
              state={single.state}
              year={single.year}
              closeModal={() => setSingle()}
            />
          )
        }
        
    </div>
  )
}

export default CarsContent;
