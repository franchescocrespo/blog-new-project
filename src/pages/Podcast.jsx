import React from "react";
import { Chip, Divider, User } from "@nextui-org/react";
import MiAudio from "../components/MiAudio";

export const Podcast = () => {
    return (
        <div className="container mx-auto">
            <Chip className="mt-8">Podkast</Chip>
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
