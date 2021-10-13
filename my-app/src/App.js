import logo from './logo.svg'
import './App.css'
import {useState, useEffect} from 'react'

function App() {

  let [data ,setData] = useState({})
  let [totalRows, setTotalRows] = useState(0)


  useEffect(() => {
    (async()=>{
      // 導入之前node address-book資料
      let r = await fetch('http://localhost:3001/address-book/api/list')
      let j = await r.json()

      // 呈現總筆數
      if(j.totalRows){
        setTotalRows(j.totalRows)
        setData(j)
      }
    })()


  }, [])






  return (
<>
{/* 將資料總筆數呈現在畫面上 */}
<h1>hello{totalRows}</h1>
</>
  );
}

export default App;
