import Image from 'next/image'
import ModalNews from './modalNews';
import { useState, useEffect } from "react";

export default () => {

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [isNewsShow, setisNewsShow] = useState(true);

  const show_hide = () => {
    setisNewsShow(!isNewsShow);
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1400);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if(!isNewsShow) return (
    <>
    {isSmallScreen ? (
      <news className="px-4 mt-4">
      <div className="rounded bg-white">
        <div className="" >
          <div className='p-2 h-100 justify-content-between btn-toolbar'>
            <div>
          <div className='d-flex align-items-center'>
          <div className='d-flex '>
          <div>
                  <div onClick={show_hide} className='arrow-down d-flex align-items-center'>
                    <Image
                    src='/arrow.png'
                    width={22}
                    height={22}
                    className='mx-auto'
                    />
              </div> 
          </div>
          <div class="align-self-center left-13px">
          <button className='btn newsButton' onClick={handleOpenModal}>Show</button>
          <ModalNews show={showModal} handleClose={handleCloseModal} />
          </div>
          </div>
          <div className='titleLittle' style={{paddingLeft: "28px"}}>AirdropHunter’s NEWS</div>
          </div>
          </div>
          <div className='align-self-center paddingRight ellipsis-text'> Starknet is a decentralized Validity-Rollup Validity-Rollup decentralized Rollup Rollup Rollup... </div>
          </div>

        </div>
      </div>
      </news>
    ) : (
      <news className="px-4 mt-4">
      <div className="rounded bg-white">
        <div className="" >
        <div className='p-2 h-100 justify-content-between btn-toolbar'>
          <div>
          <div className='d-flex align-items-center'>
          <div className='d-flex '>
          <div>
                  <div onClick={show_hide} className='arrow-down d-flex align-items-center'>
                    <Image
                    src='/arrow.png'
                    width={22}
                    height={22}
                    className='mx-auto'
                    />
              </div> 
          </div>
          <div class="align-self-center left-13px">
          <button className='btn newsButton' onClick={handleOpenModal}>Show</button>
          <ModalNews show={showModal} handleClose={handleCloseModal} />
          </div>
          </div>
          <div className='titleLittle' style={{paddingLeft: "28px"}}>AirdropHunter’s NEWS</div>
          </div>
          </div>
          <div className='align-self-center paddingRight ellipsis-text2'> Starknet is a decentralized Validity-Rollup Validity-Rollup decentralized Rollup Rollup Rollup... </div>
          </div>
        </div>
      </div>
      </news>
    )}
    </>
  )

    return (
      <>
      {isSmallScreen ? (
        <news className="px-4 mt-4">
        <div className="rounded bg-white">
          <div class="" style={{"padding-right": "unset !important"}}>
            <Image
            src='/news.png'
            width={660}
            height={400}
            className='image-container2'
            />
          </div>
          <div className="" >
            <div className='p-2 h-100 parent-block'>
            <div className='textTime pt-3'>Today 15:24</div>
            <div className='titleTime'>Starknet is a decentralized Validity-Rollup often referred</div>
            <div className='textDescription pt-3'>Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). 
It operates as a Layer 2 network over Ethereum. Starknet is a decentralized Validity-Rollup Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum. Starknet is a decentralized Validity-Rollup</div>
            <div class="top-content3"></div>
            <div className='bottom-block'>
            <div className='d-flex justify-content-between btn-toolbar'>
            <div className='d-flex'>
            <div>
                    <div onClick={show_hide} className='arrow d-flex align-items-center'>
                      <Image
                      src='/arrow.png'
                      width={22}
                      height={22}
                      className='mx-auto'
                      />
                </div> 
            </div>
            <div class="align-self-center left-13px">
                    <button className='btn newsButton' onClick={handleOpenModal}>Show</button>
                    <ModalNews show={showModal} handleClose={handleCloseModal} />
            </div>
            </div>
            <div className='d-flex buttonLite'>
            <div class="align-self-center paddingRight">
                    <div className='counter'>1 / 3</div>
            </div>
            <div className=''>
                    <div className='arrow-next d-flex align-items-center'>
                      <Image
                      src='/arrow.png'
                      width={22}
                      height={22}
                      className='mx-auto'
                      />
                </div> 
            </div>
            </div>
            </div>
            <div class="top-content2"></div>
            </div>
            </div>

          </div>
        </div>
        </news>
      ) : (
        <news className="container-fluid px-4 mt-4">
        <div className="d-flex justify-content-between rounded bg-white">
          <div>
            <div className='p-2 h-100 parent-block'>
            <div className='textTime pt-3'>Today 15:24</div>
            <div className='titleTime'>AirdropHunter’s NEWS</div>
            <div className='textDescription pt-3'>Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). 
It operates as a Layer 2 network over Ethereum. Starknet is a decentralized Validity-Rollup Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum. Starknet is a decentralized Validity-Rollup</div>
            <div class="top-content"></div>
            <div className='bottom-block'>
            <div className='d-flex justify-content-between btn-toolbar'>
            <div className='d-flex'>
            <div>
                    <div onClick={show_hide} className='arrow d-flex align-items-center'>
                      <Image
                      src='/arrow.png'
                      width={22}
                      height={22}
                      className='mx-auto'
                      />
                </div> 
            </div>
            <div class="align-self-center left-13px">
            <button className='btn newsButton' onClick={handleOpenModal}>Show</button>
            <ModalNews show={showModal} handleClose={handleCloseModal} />
            </div>
            </div>
            <div className='d-flex' style={{paddingRight: "14px"}}>
            <div class="align-self-center">
                    <div className='counter'>1 / 3</div>
            </div>
            <div className='left-13px'>
                    <div className='arrow-next d-flex align-items-center'>
                      <Image
                      src='/arrow.png'
                      width={22}
                      height={22}
                      className='mx-auto'
                      />
                </div> 
            </div>
            </div>
            </div>
            <div class="top-content2"></div>
            </div>
            </div>

          </div>
          <div>
            <Image
            src='/news.png'
            width={660}
            height={400}
            className='image-container'
            />
          </div>
        </div>
        </news>
      )}
      </>
    )
  }