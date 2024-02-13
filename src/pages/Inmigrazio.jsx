import React from "react";
import {
    Chip,
    Divider,
    Card,
    CardHeader,
    CardFooter,
    Link,
    Image,
} from "@nextui-org/react";

export const Inmigrazio = () => {
    return (
        <div className="md:mx-20">
            <Chip className="mt-8 bg-[#fcd5ce]">Gida</Chip>
            <p className="my-8 md:text-4xl font-medium">
                Inmigrazio Baliabideak
            </p>
            <p className="my-8 md:text-lg">2024ko urtarrilaren 12a</p>
            <Divider className="my-4" />
            <p className="mb-8 text-justify">
                Lana bilatzea eta legezko baldintzak ulertzea erronka
                garrantzitsuak dira etorkinentzat. Askotan, ez dute
                informaziorik lana aurkitzeko moduari buruz eta zer urrats egin
                behar diren herrialde berri batean legezko enplegua ziurtatzeko.
                Testuinguru horretan, zenbait elkartek, hala nola CEARek eta
                Euskadi Colombiak, funtsezko zeregina dute laguntza integrala
                emateko.
            </p>
            <p className="mb-8 text-justify">
                Elkarte horiek funtsezko gidari gisa jarduten dute, eta
                enplegu-bilaketari eta lan-legezkotasuna bermatzeko prozedurei
                buruzko informazio zehatza ematen dute. Gainera, legezko talde
                espezializatuak dituzte, enpleguarekin lotutako lege-gaietan
                funtsezko aholkularitza eskaintzen dutenak, hala nola
                lan-baimenak eta lan-eskubideak.
            </p>
            <p className="mb-8 text-justify">
                Onura nabarmenetako bat etxebizitza lortzeko laguntza da,
                etorkinak beren ingurune berrian integratzea erraztuz. Erakunde
                horietan espezializatutako abokatuen presentziak segurtasuna eta
                lege-babesa ematen du, lana lortzeko eta arrakastaz ezartzeko
                bidea erraztuz.
            </p>
            <p className="mb-8 text-justify">
                Laburbilduz, elkarte horiek etorkinentzako informazio-hutsunea
                betetzeaz gain, funtsezko zeregina betetzen dute etxebizitza eta
                enplegua bilatzeko laguntza zehatza ematean, legezko profesional
                espezializatuen presentziari esker.
            </p>

            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src="https://www.cear.es/wp-content/uploads/2023/10/logo-cear-square.jpg"
                            width={40}
                        />
                        <div className="flex flex-col">
                            <p className="text-md">CEAR</p>
                            <p className="text-small text-default-500">
                                Comisión Española de Ayuda al Refugiado
                            </p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardFooter>
                        <Link
                            isExternal
                            showAnchorIcon
                            href="https://www.cear.es/conocenos/"
                        >
                            cear.es
                        </Link>
                    </CardFooter>
                </Card>
                <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src="https://yapawayra.org/assets/media/logo-colombia-euskadi_1.jpg"
                            width={40}
                        />
                        <div className="flex flex-col">
                            <p className="text-md">CEAR</p>
                            <p className="text-small text-default-500">
                                Kolonbia-Euskadi Elkartea
                            </p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardFooter>
                        <Link
                            isExternal
                            showAnchorIcon
                            href="https://www.colombiaeuskadi.org/"
                        >
                            colombiaeuskadi.org
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};
