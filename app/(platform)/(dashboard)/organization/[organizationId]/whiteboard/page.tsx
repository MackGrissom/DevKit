'use client'
import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import React from "react";

const Whiteboard = () => {
  return (
    <div style={{ position: 'fixed', inset:100 }} className=' ml-64 h-[full] w-[full] -z-[0]'>
      <Tldraw />{" "}
    </div>
  );
};

export default Whiteboard;
