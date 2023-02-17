import React from 'react';
import  Map from 'react-leaflet';
import  TileLayer from 'react-leaflet'
// import Map from 'react-leaflet'
import { HexGrid, Layout, Hexagon } from 'react-hexgrid';

const HexWorldMap = () => {
  return (
    <Map center={[0, 0]} zoom={1}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <HexGrid width={800} height={600}>
        <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
          <Hexagon q={0} r={0} s={0} />
        </Layout>
      </HexGrid>
    </Map>
  );
};

export default HexWorldMap;
