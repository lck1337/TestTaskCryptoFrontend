import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";
export default ({service}) => {

    const [offset, setOffset] = useState(0);
    const [visibleBlock, setVisibleBlock] = useState(6);

    const blockAllShow = visibleBlock <= service.length ? false : true;

    const maxOffset = blockAllShow ? 0 : -(100 / visibleBlock) * (service.length - visibleBlock);
    useEffect(()=> {
        const updateVisibleBlocks = () => {
            const width = window.innerWidth;
            console.log(width);
            if(width < 640) {
                setVisibleBlock(1);
                setOffset(0);
            } else if(width < 1024) {
                setVisibleBlock(3);
                setOffset(0);
            } else {
                setVisibleBlock(6);
                setOffset(0);
            }
        }

        updateVisibleBlocks();
        window.addEventListener('resize', updateVisibleBlocks);

        return () => {
            window.removeEventListener('resize', updateVisibleBlocks);
        }
    },[]);

    const handlePrev = () => {
        if(offset < 0) setOffset(offset + (100 / visibleBlock));
        console.log(offset);
    }

    const handleNext = () => {
        console.log((-(100 / visibleBlock)));
        console.log(maxOffset, offset);
        if(offset > maxOffset) setOffset(offset - (100 / visibleBlock));
        console.log(offset);
    }

    return(
        <div className="rounded bg-white slider">
        <div className="d-flex align-items-center w-100 p-2">
        <div className='arrow2 d-flex align-items-center'>
                      <Image
                      src='/arrow.png'
                      width={22}
                      height={22}
                      className='mx-auto'
                      style={{ transform: "rotate(225deg)" }}
                      onClick={handlePrev}
                      />
            </div>
            <div className="flex-grow-1 mx-2 overflow-hidden">
                <div className="d-flex transition-transform duration-300 ease-in-out" style={{ transition: "transform 0.3s ease-in-out", transform: `translateX(${offset}%)` }}>
                {service.map((x, i) => (
                    <div className="d-flex align-items-center justify-content-center" style={{ flex: 'none', width: `${100 / visibleBlock}%` }}>
                        <div className="bg-buttonHover rounded d-flex align-items-center justify-content-center">
                        <Link href={`#Projects${i}`}><Image
                    src={x.serviceLogo}
                    width={42}
                    height={42}
                    className='mx-auto'
                    /></Link>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            <div className='arrow2 d-flex align-items-center'>
                      <Image
                      src='/arrow.png'
                      width={22}
                      height={22}
                      className='mx-auto'
                      style={{ transform: "rotate(45deg)" }}
                      onClick={handleNext}
                      />
            </div>
            </div>
        </div>
    );
};