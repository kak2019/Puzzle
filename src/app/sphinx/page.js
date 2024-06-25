'use client';
import Head from 'next/head';
import "../App.css";
import TypingEffect from '../utils/TypingEffect';
import Link from "next/link";
import React, {useState} from "react";
const Page = () => {
        const [name, setName] = useState('');
    const [displayV, setdisplayV] = useState(true);
    const [displayNext, setdisplayNext] = useState(false);
     const handleInputChange = (event) => {
        setName(event.target.value);
    };

   const refreshPage = (e) => {
        e.preventDefault(); // 阻止默认的链接行为
        window.location.reload();
    };
    const [sentense, setsenense] = useState('');
    const handleSubmit = () => {
        console.log(name);
        // setsenense(`"Hello",${name}`);
        setdisplayV(false)
        switch (name.toLowerCase()) {
            case "people":
            case "person":
            case "人":
                setsenense(`You're right.,My Sweet`);
                setdisplayNext(true)
                break;
            default:
                setsenense("What's this?")
        }
    }

  return (
      <div>
          <Head>
              <title>The Myth of the Page</title>
              <style>{`
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background: white;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          h1 {
            text-align: center;
            color: #555;
          }
          p {
            line-height: 1.6;
          }
          .sphinx-image {
            text-align: center;
          }
          .sphinx-image img {
            max-width: 100%;
            height: auto;
            border-radius: 10px;
            margin: 20px 0;
          }
          .footer {
            text-align: center;
            padding: 10px;
            margin-top: 20px;
            border-top: 1px solid #ddd;
            color: #777;
          }
        `}</style>
          </Head>
           {displayV && <><div className="container">
              <h1>The Myth of the Page</h1>
              <div className="sphinx-image">
                  <img src="/sfenkesi.png" alt="Sphinx" style={{width: '300px', height: 'auto'}}/>
              </div>
              <p>
                  In Greek mythology, the Page was a creature with the head of a woman, the body of a lion, and the
                  wings of an eagle. It was said to guard the entrance to the city of Thebes, posing a riddle to
                  travelers to allow them passage.
              </p>
              <p>
                  The riddle of the Page is one of the most famous in mythology: "What walks on four feet in the
                  morning, two in the afternoon, and three at night?" Those who could not answer correctly were devoured
                  by the Page. The riddle was eventually solved by Oedipus, who answered "Man," explaining that a person
                  crawls on all fours as a baby, walks on two feet as an adult, and uses a cane in old age.
              </p>
              <p>
                  The Page, defeated by Oedipus' answer, either threw herself off her rock and died or, according to
                  some versions, devoured herself. This act freed the city of Thebes from her terror, and Oedipus went
                  on to become the king of Thebes.
              </p>
          </div>
          <div className="footer">
              <TypingEffect/>
          </div>
          "What walks on four legs in the morning, on two at noon, and on three at night?"
               <br/>
          <input
              type="text"
              value={name}
              onChange={handleInputChange}
              // style={{display: displayV}}
          />
               <br/>
          <button onClick={handleSubmit}>Submit</button>
               </>
           }
          {!displayV &&
              <>{sentense}
          {displayNext && <Link href={"./sphinx"}>
                        <button>Next Step</button>
                    </Link>}
                    {!displayNext && <p className={"fading-text"}><Link href={"#"} onClick={refreshPage}> Please think again.</Link></p>}

              </>}

      </div>
  );
};

export default Page;
