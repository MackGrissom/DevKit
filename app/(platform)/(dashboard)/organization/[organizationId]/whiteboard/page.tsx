'use client'
import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import React from "react";

const Whiteboard = () => {
  return (
    <div style={{ position: 'fixed', inset: 80 }} className=' pl-64 h-[85vh] w-[90vw]'>
      <Tldraw />{" "}
    </div>
  );
};

export default Whiteboard;
