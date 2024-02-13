import React from "react";
import { Chip, Divider, User, Link } from "@nextui-org/react";
import AntonImg from "../assets/anton.jpg";
export const LanMerkatu = () => {
    return (
        <div className="container mx-auto">
            <Chip className="mt-8">Gida</Chip>
            <p className="my-8 md:text-4xl font-medium">Lan Merkatu Sarrera</p>
            <p className="my-8 md:text-lg">2024ko urtarrilaren 12a</p>
            <User
                as="button"
                name="Anton Onzain"
                description="Product Manager"
                className="transition-transform"
                avatarProps={{
                    src: AntonImg,
                }}
            />
            <Divider className="my-4" />
            <p className="md:text-xl mb-8 font-medium">
                LANA TOPATZEKO BIDE EZBERDINAK
            </p>

            <p className="mb-2 font-medium">
                Zeintzuk dira lana topatzeko jarraitu ahal diren bide
                ezberdinak?
            </p>
            <p className="text-justify mb-8">
                Lana aurkitzeko hainbat bide daude, bai publikoak, pribatuak,
                eta autonomoak. Hemen daukazue dauden bide posibleak
            </p>

            <p className="mb-2 font-medium">Publikoak:</p>
            <p className="text-justify mb-2">
                Enplegu publikoko eskaintzak gobernuko erakundeek iragarri eta
                eskaintzen dituzten lan-aukerei buruzkoak dira, bai tokikoak,
                bai eskualdekoak, bai naziokoak. Eskaintza horietan
                gobernu-erakundeetako, organismo publikoetako, ministerioetako
                eta sektore publikoko beste erakunde batzuetako enpleguak
                sartzen dira.
            </p>
            <p className="text-justify mb-8">
                Enplegu publikoaren eskaintza oposizioetan eta lan-poltsetan
                banatzen da. Herri Arduralaritzaren Euskal Erakundeak (IVAP)
                informazio hau kudeatzen du:
            </p>

            <ul className="list-disc list-outside">
                <li className="text-justify mb-8">
                    Oposizioak: enplegu publikoetarako lehia-hautaketako
                    prozesuak dira. Hautagaiak proba estandarizatuen bidez
                    lehiatzen dira, hala nola azterketa idatzien, ahozkoen edo
                    praktikoen bidez. <br />- IVAPek datei, betekizunei eta
                    gai-zerrendei buruzko xehetasunak ematen ditu.{" "}
                    <Link href="https://www.ivap.euskadi.eus/empleo-ivap/">
                        Esteka
                    </Link>{" "}
                    honetan, Bizkaiko enplegu publikoaren orrialdera sar
                    zaitezke.
                </li>

                <li className="text-justify mb-8">
                    Lan-poltsak: Lan-poltsak aurrez hautatutako hautagaien
                    zerrendak dira, eta sektore publikoan lanpostuak aldi
                    baterako betetzeko dei daitezke. <br />- IVAPek
                    hautaketa-baldintzei eta -irizpideei buruzko informazioa
                    zentralizatzen du.
                </li>
            </ul>

            <p className="mb-2 font-medium">Pribatuak:</p>
            <p className="text-justify mb-2">
                Lan-eskaintza pribatuak sektore pribatuko enpresek emandako
                lan-aukerak dira. Enpresa horiek erakundearen barruan hainbat
                rol eta posiziotarako enplegatuak kontratatu nahi dituzte.
            </p>
            <p className="text-justify mb-8">
                Hona hemen lan-eskaintza pribatuan sartzeko bideak:
            </p>
            <ul className="list-none mb-8">
                <li className="mb-2">- Curriculuma</li>
                <li className="mb-2">- Ahoz ahokoa</li>
                <li className="mb-2">- Web orriak</li>
                <li className="mb-2">- Elkarrizketak</li>
                <li className="mb-2">- Aurkezpen gutunak</li>
                <li className="mb-2">- Etab</li>
            </ul>

            <p className="mb-2 font-medium">Autonomoa:</p>
            <p className="text-justify mb-2">
                Lan-arloan autonomoa izateak modu independentean lan egitea
                dakar, lan-kontratu tradizional batean enplegatzaile espezifiko
                bati lotuta egon gabe. Langile autonomoek, langile independente
                edo beren konturako langile gisa ere ezagutzen direnek, beren
                lanbide-jarduera kudeatzen dute, beren lanari buruzko erabakiak
                hartzen dituzte eta beren gain hartzen dute beren arrakastaren
                edo porrotaren erantzukizuna.
            </p>
            <p className="text-justify mb-2">
                Langile autonomoek arlo espezifikoetan espezializatzeko
                askatasuna dute, beren trebetasunen, ezagutzen eta lehentasunen
                arabera. Zer zerbitzu eskaini erabaki dezakete, beren
                indarguneetan eta esperientzietan oinarrituta, bai eta
                merkatuaren eskarian ere.
            </p>
        </div>
    );
};
