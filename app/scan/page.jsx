//scan.js
"use client";

import React, { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";




function Scan() {
  const [data, setData] = useState("No result");
  const [scanned, setScanned] = useState(false);
  
  const add = () => {
    console.log(data);

  };
  return (
    <div className='container video-qr'>
      <div className='container video-qr'>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
              setScanned(true);
            }

            if (!!error) {
              console.info(error);
            }

          }
          }
          constraints={{ facingMode: "environment" }}
          style={{ width: "40%", height: "40%" }}
        />
        <p>{data}</p>
        {
          scanned ?
            (
             <button type='button' onClick={add} className='black_btn'>
              Enter
            </button>
            )
                : 
            (
              <div>
                <h1 className="head_text text-center">
                  Scan Your QR Code
                </h1>
              </div>
            )
        }
      </div>
    </div>
  );
}




// function Scan() {


//   const [data, setData] = useState("No result");

//   return (
//     <div >
//       <div >
//         <QrReader
//           onResult={(result, error) => {
//             if (!!result) {
//               setData(result?.text);
//             }

//             if (!!error) {
//               console.info(error);
//             }

//           } 
//         }
//         constraints	={{ facingMode:  "environment"  }}
//           style={{ width: "40%", height: "40%" }}
//         />
//         <p>{data}</p>
//       </div>
//     </div>
//   );
// }



export default Scan;
