import './Bcard2.css';

const Card =({item}) =>{
    console.log('item', item);
    return(
    <div className='child-div3' style={{ 'borderLeft': `10px solid ${item.Color}`}}>
    {item.Name}<br/>
    {item.Time}<br/>
    at {item.Location}
     </div>
    );
}

export default Card