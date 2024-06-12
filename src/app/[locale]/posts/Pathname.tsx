"use client";

import { usePathname } from "../../../navigation";

export default function Pathname() {
    return <p data-testid="Pathname">{usePathname()}</p>;
}
