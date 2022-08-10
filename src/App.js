import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './card';
 


function App() {
    const data=[
      {
        subscription:'free',
        price:0,
        currency:"$",
        month:1,
        features:[
          {title:" single Users",
          isEnable:true},
         { title:"5GB Storage",
          isEnable:true},
         { title:"Unlimited Public Projects",
          isEnable:true},
          {title:" unlimited Users",
          isEnable:true},
          {title:"Community Access",
          isEnable:true}, 
          {title:"Unlimited Private Projects",
          isEnable:false},
          {title:" Dedicated Phone Support",
          isEnable:false},
          {title:"unlimited Free Subdomain",
          isEnable:false},
          {title: "Monthly Status Reports",
          isEnable:false}  
        ]
      },
      
        {
          subscription:'paid',
          price:10,
          currency:"$",
          month:1,
          features:[
            {title:"5 users",
            isEnable:true},
           { title:"50GB Storage",
            isEnable:true},
           { title:"Unlimited Public Projects",
            isEnable:true},
            {title:" unlimited Users",
            isEnable:true},
            {title:"Community Access",
            isEnable:true}, 
            {title:"Unlimited Private Projects",
            isEnable:true},
            {title:" Dedicated Phone Support",
            isEnable:true},
            {title:"unlimited Free Subdomain",
            isEnable:true},
            {title: "Monthly Status Reports",
            isEnable:false}  
          ]
        }
      ,
      {
        subscription:'paid',
        price:49,
        currency:"$",
        month:1,
        features:[
         {title:" unlimited Users",
          isEnable:true},
         { title:"150GB Storage",
          isEnable:true},
         { title:"Unlimited Public Projects",
          isEnable:true},
          {title:" unlimited Users",
          isEnable:true},
          {title:"Community Access",
          isEnable:true}, 
          {title:"Unlimited Private Projects",
          isEnable:true},
          {title:" Dedicated Phone Support",
          isEnable:true},
          {title:"unlimited Free Subdomain",
          isEnable:true},
          {title: "Monthly Status Reports",
          isEnable:true}  
        ]      
         
                   
      }
    
    ]
  return (
    <section className="pricing py-5">
  <div className='container'>
   <div className='row'>
   
   { data.map((data)=>{
      return <Card props={data}></Card>
    })}

   </div>
  </div>
  </section>
  );
}


export default App;
