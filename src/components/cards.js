import Image from 'next/image'
import Card from './card'


export default ({service}) => {
    return (
      <>
  <div class="row justify-content-between">
    {service.map((x,id) => {
       return <Card data={x} id={id} />
    })}
  </div>
      </>
    )
  }