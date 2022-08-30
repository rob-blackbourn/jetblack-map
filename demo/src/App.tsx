import React from 'react'
import { HashRouter as Router, Link, Routes, Route } from 'react-router-dom'

import SimpleMap from './pages/SimpleMap'
import ControlledMap from './pages/ControlledMap'
import OverlayExample from './pages/OverlayExample'
import TileProviderExample from './pages/TileProviderExample'
import MapTilerProvider from './pages/MapTilerProvider'
import KitchenSink from './pages/KitchenSink'

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <h1>Map Demo</h1>
          <nav>
            <Link to="/">Simple</Link>
            &nbsp;|&nbsp;
            <Link to="/controlled">Controlled</Link>
            &nbsp;|&nbsp;
            <Link to="/overlay">Overlay</Link>
            &nbsp;|&nbsp;
            <Link to="/tile-provider">Tile Provider</Link>
            &nbsp;|&nbsp;
            <Link to="/map-tiler">MapTiler</Link>
            &nbsp;|&nbsp;
            <Link to="/kitchen-sink">Kitchen Sink</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<SimpleMap />}></Route>
          <Route path="/controlled" element={<ControlledMap />} />
          <Route path="/overlay" element={<OverlayExample />} />
          <Route path="/tile-provider" element={<TileProviderExample />} />
          <Route path="/map-tiler" element={<MapTilerProvider />} />
          <Route path="/kitchen-sink" element={<KitchenSink />} />
        </Routes>
      </Router>
    </div>
  )
}
