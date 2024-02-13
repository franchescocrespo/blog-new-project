import React from "react";
import { Chip, Divider, Link, Button } from "@nextui-org/react";

export const Curriculum = () => {
    return (
        <div className="container mx-auto">
            <Chip className="mt-8 bg-[#fcd5ce]">Gida</Chip>
            <p className="my-8 md:text-4xl font-medium">Curriculum</p>
            <p className="my-8 md:text-lg">2024ko urtarrilaren 12a</p>
            <Divider className="my-4" />
            <p className="md:text-xl mb-8 font-medium">Zer da CV bat?</p>
            <p className="mb-8 text-justify">
                Curriculum Vitae (CV) pertsona baten hezkuntza,
                lan-esperientzia, trebetasunak eta lorpenak laburbiltzen dituen
                dokumentua da. Helburu nagusia enplegatzaileei edo
                hezkuntza-erakundeei hautagaiaren profilaren ikuspegi azkarra
                eta osoa ematea da. Atal tipikoetan datu pertsonalak, laburpen
                profesionala, hezkuntza, lan-esperientzia, trebetasunak,
                hizkuntzak eta erreferentziak sartzen dira. Funtsezkoa da argia,
                zehatza eta eskatutako lanpostura egokitua izatea. Egitura eta
                edukia alda daitezke herrialdeko arau kultural eta praktikoen
                arabera. Laburbilduz, CV funtsezko tresna da
                hautaketa-prozesuetan hautagai baten egokitasuna ebaluatzeko.
                Gure orrialdearen amaieran, deskargatzeko prest dagoen
                curriculum bat aurkituko duzu. Ziurtatu nahi dizugu behar
                dituzun tresna guztiak emango dizkizula zure lan-bilaketa
                arrakastatsua izan dadin.
            </p>

            <p className="md:text-xl mb-8 font-medium">
                Zein da CV batek eduki behar duen informazioa?
            </p>
            <p className="mb-8 text-justify">
                Funtsezko informazioa izan behar du, hautagai baten hezkuntza,
                lan-esperientzia, trebetasunak eta lorpen garrantzitsuak
                nabarmentzeko. Hemen atal komunen zerrenda orokor bat dago CV
                batean:
            </p>

            <ul class="list-disc list-inside mb-8">
                <li className="text-justify mb-2">
                    Datu pertsonalak: Izen osoa, harremanetarako informazioa
                    (helbidea, telefono-zenbakia, posta elektronikoa).
                </li>

                <li className="text-justify mb-2">
                    Laburpena edo profil profesionala: Adierazpen labur bat,
                    hautagaiak lortu nahi duen lanari dagokionez dituen
                    helburuak eta trebetasunak nabarmentzen dituena.
                </li>

                <li className="text-justify mb-2">
                    Hezkuntza: Hezkuntzari buruzko xehetasunak, erakundeak,
                    lortutako tituluak eta graduazio-datak barne.
                </li>

                <li className="text-justify mb-2">
                    Lan-esperientzia: Enplegu-historiala, lan-tituluei, enpresen
                    izenei, enplegu-datei eta erantzukizunei buruzko
                    xehetasunekin.
                </li>

                <li className="text-justify mb-2">
                    Trebetasunak: Lanerako garrantzitsuak diren trebetasun eta
                    gaitasun espezifikoak zerrendatzea.
                </li>

                <li className="text-justify mb-2">
                    Hizkuntzak: Beste hizkuntza batzuetako gaitasunaren
                    adierazpena, aplikagarria bada.
                </li>

                <li className="text-justify mb-2">
                    Ziurtagiriak eta prestakuntza gehigarria: Ziurtagiri
                    garrantzitsuei eta ikastaro gehigarriei buruzko informazioa.
                </li>

                <li className="text-justify mb-2">
                    Proiektuak eta lorpenak: Proiektu garrantzitsuak eta lorpen
                    profesionalak nabarmentzea.
                </li>

                <li className="text-justify mb-2">
                    Interesak eta jarduerak: Aukerakoa, baina hautagaiaren
                    nortasunari eta trebetasunei buruzko informazio gehigarria
                    eman dezake.{" "}
                </li>

                <li className="text-justify mb-2">
                    Erreferentziak: erreferentziak sar daitezke, edo eskatu
                    ondoren eskuragarri daudela adieraz daiteke.
                </li>
            </ul>

            <p className="mb-8 text-justify">
                Garrantzitsua da CVren edukia postulatzen ari den lan
                espezifikora egokitzea, esperientzia eta trebetasun
                garrantzitsuenak azpimarratuz. Aurkezpenak argia, laburra eta
                irakurterraza izan behar du. CV baten luzera ideala orrialde
                batekoa edo bikoa izaten da.
            </p>

            <p className="text-xl font-medium">CV motak?</p>
            <p className="text-mb my-4 font-medium">CV sortzailea</p>
            <p className="mb-8 text-justify">
                Ziurrenik, gehien aipatzen direnetako bat da, gainerakoen aldean
                desberdina delako. Izan ere, hori da curriculum sortzaile baten
                oinarrizko ideia: beste guztien gainetik nabarmentzea.
                Curriculum mota hori aukeratzen baduzu, originala izan beharko
                duzu profesionaltasuna galdu gabe eta zure lorpenak alde batera
                utzi gabe.
            </p>

            <p className="text-mb my-4 font-medium">CV kronologikoa</p>
            <p className="mb-8 text-justify">
                Kurriculum mota hau, lan-esperientzia txikia dutenentzat, dela
                enpresa berean denbora asko eman dutelako, dela ibilbide
                profesionalean denbora gutxi daramatelako egokia da. Hori
                egiteko, nahikoa da daten arabera ordenatutako lan-esperientzia
                zerrendatzea, historia bat balitz bezala. Hau da, hasieratik
                hasita. Zein izan zen zure lehen lan-esperientzia? Bada, hori da
                zerrendan lehenengo agertuko dena.
            </p>

            <p className="text-mb my-4 font-medium">CV funtzionala</p>
            <p className="mb-2 text-justify">
                Horrelako laburpen profesionalean, esperientzia profesionalak
                zerrendatuta daude, betetako lanpostuen eta egindako lanen
                arabera. Hau da, imajinatu orain arteko esperientzia
                profesionalean zehar social media manager, kontu zuzendari eta
                brand manager izan zarela. Kasu horretan, "social media manager"
                titulua irakurriko litzateke, eta behean lanpostu hori bete
                duzun enpresa guztiak zerrendatuko lirateke.
            </p>
            <p className="mb-8 text-justify">
                Kurriculum mota hori egokia da esperientziaren konfigurazio
                eskalagarriak ematen duena agerian utzi nahi dutenentzat.
            </p>

            <p className="text-mb my-4 font-medium">CV mixto</p>
            <p className="mb-2 text-justify">
                Izenak berak adierazten duen bezala, curriculum mistoak hainbat
                curriculum mota konbinatzen ditu. CV funtzionalaren egitura,
                lanpostu bakoitzeko esperientziak kronologikoki garatuz. Izan
                ere, erabilienetako bat da. Eta horrek badu bere alde ona eta ez
                hain ona: erreklutatzaileak oso ohituta dauden egitura da.
            </p>
            <p className="mb-8 text-justify">
                Azkar ulertuko dute, eta zure esperientzia lanpostuarekin bat
                badator, momentuan deituko dizute elkarrizketa bat egiteko.
                Bestalde, CV mota ikusiena denez, agian ez zara nabarmenduko
                besteen artean sormenezko CV batekin baino, adibidez.
            </p>

            <Button
                href="https://drive.google.com/file/d/1nqpFzWWrQUOsaMQKMp67z1finK3d46AD/view?usp=drive_link"
                as={Link}
                size="lg"
                isExternal
                showAnchorIcon
                color="secondary"
                variant="bordered"
                className="my-8"
            >
                PDF deskargatu
            </Button>
        </div>
    );
};
