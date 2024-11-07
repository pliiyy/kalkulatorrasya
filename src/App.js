
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [inputLeft, setInputLeft] = useState("");
  const [inputRight, setInputRight] = useState("");
  const [input, setInput] = useState("");
  const [operasi, setOperasi] = useState("");
  const [currInputValue, setCurrInputValue] = useState("left");

  const handleClear = () => {
    setOperasi("");
    setInputLeft("");
    setInputRight("");
    setCurrInputValue("left");
    setInput("");
  };

  const factorial = (n) => {
    return n <= 1 ? 1 : n * factorial(n - 1);
  }; 

  const handleChangeOperation = (operation) => {
    setOperasi(operation);
    setCurrInputValue("right");
    setInput("")
  };

  const handleCalculate = () => {
    if (inputLeft === undefined || inputRight === undefined) return;
    let value = 0;
    switch (operasi) {
      case "+":
        value = Number(inputLeft) + Number(inputRight);
        break;
      case "-":
        value = Number(inputLeft) - Number(inputRight);
        break;
      case "/":
        value = Number(inputLeft) / Number(inputRight);
        break;
      case "x":
        value = Number(inputLeft) * Number(inputRight);
        break;
      case "^":
        value = Math.pow(Number(inputLeft), Number(inputRight));
        break;
      case "%":
        value = Number(inputLeft) % Number(inputRight);
        break;
      default:
        break;
    }
    setInput(isFloat(value) ? value.toFixed(2) : value);
    setCurrInputValue("left");
    setInputRight("");
    setOperasi("Operasi");
  };
  
  function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
  }
 
  useEffect(() => {
    if (input) {
      if (currInputValue === "left") {
        setInputLeft(input);
      } else {
        setInputRight(input);
      }
    }
  }, [input, currInputValue]);

  return (
    <div id="kalkulator">
        <div id="judul">Kalkulator By Rasyaa Nabilah</div>
        <div class="wrapper" id="operasi-temporer">
            <div class="tombol tombol-nonaktif bg-abu" id="input1">{inputLeft}</div>
            <div class="tombol tombol-nonaktif bg-abu" id="operasi-selected">{operasi}</div>
            <div class="tombol tombol-nonaktif bg-abu" id="input2">{inputRight}</div>
            <div class="tombol tombol-nonaktif bg-abu" id="hasil-temporer">=</div>
         
        </div>
        <div class="wrapper">
            <div id="hasil" class="tombol tombol-nonaktif bg-abu">{input || 0}</div>
        </div>
        <div id="blok-tombol">
            <div class="wrapper">
                <div class="tombol tombol-aktif tombol-clear bg-red" onClick={() => handleClear()}>C</div>
                <div class="tombol tombol-aktif toggle-negatif bg-dark-brown" onClick={() => setInput((prev) => Number(prev) * -1)}>+-</div>
                <div class="tombol tombol-aktif tombol-faktorial bg-brown" onClick={() => setInput((prev) => factorial(Number(prev)))}>!</div>
                <div class="tombol tombol-aktif tombol-operasi bg-brown" onClick={() => handleChangeOperation("^")}>^</div>
            </div>
            <div class="wrapper">
                <div class="tombol tombol-aktif tombol-angka bg-dark-blue" onClick={() => setInput((prev) => prev + "7")}>7</div>
                <div class="tombol tombol-aktif tombol-angka bg-dark-blue" onClick={() => setInput((prev) => prev + "8")}>8</div>
                <div class="tombol tombol-aktif tombol-angka bg-dark-blue" onClick={() => setInput((prev) => prev + "9")}>9</div>
                <div class="tombol tombol-aktif tombol-operasi bg-brown" onClick={() => setInput((prev) => Number(prev) /100)} >%</div>
            </div>
            <div class="wrapper">
                <div class="tombol tombol-aktif tombol-angka bg-dark-blue" onClick={() => setInput((prev) => prev + "4")}>4</div>
                <div class="tombol tombol-aktif tombol-angka bg-dark-blue" onClick={() => setInput((prev) => prev + "5")}>5</div>
                <div class="tombol tombol-aktif tombol-angka bg-dark-blue" onClick={() => setInput((prev) => prev + "6")}>6</div>
                <div class="tombol tombol-aktif tombol-operasi bg-purple" onClick={() => handleChangeOperation("/")}>/</div>
            </div>
            <div class="wrapper">
                <div class="tombol tombol-aktif tombol-angka bg-dark-blue" onClick={() => setInput((prev) => prev + "1")}>1</div>
                <div class="tombol tombol-aktif tombol-angka bg-dark-blue" onClick={() => setInput((prev) => prev + "2")}>2</div>
                <div class="tombol tombol-aktif tombol-angka bg-dark-blue" onClick={() => setInput((prev) => prev + "3")}>3</div>
                <div class="tombol tombol-aktif tombol-operasi bg-purple" onClick={() => handleChangeOperation("x")}>x</div>
            </div>
            <div class="wrapper">
                <div class="tombol tombol-aktif tombol-angka bg-dark-blue" onClick={() => setInput((prev) => prev + "0")}>0</div>
                <div class="tombol tombol-aktif bg-dark-brown decimal" onClick={() => setInput((prev) => prev + ".")}>.</div>
                <div class="tombol tombol-aktif tombol-operasi bg-purple" onClick={() => handleChangeOperation("+")}>+</div>
                <div class="tombol tombol-aktif tombol-operasi bg-purple" onClick={() => handleChangeOperation("-")}>-</div>
            </div>
            <div class="wrapper">
                <div id="btn-hitung" class="tombol tombol-aktif bg-green" onClick={() => handleCalculate()}>=</div>
            </div>
        </div>
    </div>
  );
}

export default App;
