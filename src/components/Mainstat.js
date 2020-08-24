import React, { useContext } from 'react';
import Jsoncontext from '../context/context';
import Totaldiv from './total';
const Main = () => {

    let total = useContext(Jsoncontext)

    if (total !== undefined) {
        total = total[0]

    }
    return (
        <div className='main_wrapper' >
            {total ? <div className='main'>
                <div className='main__top row justify-content-center'>
                    <div className='main__top__left col-12 col-md-5'>
                        <Totaldiv
                            heading={'Total cases'}
                            total={total.confirmed}
                            delta={total.deltaconfirmed} />
                    </div>
                    <div className='main__top__right col-12 col-md-5'>
                        <Totaldiv
                            heading={'Recovered cases'}
                            total={total.recovered}
                            delta={total.deltarecovered} />
                    </div>
                </div>

                <div className='main__bottom row justify-content-center'>
                    <div className='main__bottom__left col-12 col-md-5'>
                        <Totaldiv
                            heading={'Total Deceased'}
                            total={total.deaths}
                            delta={total.deltadeaths} />
                    </div>
                    <div className='main__bottom__right col-12 col-md-5'>
                        <Totaldiv
                            heading={'Active Cases'}
                            total={total.active} />
                    </div>
                </div>
            </div> : undefined}
        </div>
    )
}

export default Main

