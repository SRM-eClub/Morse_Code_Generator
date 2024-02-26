"use client";
import { Rubik_80s_Fade } from "next/font/google";
import Image from "next/image";
import { useState, useEffect} from "react";

const special_font = Rubik_80s_Fade({
  weight: "400",
  subsets: ["latin"]
})

export default function Home() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("default");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  }

  const convertToMorse = (e: React.MouseEvent<HTMLButtonElement>) => {
    fetch("http://127.0.0.1:8000/create-morse", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    }).then(res => res.json()).then(data => {
      console.log(data)
      setOutput(data.morse)
    })
  }

  const convertToText = (e: React.MouseEvent<HTMLButtonElement>) => {
    fetch("http://127.0.0.1:8000/create-text", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({text})
    }).then(res => res.json()).then(data => {
      console.log(data.text)
      setOutput(data.text);
    })
  }
  
  return (
    <main className="bg-slate-950 p-0 h-screen lg:p-8">
      <section className="h-full p-0 lg:p-8">
        <div className=" bg-slate-700 rounded-none shadow-2xl shadow-slate-800 w-full h-full grid grid-cols-1 lg:grid-cols-2 lg:rounded-2xl place-items-center gap-0 p-0 lg:p-16 lg:gap-4">
          <div className="h-full w-full bg-slate-900 rounded-none grid place-items-center lg:rounded-xl transition duration-500 hover:shadow-xl hover:shadow-slate-800">
            <h1 className={special_font.className + " text-6xl text-center lg:text-8xl hover:animate-pulse"}>Morse Code</h1>
          </div>
          <div className="grid place-items-center w-full h-full grid-cols-1 gap-0 lg:gap-4">
            <div className="h-full w-full bg-slate-900 shadow-lg shadow-slate-800 rounded-none grid place-items-center lg:rounded-xl p-16 lg:">
              <div className="place-items-end grid py-4 w-full h-full"><textarea onChange={handleChange} className="p-4 rounded-2xl h-32 w-full text-slate-200 bg-slate-800" /></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full h-full lg:gap-2">
                <button type="submit" onClick={convertToText} className="text-center bg-slate-800 w-full h-16 rounded-2xl shadow-xl shadow-slate-900">Morse Code to Text</button>
                <button type="submit" onClick={convertToMorse} className="text-center bg-slate-800 w-full h-16 rounded-2xl shadow-xl shadow-slate-900">Text to Morse Code</button>
              </div>
            </div>
            <div className="bg-slate-900 hover:shadow-xl hover:shadow-slate-800 w-full h-full rounded-none lg:rounded-xl transition duration-500">
              <div className="grid place-items-center w-full h-full">
                <p className="overflow-scroll text-wrap text-xl">{output}</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
