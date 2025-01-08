import { useState, useEffect } from "react";
import {CLIENT_ID, CLIENT_SECRET} from '../constants/keys'

const useLinkedin = () => {

    const shareOn = () => {

    }

    const signinOn = async () => {
        const res = await fetch('http://localhost:8888/.netlify/functions/linkedin')
        const data = await res.json()
        console.log({data})
    }

    return {
        shareOn,
        signinOn
    }
}

export default useLinkedin;