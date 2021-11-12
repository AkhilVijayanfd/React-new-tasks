
import "./App.css";
import Textarea from './components/Textarea';
import Button from './components/Button';
import Label from './components/label';
function App () {

  let emp = [{name:'Akhilvijayan',age:23, address: 'Krishna nivas, Palode' },
              {name:'Abhishek', age:16, address: 'Krishna kripa , Palode'},
              {name: 'Athira', age:25, address:'Krishna nivas , Palode'}]

  let tex = [{value:'Submit'}]            
  return (
    <div>
      <Textarea/>
    {
      emp.map((Obj)=>{
        return (
          <Label name={Obj.name} age={Obj.age} address={Obj.address}/>
        )
      })


    }
    {
      tex.map((obj) =>{
        return(
          <Button value={obj.value}/> 
        )
      })
      
    }
    </div>
  );
}

export default App;
