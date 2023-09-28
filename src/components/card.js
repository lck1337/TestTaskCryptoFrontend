import Image from 'next/image';


export default ({data, id}) => {
    console.log(data);
    return (
<div class="col-xl-3 col-xxl-4 pt-3">
    <div class="card">
    <div id={`Projects${id}`} class="card-body ">
        <div className="d-flex">
                    <Image
                    src={data.serviceLogo}
                    width={22}
                    height={22}
                    className='my-auto'
                    />
                    <h5 class="card-title my-auto" style={{"margin-left": "10px"}}>{data.Title}</h5>
        </div>
        <p class="card-text" style={{paddingTop:"15px"}}>{data.Description}</p>
        <div className='newsButton'  style={{paddingTop:"53px"}}>Read more</div>
        <div className='tariffTDNull'></div>
        <div className='rounded border border-2 container'>
        <div className='tariffTDNull'></div>
        <div class="card-text">On artificial AI:</div>
        <div className='tariffTDNull'></div>
  <table class="table table-borderless table-sm">
  <thead>
    <tr>
      <th>expected airdrop</th>
      <th>probability</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>$500 - $5 000</td>
      <td>65 %</td>
    </tr>
  </tbody>
</table>
        </div>
        <div>
        <div className='tariffTDNull'></div>
        <table class="table table-borderless table-sm">
  <thead>
    <tr className='TitleTable'>
      <th style={{"width": "160px"}}>Tariff</th>
      <th>Cost, $</th>
    </tr>
  </thead>
  <tbody>
  <tr className='tariffTDNull'></tr>
    <tr className='tariffTD rounded'>
      <td className='text-center'>5 accounts</td>
      <td>150</td>
      <td className='newsButton'>Detail</td>
    </tr>
    <tr className='tariffTDNull'></tr>
    <tr className='tariffTD rounded'>
      <td className='text-center'>10 accounts</td>
      <td>300</td>
      <td className='newsButton'>Detail</td>
    </tr>
    <tr className='tariffTDNull'></tr>
    <tr className='tariffTD rounded'>
      <td className='text-center'>15 accounts</td>
      <td>450</td>
      <td className='newsButton'>Detail</td>
    </tr>
    <tr className='tariffTDNull'></tr>
    <tr className='tariffTD rounded'>
      <td className='text-center'>20 accounts</td>
      <td>600</td>
      <td className='newsButton'>Detail</td>
    </tr>
    <tr className='tariffTDNull'></tr>
    <tr className='tariffTD rounded'>
      <td className='text-center'>25 accounts</td>
      <td>750</td>
      <td className='newsButton'>Detail</td>
    </tr>
    <tr className='tariffTDNull'></tr>
    <tr className='tariffTD rounded'>
      <td className='text-center'>30 accounts</td>
      <td>900</td>
      <td className='newsButton'>Detail</td>
    </tr>
  </tbody>
</table>
<div className='tariffTDNull'></div>
<button class="btn btn-3">Buy</button>
        </div>
    </div>
    </div>
</div>
    )
  }