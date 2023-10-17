import { useState } from 'react'
import './App.css'

function App() {
  const [checked, setchecked] = useState([])
  const [leftData, setleftData] = useState([{ id: "Item1", value: "Item1" }, { id: "Item2", value: "Item2" }, { id: "Item3", value: "Item3" }, { id: "Item4", value: "Item4" }])
  // const [leftData, setleftData] = useState(["Item1", "Item2", "Item3", "Item4"])
  const [rightData, setrightData] = useState([])

  const handleChange = (e) => {
    if (e.target.checked === true) {
      setchecked([...checked, { id: e.target.id, value: e.target.value }])
    }

    else {
      setchecked(checked.filter((item) => {
        return item.id !== e.target.id
      }))
    }
  }


  const leftToRight = () => {
    setrightData([...rightData, ...checked])
    setleftData(leftData.filter((item)=>{
      return !checked.some((removeItem) => removeItem.id === item.id);
    }))
    setchecked([])
  }

  const RightToLeft = () => {
    setleftData([...leftData, ...checked])
    setrightData(rightData.filter((item) => {
      return !checked.some((removeItem) => removeItem.id === item.id);
    }))
    setchecked([])
  }

  // console.log(checked);


  return (
    <>
      <div className="container">
        <div className="left-box">
          <ul>
            {
              leftData.map((item) => {
                return (
                  <li key={item.id}>
                    <input type="checkbox" id={item.id} value={item.value}
                      onChange={handleChange}
                    />
                    {item.value}
                  </li>
                )
              })
            }
          </ul>
        </div>

        <button onClick={leftToRight}>Left to Right</button>
        <button onClick={RightToLeft}>Right to left</button>

        <div className="right-box">
          <ul>
            {
              rightData.map((item, index) => {
                return (
                  <li key={item.id}>
                    <input type="checkbox" id={item.id} value={item.value}
                      onChange={handleChange}
                    />
                    {item.id}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
