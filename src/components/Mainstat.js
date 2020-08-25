import React, { useContext } from 'react';
import Jsoncontext from '../context/context';
import Totaldiv from './total';
const Main = () => {

    let { stateWise: statewise_total } = useContext(Jsoncontext)

    if (statewise_total !== undefined) {
        statewise_total = statewise_total[0]

    }
    return (
        <div className='main_wrapper' >
            {statewise_total ? <div className='main'>
                <div className='main__top row justify-content-center'>
                    <div className='main__top__left col-12 col-md-5'>
                        <Totaldiv
                            heading={'Total cases'}
                            total={statewise_total.confirmed}
                            delta={statewise_total.deltaconfirmed} />
                    </div>
                    <div className='main__top__right col-12 col-md-5'>
                        <Totaldiv
                            heading={'Recovered cases'}
                            total={statewise_total.recovered}
                            delta={statewise_total.deltarecovered} />
                    </div>
                </div>

                <div className='main__bottom row justify-content-center'>
                    <div className='main__bottom__left col-12 col-md-5'>
                        <Totaldiv
                            heading={'Total Deceased'}
                            total={statewise_total.deaths}
                            delta={statewise_total.deltadeaths} />
                    </div>
                    <div className='main__bottom__right col-12 col-md-5'>
                        <Totaldiv
                            heading={'Active Cases'}
                            total={statewise_total.active} />
                    </div>
                </div>
            </div> : undefined}
        </div>
    )
}

export default Main

