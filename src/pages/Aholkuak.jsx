import React from "react";
import { Chip, Divider, User } from "@nextui-org/react";
import HizeaImg from "../assets/haizea.jpg";

export const Aholkuak = () => {
    return (
        <div className="container mx-auto">
            <Chip className="mt-8 bg-[#b5e2fa]">Artikulua</Chip>
            <p className="my-8 md:text-4xl font-medium">Aholkuak</p>
            <p className="my-8 md:text-lg">2024ko urtarrilaren 12a</p>
            <User
                as="button"
                name="Haizea Baeza"
                description="Product Manager"
                className="transition-transform"
                avatarProps={{
                    src: HizeaImg,
                }}
            />
            <Divider className="my-4" />
            <p className="md:text-xl mb-8 font-medium">
                ELKARRIZKETA EGOKI BAT EGITEKO AHOLKUAK
            </p>

            <p className="my-8">
                Ondo prestatutako elkarrizketa baten garrantzia ulertzen dugu,
                zure lehen lanaren bila, karrera aldaketa baten bila edo zure
                ibilbide profesionalean gora egiten ari zarela. Gure helburua
                erreklutatzaileak txunditzeko eta nahi duzun lana lortzeko
                beharrezkoak diren tresnekin eta ezagutzarekin parekatzea da.
                Horregatik, aholku batzuk utziko ditugu ahalik eta elkarrizketa
                onena egin dezazun!
            </p>

            <ol className="list-decimal list-inside">
                <li className="text-justify font-medium">Enpresa ikertzea:</li>
                <p className="text-justify mb-8">
                    Ikasi enpresari buruz elkarrizketaren aurretik, zure
                    interesa eta ulermena erakusteko
                </p>

                <li className="text-justify font-medium">
                    Prestatu galdera arruntetarako:
                </li>
                <p className="text-justify mb-8">
                    Zure esperientziari, indarguneei eta ahuleziei buruzko
                    galderak egin, eta erantzun laburrak eman.
                </p>

                <li className="text-justify font-medium">
                    Zure lorpenak nabarmendu:
                </li>
                <p className="text-justify mb-8">
                    Partekatu zure balioa frogatzen duten lorpen eta proiektuen
                    adibide espezifikoak.
                </p>

                <li className="text-justify font-medium">
                    Gogo bizia erakusten du:
                </li>
                <p className="text-justify mb-8">
                    Adierazi zure interesa lanpostuan eta enpresan, tonu
                    positiboarekin.
                </p>

                <li className="text-justify font-medium">
                    Enpresa-kulturari buruzko galdera:
                </li>
                <p className="text-justify mb-8">
                    Enpresaren lan-dinamikarekiko eta kulturarekiko interesa
                    erakusten du.
                </p>

                <li className="text-justify font-medium">Prestatu galderak:</li>
                <p className="text-justify mb-8">
                    Izan galdera prestatuak rolari eta enpresari buruz, zure
                    interesa eta prestakuntza erakusteko.
                </p>

                <li className="text-justify font-medium">
                    Gorputz-hizkuntza positiboa:
                </li>
                <p className="text-justify mb-8">
                    Kontaktu bisuala izan, irribarre egin eta erabili zure mezua
                    indartuko duten keinuak.
                </p>

                <li className="text-justify font-medium">Izan autentikoa:</li>
                <p className="text-justify mb-8">
                    Izan zaitez zu zeu eta nabarmendu zure nortasuna, zure
                    trebetasun profesionalez gain.
                </p>

                <li className="text-justify font-medium">
                    Egoera zailak graziaz maneiatzen ditu:
                </li>
                <p className="text-justify mb-8">
                    Galdera zailei aurre egiten badiezu, lasai erantzun eta
                    erakutsi nola aurre egiten diezun erronkei.
                </p>

                <li className="text-justify font-medium">Bidali eskerrak:</li>
                <p className="text-justify mb-8">
                    Elkarrizketaren ondoren, bidali mezu elektroniko bat aukera
                    eskertzeko eta zure interesa berresteko.
                </p>
            </ol>
        </div>
    );
};
