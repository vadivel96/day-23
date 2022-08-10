import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck,faTimes} from '@fortawesome/free-solid-svg-icons'

function Card({props}){
  console.log(props.features[0].title)
    return  <div className="col-lg-4">
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">{props.subscription}</h5>
        <h6 className="card-price text-center">${props.price}<span className="period">/month</span></h6>
        
        <ul className="fa-ul">
          
          {props.features.map((data)=>{
            return( <li className={data.isEnable?"":"text-muted"}>
              
              <span className="fa-li"><i className= "fas fa-check"></i>
               {data.isEnable?<FontAwesomeIcon icon={faCheck}/>:<FontAwesomeIcon icon={faTimes}/>}
            </span>
            {data.title}
            </li>)
          })}
         
        </ul>
        <div className="d-grid">
          <a href="#" className="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
    </div>
  </div>
}
export default Card;