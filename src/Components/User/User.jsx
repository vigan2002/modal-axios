import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './user.scss'
import Modal from './Modal/Modal'
import LeftIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import RightIcon from '@mui/icons-material/ChevronRightOutlined';


const User = () => {

    const [data, setData] = useState();
    const [single, setSingle] = useState();

    const getSingleEl = (el) => {
        setSingle(el);
    }


    useEffect(() => {
        axios.get("https://example-data.draftbit.com/users?_limit=10")
            .then((res) => {
                console.log("res", res);
                setData(res.data)
            }).catch((error) => {
                console.log("error", error);
            })
    }, [])

    return (
        <div className='user'>
            <h2>Users!</h2>
            <div className="user-wrapper">
                <div className="btn-slide">
                    <LeftIcon />
                </div>
                <div className="user-card">
                    {
                        data?.map((el) => (
                            <div key={el.id} className="card" onClick={() => getSingleEl(el)}>
                                <img src={el.avatar} alt="" />
                                <p>Name: <span>{el.fullName}</span></p>
                            </div>
                        ))
                    }
                </div>
                <div className="btn-slide">
                    <RightIcon />
                </div>
            </div>
            {
                single && (
                    <Modal
                        avatar={single.avatar}
                        fullName={single.fullName}
                        firstName={single.firstName}
                        lastName={single.lastName}
                        username={single.username}
                        email={single.email}
                        phone={single.phone}
                        twitterHandle={single.twitterHandle}
                        bio={single.bio}
                        closeModal={() => setSingle()}
                    />
                )
            }
        </div>
    )
}

export default User