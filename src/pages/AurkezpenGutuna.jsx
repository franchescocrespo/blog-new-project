import React from "react";
import { Chip, Divider, Button, Link, User } from "@nextui-org/react";
import TamaImg from "../assets/tama.jpg";

export const AurkezpenGutuna = () => {
    return (
        <div className="container mx-auto">
            <Chip className="mt-8 bg-[#b5e2fa]">Artikulua</Chip>
            <p className="my-8 md:text-4xl font-medium">Aurkezpen Gutuna</p>
            <p className="my-8 md:text-lg">2024ko urtarrilaren 12a</p>
            <User
                as="button"
                name="Tamara Andres"
                description="Product Leader"
                className="transition-transform"
                avatarProps={{
                    src: TamaImg,
                }}
            />
            <Divider className="my-4" />
            <p className="md:text-xl mb-8  font-medium">
                Zer da aurkezpen gutun bat eta nola egiten da?
            </p>
            <p className="text-justify">
                Aurkezpen-gutun bat zure curriculum vitae-arekin (CV) batera
                doan dokumentu bat da, eta zure kualifikazioak aurkezteko eta
                nabarmentzeko erabiltzen da, lan espezifiko bati dagokionez.
                Bere helburua enplegatzailearen arreta bereganatzea, lanpostuan
                interesa erakustea eta CVan zehazten ez den informazio
                gehigarria ematea da.
            </p>

            <p className="text-justify">
                Hona hemen aurkezpen-gutun eraginkor bat sortzeko urrats batzuk:
            </p>

            <p className="text-justify font-medium mt-8">
                Goiburuak eta harremanetarako datuak:
            </p>
            <p className="text-justify">
                Sartu zure izena, helbidea, telefono-zenbakia eta helbide
                elektronikoa.
            </p>

            <p className="text-justify font-medium mt-8">Data eta agurra:</p>
            <p className="text-justify">
                Jarri uneko data eta agur egokia (adibidez, "Enplegatzailearen
                edo kontratazioen arduradunaren izena").
            </p>

            <p className="text-justify font-medium mt-8">Introduzioa:</p>
            <p className="text-justify">
                Adierazi aplikatzen ari zaren lana eta nola jakin zenuen
                posizioaren berri.
            </p>

            <p className="text-justify font-medium mt-8">Paragrafo nagusial:</p>
            <p className="text-justify">
                Nabarmendu lanposturako garrantzitsuak diren zure trebetasunak
                eta esperientzia. Hitz egin zure iraganeko lorpenei buruz eta
                nola lagundu dezaketen rol berrian arrakasta izaten.
            </p>

            <p className="text-justify font-medium mt-8">
                Enpresarekiko konexioa:
            </p>
            <p className="text-justify">
                Erakutsi enpresari buruz duzun ezagutza eta azaldu zergatik
                gustatuko litzaizukeen han lan egitea. Proiektu berriak,
                enpresaren balioak edo txundituta utzi zaituzten beste alderdi
                batzuk aipa ditzakezu.
            </p>

            <p className="text-justify font-medium mt-8">Amaiera:</p>
            <p className="text-justify">
                Azal iezaiezu zure interesa elkarrizketa batean, zure
                lanposturako egokitasuna sakonago eztabaidatzeko. Bere denbora
                eskertzen du eta harremanetarako informazio gehigarria ematen
                du.
            </p>

            <p className="text-justify font-medium mt-8">Agurra:</p>
            <p className="text-justify">
                "Adeitasunez" edo "Agur bero bat" bezalako itxiera profesionala
                erabili, eta, ondoren, zure sinadura, bertsio inprimatu bat
                bidaltzen ari bazara.
            </p>

            <p className="text-justify font-medium mt-8">
                Formatua eta estiloa:
            </p>
            <p className="text-justify">
                Gorde gutuna labur eta kalitatean jarri arreta kantitatean baino
                gehiago. Tonu profesionala erabili eta ziurtatu gutuna
                irakurterraza dela.
            </p>

            <p className="text-justify font-medium mt-8">Berrikuste:</p>
            <p className="text-justify">
                Gramatika- eta ortografia-akatsak berrikusten eta zuzentzen
                ditu. Ziurtatu gutuna aplikatzen ari zaren lan espezifikorako
                pertsonalizatuta dagoela. Gogoratu aurkezpen-gutun bakoitza
                egokitu behar dela, lanera eta enpresa espezifikora egokitu
                dadin. Ondo idatzitako aurkezpen-gutun batek aldea markatu
                dezake zure trebetasunak eta motibazioak nabarmentzean, eta
                lanposturako kontuan hartua izateko aukerak areagotu ditzake.
            </p>

            <Button
                href="https://drive.google.com/file/d/1NyLQo8SaKIkJbqXDG4otI85J5n4O8A0J/view?usp=drive_link"
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
