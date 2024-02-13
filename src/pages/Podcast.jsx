import React from "react";
import { Chip, Divider, User } from "@nextui-org/react";
import MiAudio from "../components/MiAudio";

export const Podcast = () => {
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
            <p className="my-8 md:text-4xl font-medium">Podkast</p>
            <p className="my-8 md:text-lg">2024ko urtarrilaren 12a</p>
            <Divider className="my-4" />

            <p className="text-justify my-8">
                Ongi etorri gure podcastaren pasarte berezi batera, non beren
                orgien herrialdeetatik Espainiara emigratu dutenen benetako
                esperientzian murgiltzen garen. Kasu honetan, Alexandra Crespo
                ekuadortar migratzailearekin hitz egiteko zortea dugu, lana
                bilatzean eta Espainian laneratzeko prozesuan aurrez aurre
                dauden erronkak eta errealitateak sakon aztertzeko.
            </p>
            <p className="text-justify my-8">
                Gure elkarrizketan zehar, Alexandrak gurekin partekatuko ditu
                lan-merkatu berri eta ezezagun batean enplegua aurkitzen
                saiatzean izan zituen zailtasunak. Oztopo burokratikoetatik hasi
                eta oztopo kulturaletaraino, erronka bakoitza nola gainditu zuen
                aztertuko dugu, eta bere helburu profesionalak atzerriko
                herrialde batean gauzatzeko bidea ireki zen.
            </p>
            <p className="text-justify my-8">
                Entzun dezagun Alexandra Cresporen kontakizun zintzoa eta azter
                ditzagun Espainian bizitza berri baterako bidaiaren xehetasunak.
            </p>

            <div className="flex justify-center">
                <MiAudio />
            </div>
        </div>
    );
};
