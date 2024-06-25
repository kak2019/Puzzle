"use client";
import React, {useState} from 'react';
import "./App.css";
import Link from "next/link";
import DragToReveal from '../components/DragToReveal';
import {textToMorseCode} from "@/components/Mos";


function App() {
    const [name, setName] = useState('');
    const [sentense, setsenense] = useState('');
    const [displayV, setdisplayV] = useState(true);
    const [displayNext, setdisplayNext] = useState(false);

   const refreshPage = (e:any) => {
        e.preventDefault(); // 阻止默认的链接行为
        window.location.reload();
    };
    const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setName(event.target.value);
    };
    const handleSubmit = () => {
        console.log(name);
        // setsenense(`"Hello",${name}`);
        setdisplayV(false)
        switch (name) {
            case "Arya":
            case "张艳":
            case "Zhang Arya":
            case "arya":
            case "大宝":
                setsenense(`Hello,${name},My Sweet`);
                setdisplayNext(true)
                break;
            case "Flynt":
            case 'flynt':
            case '高翔宇':
                setsenense(`I will kill ${name}`);
            default:
                setsenense("What's this?")
        }
    }

    return (
        <>
            {/*<p className={"breathing-text"}> Puzzle - Save me </p>*/}
            <br/>
            {displayV && <>
                <p>{textToMorseCode('Please enter your name')}</p>
                <input
                    type="text"
                    value={name}
                    onChange={handleInputChange}
                    // style={{display: displayV}}
                />
                <button onClick={handleSubmit}>Submit</button>
            </>}
            {!displayV &&
                <><p>{sentense}</p>
                    {displayNext && <Link href={"./sphinx"}>
                        <br/>
                        <button>Next Step</button>
                    </Link>}
                    {!displayNext && <p className={"fading-text"}><Link href={"#"} onClick={refreshPage}> Please think again.</Link></p>}
                </>
            }
            {/*<button onClick={() => alert("wee")}></button>*/}
            {/*    <div>*/}
            {/*        <h1>Drag to reveal content</h1>*/}
            {/*        <DragToReveal/>*/}
            {/*    </div>*/}
            {/*    <Link href="./sphinx">*/}
            {/*  sds*/}
            {/*</Link>*/}
        </>
    );
}

export default App;
