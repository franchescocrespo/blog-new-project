import { useRef, useState } from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import { PauseCircleIcon, PlayCircleIcon } from "../Icons/MiIcons";
// import MiAudioSlider from "./MiAudioSlider";
import PodcastImg from "../assets/podcast.jpg";
import PodcastAudio from "../assets/podcast_audio.mp3";

const MiAudio = () => {
    const refAudio = useRef(null);
    const [isReady, setIsReady] = useState(false);
    const [IsPause, setIsPause] = useState(false);

    const setPlayAudio = () => {
        if (refAudio.current.paused) {
            refAudio.current.play();
            setIsPause(true);
        } else {
            refAudio.current.pause();
            setIsPause(false);
        }
    };

    return (
        <>
            <audio
                ref={refAudio}
                src={PodcastAudio}
                onCanPlay={(e) => {
                    setIsReady(true);
                }}
            />
            <Card
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
                shadow="sm"
            >
                <CardBody>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                        <div className="relative col-span-6 md:col-span-4">
                            <Image
                                alt="Album cover"
                                className="object-cover"
                                height={200}
                                shadow="md"
                                src={PodcastImg}
                                width="100%"
                            />
                        </div>

                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0">
                                    <h3 className="font-semibold text-foreground/90 uppercase">
                                        Alexandra Cresporen istorioa
                                    </h3>
                                    <p className="text-small text-foreground/80">
                                        12 Podkast
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col mt-3 gap-1"></div>

                            <div className="flex w-full items-center justify-center">
                                {IsPause ? (
                                    <Button
                                        isDisabled={!isReady}
                                        isIconOnly
                                        className="w-auto h-auto data-[hover]:bg-foreground/10"
                                        radius="full"
                                        variant="light"
                                        onClick={setPlayAudio}
                                    >
                                        <PauseCircleIcon size={54} />
                                    </Button>
                                ) : (
                                    <Button
                                        isDisabled={!isReady}
                                        isIconOnly
                                        className="w-auto h-auto data-[hover]:bg-foreground/10"
                                        radius="full"
                                        variant="light"
                                        onClick={setPlayAudio}
                                    >
                                        <PlayCircleIcon size={54} />
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    );
};

export default MiAudio;
