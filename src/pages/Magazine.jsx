import React from "react";
import { Chip, Divider, Button, Link } from "@nextui-org/react";

export const Magazine = () => {
    return (
        <div className="md:mx-20">
            <Chip className="mt-8 bg-[#e7c6ff]">
                <div className="flex items-center">
                    <svg
                        class="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2c0 1.1.9 2 2 2h2v-6H6a2 2 0 0 0-2 2Z"
                        />
                    </svg>
                    <div className="ml-1">Miltimedia</div>
                </div>
            </Chip>
            <p className="my-8 md:text-4xl font-medium">Aldizkaria</p>
            <p className="my-8 md:text-lg">2024ko urtarrilaren 12a</p>
            <Divider className="my-4" />

            <p className="text-justify my-8">
                Ongi etorri gure online aldizkaria atalera! Hemen, gure web
                orrian, New Project, atsegin handiz eskaintzen dizuegu gure
                aldizkari digitalaren atal berri bat, hilero bezala. Dakizuenez,
                edizio bakoitza esperientzia paregabe eta aberasgarri bat
                eskaintzeko prest dago, gaurkotasunetik eta kulturatik hasi eta
                aholku praktikoetaraino eta hausnarketa sakonekin.
            </p>
            <p className="text-justify my-8">
                Oraingo honetan, gure azken alea aurkezteaz hunkituta gaude,
                atzerriko eredu ospetsu baten bizitza eta karrera liluragarrian
                murgilduko baikara. Ezagutu bere arrakastaren sekretuak, bere
                gainditze-istorio inspiratzailea eta bere edertasun eta
                talentuarekin modaren mundua nola konkistatu duen.
            </p>

            <Button
                href="https://drive.google.com/file/d/1xrZBxKXjuh9A-yVIOkdQM0oxTbpmbYNj/view?usp=drive_link"
                as={Link}
                size="lg"
                isExternal
                showAnchorIcon
                color="secondary"
                variant="bordered"
                className="my-8"
            >
                Aldizkaria deskargatu
            </Button>
        </div>
    );
};
