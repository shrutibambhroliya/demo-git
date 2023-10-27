import React, { useState } from 'react';
import { Button, Modal, Card } from 'antd';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import './App.css';

const App = () => {
    const [inputType, setInputType] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [leftlist, setLeftlist] = useState([]);
    const [rightlist, setRightlist] = useState([]);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const AddValue = () => {
        const objct = {
            name: inputType,
            chkbox: false,
        };
        setLeftlist([...leftlist, objct]);
    };

    const leftHandleChange = (e, id) => {
        if (e.target.checked) {
            const leftListFilter = leftlist.filter((ele, index) => index === id);
            leftListFilter[0].chkbox = true;
            leftlist[id] = leftListFilter[0];
            setLeftlist(leftlist);
        }
    }

    console.log(leftlist)
    const goToRight = () => {
        setRightlist(leftlist.filter((ele) => ele.chkbox === true));
        setLeftlist(leftlist.filter((ele) => ele.chkbox === false));
    };


    console.log(rightlist)
    const goToLeft = () => {
        // setLeftlist([...leftlist, ...rightlist.filter((ele) => ele.chkbox === false)]);
        // setRightlist(rightlist.filter((ele) => ele.chkbox === true));
    };

    return (
        <div>
            <center>
                <Button type="primary" onClick={ showModal }>
                    Add
                </Button>
            </center>

            <br />
            <Modal
                title="Basic Modal"
                open={ isModalOpen }
                onCancel={ handleCancel }
                footer={ [
                    <Button key="submit" type="primary" onClick={ AddValue }>
                        Add
                    </Button>,
                    <Button key="back" onClick={ handleCancel }>
                        Cancel
                    </Button>,
                ] }
            >
                <input type="text" value={ inputType } onChange={ (e) => setInputType(e.target.value) } />
            </Modal>

            <div className="part-1">
                <div>
                    <Card title="Card title" bordered={ false } style={ { width: 300 } }>
                        { leftlist.map((ele, index) => (
                            <div key={ index }>
                                <label htmlFor="">
                                    <input type="checkbox" onChange={ (e) => leftHandleChange(e, index, true) } />
                                    { ele.name }
                                </label>
                            </div>
                        )) }
                    </Card>
                </div>

                <div>
                    <div>
                        <DoubleRightOutlined onClick={ goToRight } />
                    </div>
                    <div>
                        <DoubleLeftOutlined onClick={ goToLeft } />
                    </div>
                </div>
                <div>
                    <Card title="Card title" bordered={ false } style={ { width: 300 } }>
                        { rightlist.map((ele, index) => (
                            <div key={ index }>
                                <label htmlFor="">
                                    <input type="checkbox" checked onChange={ (e) => leftHandleChange(e, index, false) } />
                                    { ele.name }
                                </label>
                            </div>
                        )) }
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default App;

