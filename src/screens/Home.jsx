import React, { useState } from "react";
import Header from "../components/header";
import MidSlideShow from "../components/midslideshow";
import TemporaryDrawer from "../components/sidenav";

export default function Home() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <div>
            <Header drawerfunc={setDrawerOpen} />
            <MidSlideShow />
            <TemporaryDrawer drawerstate={drawerOpen} drawerfunc={setDrawerOpen} />
        </div>
    );
}