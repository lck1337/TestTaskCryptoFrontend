import Image from 'next/image'
import Card from './card'


export default ({service}) => {
    return (
      <>
    <div className='container'>
  <div class="row justify-content-center rowPaddingNull ">
    {service.map((x,id) => {
       return <Card data={x} id={id} />
    })}
  </div>
  </div>
      </>
    )
  }