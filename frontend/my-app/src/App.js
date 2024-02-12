import React,{useState,useEffect} from 'react'

function App(){

  const [getData,setGetData] = useState([]);
  const [postData,setPostData] = useState([]);

  useEffect(()=>{
    fetch("/data").then(
      res => res.json()
    ).then(
      getData => {
        console.log(getData);
        setGetData(getData)
      }
    )
  },[])

  useEffect(() => {

    fetch("/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "Foo", 
        body: "Bar"
      })
    })
    .then(res => res.json())
    .then(postData => {
      setPostData(postData);
    })

  }, []);

  return(
    <div  className="App">
      <p>{getData.msg}</p>
    </div>
  )
}

export default App