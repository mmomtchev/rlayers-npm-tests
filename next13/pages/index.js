import Head from 'next/head';

import 'ol/ol.css';

import { fromLonLat } from 'ol/proj';

import { RMap, ROSM } from 'rlayers';

export default function Home() {
  return (
    <div>
      <Head>
        <title>rlayers test</title>
      </Head>
      <RMap width={'100%'} height={'60vh'} initial={{ center: fromLonLat([2.364, 48.82]), zoom: 11 }}>
        <ROSM />
      </RMap>
    </div>
  )
}
