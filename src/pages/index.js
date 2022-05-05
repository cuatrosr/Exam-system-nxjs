import Router from 'next/router'
import React, { useEffect } from "react";

export default function Home(props) {
  useEffect(() => {
    const { pathname } = Router
    if (pathname === '/') {
      Router.push('/user');
    }
  }, [props]);

  return ''
}