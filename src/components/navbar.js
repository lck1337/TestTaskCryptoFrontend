import Image from 'next/image'

export default () => {
    return (
      <>
        <navbar className="justify-content-between btn-toolbar px-4">
          <Image width={78} height={70} src={"/logo.png"} />
          <div className='d-flex'>
            <div class="col align-self-center">
                <div class="block ">
                    <div class="inner-container p-3">
                    <button className='btn btn-1 mr-3'>Deposit</button>
                    </div>
                </div> 
            </div>
            <div class="col align-self-center">
                <div class="block ">
                    <div class="inner-container p-3">
                    <button className='btn btn-2'>Connect Wallet</button>
                    </div>
                </div>
            </div>
            <div class="col align-self-center rounded bg-white">
                <div class="block ">
                    <div class="inner-container p-3">
                    </div>
                </div>
            </div>
          </div>
        </navbar>
      </>
    )
  }