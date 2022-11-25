import Image from "next/image";
import React from "react";

export default function SkillCard({ thumbnail, title }) {
    return (
        <div className="activeSkillCard">
            <Image src={thumbnail} alt={`${title} logo`} width="64px" height="64px" />
            <h6>{title}</h6>
        </div>
    )
}