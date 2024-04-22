import { useEffect, useRef } from "react";
import Link from "next/link";
import exitStyles from "./ExitAlert.module.css";
import {gsap} from "gsap";

const ExitAlert = () => {
    const boxRef = useRef<any>();

    let fadeDirection = { x: -1, y: -1 }

    useEffect(() => {
        gsap.from(boxRef.current, 1, {
            ...fadeDirection,
            opacity: 0,
            zIndex: 1,
            delay: 0.2
          });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div className={exitStyles.card} ref={boxRef}>
            <p>The other player has <br /> ended this session.</p>
            <Link href="/feedback">
                <button>Exit deepdiive</button>
            </Link>
        </div>
    )
}

export default ExitAlert
